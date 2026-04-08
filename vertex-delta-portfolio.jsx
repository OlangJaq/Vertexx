import { useState } from "react";

// ============================================================
//  EDIT YOUR PROJECTS HERE — add/remove/update as needed
// ============================================================
const PROJECTS = [
  {
    id: 1,
    title: "4-Bedroom Maisonette",
    location: "Etago, Kisii County",
    type: "Residential",
    year: "2023",
    status: "Completed",
    description:
      "A generously proportioned four-bedroom maisonette embraced by the scenic beauty of Kisii County. Designed for growing families, the home blends comfort and sophistication with a 35° pitch roof, natural stone cladding, steel casement windows, and ceramic tile finishes throughout.",
    image: "",
  },
  {
    id: 2,
    title: "3-Bedroom Bungalow",
    location: "Joska, Kangundo Road, Nairobi",
    type: "Residential",
    year: "2023",
    status: "Completed",
    description:
      "A meticulously designed three-bedroom bungalow nestled in the serene locality of Joska along Kangundo Road. The contemporary design features a carport, gazebo, open-plan living spaces, breakfast area, and lush landscaped surroundings — a peaceful retreat without compromising on style and functionality.",
    image: "",
  },
  {
    id: 3,
    title: "Ruiru Apartments",
    location: "Ruiru, Kiambu County",
    type: "Residential",
    year: "2023",
    status: "Completed",
    description:
      "A multi-storey apartment complex fusing contemporary design with practical utility. The facade features clean lines and expansive windows for abundant natural light. One- and two-bedroom units are thoughtfully configured for spatial efficiency, with private balconies, designated parking, underground water tanks, and solar panels on the roof terrace.",
    image: "",
  },
  {
    id: 4,
    title: "Modern House in Kikuyu",
    location: "Kikuyu, Kiambu County",
    type: "Residential",
    year: "2023",
    status: "Completed",
    description:
      "A five-bedroom modern-style maisonette with a focus on contemporary design and functionality. Clean lines, expansive glass windows, and a minimalist colour palette create a harmonious connection with the natural surroundings. The open floor plan promotes a communal atmosphere with a modern kitchen at its heart.",
    image: "",
  },
  {
    id: 5,
    title: "4-Bedroom Maisonette — Ruiru",
    location: "Ruiru, Kiambu County",
    type: "Residential",
    year: "2023",
    status: "Completed",
    description:
      "A four-bedroom modern-style maisonette that seamlessly blends architectural innovation with comfort. Clean lines, expansive windows, and a sleek stone-clad façade welcome natural light into every corner. The open-plan ground floor connects lounge, dining, kitchen, and guest bedroom effortlessly, while the upper floor houses the master suite, theatre room, and office.",
    image: "",
  },
  {
    id: 6,
    title: "Landscaping Project",
    location: "Lavington, Nairobi County",
    type: "Landscape",
    year: "2023",
    status: "Completed",
    description:
      "A comprehensive landscaping masterplan for a mixed-use compound in Lavington, blending natural beauty with functional outdoor spaces. The design integrates royal palms, marigold borders, Kikuyu grass lawns, golden duranta hedges, covered VIP parking, and a swimming pool — seamlessly connecting the site to the surrounding urban fabric.",
    image: "",
  },
  {
    id: 7,
    title: "4-Bedroom Duplexes",
    location: "Karen, Nairobi County",
    type: "Residential",
    year: "2023",
    status: "Completed",
    description:
      "Elegant four-bedroom duplexes in Karen featuring a sunken lounge, island kitchen with pantry and breakfast area, and a dedicated laundry wing on the ground floor. The upper level accommodates a master suite with walk-in closet and balcony, family room, girls' and boys' rooms — all under a signature 35° pitch red-tile roof.",
    image: "",
  },
  {
    id: 8,
    title: "Ngoigwa Thika Apartments",
    location: "Ngoigwa, Thika, Kiambu County",
    type: "Residential",
    year: "2023",
    status: "Completed",
    description:
      "A five-storey residential development — 'Comfort Heights' — nestled in the heart of Thika. The layout maximises natural light and ventilation across bedsitter, one-, and two-bedroom units, promoting energy efficiency and a connection to the outdoors. Stone cladding, hanging lines, and a contemporary façade integrate modern living with the cultural context of its surroundings.",
    image: "",
  },
  {
    id: 9,
    title: "WE-GO Group Interiors",
    location: "Kisii Town, Kisii County",
    type: "Interior",
    year: "2023",
    status: "Completed",
    description:
      "Corporate interior design for the WE-GO Group showroom and offices in Kisii Town. The scheme encapsulates a harmonious blend of functionality, aesthetics, and corporate identity — with a custom branded reception desk, MDF display shelving, thoughtful space planning for workflow efficiency, and a colour palette aligned to the brand's vision.",
    image: "",
  },
  {
    id: 10,
    title: "4-Bedroom Maisonette",
    location: "Homabay County, Kenya",
    type: "Residential",
    year: "2024",
    status: "Completed",
    description:
      "A contemporary four-bedroom maisonette featuring open-plan living spaces, natural ventilation strategy, and locally sourced finishes tailored to the lakeside climate.",
    image: "",
  },
  {
    id: 11,
    title: "Value Addition Warehouses",
    location: "Kenya",
    type: "Industrial",
    year: "2025",
    status: "In Progress",
    description:
      "Multi-bay value addition warehouse complex with a 50m × 20m reinforced concrete ground floor slab, designed to EuroCode 2 standards for heavy agricultural load requirements.",
    image: "",
  },
  {
    id: 12,
    title: "5-Bedroom Maisonette",
    location: "Kenya",
    type: "Residential",
    year: "2024",
    status: "Completed",
    description:
      "Three-storey luxury maisonette with dramatic double-volume entrance, wrap-around balconies, and a refined exterior facade combining face brick and render finishes.",
    image: "",
  },
  {
    id: 13,
    title: "Steel Water Tower",
    location: "Machakos County, Joska",
    type: "Infrastructure",
    year: "2025",
    status: "In Progress",
    description:
      "30,000-litre elevated steel water tower designed to EC3/S275 steel standards, including full buckling checks and section sizing for a four-column support frame.",
    image: "",
  },
];

