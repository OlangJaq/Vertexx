import { useMemo, useState } from "react";
import { CONTACT, PROJECTS, TESTIMONIALS, typeIcons, statusColors } from "../data";
import { Link } from "react-router-dom";
import Header from "./Header";
import ContactForm from "./ContactForm";

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeService, setActiveService] = useState(0);

  const projectTypes = useMemo(
    () => ["All", ...new Set(PROJECTS.map((project) => project.type))],
    []
  );

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? PROJECTS
        : PROJECTS.filter((project) => project.type === activeFilter),
    [activeFilter]
  );

  const completedCount = useMemo(
    () => PROJECTS.filter((project) => project.status === "Completed").length,
    []
  );

  const sectorCount = useMemo(
    () => new Set(PROJECTS.map((project) => project.type)).size,
    []
  );

  const heroImages = useMemo(() => PROJECTS.slice(0, 9), []);

  const services = useMemo(() => [
    {
      name: "Structural Design",
      description: "Comprehensive structural engineering for residential, commercial, and industrial projects. Compliant with EC2/EC3 standards and NCA regulations.",
      image: "https://images.unsplash.com/photo-1503387854665-48275bfe2e4b?w=600&h=400&fit=crop", // Structural engineering design
      features: ["EC2/EC3 Compliance", "Load Calculations", "Foundation Design", "Seismic Analysis"]
    },
    {
      name: "Architectural Plans",
      description: "Creative architectural design and planning services tailored to your vision and site requirements. From concept to construction drawings.",
      image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=600&h=400&fit=crop", // Architectural plans/blueprints
      features: ["Concept Design", "Working Drawings", "3D Visualization", "Permit Documentation"]
    },
    {
      name: "Project Management",
      description: "End-to-end project management ensuring timely delivery, budget control, and quality assurance throughout the construction process.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop", // Construction project management
      features: ["Schedule Management", "Budget Control", "Quality Assurance", "Stakeholder Coordination"]
    },
    {
      name: "Quantity Surveying",
      description: "Accurate cost estimation, procurement, and contract administration for your construction projects. Maximizing value and minimizing costs.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop", // Quantity surveying/cost estimation
      features: ["Cost Estimation", "Procurement", "Contract Admin", "Value Engineering"]
    }
  ], []);

  return (
    <>
      <div className="noise-overlay" />

      <Header />

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">Based in Kenya · Est. 2026</span>
            <h2>
              Building spaces that <span>endure.</span>
            </h2>
            <p>
              From residential maisonettes to industrial warehouses — precision engineering and considered design on every project.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                View Our Work
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
          <div className="hero-grid">
            {heroImages.map((project) => (
              <div key={project.id} className="hero-cell">
                {project.image ? (
                  <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                ) : (
                  <div className="hero-cell-placeholder">{project.type}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="stats-row">
          <article className="stat-card">
            <h3>{PROJECTS.length}+</h3>
            <p>Projects</p>
          </article>
          <article className="stat-card">
            <h3>{completedCount}</h3>
            <p>Completed</p>
          </article>
          <article className="stat-card">
            <h3>{sectorCount}</h3>
            <p>Sectors</p>
          </article>
          <article className="stat-card">
            <h3>EC2 / EC3</h3>
            <p>Standards</p>
          </article>
        </section>

        <section id="projects" className="section-block">
          <div className="section-header">
            <div>
              <span className="eyebrow gold">Our Work</span>
              <h3>Portfolio highlights</h3>
            </div>
            <div className="filters-row">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`filter-button ${activeFilter === type ? "active" : ""}`}
                  onClick={() => setActiveFilter(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="project-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <article>
                  <div className="project-image">
                    {project.image ? (
                      <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                    ) : (
                      <div className="project-placeholder">
                        <span>{typeIcons[project.type] || "🏗️"}</span>
                        <p>Add image URL in source</p>
                      </div>
                    )}
                    <span className="project-type">
                      {typeIcons[project.type] || "🏗️"} {project.type}
                    </span>
                  </div>
                  <div className="project-content">
                    <div className="project-meta">
                      <span>{project.year}</span>
                      <span className="project-status" style={statusColors[project.status]}>
                        {project.status}
                      </span>
                    </div>
                    <h4>{project.title}</h4>
                    <p className="project-location">📍 {project.location}</p>
                    <p className="project-summary">{project.description}</p>
                    <span className="project-action">View details →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section className="about-block">
          <div className="about-copy">
            <span className="eyebrow gold">About Us</span>
            <h3>Engineering precision. Architectural soul.</h3>
            <p>
              Vertex-Delta Group LTD is a Kenyan construction and design consultancy delivering residential, commercial, and infrastructure projects with a commitment to quality, compliance, and craft.
            </p>
            <div className="tag-grid">
              {[
                "Structural Design",
                "Architectural Plans",
                "Site Supervision",
                "Quantity Surveying",
                "EC2 / EC3 Standards",
                "NCA Compliant",
              ].map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="about-panel">
            <div className="accent-card">
              <div className="accent-mark">VΔ</div>
              <p className="accent-quote">
                "Detail is not the detail. It makes the design."
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="section-block">
          <div className="section-header">
            <div>
              <span className="eyebrow gold">Our Services</span>
              <h3>What we offer</h3>
            </div>
          </div>

          <div className="services-container">
            <div className="service-tabs">
              {services.map((service, index) => (
                <button
                  key={service.name}
                  type="button"
                  className={`service-tab-button ${activeService === index ? "active" : ""}`}
                  onClick={() => setActiveService(index)}
                >
                  {service.name}
                </button>
              ))}
            </div>

            <div className="service-content">
              <div className="service-image">
                <img src={services[activeService].image} alt={services[activeService].name} loading="lazy" decoding="async" />
              </div>
              <div className="service-details">
                <h4>{services[activeService].name}</h4>
                <p>{services[activeService].description}</p>
                <div className="service-features">
                  {services[activeService].features.map((feature) => (
                    <span key={feature} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(services[activeService].name)}%20services.`}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary"
                >
                  Inquire About {services[activeService].name}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials-block">
          <div className="testimonials-inner">
            <span className="eyebrow gold">What Clients Say</span>
            <h3>Built on trust.</h3>
            <article className="testimonial-card">
              <span className="quote-mark">"</span>
              <p>{TESTIMONIALS[activeTestimonial].quote}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{TESTIMONIALS[activeTestimonial].initials}</div>
                <div>
                  <strong>{TESTIMONIALS[activeTestimonial].client}</strong>
                  <p>{TESTIMONIALS[activeTestimonial].project}</p>
                </div>
              </div>
            </article>
            <div className="testimonial-dots">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`dot-button ${activeTestimonial === index ? "active" : ""}`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-block">
          <div>
            <span className="eyebrow gold">Start a Project</span>
            <h3>Ready to build? Share your brief and we’ll respond fast.</h3>
          </div>
          <div className="contact-grid">
            <ContactForm subject="Project quote request" />

            <a
              className="contact-card contact-card-primary"
              href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`}
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
    </>
  );
}
