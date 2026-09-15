import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Cpu, Anchor, Waves, Weight, Wind, Wrench } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const IMG_ROV =
  "https://images.unsplash.com/photo-1579619674707-04c497948292?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwUk9WJTIwc3VibWFyaW5lfGVufDB8fHx8MTc4MzY2MzY2MXww&ixlib=rb-4.1.0&q=85";
const IMG_CRANE =
  "https://images.unsplash.com/photo-1690508313456-bf8c851e8319?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxvZmZzaG9yZSUyMG9pbCUyMHJpZyUyMHZlc3NlbHxlbnwwfHx8fDE3ODM2NjM2NjF8MA&ixlib=rb-4.1.0&q=85";
const IMG_DIVER =
  "https://images.unsplash.com/photo-1751568258222-da70c98b39ac?fm=jpg&q=85&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0";
const IMG_WINDFARM =
  "https://images.unsplash.com/photo-1752947600843-18dea1a1750e?fm=jpg&q=85&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0";
const IMG_HERO =
  "https://images.unsplash.com/photo-1578356058390-f58c575337a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxvZmZzaG9yZSUyMG9pbCUyMHJpZyUyMHZlc3NlbHxlbnwwfHx8fDE3ODM2NjM2NjF8MA&ixlib=rb-4.1.0&q=85";

// Bento items: mix of image cards and spec cards
const FLEET = [
  {
    key: "rov-observation",
    span: "lg:col-span-7 lg:row-span-2",
    kind: "image",
    tag: "ROV / Observation-class",
    title: "Observation-class ROV Systems",
    image: IMG_ROV,
    specs: [
      { k: "Depth rating", v: "Up to 1000 m" },
      { k: "Power", v: "3 kW electric" },
      { k: "Payload", v: "Cameras · Sonar · Manipulator" },
    ],
    description:
      "Compact, containerised observation-class ROV spreads for inspection, survey support and light intervention.",
  },
  {
    key: "diving-system",
    span: "lg:col-span-5",
    kind: "spec",
    icon: Anchor,
    tag: "Air Diving System",
    title: "Surface-supplied Air Diving Spreads",
    specs: [
      { k: "Configuration", v: "2 diver + standby" },
      { k: "Certification", v: "Offshore-certified" },
      { k: "Options", v: "Wet bell available" },
    ],
    description:
      "Turnkey air diving spreads with control cabin, gas panel, comms and hot water — mobilised as a full package.",
  },
  {
    key: "winch",
    span: "lg:col-span-5",
    kind: "spec",
    icon: Wrench,
    tag: "Deck Equipment",
    title: "Winches & Umbilical Handling",
    specs: [
      { k: "Line pull", v: "Configurable" },
      { k: "Drives", v: "Electric / hydraulic" },
      { k: "Control", v: "Local & remote" },
    ],
    description:
      "Deck winches, LARS and umbilical handling systems suitable for ROV, diving and IMR campaigns.",
  },
  {
    key: "load-cells",
    span: "lg:col-span-7",
    kind: "image",
    tag: "Load Monitoring",
    title: "Load Cells & Rigging",
    image: IMG_CRANE,
    specs: [
      { k: "Capacity", v: "Up to 500 t" },
      { k: "Output", v: "Wired / wireless" },
      { k: "Cert.", v: "DNV / offshore" },
    ],
    description:
      "Offshore-certified load cells, shackles and rigging for lifting, installation and heavy-lift verification.",
  },
  {
    key: "rov-work",
    span: "lg:col-span-6",
    kind: "image",
    tag: "ROV / Work-class",
    title: "Light Work-class ROVs",
    image: IMG_HERO,
    specs: [
      { k: "Depth", v: "Up to 2000 m" },
      { k: "Tooling", v: "5-function manipulator" },
      { k: "TMS", v: "Optional cage" },
    ],
    description:
      "Light work-class ROVs configured for IMR, subsea intervention and construction support scopes.",
  },
  {
    key: "diver",
    span: "lg:col-span-6",
    kind: "image",
    tag: "Personnel-ready",
    title: "Certified Diver / ROV Crews",
    image: IMG_DIVER,
    specs: [
      { k: "Availability", v: "Short-notice" },
      { k: "Certifications", v: "IMCA / class" },
      { k: "Rotation", v: "Managed offshore" },
    ],
    description:
      "Equipment is only half the job — we mobilise vetted diving and ROV crews to run every spread we rent.",
  },
];

