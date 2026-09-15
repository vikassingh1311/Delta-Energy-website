import React from "react";
import { Link } from "react-router-dom";

export const Logo = ({ compact = false }) => {
  return (
    <Link
      to="/"
      data-testid="site-logo"
      className="group inline-flex items-center gap-3"
    >
      <span
        aria-hidden
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-sm border border-teal-500/60 bg-slate-950"
      >
        {/* Delta triangle mark */}
        <svg
          viewBox="0 0 40 40"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M6 32 L20 6 L34 32 Z"
            className="stroke-teal-400"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M13 26 L27 26"
            className="stroke-slate-100"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-black tracking-tight text-slate-50">
          DELTA ENERGY
        </span>
        {!compact && (
          <span className="font-mono-tech mt-0.5 text-[10px] uppercase tracking-[0.24em] text-teal-400">
            SOLUTIONS · AS
          </span>
        )}
      </span>
    </Link>
  );
};

export default Logo;
