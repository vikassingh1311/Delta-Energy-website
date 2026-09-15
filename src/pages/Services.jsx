import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Anchor, Wrench, Users, Check } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const IMG_PM =
  "https://images.unsplash.com/photo-1705641708805-c2318921a228?fm=jpg&q=85&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0";
const IMG_ROV =
  "https://images.unsplash.com/photo-1579619674707-04c497948292?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwUk9WJTIwc3VibWFyaW5lfGVufDB8fHx8MTc4MzY2MzY2MXww&ixlib=rb-4.1.0&q=85";
const IMG_DIVER =
  "https://images.unsplash.com/photo-1751568258222-da70c98b39ac?fm=jpg&q=85&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0";

const SERVICES = [
  {
    id: "project-management",
    tag: "Service 01",
    icon: Anchor,
    title: "Subsea & Renewable Energy Project Management",
    intro:
      "End-to-end management of subsea and offshore renewable energy campaigns. We take ownership of scope, engineering interfaces, vendor coordination and offshore execution — freeing operators and EPCs to focus on their core work.",
    image: IMG_PM,
    bullets: [
      "Campaign planning, scheduling and risk management",
      "Subsea inspection, IMR and construction support scopes",
      "Renewable energy support: offshore wind pre-installation, cable and foundation campaigns",
      "Vendor selection, technical evaluation and mobilisation coordination",
      "Client representation, offshore management and daily reporting",
      "Documentation, procedures and closeout packages",
    ],
  },
  {
    id: "equipment-rental",
    tag: "Service 02",
    icon: Wrench,
    title: "Diving & ROV Equipment Rental",
    intro:
      "A well-maintained fleet of subsea and diving equipment, offered on flexible rental terms. Every asset is certified, tested and mobilised with the technical documentation, spares and specialist support required for offshore deployment.",
    image: IMG_ROV,
    bullets: [
      "ROV systems — observation-class and light work-class",
      "Air diving spreads, surface-supplied systems and control units",
      "Winches, umbilical handling systems and load-monitoring solutions",
      "Load cells, shackles and rigging (offshore-certified)",
      "Third-party inspection, calibration and DNV / class certification support",
      "Mobilisation coordination, transport and offshore commissioning",
    ],
  },
  {
    id: "personnel",
    tag: "Service 03",
    icon: Users,
    title: "Personnel Provision",
    intro:
      "Vetted, offshore-ready people — deployed to your project on short notice or long-term contract. Every candidate is screened for competency, certification and offshore track record before being put forward.",
    image: IMG_DIVER,
    bullets: [
      "Project Managers, Project Engineers and Superintendents",
      "Subsea, Diving and ROV Supervisors",
      "Commercial Divers (air / SSDE / bell where applicable)",
      "ROV Pilot Technicians and Supervisors",
      "Client Representatives and Marine Coordinators",
      "Rapid mobilisation, contract management and offshore rotation support",
    ],
  },
];

export default function Services() {
  return (
    <div data-testid="page-services" className="bg-slate-950 text-slate-100">
      {/* Header */}
      <section className="relative border-b border-slate-800">
        <div className="grid-lines absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-teal-400">
            Services
          </p>
          <h1
            data-testid="services-title"
            className="font-display mt-5 max-w-4xl text-4xl font-black tracking-tight text-slate-50 sm:text-5xl lg:text-[68px] lg:leading-[1]"
          >
            Subsea, offshore
            <br />
            <span className="text-teal-400">and renewable capability.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-[17px] leading-relaxed text-slate-300">
            Three focused service lines that work together — or independently
            — to support offshore oil, gas and renewable energy operations
            across their full lifecycle.
          </p>

          <nav className="mt-12 flex flex-wrap gap-3">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                data-testid={`services-jump-${s.id}`}
                className="group inline-flex items-center gap-2 rounded-sm border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-200 transition-[border-color,color] duration-200 hover:border-teal-500/70 hover:text-teal-300"
              >
                {s.tag}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Services */}
      {SERVICES.map((s, i) => {
        const Icon = s.icon;
        const reverse = i % 2 === 1;
        return (
          <section
            key={s.id}
            id={s.id}
            data-testid={`service-block-${s.id}`}
            className="relative scroll-mt-24 border-b border-slate-800 bg-slate-950"
          >
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
              <div
                className={`grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20 ${
                  reverse ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-6">
                  <div className="relative overflow-hidden rounded-sm border border-slate-800">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-[420px] w-full object-cover lg:h-[560px]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6">
                      <p className="font-mono-tech text-[10.5px] uppercase tracking-[0.28em] text-teal-400">
                        {s.tag}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-teal-500/50 bg-teal-500/10 text-teal-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-slate-500">
                      {s.tag}
                    </span>
                  </div>
                  <h2 className="font-display mt-6 text-3xl font-black tracking-tight text-slate-50 sm:text-4xl lg:text-[44px] lg:leading-[1.05]">
                    {s.title}
                  </h2>
                  <p className="mt-6 text-[16px] leading-relaxed text-slate-300">
                    {s.intro}
                  </p>

                  <ul className="mt-8 grid grid-cols-1 gap-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 border-l border-teal-500/50 bg-slate-900/40 px-4 py-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                        <span className="text-[14.5px] text-slate-200">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <Link
                      to="/contact"
                      data-testid={`service-cta-${s.id}`}
                      className="group inline-flex items-center gap-2 rounded-sm bg-teal-500 px-6 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.18em] text-slate-950 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-teal-400"
                    >
                      Discuss this scope
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