// ============================================================
//  DIRECTORS — update names, roles, bio, and skills
// ============================================================
const DIRECTORS = [
  {
    id: 1,
    name: "Jack Olang'",
    role: "Director — Construction Management & Structural Design",
    initials: "JO",
    bio: "Jack is an experienced Building Technician and Construction Professional with over 9 years of hands-on experience across residential, commercial, and infrastructure projects in Kenya. He has served in senior roles spanning Clerk of Works, Projects Engineer, and Site Engineer — delivering projects from feasibility through to completion. Currently providing senior-level site supervision on the Nakuru County Aggregation and Industrial Parks (CAIP) Project at Egerton University, Jack brings rigorous quality control, HSE compliance, and technical reporting to every engagement. He also delivers practical training in structural analysis and design software to early-career engineers, reinforcing Vertex-Delta's commitment to knowledge-driven construction excellence.",
    skills: [
      "Construction Supervision & QA/QC",
      "Clerk of Works",
      "Structural Analysis & Design",
      "AutoCAD · Revit · ArchiCAD",
      "ETABS · STAAD.Pro · ProtaStructure · Tekla Tedds",
      "Project Planning & Scheduling",
      "Contract Administration",
      "HSE Compliance (OSHA Certified)",
      "Technical Reporting & Documentation",
      "Advanced Excel · Power BI · Python (basic)",
      "Stakeholder & Contractor Liaison",
      "Team Leadership",
    ],
    qualifications: [
      "BTech Civil Engineering — Technical University of Kenya (2017)",
      "OSHA 30-Hour Construction Industry Outreach Training",
      "Technical Tutor — Structural Analysis & Design Softwares",
    ],
  },
  {
    id: 2,
    name: "Director Name",
    role: "Director — Project Management & Delivery",
    initials: "DN",
    bio: "Update this bio with the second director's background and experience. Describe their expertise, years in practice, the types of projects they have led, and what they bring to Vertex-Delta's clients and to the firm's culture of delivery.",
    skills: [
      "Project Management",
      "Contract Administration",
      "Client Relations",
      "Cost Planning",
    ],
    qualifications: [
      "Relevant Degree Here",
      "Professional Membership",
      "Certification / Registration",
    ],
  },
];

