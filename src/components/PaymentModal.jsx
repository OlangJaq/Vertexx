import { useState } from "react";
import { CONTACT } from "../data";

export default function PaymentModal({ project, onClose }) {
  const [step, setStep] = useState("amount"); // "amount" | "phone" | "processing" | "success" | "error"
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState(project.price || 50000);
  const [error, setError] = useState("");
  const [transactionRef, setTransactionRef] = useState("");

  const formatPhoneNumber = (value) => {
    // Convert to Kenyan format (254XXXXXXXXX)
    let cleaned = value.replace(/\D/g, "");
    if (cleaned.length === 10 && cleaned.startsWith("7")) {
      cleaned = "254" + cleaned;
    } else if (cleaned.length === 12 && cleaned.startsWith("07")) {
      cleaned = "254" + cleaned.substring(1);
    }
    return cleaned;
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
    setError("");
  };

  const validatePhoneNumber = () => {
    const formatted = formatPhoneNumber(phoneNumber);
    if (!/^254\d{9}$/.test(formatted)) {
      setError("Please enter a valid Kenyan phone number");
      return false;
    }
    return formatted;
  };

  const handleInitiatePayment = async (e) => {
    e.preventDefault();
    const formatted = validatePhoneNumber();
    if (!formatted) return;

    setStep("processing");
    setError("");

    try {
      // Call backend to initiate STK push
      const response = await fetch("/api/payments/initiate-stk-push", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: formatted,
          amount: Math.round(amount),
          projectId: project.id,
          projectTitle: project.title,
          projectSlug: project.slug,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Payment initiation failed");
      }

      setTransactionRef(data.checkoutRequestId || data.transactionId);
      setStep("success");

      // Auto-close after 5 seconds
      setTimeout(() => {
        onClose();
      }, 5000);
    } catch (err) {
      console.error("Payment error:", err);
      setError(err.message || "Failed to initiate payment. Please try again.");
      setStep("error");
    }
  };

  return (
    <div className="modal-overlay payment-modal-overlay" onClick={onClose}>
      <div className="modal-content payment-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close payment modal">
          ✕
        </button>

        {step === "amount" && (
          <form onSubmit={(e) => { e.preventDefault(); setStep("phone"); }}>
            <h2>Purchase Design Files</h2>
            <p className="project-title-in-modal">{project.title}</p>

            <div className="form-group">
              <label htmlFor="amount">Payment Amount (KES)</label>
              <div className="amount-input-group">
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  disabled
                  className="form-input"
                />
                <span className="currency">KES</span>
              </div>
              <small>Design files will be available for download after payment confirmation</small>
            </div>

            <button type="submit" className="button button-primary full-width">
              Continue to Payment
            </button>
            <button type="button" className="button button-secondary full-width" onClick={onClose}>
              Cancel
            </button>
          </form>
        )}

        {step === "phone" && (
          <form onSubmit={handleInitiatePayment}>
            <h2>Enter Phone Number</h2>
            <p>We'll send an M-Pesa prompt to this number</p>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="0707 456 789 or +254 707 456 789"
                value={phoneNumber}
                onChange={handlePhoneChange}
                required
                className="form-input"
                autoFocus
              />
              <small>Your Kenyan phone number (07XX or 254XXXX format)</small>
            </div>

            <div className="payment-summary">
              <div className="summary-item">
                <span>Amount to Pay</span>
                <strong>KES {amount.toLocaleString()}</strong>
              </div>
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="button button-primary full-width">
              Initiate M-Pesa Payment
            </button>
            <button
              type="button"
              className="button button-secondary full-width"
              onClick={() => setStep("amount")}
            >
              ← Back
            </button>
          </form>
        )}

        {step === "processing" && (
          <div className="modal-state">
            <div className="loading-spinner" />
            <h2>Processing Payment</h2>
            <p>Please check your phone for an M-Pesa prompt...</p>
            <p className="processing-hint">
              Enter your M-Pesa PIN to complete the transaction
            </p>
          </div>
        )}

        {step === "success" && (
          <div className="modal-state success">
            <div className="success-icon">✓</div>
            <h2>Payment Initiated Successfully</h2>
            <p>You should receive an M-Pesa prompt on your phone shortly.</p>
            <div className="transaction-info">
              <div className="info-item">
                <span>Transaction ID</span>
                <code>{transactionRef}</code>
              </div>
              <div className="info-item">
                <span>Amount</span>
                <strong>KES {amount.toLocaleString()}</strong>
              </div>
            </div>
            <p className="success-note">
              After successful payment, your design files will be available for download.
              You'll receive a confirmation email at {CONTACT.email1}
            </p>
            <button className="button button-primary full-width" onClick={onClose}>
              Close
            </button>
          </div>
        )}

        {step === "error" && (
          <div className="modal-state error">
            <div className="error-icon">✕</div>
            <h2>Payment Failed</h2>
            <p>{error}</p>
            <div className="error-actions">
              <button
                className="button button-primary full-width"
                onClick={() => setStep("phone")}
              >
                Try Again
              </button>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20had%20an%20issue%20with%20M-Pesa%20payment%20for%20${encodeURIComponent(project.title)}`}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary full-width"
              >
                Contact Support
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
