import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Anchor,
  Wrench,
  Users,
  ShieldCheck,
  Waves,
  Cog,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const HERO_IMG =
  "https://images.unsplash.com/photo-1578356058390-f58c575337a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxvZmZzaG9yZSUyMG9pbCUyMHJpZyUyMHZlc3NlbHxlbnwwfHx8fDE3ODM2NjM2NjF8MA&ixlib=rb-4.1.0&q=85";
const IMG_ROV =
  "https://images.unsplash.com/photo-1579619674707-04c497948292?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwUk9WJTIwc3VibWFyaW5lfGVufDB8fHx8MTc4MzY2MzY2MXww&ixlib=rb-4.1.0&q=85";
const IMG_DIVER =
  "https://images.unsplash.com/photo-1751568258222-da70c98b39ac?fm=jpg&q=85&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0";
const IMG_CRANE =
  "https://images.unsplash.com/photo-1690508313456-bf8c851e8319?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxvZmZzaG9yZSUyMG9pbCUyMHJpZyUyMHZlc3NlbHxlbnwwfHx8fDE3ODM2NjM2NjF8MA&ixlib=rb-4.1.0&q=85";
const IMG_WINDFARM =
  "https://images.unsplash.com/photo-1752947600843-18dea1a1750e?fm=jpg&q=85&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0";
const IMG_WINDFARM_ROW =
  "https://images.unsplash.com/photo-1705641708805-c2318921a228?fm=jpg&q=85&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0";

const PILLARS = [
  {
    icon: Anchor,
    tag: "01",
    title: "Project Management",
    description:
      "End-to-end coordination of subsea and renewable energy campaigns — from scope, engineering and vendor management to offshore execution and closeout.",
    href: "/services#project-management",
    image: IMG_CRANE,
  },
  {
    icon: Wrench,
    tag: "02",
    title: "Diving & ROV Equipment Rental",
    description:
      "A well-maintained fleet of ROVs, winches, load cells and air diving systems — mobilised with certification, spares and technical support.",
    href: "/services#equipment-rental",
    image: IMG_ROV,
  },
  {
    icon: Users,
    tag: "03",
    title: "Personnel Provision",
    description:
      "Vetted project managers, offshore engineers, commercial divers and ROV operators — deployed against demanding scopes at short notice.",
    href: "/services#personnel",
    image: IMG_DIVER,
  },
];

const TRUST = [
  { k: "20+", v: "Years combined offshore leadership" },
  { k: "Global Reach", v: "Offshore project support" },
  { k: "24 / 7", v: "Mobilisation & technical support" },
  { k: "O&G · Renewables", v: "Dual-sector expertise" },
];

const COMMITMENTS = [
  { icon: ShieldCheck, title: "Safety-first execution", text: "Uncompromising HSE culture at every stage of the operation." },
  { icon: Cog, title: "Certified, ready equipment", text: "All rental assets maintained, tested and documented before mobilisation." },
  { icon: Waves, title: "Offshore-native leadership", text: "Founded and led by hands-on subsea professionals — not middlemen." },
];