// ============================================================
//  TESTIMONIALS — replace with real client quotes
// ============================================================
const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Vertex-Delta Group LTD delivered our maisonette project on time and to a standard that exceeded our expectations. Their attention to detail — from structural drawings to on-site supervision — was exceptional.",
    client: "Duncan Nyaranga",
    project: "4-Bedroom Maisonette, Homabay County",
    initials: "DN",
  },
  {
    id: 2,
    quote:
      "Professional, knowledgeable, and easy to work with. They understood our brief from day one and translated it into a design that perfectly suits our family's needs. We highly recommend them.",
    client: "Client Name",
    project: "Project Name, Location",
    initials: "CN",
  },
  {
    id: 3,
    quote:
      "The quality of their structural calculations and compliance documentation gave us full confidence throughout the approvals process. A team that truly understands both design and engineering.",
    client: "Client Name",
    project: "Project Name, Location",
    initials: "CN",
  },
  {id: 4,
    quote:
      "The quality of their structural calculations and compliance documentation gave us full confidence throughout the approvals process. A team that truly understands both design and engineering.",
    client: "Louis Shitandi",
    project: "Steel Water tower-Joska",
    initials: "Ls",
  },
];

// ============================================================
//  CONTACT DETAILS
// ============================================================
const CONTACT = {
  whatsapp: "254706906566",
  whatsappDisplay: "+254 706 906 566",
  email1: "olangjack@gmail.com",
  email2: "olangjack@yahoo.com",
  location: "Nairobi, Kenya",
};

// ============================================================
const CREAM = "#faf8f4";
const DARK = "#1a1a18";
const GOLD = "#c8a96e";
const MID = "#5c5c56";
const GREEN = "#25D366";

