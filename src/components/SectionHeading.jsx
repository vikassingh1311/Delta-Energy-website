import React from "react";

export const SectionHeading = ({ overline, title, description, align = "left", className = "" }) => {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {overline && (
        <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-teal-400">
          {overline}
        </p>
      )}
      <h2 className="font-display mt-4 text-3xl font-black tracking-tight text-slate-50 sm:text-4xl lg:text-[44px] lg:leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-[17px]">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
