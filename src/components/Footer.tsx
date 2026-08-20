import { Link } from "react-router-dom";
import logoIcon from "@/assets/shared/brand/logo-icon-gold.png";
import logoText from "@/assets/shared/brand/logo-text.png";

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/palmyrasiargao", icon: "f" },
  { label: "TikTok", href: "https://www.tiktok.com/@palmyra_siargao", icon: "♪" },
  { label: "Instagram", href: "https://www.instagram.com/palmyra_siargao", icon: "◎" },
  { label: "Threads", href: "https://www.threads.com/@palmyra_siargao", icon: "@" },
  { label: "X", href: "https://x.com/palmyrasiargao", icon: "𝕏" },
  { label: "YouTube", href: "https://youtube.com/@palmyrasiargao", icon: "▶" },
];

const Footer = () => (
  <footer className="bg-primary text-primary-foreground border-t border-background/20">
    <div className="container mx-auto px-6 py-16 lg:px-12">
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logoIcon} alt="PALMYRA Siargao icon" className="h-14 w-auto" />
            <img src={logoText} alt="PALMYRA Siargao" className="h-9 w-auto" />
          </div>
          <p className="font-body text-sm leading-relaxed opacity-80">
            A conscious island sanctuary on Siargao Island, Philippines.
          </p>
          <div className="mt-6 flex items-center gap-2" aria-label="PALMYRA Siargao social media links">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`PALMYRA Siargao on ${social.label}`}
                title={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/30 font-heading text-sm text-primary-foreground/80 transition-colors hover:border-buttered-rum hover:bg-buttered-rum hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-subhead text-xs uppercase tracking-widest mb-4 opacity-60">Explore</h4>
          <ul className="space-y-2 font-body text-sm">
            <li><Link to="/about" className="opacity-80 hover:text-buttered-rum transition-colors">About</Link></li>
            <li><Link to="/team" className="opacity-80 hover:text-buttered-rum transition-colors">Team</Link></li>
            <li><Link to="/residences" className="opacity-80 hover:text-buttered-rum transition-colors">Residences</Link></li>
            <li><Link to="/updates" className="opacity-80 hover:text-buttered-rum transition-colors">Updates</Link></li>
            <li><Link to="/connect" className="opacity-80 hover:text-buttered-rum transition-colors">Connect</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-subhead text-xs uppercase tracking-widest mb-4 opacity-60">Connect</h4>
          <p className="font-body text-sm opacity-80 mb-4">
            Barangay Cancohoy, Del Carmen,<br />
            Siargao Island, Philippines
          </p>
          <Link to="/connect" className="font-label text-sm text-buttered-rum hover:underline transition-colors">
            Get in touch →
          </Link>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-primary-foreground/20">
        <p className="font-body text-xs opacity-50 leading-relaxed max-w-3xl">
          Disclaimer: Imagery shown may be conceptual, AI-assisted, or artist-rendered and does not represent final architectural or interior design. All information is subject to change. PALMYRA Siargao is a project of WELLBUILD Development Corporation.
        </p>
        <p className="font-body text-xs opacity-40 mt-4">
          © {new Date().getFullYear()} PALMYRA Siargao. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
