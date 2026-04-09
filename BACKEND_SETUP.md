/**
 * Backend Server Setup for M-Pesa Integration
 * 
 * This file provides setup instructions and a template for the M-Pesa Daraja API integration.
 * 
 * SETUP INSTRUCTIONS:
 * 
 * 1. Create a new directory for your backend:
 *    mkdir backend
 *    cd backend
 * 
 * 2. Initialize Node.js project:
 *    npm init -y
 * 
 * 3. Install required dependencies:
 *    npm install express cors dotenv axios body-parser
 * 
 * 4. Create a .env file with your Safaricom Business Portal credentials:
 *    SAFARICOM_CONSUMER_KEY=your_consumer_key
 *    SAFARICOM_CONSUMER_SECRET=your_consumer_secret
 *    SAFARICOM_SHORTCODE=your_shortcode
 *    SAFARICOM_PASSKEY=your_passkey
 *    SAFARICOM_INITIATOR_NAME=your_initiator_name
 *    SAFARICOM_INITIATOR_PASSWORD=your_initiator_password
 *    NODE_ENV=sandbox (or production)
 *    PORT=5000
 * 
 * 5. Get credentials from:
 *    - https://developer.safaricom.co.ke/ (sandbox testing)
 *    - https://business.safaricom.com/ (production)
 * 
 * ------ SAMPLE SERVER FILE (server.js) ------
 */

/*
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Safaricom API URLs
const SANDBOX_AUTH_URL = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
const PROD_AUTH_URL = 'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
const SANDBOX_STK_URL = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
const PROD_STK_URL = 'https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
const SANDBOX_CALLBACK_URL = 'https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate';

const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://yourdomain.com' : 'http://localhost:3000';

// Get OAuth Token
async function getOAuthToken() {
  try {
    const auth = Buffer.from(
      `${process.env.SAFARICOM_CONSUMER_KEY}:${process.env.SAFARICOM_CONSUMER_SECRET}`
    ).toString('base64');
    
    const authUrl = process.env.NODE_ENV === 'production' ? PROD_AUTH_URL : SANDBOX_AUTH_URL;
    
    const response = await axios.get(authUrl, {
      headers: {
        Authorization: `Basic ${auth}`
      }
    });
    
    return response.data.access_token;
  } catch (error) {
    console.error('OAuth Error:', error.response?.data || error.message);
    throw error;
  }
}

// Format phone number to 254XXXXXXXXX format
function formatPhoneNumber(phoneNumber) {
  let formatted = phoneNumber.toString().replace(/\D/g, '');
  if (formatted.startsWith('0')) {
    formatted = '254' + formatted.substring(1);
  }
  if (!formatted.startsWith('254')) {
    formatted = '254' + formatted;
  }
  return formatted;
}

// Initiate STK Push
app.post('/api/payments/initiate-stk-push', async (req, res) => {
  try {
    const { phoneNumber, amount, projectId, projectTitle } = req.body;

    // Validate input
    if (!phoneNumber || !amount || amount < 1) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid phone number or amount' 
      });
    }

    const formattedPhone = formatPhoneNumber(phoneNumber);
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
    
    // Generate password
    const password = Buffer.from(
      `${process.env.SAFARICOM_SHORTCODE}${process.env.SAFARICOM_PASSKEY}${timestamp}`
    ).toString('base64');

    // Get OAuth Token
    const token = await getOAuthToken();

    // Build STK Push Request
    const callbackUrl = `${BASE_URL}/api/payments/callback`;
    
    const stk_push_request = {
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
      TransactionDesc: `Payment for ${projectTitle}`
    };

    const stkUrl = process.env.NODE_ENV === 'production' ? PROD_STK_URL : SANDBOX_STK_URL;

    const response = await axios.post(stk_push_request, stkUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    // Save transaction to database
    // await saveTransaction({
    //   projectId,
    //   phoneNumber: formattedPhone,
    //   amount,
    //   checkoutRequestId: response.data.CheckoutRequestID,
    //   status: 'pending'
    // });

    res.json({
      success: true,
      message: 'STK push sent successfully',
      checkoutRequestId: response.data.CheckoutRequestID,
      transactionId: response.data.CheckoutRequestID
    });

  } catch (error) {
    console.error('STK Push Error:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to initiate payment',
      error: error.message
    });
  }
});

// M-Pesa Callback Handler
app.post('/api/payments/callback', (req, res) => {
  try {
    const { Body } = req.body;
    
    if (!Body?.stkCallback) {
      return res.json({ ResultCode: 1, ResultDesc: 'Invalid callback data' });
    }

    const { ResultCode, CallbackMetadata } = Body.stkCallback;

    if (ResultCode === 0) {
      // Payment successful
      const metadata = CallbackMetadata.Item;
      const transactionData = {
        amount: metadata.find(m => m.Name === 'Amount')?.Value,
        transactionId: metadata.find(m => m.Name === 'MpesaReceiptNumber')?.Value,
        phoneNumber: metadata.find(m => m.Name === 'PhoneNumber')?.Value,
        status: 'completed'
      };

      // Update transaction in database
      // await updateTransaction(transactionData);

      console.log('Payment successful:', transactionData);
    } else {
      // Payment failed
      console.log('Payment failed. Result Code:', ResultCode);
      // Update transaction status to 'failed' in database
    }

    res.json({ ResultCode: 0, ResultDesc: 'Received successfully' });
  } catch (error) {
    console.error('Callback Error:', error.message);
    res.json({ ResultCode: 1, ResultDesc: 'Error processing callback' });
  }
});

// Query Transaction Status
app.get('/api/payments/status/:checkoutRequestId', async (req, res) => {
  try {
    const { checkoutRequestId } = req.params;
    
    // Get from database
    // const transaction = await getTransaction(checkoutRequestId);
    
    res.json({
      success: true,
      checkoutRequestId,
      status: 'pending', // or 'completed', 'failed'
      // ...transaction details
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to get transaction status',
      error: error.message
    });
  }
});

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
*/

// DEPLOYMENT OPTIONS:

// Option 1: Vercel (Recommended for this Vite project)
// ====================================================
// Create vercel.json in backend directory:
/*
{
  "version": 2,
  "builds": [
    {
      "src": "api/server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "api/server.js"
    }
  ]
}
*/

// Then update your frontend API calls:
// const API_BASE = process.env.VITE_API_URL || 'http://localhost:5000';
// const response = await fetch(`${API_BASE}/api/payments/initiate-stk-push`, {...});

// Option 2: Heroku
// ================
// 1. Create Procfile: web: node server.js
// 2. Deploy: git push heroku main

// Option 3: Self-hosted (Digital Ocean, AWS, etc.)
// ==================================================
// Use systemd or PM2 to keep server running:
// pm2 start server.js --name portfolio-backend
// pm2 save
// pm2 startup

// DATABASE SCHEMA (PostgreSQL Example):
// =====================================================
/*
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  description TEXT,
  price INTEGER,
  type VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  project_id INTEGER REFERENCES projects(id),
  phone_number VARCHAR(20),
  amount INTEGER,
  mpesa_reference VARCHAR(255),
  checkout_request_id VARCHAR(255) UNIQUE,
  status VARCHAR(50), -- pending, completed, failed
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_email VARCHAR(255)
);

CREATE INDEX idx_checkout_request_id ON transactions(checkout_request_id);
CREATE INDEX idx_project_id ON transactions(project_id);
*/

module.exports = { getOAuthToken, formatPhoneNumber };
