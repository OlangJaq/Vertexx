import { useState } from "react";
import { CONTACT } from "../data";

export default function ContactForm({ subject = "Portfolio enquiry" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "Hi, I am interested in a quote for a construction or design project. Please tell me the next steps.",
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
      setError("Please complete your name, email, and message.");
      return;
    }

    const subjectLine = `${subject} - ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`;
    const mailto = `mailto:${CONTACT.email1}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("sent");
  };

  return (
    <section className="contact-form-card">
      <div className="form-header">
        <span className="eyebrow gold">Request a quote</span>
        <h3>Send your brief and we’ll follow up within one business day.</h3>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Full name
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="form-input"
            required
          />
        </label>

        <label>
          Email address
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="form-input"
            required
          />
        </label>

        <label>
          Phone (optional)
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+254 7XX XXX XXX"
            className="form-input"
          />
        </label>

        <label>
          Project details
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="form-input"
            placeholder="Describe your project, timeline, or site location."
            required
          />
        </label>

        {error && <div className="form-error">{error}</div>}

        <button type="submit" className="button button-primary full-width">
          Send enquiry
        </button>
      </form>

      {status === "sent" && (
        <div className="contact-form-success">
          <p>Thanks — your enquiry is ready to send. If your email client doesn’t open, please message us on WhatsApp.</p>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(`Hello, I am ${form.name} and I would like a quote for my project.`)}`}
            target="_blank"
            rel="noreferrer"
            className="button button-secondary full-width"
          >
            Message on WhatsApp
          </a>
        </div>
      )}
    </section>
  );
}
