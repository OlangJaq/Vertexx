import { useState } from "react";
import { CONTACT } from "../data";

export default function PaymentModal({ project, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: `Hello, I am interested in a quote for ${project.title}. Please share the next steps and availability.`,
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please complete your name, email, and message to continue.");
      return;
    }

    const subject = `Quote request: ${project.title}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`;
    const mailtoUrl = `mailto:${CONTACT.email1}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setStatus("sent");
  };

  const whatsappMessage = encodeURIComponent(
    `Hello, I am ${form.name || "interested"} and would like a quote for ${project.title}. ${form.message}`
  );

  return (
    <div className="modal-overlay payment-modal-overlay" onClick={onClose}>
      <div className="modal-content payment-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close quote modal">
          ✕
        </button>

        {status !== "sent" ? (
          <form onSubmit={handleSubmit}>
            <h2>Request a quote</h2>
            <p className="project-title-in-modal">{project.title}</p>

            <div className="form-group">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+254 7XX XXX XXX"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Project details</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                className="form-input"
                placeholder="Describe your project, timeline, or site location."
                required
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="button button-primary full-width">
              Send enquiry
            </button>
            <button type="button" className="button button-secondary full-width" onClick={onClose}>
              Cancel
            </button>
          </form>
        ) : (
          <div className="modal-state success">
            <div className="success-icon">✓</div>
            <h2>Enquiry ready to send</h2>
            <p>Your inbox will open with the quote request. If you prefer, message us on WhatsApp instead.</p>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary full-width"
            >
              Send on WhatsApp
            </a>
            <button className="button button-primary full-width" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
