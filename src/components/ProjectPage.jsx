import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { PROJECTS, CONTACT, typeIcons, statusColors } from "../data";
import ImageSlideshow from "./ImageSlideshow";
import PaymentModal from "./PaymentModal";
import logo from "../assets/images/logo2.png";

export default function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="app-root">
        <header className="site-header">
          <div className="header-inner">
            <div className="brand">
              <Link to="/">
                <img src={logo} alt="Vertex-Delta Group LTD" className="brand-logo" />
              </Link>
            </div>
          </div>
        </header>
        <main style={{ padding: "2rem", textAlign: "center" }}>
          <h2>Project not found</h2>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/" className="button button-primary" style={{ marginTop: "1rem" }}>
            ← Back to Portfolio
          </Link>
        </main>
      </div>
    );
  }

  const relatedProjects = PROJECTS.filter(
    (p) => p.type === project.type && p.id !== project.id
  ).slice(0, 3);

  return (
    <div className="app-root">
      <div className="noise-overlay" />

      <header className="site-header">
        <div className="header-inner">
          <div className="brand">
            <Link to="/">
              <img src={logo} alt="Vertex-Delta Group LTD" className="brand-logo" />
            </Link>
          </div>
          <nav className="site-nav">
            <Link to="/" className="nav-link">
              Portfolio
            </Link>
            <a href="#details" className="nav-link">
              Details
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Slideshow Section */}
        <section className="project-hero">
          <ImageSlideshow 
            images={project.images || [project.image].filter(Boolean)}
            title={project.title}
          />
          <div className="project-hero-content">
            <button 
              className="back-button"
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              ← Back
            </button>
            <div className="hero-text-overlay">
              <div className="hero-meta">
                <span className="project-year">{project.year}</span>
                <span className="project-status" style={statusColors[project.status]}>
                  {project.status}
                </span>
                <span className="project-type-badge">
                  {typeIcons[project.type]} {project.type}
                </span>
              </div>
              <h1>{project.title}</h1>
              <p className="hero-location">📍 {project.location}</p>
              <p className="hero-description">{project.description}</p>
              <div className="hero-ctas">
                <button
                  className="button button-primary"
                  onClick={() => setShowPaymentModal(true)}
                >
                  💳 Purchase Design
                </button>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(project.title)}%20project.`}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                >
                  💬 Contact
                </a>
                <a
                  href={`mailto:${CONTACT.email1}?subject=Interest%20in%20${encodeURIComponent(project.title)}`}
                  className="button button-outline"
                >
                  ✉️ Email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details Section */}
        <section id="details" className="project-details">
          <div className="details-container">
            {/* Left: Description and Specs */}
            <div className="details-left">
              <div className="details-section">
                <h2>Project Overview</h2>
                <p>{project.longDescription || project.description}</p>
              </div>

              {project.specifications && (
                <div className="details-section">
                  <h3>Specifications</h3>
                  <div className="specs-grid">
                    {Object.entries(project.specifications).map(([key, value]) => (
                      <div key={key} className="spec-item">
                        <span className="spec-label">
                          {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
                        </span>
                        {Array.isArray(value) ? (
                          <ul className="spec-list">
                            {value.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <span className="spec-value">{value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.amenities && project.amenities.length > 0 && (
                <div className="details-section">
                  <h3>Key Amenities</h3>
                  <div className="amenities-list">
                    {project.amenities.map((amenity, idx) => (
                      <div key={idx} className="amenity-item">
                        <span className="amenity-icon">✓</span>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Quick Info Card */}
            <div className="details-right">
              <div className="info-card">
                <div className="info-section">
                  <h4>Project Type</h4>
                  <p>{typeIcons[project.type]} {project.type}</p>
                </div>
                <div className="info-section">
                  <h4>Location</h4>
                  <p>{project.location}</p>
                </div>
                <div className="info-section">
                  <h4>Status</h4>
                  <p style={statusColors[project.status]}>{project.status}</p>
                </div>
                <div className="info-section">
                  <h4>Year Completed</h4>
                  <p>{project.year}</p>
                </div>
                {project.price && (
                  <div className="info-section price-section">
                    <h4>Estimated Value</h4>
                    <p className="price">
                      {project.currency} {project.price.toLocaleString()}
                    </p>
                  </div>
                )}
                <div className="info-divider" />
                <button
                  className="button button-primary full-width"
                  onClick={() => setShowPaymentModal(true)}
                >
                  💳 Purchase Design
                </button>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(project.title)}%20project.`}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary full-width"
                >
                  💬 Inquire
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <section className="related-projects">
            <h2>Related Projects</h2>
            <div className="projects-row">
              {relatedProjects.map((related) => (
                <Link
                  key={related.id}
                  to={`/projects/${related.slug}`}
                  className="related-project-card"
                >
                  <div className="related-image">
                    {related.image ? (
                      <img src={related.image} alt={related.title} />
                    ) : (
                      <div className="project-placeholder">
                        <span>{typeIcons[related.type]}</span>
                      </div>
                    )}
                  </div>
                  <h4>{related.title}</h4>
                  <p>{related.location}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Contact CTA Section */}
        <section id="contact" className="project-contact-cta">
          <h2>Interested in this project?</h2>
          <p>Get in touch to discuss how we can help bring your vision to life.</p>
          <div className="contact-links">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20found%20your%20${encodeURIComponent(project.title)}%20project%20impressive.%20Can%20we%20discuss%3F`}
              target="_blank"
              rel="noreferrer"
              className="contact-button whatsapp"
            >
              <span>💬</span> WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT.email1}?subject=Interest%20in%20${encodeURIComponent(project.title)}`}
              className="contact-button email"
            >
              <span>✉️</span> Email
            </a>
            <button
              className="contact-button payment"
              onClick={() => setShowPaymentModal(true)}
            >
              <span>💳</span> Purchase Design
            </button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Vertex-Delta Group LTD · Nairobi, Kenya</p>
        <p>{CONTACT.email1} · {CONTACT.email2}</p>
      </footer>

      <a
        className="whatsapp-float"
        href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`}
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp chat"
      >
        💬
      </a>

      {/* Payment Modal */}
      {showPaymentModal && (
        <PaymentModal
          project={project}
          onClose={() => setShowPaymentModal(false)}
        />
      )}
    </div>
  );
}
