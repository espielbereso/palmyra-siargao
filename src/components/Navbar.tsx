import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import type { MouseEvent } from "react";
import logoIcon from "@/assets/shared/brand/logo-icon-gold.png";
import logoText from "@/assets/shared/brand/logo-text.png";
import logoIconWhite from "@/assets/shared/brand/logo-icon-white.png";
import logoTextWhite from "@/assets/shared/brand/logo-text-white.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/residences", label: "Residences" },
  { to: "/updates", label: "Updates" },
];

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const scrollTrigger = 24;
    const onScroll = () => setScrolled(window.scrollY > scrollTrigger);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled || mobileOpen;
  const useWhiteLogo = isHome && !scrolled && !mobileOpen;
  const activeLogoIcon = useWhiteLogo ? logoIconWhite : logoIcon;
  const activeLogoText = useWhiteLogo ? logoTextWhite : logoText;
  const isLinkActive = (path: string) => {
    if (path === "/about") {
      return location.pathname === "/about" || location.pathname === "/story";
    }
    if (path === "/updates") {
      return location.pathname === "/updates" || location.pathname === "/invest";
    }
    return location.pathname === path;
  };

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (isLinkActive(path)) {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        solid ? "bg-primary shadow-[0_8px_24px_rgba(6,28,20,0.22)]" : "bg-transparent shadow-none"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-5 lg:px-12" aria-label="Main navigation">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setMobileOpen(false)}
          aria-label="PALMYRA Siargao Home"
        >
          <img src={activeLogoIcon} alt="PALMYRA Siargao icon" className="h-12 w-auto md:hidden" />
          <span className="hidden md:flex items-center gap-3">
            <img src={activeLogoIcon} alt="PALMYRA Siargao icon" className="h-12 w-auto" />
            <img src={activeLogoText} alt="PALMYRA Siargao" className="h-8 w-auto" />
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`font-label text-sm uppercase tracking-widest transition-colors text-white hover:text-buttered-rum ${
                  isLinkActive(link.to) ? "text-buttered-rum" : ""
                }`}
                onClick={(e) => handleNavClick(e, link.to)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/connect"
              className="btn-cta-v1 text-xs tracking-[0.18em] px-5 py-2.5"
            >
              Connect
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden relative h-10 w-10 text-white"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`absolute left-2 top-1/2 h-[2px] w-6 -translate-y-1/2 bg-current transition-all duration-300 ${
              mobileOpen ? "rotate-45" : "-translate-y-[7px]"
            }`}
          />
          <span
            className={`absolute left-2 top-1/2 h-[2px] w-6 -translate-y-1/2 bg-current transition-all duration-300 ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-2 top-1/2 h-[2px] w-6 -translate-y-1/2 bg-current transition-all duration-300 ${
              mobileOpen ? "-rotate-45" : "translate-y-[7px]"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden bg-primary px-6 transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-[430px] opacity-100 pb-8" : "max-h-0 opacity-0 pb-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-2 pt-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`inline-flex w-full py-2.5 font-label text-[1.02rem] leading-relaxed uppercase tracking-widest text-white hover:text-buttered-rum ${
                  isLinkActive(link.to) ? "text-buttered-rum" : ""
                }`}
                onClick={(e) => handleNavClick(e, link.to)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              to="/connect"
              className="btn-cta-v1 w-full text-sm px-5 py-3"
              onClick={() => setMobileOpen(false)}
            >
              Connect
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
