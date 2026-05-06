import { useState } from "react";
import { CONTACT, DIRECTORS } from "../data";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function DirectorsPage() {
  const [activeDirector, setActiveDirector] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);

  const currentDirector = DIRECTORS[activeDirector] || DIRECTORS[0];

  return (
    <div className="app-root">
      <div className="noise-overlay" />

      <Header />

      <main>
        <section className="section-block">
          <div className="section-header">
            <div>
              <span className="eyebrow gold">Our Directors</span>
              <h3>Meet the leadership team</h3>
            </div>
            <div className="filters-row">
              {DIRECTORS.map((director, index) => (
                <button
                  key={director.id}
                  type="button"
                  className={`filter-button ${activeDirector === index ? "active" : ""}`}
                  onClick={() => setActiveDirector(index)}
                >
                  {director.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="director-panel">
            <div className="director-card">
              <div className="avatar" onClick={() => setShowImageModal(true)} style={{ cursor: 'pointer' }}>
                {currentDirector.image ? (
                  <img src={currentDirector.image} alt={currentDirector.name} loading="lazy" decoding="async" />
                ) : (
                  currentDirector.initials
                )}
              </div>
              <h4>{currentDirector.name}</h4>
              <p className="director-role">{currentDirector.role}</p>
              <div>
                <p className="section-subtitle">Qualifications</p>
                <ul className="qualification-list">
                  {currentDirector.qualifications.map((qualification) => (
                    <li key={qualification}>{qualification}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="director-details">
              <span className="eyebrow gold">Profile</span>
              <p>{currentDirector.bio}</p>
              <span className="eyebrow gold">Core Expertise</span>
              <div className="skill-grid">
                {currentDirector.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
              <a
                className="button button-secondary"
                href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20speak%20with%20${encodeURIComponent(currentDirector.name)}%20regarding%20a%20project.`}
                target="_blank"
                rel="noreferrer"
              >
                💬 Message {currentDirector.name.split(" ")[0]} on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-block">
          <div>
            <span className="eyebrow gold">Get In Touch</span>
            <h3>Ready to collaborate? Let's connect.</h3>
          </div>
          <div className="contact-grid">
            <a
              className="contact-card contact-card-primary"
              href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20found%20your%20directors%20page%20and%20would%20like%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noreferrer"
            >
              <span>💬</span>
              <div>
                <p>WhatsApp</p>
                <strong>{CONTACT.whatsappDisplay}</strong>
              </div>
              <span>Tap to chat →</span>
            </a>
            <div className="contact-card">
              <span>✉️</span>
              <div>
                <p>Email</p>
                <a href={`mailto:${CONTACT.email1}`}>{CONTACT.email1}</a>
                <a href={`mailto:${CONTACT.email2}`}>{CONTACT.email2}</a>
              </div>
            </div>
            <div className="contact-card">
              <span>📍</span>
              <div>
                <p>Office</p>
                <strong>{CONTACT.location}</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Vertex-Delta Group LTD · Nairobi, Kenya</p>
        <p>{CONTACT.email1} · {CONTACT.email2}</p>
      </footer>

      {showImageModal && (
        <div className="modal-overlay" onClick={() => setShowImageModal(false)}>
          <div className="modal-content image-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowImageModal(false)} aria-label="Close image modal">
              ✕
            </button>
            {currentDirector.image ? (
              <img src={currentDirector.image} alt={currentDirector.name} className="modal-image" />
            ) : (
              <div className="modal-placeholder">{currentDirector.initials}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}