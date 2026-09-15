import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/equipment", label: "Equipment & Fleet" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-300 ${
        scrolled ? "header-glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Logo />

        {/* Desktop nav */}
        <nav
          data-testid="desktop-nav"
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              data-testid={`nav-link-${n.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              className={({ isActive }) =>
                `relative px-4 py-2 text-[13.5px] font-medium tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-teal-400"
                    : "text-slate-300 hover:text-slate-50"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {n.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-4 right-4 h-px bg-teal-400" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            data-testid="header-cta-quote"
            className="group inline-flex items-center gap-2 rounded-sm border border-teal-500/70 bg-teal-500/10 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-teal-300 transition-[background-color,color,transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-teal-400 hover:bg-teal-500/20 hover:text-teal-100"
          >
            Request a Quote
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-slate-700 bg-slate-900/60 text-slate-100 transition-colors duration-200 hover:border-teal-500/60 hover:text-teal-300 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          data-testid="mobile-nav"
          className="mx-6 mt-4 rounded-sm border border-slate-800 bg-slate-950/95 p-4 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-link-${n.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className={({ isActive }) =>
                  `border-b border-slate-800 px-2 py-3.5 text-sm font-medium tracking-wide last:border-b-0 ${
                    isActive ? "text-teal-400" : "text-slate-200"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              data-testid="mobile-cta-quote"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm border border-teal-500 bg-teal-500/10 px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-teal-300"
            >
              Request a Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