const statusColors = {
  Completed: { bg: "#e8f5e9", text: "#2e7d32" },
  "In Progress": { bg: "#fff8e1", text: "#f57f17" },
  Design: { bg: "#e3f2fd", text: "#1565c0" },
};
const typeIcons = { Residential: "🏠", Industrial: "🏭", Infrastructure: "🏗️", Commercial: "🏢", Landscape: "🌿", Interior: "🪑" };

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [activeDirector, setActiveDirector] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const types = ["All", ...new Set(PROJECTS.map((p) => p.type))];
  const filtered = activeFilter === "All" ? PROJECTS : PROJECTS.filter((p) => p.type === activeFilter);
  const dir = DIRECTORS[activeDirector];

  return (
    <div style={s.root}>
      <div style={s.noise} />

      {/* HEADER */}
      <header style={s.header}>
        <div style={s.headerInner}>
          <div>
            <span style={s.logoMark}>VΔ</span>
            <h1 style={s.companyName}>Vertex-Delta Group LTD</h1>
            <p style={s.tagline}>Design · Build · Deliver</p>
          </div>
          <nav style={s.nav}>
            {["Projects", "Team", "Testimonials", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={s.navLink}>{item}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={s.hero}>
        <div style={s.heroContent}>
          <p style={s.heroEyebrow}>Based in Kenya · Est. 2026</p>
          <h2 style={s.heroHeading}>Building spaces that<br /><span style={s.heroAccent}>endure.</span></h2>
          <p style={s.heroSub}>From residential maisonettes to industrial complexes — precision engineering and considered design on every project.</p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#projects" style={s.heroCta}>View Our Work ↓</a>
            <a href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`} target="_blank" rel="noopener noreferrer" style={s.heroCtaWa}>💬 WhatsApp Us</a>
          </div>
        </div>
        <div style={s.heroGrid}>
          {[...Array(9)].map((_, i) => <div key={i} style={{ ...s.heroCell, opacity: 0.04 + (i % 3) * 0.03 }} />)}
        </div>
      </section>

      {/* STATS */}
      <section style={s.stats}>
        {[
          { value: `${PROJECTS.length}+`, label: "Projects" },
          { value: PROJECTS.filter((p) => p.status === "Completed").length, label: "Completed" },
          { value: [...new Set(PROJECTS.map((p) => p.type))].length, label: "Sectors" },
          { value: "EC2/EC3", label: "Standards" },
        ].map((st) => (
          <div key={st.label} style={s.statItem}>
            <span style={s.statVal}>{st.value}</span>
            <span style={s.statLab}>{st.label}</span>
          </div>
        ))}
      </section>

      {/* PROJECTS */}
      <section id="projects" style={s.section}>
        <div style={s.secHead}>
          <h3 style={s.secTitle}>Our Work</h3>
          <div style={s.filterRow}>
            {types.map((t) => (
              <button key={t} onClick={() => setActiveFilter(t)} style={{ ...s.fBtn, ...(activeFilter === t ? s.fBtnOn : {}) }}>{t}</button>
            ))}
          </div>
        </div>
        <div style={s.grid}>
          {filtered.map((p) => (
            <div key={p.id} style={s.card} onClick={() => setSelected(p)}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.12)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 20px rgba(0,0,0,0.06)"; }}>
              <div style={s.imgWrap}>
                {p.image ? <img src={p.image} alt={p.title} style={s.img} /> : (
                  <div style={s.imgPh}><span style={{ fontSize: 40 }}>{typeIcons[p.type] || "🏗️"}</span><span style={s.phTxt}>Add photo URL in code</span></div>
                )}
                <div style={s.typeTag}>{typeIcons[p.type]} {p.type}</div>
              </div>
              <div style={s.cardBody}>
                <div style={s.metaRow}>
                  <span style={s.cardYear}>{p.year}</span>
                  <span style={{ ...s.cardStatus, background: statusColors[p.status]?.bg || "#eee", color: statusColors[p.status]?.text || "#333" }}>{p.status}</span>
                </div>
                <h4 style={s.cardTitle}>{p.title}</h4>
                <p style={s.cardLoc}>📍 {p.location}</p>
                <p style={s.cardDesc}>{p.description}</p>
                <button style={s.cardBtn}>View Details →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={s.about}>
        <div style={s.aboutIn}>
          <div>
            <p style={s.eyebrowGold}>About Us</p>
            <h3 style={s.aboutTitle}>Engineering precision.<br />Architectural soul.</h3>
            <p style={s.aboutBody}>Vertex-Delta Group LTD is a Kenyan construction and design consultancy delivering residential, commercial, and infrastructure projects with a commitment to quality, compliance, and craft. Our team combines rigorous structural engineering with thoughtful architectural design — from EuroCode-compliant calculations to site supervision and quantity surveying.</p>
             <div style={s.tagRow}>
              {["Structural Design", "Architectural Plans", "Site Supervision", "Quantity Surveying", "EC2 / EC3 Standards", "NCA Compliant"].map((t) => (
                <span key={t} style={s.tag}>{t}</span>
              ))}
            </div>
          </div>
          <div style={s.aboutAccent}>
            <div style={s.accentBox}>
              <div style={s.accentLogo}>VΔ</div>
              <p style={s.accentQuote}>"Detail is not the detail.<br />It makes the design."</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" style={s.section}>
        <div style={s.secHead}>
          <h3 style={s.secTitle}>Our Directors</h3>
          <div style={s.filterRow}>
            {DIRECTORS.map((d, i) => (
              <button key={d.id} onClick={() => setActiveDirector(i)} style={{ ...s.fBtn, ...(activeDirector === i ? s.fBtnOn : {}) }}>{d.name.split(" ")[0]}</button>
            ))}
          </div>
        </div>

        <div style={s.dirCard}>
          <div style={s.dirLeft}>
            <div style={s.avatar}>{dir.initials}</div>
            <h4 style={s.dirName}>{dir.name}</h4>
            <p style={s.dirRole}>{dir.role}</p>
            <div style={{ marginTop: 28 }}>
              <p style={s.cvLabel}>Qualifications</p>
              {dir.qualifications.map((q) => (
                <div key={q} style={s.cvItem}><span style={s.cvDot}>◆</span>{q}</div>
              ))}
            </div>
          </div>
          <div style={s.dirRight}>
            <p style={s.eyebrowGold2}>Profile</p>
            <p style={s.dirBio}>{dir.bio}</p>
            <p style={{ ...s.eyebrowGold2, marginTop: 28 }}>Core Expertise</p>
            <div style={s.skillsRow}>
              {dir.skills.map((sk) => <span key={sk} style={s.skillPill}>{sk}</span>)}
            </div>
            <a href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20speak%20with%20${encodeURIComponent(dir.name)}%20regarding%20a%20project.`} target="_blank" rel="noopener noreferrer" style={s.dirWaBtn}>
              💬 Message {dir.name.split(" ")[0]} on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={s.testSec}>
        <div style={s.testIn}>
          <p style={s.eyebrowGold}>What Clients Say</p>
          <h3 style={{ ...s.aboutTitle, textAlign: "center" }}>Built on trust.</h3>
          <div style={s.testCard}>
            <span style={s.quoteIcon}>"</span>
            <p style={s.quoteText}>{TESTIMONIALS[activeTestimonial].quote}</p>
            <div style={s.quoteAttrib}>
              <div style={s.quoteAvatar}>{TESTIMONIALS[activeTestimonial].initials}</div>
              <div>
                <p style={s.quoteName}>{TESTIMONIALS[activeTestimonial].client}</p>
                <p style={s.quoteProj}>{TESTIMONIALS[activeTestimonial].project}</p>
              </div>
            </div>
          </div>
          <div style={s.dots}>
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)} style={{ ...s.dot, ...(activeTestimonial === i ? s.dotOn : {}) }} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={s.contactSec}>
        <h3 style={s.contactTitle}>Start a Project</h3>
        <p style={s.contactSub}>Ready to build? Let's talk about your vision.</p>
        <div style={s.contactCards}>
          <a href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`} target="_blank" rel="noopener noreferrer" style={s.waCard}>
            <span style={{ fontSize: 32 }}>💬</span>
            <span style={{ ...s.cLabel, color: "#d4f5df" }}>WhatsApp</span>
            <span style={{ ...s.cVal, color: "#fff" }}>{CONTACT.whatsappDisplay}</span>
            <span style={s.waCtaTxt}>Tap to chat →</span>
          </a>
          <div style={s.cCard}>
            <span style={{ fontSize: 32 }}>✉️</span>
            <span style={s.cLabel}>Email</span>
            <a href={`mailto:${CONTACT.email1}`} style={s.cLink}>{CONTACT.email1}</a>
            <a href={`mailto:${CONTACT.email2}`} style={s.cLink}>{CONTACT.email2}</a>
          </div>
          <div style={s.cCard}>
            <span style={{ fontSize: 32 }}>📍</span>
            <span style={s.cLabel}>Office</span>
            <span style={s.cVal}>{CONTACT.location}</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={s.footer}>
        <p>© {new Date().getFullYear()} Vertex-Delta Group LTD · Nairobi, Kenya</p>
        <p style={{ marginTop: 6, fontSize: 11, color: "#444" }}>olangjack@gmail.com · olangjack@yahoo.com</p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`} target="_blank" rel="noopener noreferrer" style={s.waFloat}>💬</a>

      {/* MODAL */}
      {selected && (
        <div style={s.overlay} onClick={() => setSelected(null)}>
          <div style={s.modal} onClick={(e) => e.stopPropagation()}>
            <button style={s.modalClose} onClick={() => setSelected(null)}>✕</button>
            {selected.image ? <img src={selected.image} alt={selected.title} style={s.modalImg} /> : (
              <div style={{ ...s.imgPh, height: 220, borderRadius: "8px 8px 0 0" }}><span style={{ fontSize: 56 }}>{typeIcons[selected.type] || "🏗️"}</span></div>
            )}
            <div style={s.modalBody}>
              <div style={s.metaRow}>
                <span style={s.cardYear}>{selected.year}</span>
                <span style={{ ...s.cardStatus, background: statusColors[selected.status]?.bg || "#eee", color: statusColors[selected.status]?.text || "#333" }}>{selected.status}</span>
                <span style={s.typeTag2}>{typeIcons[selected.type]} {selected.type}</span>
              </div>
              <h3 style={s.modalTitle}>{selected.title}</h3>
              <p style={s.cardLoc}>📍 {selected.location}</p>
              <p style={{ ...s.cardDesc, marginBottom: 24 }}>{selected.description}</p>
              <a href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20am%20interested%20in%20a%20project%20similar%20to%20your%20${encodeURIComponent(selected.title)}.`} target="_blank" rel="noopener noreferrer" style={s.modalWaBtn}>
                💬 Enquire about this project
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── STYLES ──────────────────────────────────────────────────
const s = {
  root: { fontFamily: "Georgia,'Times New Roman',serif", background: CREAM, color: DARK, minHeight: "100vh", position: "relative", overflowX: "hidden" },
  noise: { position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.025, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "200px" },
  header: { position: "sticky", top: 0, zIndex: 100, background: "rgba(250,248,244,0.93)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(200,169,110,0.2)" },
  headerInner: { maxWidth: 1100, margin: "0 auto", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" },
  logoMark: { fontSize: 12, fontWeight: "bold", letterSpacing: 2, color: GOLD, fontFamily: "monospace" },
  companyName: { margin: "2px 0 0", fontSize: 17, fontWeight: "normal", letterSpacing: 1 },
  tagline: { margin: 0, fontSize: 10, letterSpacing: 3, color: MID, textTransform: "uppercase", fontFamily: "monospace" },
  nav: { display: "flex", gap: 28 },
  navLink: { textDecoration: "none", color: MID, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontFamily: "monospace" },
  hero: { position: "relative", maxWidth: 1100, margin: "0 auto", padding: "96px 32px 80px", overflow: "hidden" },
  heroContent: { position: "relative", zIndex: 2, maxWidth: 540 },
  heroEyebrow: { fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: GOLD, marginBottom: 18, fontFamily: "monospace" },
  heroHeading: { fontSize: "clamp(38px,6vw,66px)", fontWeight: "normal", lineHeight: 1.1, margin: "0 0 22px" },
  heroAccent: { color: GOLD, fontStyle: "italic" },
  heroSub: { fontSize: 16, lineHeight: 1.75, color: MID, marginBottom: 38 },
  heroCta: { display: "inline-block", padding: "13px 26px", background: DARK, color: CREAM, textDecoration: "none", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontFamily: "monospace" },
  heroCtaWa: { display: "inline-block", padding: "13px 26px", background: GREEN, color: "#fff", textDecoration: "none", fontSize: 11, letterSpacing: 1, fontFamily: "monospace", fontWeight: "bold", borderRadius: 2 },
  heroGrid: { position: "absolute", right: 0, top: 0, width: "44%", height: "100%", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "repeat(3,1fr)", gap: 2, zIndex: 1 },
  heroCell: { background: GOLD, borderRadius: 2 },
  stats: { display: "flex", justifyContent: "center", background: DARK },
  statItem: { flex: 1, maxWidth: 200, display: "flex", flexDirection: "column", alignItems: "center", padding: "30px 16px", borderRight: "1px solid rgba(200,169,110,0.15)" },
  statVal: { fontSize: 30, color: GOLD, fontStyle: "italic" },
  statLab: { fontSize: 10, letterSpacing: 2, color: "#aaa", textTransform: "uppercase", marginTop: 6, fontFamily: "monospace" },
  section: { maxWidth: 1100, margin: "0 auto", padding: "72px 32px" },
  secHead: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 44 },
  secTitle: { fontSize: 30, fontWeight: "normal", margin: 0, fontStyle: "italic" },
  filterRow: { display: "flex", gap: 8, flexWrap: "wrap" },
  fBtn: { padding: "8px 16px", border: "1px solid rgba(26,26,24,0.2)", background: "transparent", color: MID, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", cursor: "pointer", fontFamily: "monospace" },
  fBtnOn: { background: DARK, color: CREAM, border: `1px solid ${DARK}` },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))", gap: 26 },
  card: { background: "#fff", borderRadius: 4, overflow: "hidden", cursor: "pointer", transition: "transform 0.3s,box-shadow 0.3s", boxShadow: "0 2px 20px rgba(0,0,0,0.06)" },
  imgWrap: { position: "relative", height: 210, overflow: "hidden" },
  img: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  imgPh: { height: "100%", background: "#f0ede6", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 },
  phTxt: { fontSize: 10, color: "#bbb", letterSpacing: 1, fontFamily: "monospace" },
  typeTag: { position: "absolute", top: 12, left: 12, background: "rgba(26,26,24,0.82)", color: "#fff", fontSize: 10, padding: "4px 10px", letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "monospace", borderRadius: 2 },
  typeTag2: { fontSize: 10, padding: "3px 10px", background: "#f0ede6", color: MID, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "monospace", borderRadius: 2 },
  cardBody: { padding: "18px 20px 22px" },
  metaRow: { display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" },
  cardYear: { fontSize: 12, color: "#aaa", fontFamily: "monospace" },
  cardStatus: { fontSize: 10, padding: "3px 10px", borderRadius: 20, letterSpacing: 1, textTransform: "uppercase", fontFamily: "monospace" },
  cardTitle: { fontSize: 18, fontWeight: "normal", margin: "0 0 5px", fontStyle: "italic" },
  cardLoc: { fontSize: 12, color: MID, margin: "0 0 10px", fontFamily: "monospace" },
  cardDesc: { fontSize: 13, lineHeight: 1.65, color: MID, margin: "0 0 16px" },
  cardBtn: { background: "none", border: "none", color: GOLD, fontSize: 13, cursor: "pointer", padding: 0, fontFamily: "Georgia,serif", fontStyle: "italic" },
  about: { background: DARK, color: CREAM, padding: "72px 32px" },
  aboutIn: { maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" },
  eyebrowGold: { fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: GOLD, marginBottom: 14, fontFamily: "monospace" },
  eyebrowGold2: { fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: GOLD, marginBottom: 14, fontFamily: "monospace" },
  aboutTitle: { fontSize: "clamp(24px,4vw,38px)", fontWeight: "normal", fontStyle: "italic", margin: "0 0 22px", lineHeight: 1.25, color: CREAM },
  aboutBody: { fontSize: 15, lineHeight: 1.8, color: "#ccc", marginBottom: 28 },
  tagRow: { display: "flex", flexWrap: "wrap", gap: 10 },
  tag: { fontSize: 10, padding: "5px 13px", border: "1px solid rgba(200,169,110,0.4)", color: GOLD, letterSpacing: 1, fontFamily: "monospace", textTransform: "uppercase", borderRadius: 2 },
  aboutAccent: { display: "flex", justifyContent: "center" },
  accentBox: { border: "1px solid rgba(200,169,110,0.3)", padding: "44px 36px", textAlign: "center", maxWidth: 290 },
  accentLogo: { fontSize: 42, color: GOLD, fontFamily: "monospace", marginBottom: 22 },
  accentQuote: { fontSize: 15, fontStyle: "italic", lineHeight: 1.7, color: "#ccc" },
  dirCard: { display: "grid", gridTemplateColumns: "260px 1fr", gap: 52, background: "#fff", borderRadius: 8, boxShadow: "0 4px 32px rgba(0,0,0,0.07)", padding: "44px" },
  dirLeft: { borderRight: "1px solid rgba(26,26,24,0.08)", paddingRight: 44 },
  avatar: { width: 76, height: 76, borderRadius: "50%", background: DARK, color: GOLD, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontFamily: "monospace", marginBottom: 18 },
  dirName: { fontSize: 21, fontWeight: "normal", fontStyle: "italic", margin: "0 0 5px" },
  dirRole: { fontSize: 10, color: MID, letterSpacing: 1, textTransform: "uppercase", fontFamily: "monospace", lineHeight: 1.6, margin: 0 },
  cvLabel: { fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: GOLD, fontFamily: "monospace", marginBottom: 12, marginTop: 0 },
  cvItem: { fontSize: 13, color: MID, marginBottom: 8, display: "flex", alignItems: "flex-start", gap: 8, lineHeight: 1.5 },
  cvDot: { color: GOLD, fontSize: 8, marginTop: 4, flexShrink: 0 },
  dirRight: { paddingTop: 2 },
  dirBio: { fontSize: 15, lineHeight: 1.8, color: MID, margin: 0 },
  skillsRow: { display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 },
  skillPill: { fontSize: 11, padding: "5px 13px", background: "#f4f1ea", color: DARK, borderRadius: 2, fontFamily: "monospace" },
  dirWaBtn: { display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 22px", background: GREEN, color: "#fff", textDecoration: "none", fontSize: 11, letterSpacing: 1, fontFamily: "monospace", borderRadius: 4, fontWeight: "bold" },
  testSec: { background: DARK, padding: "72px 32px" },
  testIn: { maxWidth: 700, margin: "0 auto", textAlign: "center" },
  testCard: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(200,169,110,0.2)", borderRadius: 8, padding: "44px 44px 36px", marginTop: 36, textAlign: "left", position: "relative" },
  quoteIcon: { fontSize: 72, color: GOLD, lineHeight: 0.6, opacity: 0.35, fontFamily: "Georgia,serif", marginBottom: 14, display: "block" },
  quoteText: { fontSize: 16, lineHeight: 1.85, color: "#e0ddd6", fontStyle: "italic", margin: "0 0 28px" },
  quoteAttrib: { display: "flex", alignItems: "center", gap: 14 },
  quoteAvatar: { width: 46, height: 46, borderRadius: "50%", background: GOLD, color: DARK, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontFamily: "monospace", flexShrink: 0 },
  quoteName: { margin: 0, fontSize: 14, color: CREAM, fontWeight: "bold" },
  quoteProj: { margin: "3px 0 0", fontSize: 11, color: "#777", fontFamily: "monospace", letterSpacing: 1 },
  dots: { display: "flex", justifyContent: "center", gap: 10, marginTop: 28 },
  dot: { width: 10, height: 10, borderRadius: "50%", background: "rgba(200,169,110,0.3)", border: "none", cursor: "pointer", padding: 0 },
  dotOn: { background: GOLD },
  contactSec: { maxWidth: 1100, margin: "0 auto", padding: "72px 32px", textAlign: "center" },
  contactTitle: { fontSize: 32, fontWeight: "normal", fontStyle: "italic", marginBottom: 10 },
  contactSub: { color: MID, marginBottom: 44, fontSize: 15 },
  contactCards: { display: "flex", justifyContent: "center", gap: 22, flexWrap: "wrap" },
  waCard: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: "30px 38px", background: GREEN, color: "#fff", textDecoration: "none", minWidth: 190, borderRadius: 4 },
  cCard: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: "30px 38px", border: "1px solid rgba(26,26,24,0.12)", minWidth: 190, background: "#fff", borderRadius: 4 },
  cLabel: { fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "#aaa", fontFamily: "monospace" },
  cVal: { fontSize: 13, color: DARK, fontFamily: "monospace" },
  cLink: { fontSize: 13, color: GOLD, fontFamily: "monospace", textDecoration: "none" },
  waCtaTxt: { fontSize: 11, fontFamily: "monospace", letterSpacing: 1, marginTop: 4, fontWeight: "bold" },
  footer: { textAlign: "center", padding: "22px", background: DARK, color: "#555", fontSize: 12, letterSpacing: 1, fontFamily: "monospace" },
  waFloat: { position: "fixed", bottom: 26, right: 26, width: 54, height: 54, borderRadius: "50%", background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, textDecoration: "none", boxShadow: "0 4px 20px rgba(37,211,102,0.5)", zIndex: 999 },
  overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, backdropFilter: "blur(4px)" },
  modal: { background: "#fff", borderRadius: 8, maxWidth: 560, width: "100%", position: "relative", overflow: "hidden", maxHeight: "90vh", overflowY: "auto" },
  modalClose: { position: "absolute", top: 13, right: 13, background: "rgba(0,0,0,0.5)", border: "none", color: "#fff", width: 30, height: 30, borderRadius: "50%", cursor: "pointer", fontSize: 13, zIndex: 10 },
  modalImg: { width: "100%", height: 230, objectFit: "cover", display: "block" },
  modalBody: { padding: "22px 26px 30px" },
  modalTitle: { fontSize: 23, fontWeight: "normal", fontStyle: "italic", margin: "10px 0 7px" },
  modalWaBtn: { display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 20px", background: GREEN, color: "#fff", textDecoration: "none", fontSize: 11, letterSpacing: 1, fontFamily: "monospace", borderRadius: 4, fontWeight: "bold" },
};