export default function Equipment() {
  return (
    <div data-testid="page-equipment" className="bg-slate-950 text-slate-100">
      {/* Header */}
      <section className="relative border-b border-slate-800">
        <div className="grid-lines absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-teal-400">
            Equipment & Fleet
          </p>
          <h1
            data-testid="equipment-title"
            className="font-display mt-5 max-w-4xl text-4xl font-black tracking-tight text-slate-50 sm:text-5xl lg:text-[68px] lg:leading-[1]"
          >
            A fleet built for
            <br />
            <span className="text-teal-400">offshore reality.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-[17px] leading-relaxed text-slate-300">
            ROVs, diving systems, winches and load-monitoring equipment —
            maintained, certified and ready to mobilise. Detailed technical
            specifications available on request for each asset.
          </p>
        </div>
      </section>

      {/* Bento fleet grid */}
      <section
        data-testid="fleet-grid-section"
        className="relative border-b border-slate-800 bg-slate-950"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <SectionHeading
            overline="Rental assets"
            title="Certified, documented and mobilisation-ready."
            description="Each asset is maintained under a scheduled programme, tested before mobilisation, and delivered with the offshore documentation your project team expects."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 lg:auto-rows-[240px] lg:grid-cols-12">
            {FLEET.map((f) => {
              const Icon = f.icon;
              return (
                <article
                  key={f.key}
                  data-testid={`fleet-card-${f.key}`}
                  className={`group relative flex flex-col overflow-hidden rounded-sm border border-slate-800 bg-slate-900/40 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-teal-500/60 hover:bg-slate-900/70 ${f.span}`}
                >
                  {f.kind === "image" && (
                    <div className="relative flex-1 overflow-hidden">
                      <img
                        src={f.image}
                        alt={f.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                      <span className="font-mono-tech absolute left-5 top-5 rounded-sm border border-slate-700/70 bg-slate-950/70 px-2 py-1 text-[10px] uppercase tracking-[0.24em] text-teal-400">
                        {f.tag}
                      </span>
                    </div>
                  )}

                  {f.kind === "spec" && (
                    <div className="flex items-start justify-between p-7">
                      <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-teal-500/50 bg-teal-500/10 text-teal-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono-tech rounded-sm border border-slate-700/70 bg-slate-950/70 px-2 py-1 text-[10px] uppercase tracking-[0.24em] text-teal-400">
                        {f.tag}
                      </span>
                    </div>
                  )}

                  <div className="p-7 pt-4">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-slate-50">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-slate-400">
                      {f.description}
                    </p>

                    <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-800 pt-4">
                      {f.specs.map((s) => (
                        <div key={s.k}>
                          <dt className="font-mono-tech text-[9.5px] uppercase tracking-[0.18em] text-slate-500">
                            {s.k}
                          </dt>
                          <dd className="mt-1 text-[12.5px] font-medium text-slate-200">
                            {s.v}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories quick refs */}
      <section className="relative border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <SectionHeading
            overline="Categories"
            title="Everything you need for a subsea spread."
          />

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { icon: Cpu, label: "ROV Systems" },
              { icon: Waves, label: "Diving Spreads" },
              { icon: Wrench, label: "Winches / LARS" },
              { icon: Weight, label: "Load Cells" },
              { icon: Wind, label: "Compressors" },
              { icon: Anchor, label: "Rigging" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  className="flex flex-col items-start gap-4 border border-slate-800 bg-slate-900/30 p-5 transition-[border-color] duration-300 hover:border-teal-500/50"
                >
                  <Icon className="h-5 w-5 text-teal-400" />
                  <p className="text-[13px] font-semibold text-slate-100">
                    {c.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col items-start justify-between gap-8 border border-slate-800 bg-slate-900/40 p-10 lg:flex-row lg:items-center lg:p-14">
            <div className="max-w-xl">
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-teal-400">
                Full specifications
              </p>
              <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
                Need detailed specs, cert. docs or availability?
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-400">
                Send us your scope and we&apos;ll come back with the right asset,
                documentation package and mobilisation plan.
              </p>
            </div>
            <Link
              to="/contact"
              data-testid="equipment-cta-quote"
              className="group inline-flex items-center gap-2 rounded-sm bg-teal-500 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-slate-950 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-teal-400"
            >
              Request specifications
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
