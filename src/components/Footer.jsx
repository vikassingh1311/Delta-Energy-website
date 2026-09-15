import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

const COL_LINKS = [
  {
    heading: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/services", label: "Services" },
      { to: "/equipment", label: "Equipment & Fleet" },
      { to: "/careers", label: "Careers" },
    ],
  },
  {
    heading: "Services",
    links: [
      { to: "/services#project-management", label: "Project Management" },
      { to: "/services#equipment-rental", label: "Equipment Rental" },
      { to: "/services#personnel", label: "Personnel Provision" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="relative border-t border-slate-800 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
              Subsea and offshore energy support — project management, diving
              and ROV equipment rental, and skilled personnel for oil, gas and
              renewable energy operations across Southeast Asia and international offshore markets.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                <span data-testid="footer-address">
                  Myratoppen 26, 1613 Fredrikstad, Norway
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-teal-400" />
                <a
                  href="tel:+4748056113"
                  data-testid="footer-phone"
                  className="hover:text-teal-300"
                >
                  +47 480 56 113
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-teal-400" />
                <a
                  href="mailto:Vinay@deltaenergysolutionsas.com"
                  data-testid="footer-email"
                  className="hover:text-teal-300"
                >
                  Vinay@deltaenergysolutionsas.com
                </a>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-5 lg:col-start-8 lg:grid-cols-2">
            {COL_LINKS.map((col) => (
              <div key={col.heading}>
                <h4 className="font-mono-tech text-[11px] uppercase tracking-[0.24em] text-teal-400">
                  {col.heading}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-slate-300 transition-colors duration-200 hover:text-slate-50"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 md:flex-row md:items-center">
          <p data-testid="footer-copyright">
            © {new Date().getFullYear()} Delta Energy Solutions AS · Org. no.{" "}
            <span className="font-mono-tech text-slate-400">928038378</span>
          </p>
          <p className="font-mono-tech uppercase tracking-[0.2em]">
            Southeast Asia — Global Operations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
