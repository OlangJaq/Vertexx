# Vertex-Delta M-Pesa Backend

This backend folder contains an Express server for Safaricom Daraja M-Pesa STK Push integration.

## Setup

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Copy `.env.example` to `.env` and fill in your credentials.

3. Start the server:
   ```bash
   npm run dev
   ```

## Endpoints

- `POST /api/payments/initiate-stk-push`
  - Request body: `{ phoneNumber, amount, projectId, projectTitle, projectSlug }`
  - Initiates M-Pesa STK Push via Safaricom Daraja.

- `POST /api/payments/callback`
  - Receives M-Pesa callback notifications.

- `GET /health`
  - Health check endpoint.

## Notes

- `BASE_URL` must point to the publicly reachable backend URL for Safaricom callback delivery.
- The server currently logs callback payloads and does not persist transactions.
- For production, add a database and secure webhook validation.
