const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const SANDBOX_AUTH_URL = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
const PROD_AUTH_URL = 'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
const SANDBOX_STK_URL = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
const PROD_STK_URL = 'https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest';

const isProduction = process.env.NODE_ENV === 'production';
const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 5000}`;

function formatPhoneNumber(phoneNumber) {
  let formatted = phoneNumber.toString().replace(/\D/g, '');
  if (formatted.length === 10 && formatted.startsWith('0')) {
    formatted = `254${formatted.slice(1)}`;
  }
  if (formatted.length === 12 && formatted.startsWith('07')) {
    formatted = `254${formatted.slice(1)}`;
  }
  if (!formatted.startsWith('254')) {
    formatted = `254${formatted}`;
  }
  return formatted;
}

async function getOAuthToken() {
  const authKey = `${process.env.SAFARICOM_CONSUMER_KEY}:${process.env.SAFARICOM_CONSUMER_SECRET}`;
  const auth = Buffer.from(authKey).toString('base64');
  const url = isProduction ? PROD_AUTH_URL : SANDBOX_AUTH_URL;

  const response = await axios.get(url, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });

  return response.data.access_token;
}

app.post('/api/payments/initiate-stk-push', async (req, res) => {
  try {
    const { phoneNumber, amount, projectId, projectTitle } = req.body;

    if (!phoneNumber || !amount || amount < 1) {
      return res.status(400).json({ success: false, message: 'Invalid phone number or amount' });
    }

    const formattedPhone = formatPhoneNumber(phoneNumber);
    const timestamp = new Date()
      .toISOString()
      .replace(/[^0-9]/g, '')
      .slice(0, 14);

    const password = Buffer.from(
      `${process.env.SAFARICOM_SHORTCODE}${process.env.SAFARICOM_PASSKEY}${timestamp}`
    ).toString('base64');

    const token = await getOAuthToken();
    const callbackUrl = `${baseUrl}/api/payments/callback`;
    const stkUrl = isProduction ? PROD_STK_URL : SANDBOX_STK_URL;

    const payload = {
      BusinessShortCode: process.env.SAFARICOM_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: Math.ceil(amount),
      PartyA: formattedPhone,
      PartyB: process.env.SAFARICOM_SHORTCODE,
      PhoneNumber: formattedPhone,
      CallBackURL: callbackUrl,
      AccountReference: `Project-${projectId}`,
      TransactionDesc: `Payment for ${projectTitle}`,
    };

    const response = await axios.post(stkUrl, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.json({
      success: true,
      message: 'STK push initiated',
      data: response.data,
    });
  } catch (error) {
    console.error('STK Push Error:', error.response?.data || error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to initiate payment',
      error: error.response?.data || error.message,
    });
  }
});

app.post('/api/payments/callback', (req, res) => {
  try {
    const callbackData = req.body;
    console.log('M-Pesa callback received:', JSON.stringify(callbackData, null, 2));

    if (!callbackData.Body?.stkCallback) {
      return res.json({ ResultCode: 1, ResultDesc: 'Invalid callback payload' });
    }

    const { stkCallback } = callbackData.Body;
    const resultCode = stkCallback.ResultCode;
    const metadata = stkCallback.CallbackMetadata?.Item || [];

    if (resultCode === 0) {
      const transaction = {
        amount: metadata.find((item) => item.Name === 'Amount')?.Value,
        receipt: metadata.find((item) => item.Name === 'MpesaReceiptNumber')?.Value,
        phoneNumber: metadata.find((item) => item.Name === 'PhoneNumber')?.Value,
        status: 'completed',
      };
      console.log('Payment successful', transaction);
      // TODO: store transaction result in a database
    } else {
      console.log('Payment failed:', stkCallback.ResultDesc);
      // TODO: store failure state
    }

    return res.json({ ResultCode: 0, ResultDesc: 'Received successfully' });
  } catch (error) {
    console.error('Callback handling error:', error.message);
    return res.json({ ResultCode: 1, ResultDesc: 'Error processing callback' });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`M-Pesa backend running on port ${port}`);
});