export default function Home() {
  return (
    <div data-testid="page-home" className="text-slate-100">
      {/* HERO */}
      <section
        data-testid="hero-section"
        className="relative isolate -mt-20 flex min-h-[92vh] items-end overflow-hidden"
      >
        <img
          src={HERO_IMG}
          alt="Offshore support vessel at sea"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-vignette absolute inset-0" />
        <div className="grid-lines absolute inset-0 opacity-20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-10 lg:pb-32 lg:pt-40">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-sm border border-slate-700/70 bg-slate-950/60 px-3 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              <span className="font-mono-tech text-[10.5px] uppercase tracking-[0.28em] text-slate-200">
                Global · Specialist in Southeast Asia
              </span>
            </div>

            <h1
              data-testid="hero-title"
              className="font-display text-4xl font-black tracking-tight text-slate-50 sm:text-5xl lg:text-[80px] lg:leading-[0.95]"
            >
              Delta Energy
              <br />
              <span className="text-teal-400">Solutions AS</span>
            </h1>

            <p
              data-testid="hero-tagline"
              className="font-display mt-6 max-w-2xl text-lg font-medium leading-snug text-slate-200 sm:text-2xl"
            >
              Reliable Subsea & Offshore Energy Support — From Planning to Execution.
            </p>

            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-300 sm:text-base">
              Project management, diving & ROV equipment rental, and skilled
              personnel for oil, gas and renewable energy operations.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                to="/contact"
                data-testid="hero-cta-quote"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-teal-500 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-slate-950 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-teal-400"
              >
                Request a Quote
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/services"
                data-testid="hero-cta-services"
                className="group inline-flex items-center justify-center gap-2 rounded-sm border border-slate-500/80 bg-slate-950/40 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-slate-100 backdrop-blur transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-teal-400 hover:bg-slate-900/70"
              >
                Our Services
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* small trust strip inside hero */}
            <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-slate-500/30 pt-8 sm:grid-cols-4">
              {TRUST.map((t) => (
                <div key={t.v}>
                  <dt className="font-display text-xl font-bold tracking-tight text-teal-300 sm:text-2xl">
                    {t.k}
                  </dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    {t.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Right-side floating spec panel */}
        <div className="pointer-events-none absolute bottom-24 right-8 z-10 hidden max-w-xs rounded-sm border border-slate-700/60 bg-slate-950/70 p-5 backdrop-blur-md xl:block">
          <p className="font-mono-tech text-[10.5px] uppercase tracking-[0.28em] text-teal-400">
            Latitude 59.20° N
          </p>
          <p className="font-display mt-3 text-lg font-semibold leading-snug text-slate-100">
            Specialist in Southeast Asia. Deployed globally.
          </p>
        </div>
      </section>

      {/* SERVICE PILLARS */}
      <section
        data-testid="pillars-section"
        className="relative border-t border-slate-800 bg-slate-950"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <SectionHeading
              overline="What we do"
              title="Three service pillars, engineered for offshore."
              description="Delta Energy Solutions delivers focused capability across the subsea and renewable energy value chain — with the accountability of a specialist and the reach of a partner."
            />
            <Link
              to="/services"
              data-testid="pillars-see-all"
              className="group inline-flex shrink-0 items-center gap-2 self-start text-[13px] font-semibold uppercase tracking-[0.18em] text-teal-400 hover:text-teal-300"
            >
              All services
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              // Tetris-like layout: card 1 wide, 2 narrow, 3 wide-shift
              const col =
                i === 0 ? "lg:col-span-7" : i === 1 ? "lg:col-span-5" : "lg:col-span-12";
              return (
                <Link
                  key={p.title}
                  to={p.href}
                  data-testid={`pillar-card-${i + 1}`}
                  className={`group relative overflow-hidden rounded-sm border border-slate-800 bg-slate-900/40 transition-[border-color,transform,background-color] duration-300 hover:-translate-y-1 hover:border-teal-500/60 hover:bg-slate-900/70 ${col}`}
                >
                  <div className={`grid ${i === 2 ? "md:grid-cols-2" : "grid-cols-1"}`}>
                    <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-auto md:min-h-[280px]">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                      <span className="font-mono-tech absolute left-5 top-5 rounded-sm border border-slate-700/70 bg-slate-950/70 px-2 py-1 text-[10px] uppercase tracking-[0.24em] text-teal-400">
                        {p.tag} / Pillar
                      </span>
                    </div>

                    <div className="p-8 lg:p-10">
                      <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-teal-500/50 bg-teal-500/10 text-teal-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display mt-6 text-2xl font-bold tracking-tight text-slate-50">
                        {p.title}
                      </h3>
                      <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
                        {p.description}
                      </p>
                      <span className="mt-8 inline-flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-teal-400">
                        Explore
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMITMENTS / TRUST */}
      <section
        data-testid="commitments-section"
        className="relative border-t border-slate-800 bg-slate-950"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeading
                overline="Why Delta"
                title="Offshore standards. No shortcuts."
                description="Every scope is delivered against a common commitment — technical rigour, transparent communication and safe execution offshore."
              />
              <Link
                to="/about"
                data-testid="commitments-cta-about"
                className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-teal-400 hover:text-teal-300"
              >
                About the company
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-1">
              {COMMITMENTS.map((c) => {
                const Icon = c.icon;
                return (
                  <li
                    key={c.title}
                    className="group flex items-start gap-5 border border-slate-800 bg-slate-900/30 p-6 transition-colors duration-300 hover:border-teal-500/50 hover:bg-slate-900/60"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-teal-500/50 bg-teal-500/10 text-teal-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-tight text-slate-50">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-slate-400">
                        {c.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTORS — O&G + Renewables */}
      <section
        data-testid="sectors-section"
        className="relative border-t border-slate-800 bg-slate-950"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <SectionHeading
            overline="Sectors we serve"
            title="Traditional oil & gas. And the renewable energy transition."
            description="The same offshore discipline applied across both sides of the sector — from subsea IMR on producing fields to installation and commissioning support on offshore wind."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              {
                key: "oil-gas",
                tag: "Oil & Gas",
                title: "Subsea Oil & Gas Support",
                text: "Inspection, IMR, construction support and personnel provision on producing subsea fields and infrastructure.",
                image: IMG_CRANE,
              },
              {
                key: "renewables",
                tag: "Renewable Energy",
                title: "Offshore Wind & Renewables",
                text: "Pre-installation surveys, cable and foundation campaigns, and operations support for offshore wind assets.",
                image: IMG_WINDFARM,
              },
            ].map((s) => (
              <article
                key={s.key}
                data-testid={`sector-card-${s.key}`}
                className="group relative overflow-hidden rounded-sm border border-slate-800 bg-slate-900/40 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-teal-500/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="font-mono-tech absolute left-5 top-5 rounded-sm border border-slate-700/70 bg-slate-950/70 px-2 py-1 text-[10px] uppercase tracking-[0.24em] text-teal-400">
                    {s.tag}
                  </span>
                </div>
                <div className="p-8 lg:p-10">
                  <h3 className="font-display text-xl font-bold tracking-tight text-slate-50 lg:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
                    {s.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section
        data-testid="closing-cta"
        className="relative border-t border-slate-800 bg-slate-950"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="relative isolate overflow-hidden rounded-sm border border-slate-800">
            <img
              src={IMG_WINDFARM_ROW}
              alt="Offshore wind turbines"
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
            <div className="relative grid grid-cols-1 gap-10 p-10 sm:p-14 lg:grid-cols-12 lg:items-center lg:p-20">
              <div className="lg:col-span-8">
                <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-teal-400">
                  Ready when you are
                </p>
                <h2 className="font-display mt-4 text-3xl font-black tracking-tight text-slate-50 sm:text-4xl lg:text-[44px] lg:leading-[1.05]">
                  Have an upcoming offshore scope?
                  <br />
                  <span className="text-teal-300">Talk to us early.</span>
                </h2>
                <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-slate-300">
                  Whether it&apos;s a subsea campaign, an ROV mobilisation or urgent
                  personnel provision — we respond fast and plan properly.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
                <Link
                  to="/contact"
                  data-testid="closing-cta-quote"
                  className="inline-flex items-center gap-2 rounded-sm bg-teal-500 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-slate-950 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-teal-400"
                >
                  Request a Quote
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:Vinay@deltaenergysolutionsas.com"
                  data-testid="closing-cta-email"
                  className="font-mono-tech block max-w-full break-all text-[10.5px] uppercase tracking-[0.2em] text-slate-400 hover:text-teal-300 sm:text-[11.5px] sm:tracking-[0.24em] lg:text-right"
                >
                  Vinay@deltaenergysolutionsas.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
