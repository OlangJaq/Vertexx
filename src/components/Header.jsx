import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo2.png";

const NAV_ITEMS = [
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "Team", href: "/directors" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <Link to="/" onClick={handleNavClick}>
            <img src={logo} alt="Vertex-Delta Group LTD" className="brand-logo" />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="site-nav" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) =>
            item.href.startsWith("/") && !item.href.startsWith("/#") ? (
              <Link key={item.label} to={item.href} className="nav-link">
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Hamburger toggle (mobile only) */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) =>
            item.href.startsWith("/") && !item.href.startsWith("/#") ? (
              <Link
                key={item.label}
                to={item.href}
                className="mobile-nav-link"
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="mobile-nav-link"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            )
          )}
        </nav>
      )}
    </header>
  );
}
