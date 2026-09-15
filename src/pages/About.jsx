import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Mail, Phone, Hash, Building2, ShieldCheck, Handshake, Compass, Briefcase } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const IMG_TEAM =
  "https://images.unsplash.com/photo-1752947600843-18dea1a1750e?fm=jpg&q=85&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0";

const PROJECTS = [
  {
    year: "2026",
    name: "PLSE and DSE for fibre optic cables",
    location: "Various islands of Taiwan",
    client: "DFO / CHT",
    description:
      "Pre-lay survey and detailed subsea engineering support for inter-island fibre optic cable systems across Taiwan's outlying islands.",
  },
  {
    year: "2026",
    name: "Fengmiao Project",
    location: "Taiwan",
    client: "JDN",
    description:
      "Nearshore diving support for HDD works and offshore wind export-cable pull-in operations.",
  },
  {
    year: "2025",
    name: "TPC2 Project",
    location: "Taiwan",
    client: "SFE / Foxwell",
    description:
      "Cable trenching, pull-in assistance, survey support and shore-end / beach works for offshore wind cable installation.",
  },
  {
    year: "2024 – 2025",
    name: "Hailong Project",
    location: "Taiwan",
    client: "Seaway7",
    description:
      "Trenching, pull-in assistance and survey support for offshore wind cable installation across the Hailong array.",
  },
  {
    year: "2022 – 2023",
    name: "Zhong Neng Project",
    location: "Taiwan",
    client: "Seaway7",
    description:
      "Offshore trenching operations, pull-in assistance and continuous survey support for cable installation campaigns.",
  },
  {
    year: "2022",
    name: "Greater Changhua 1 Project",
    location: "Taiwan",
    client: "Van Oord",
    description:
      "Pull-in assistance, cable laying support and survey support on the Greater Changhua 1 offshore wind field.",
  },
  {
    year: "2021 – 2022",
    name: "CFXD Project",
    location: "Taiwan",
    client: "Seaway7",
    description:
      "Trenching, pull-in assistance, survey support and monopile repair diving on offshore wind foundations.",
  },
  {
    year: "2020 – 2025",
    name: "Yunlin Project",
    location: "Taiwan",
    client: "Seaway7 / Skyborne",
    description:
      "Multi-year support: trenching, pull-in assistance, IAG cable trenching and survey support on the Yunlin offshore wind farm.",
  },
  {
    year: "2019",
    name: "TUBU (OML52) Field Development",
    location: "Nigeria",
    client: "West African Ventures",
    description:
      "Trenching for power cables and fibre optic cables as part of TUBU field development within OML52.",
  },
  {
    year: "2018",
    name: "Atoll Repair Project",
    location: "Egypt",
    client: "Subsea7",
    description:
      "Umbilical trenching for the Atoll field repair campaign, offshore Egypt.",
  },
  {
    year: "2018",
    name: "Umbilical Trenching Project",
    location: "Egypt",
    client: "JDN / Subsea7 / BP",
    description:
      "Umbilical trenching operations supporting a major offshore development for BP.",
  },
  {
    year: "2017",
    name: "Pipeline Trenching Project",
    location: "India",
    client: "McDermott / ONGC",
    description:
      "Pipeline trenching operations for ONGC's offshore infrastructure, delivered with McDermott.",
  },
  {
    year: "2017",
    name: "Thorco Cloud Survey & Oil Removal",
    location: "Singapore / Indonesia",
    client: "Bourbon Offshore",
    description:
      "Wreck survey and oil removal operation on the MV Thorco Cloud in the Singapore / Indonesia region.",
  },
  {
    year: "2016",
    name: "Banang Riser Replacement",
    location: "Malaysia",
    client: "Coastal Energy",
    description:
      "Offshore riser replacement campaign on the Banang field for Coastal Energy.",
  },
  {
    year: "2015 – 2016",
    name: "DLV2000 Stinger Instrumentation",
    location: "Singapore / Batam",
    client: "McDermott",
    description:
      "Instrumentation package for the DLV2000 stinger, delivered in Singapore / Batam for McDermott.",
  },
  {
    year: "2014 – 2015",
    name: "Cable Lay Project",
    location: "Nigeria",
    client: "OPI / Shell",
    description:
      "Diving, vessel and engineering support on an offshore cable lay campaign for Shell.",
  },
  {
    year: "2013 – 2014",
    name: "Banyu Urip Pipelay Project",
    location: "Indonesia",
    client: "PT. Hafar / ExxonMobil",
    description:
      "ROV and diving support on ExxonMobil's Banyu Urip pipelay project, executed with PT. Hafar.",
  },
  {
    year: "2013",
    name: "Hose Recertification (OCIMF)",
    location: "Malaysia",
    client: "EMAS",
    description:
      "OCIMF hose recertification programme delivered for EMAS in Malaysia.",
  },
  {
    year: "2012",
    name: "Concrete Mattress Installation",
    location: "Malaysia",
    client: "APEXGE / WorleyParsons",
    description:
      "Vessel and diving support for a concrete mattress installation campaign.",
  },
  {
    year: "2011",
    name: "ROV Pipe Lay & Construction Project",
    location: "Indonesia",
    client: "PT. Timas Suplindo",
    description:
      "ROV support for pipe lay and offshore construction operations in Indonesian waters.",
  },
  {
    year: "2010 – 2011",
    name: "Drill Support Project with ROV",
    location: "Venezuela",
    client: "PDVSA",
    description:
      "ROV drill support operations for PDVSA — one of the earliest project engagements in the portfolio.",
  },
];

const COMMITMENTS = [
  { icon: ShieldCheck, title: "Safety-first operations", text: "Aligned with industry standards on every mobilisation, dive, ROV run and offshore handover." },
  { icon: Compass, title: "Flexible solutions", text: "Project-specific personnel and equipment packages, sized to the scope and schedule." },
  { icon: Handshake, title: "Dual-sector support", text: "Delivering across both oil & gas and renewable energy sectors as the market evolves." },
  { icon: Building2, title: "Hands-on management", text: "Responsive, involved project management — from planning through completion." },
];

const DETAILS = [
  { icon: Hash, label: "Organisation number", value: "928038378" },
  { icon: MapPin, label: "Registered address", value: "Myratoppen 26, 1613 Fredrikstad, Norway" },
  { icon: Phone, label: "Phone", value: "+47 480 56 113", href: "tel:+4748056113" },
  { icon: Mail, label: "Email", value: "Vinay@deltaenergysolutionsas.com", href: "mailto:Vinay@deltaenergysolutionsas.com" },
];

export default function About() {
  return (
    <div data-testid="page-about" className="bg-slate-950 text-slate-100">
      {/* Header band */}
      <section className="relative border-b border-slate-800 bg-slate-950">
        <div className="grid-lines absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-teal-400">
            About the company
          </p>
          <h1
            data-testid="about-title"
            className="font-display mt-5 max-w-4xl text-4xl font-black tracking-tight text-slate-50 sm:text-5xl lg:text-[68px] lg:leading-[1]"
          >
            Reliable support for
            <br />
            <span className="text-teal-400">subsea and renewable energy.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-[17px] leading-relaxed text-slate-300">
            Delta Energy Solutions AS provides reliable, high-quality support
            to the subsea oil &amp; gas and renewable energy industries. We
            understand that offshore projects demand precision, safety, and the
            right resources at the right time — and we exist to make sure our
            clients have exactly that.
          </p>
        </div>
      </section>

      {/* Story + image */}
      <section className="relative border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <SectionHeading
                overline="Who we are"
                title="Full-lifecycle offshore support — people, equipment, oversight."
              />
              <div className="mt-8 space-y-6 text-[15.5px] leading-relaxed text-slate-300">
                <p>
                  We work across the full lifecycle of subsea and offshore
                  operations, offering project management expertise alongside
                  practical, on-the-ground solutions.
                </p>
                <p>
                  We provide air diving systems and ROVs with tooling for
                  rentals — maintained, certified and ready to mobilise
                  against demanding offshore scopes.
                </p>
                <p>
                  We also have a pool of skilled personnel including project
                  managers, engineers, divers and ROV operators, each with a
                  number of years of experience in the industry. Whether
                  supporting a traditional oil &amp; gas installation or a
                  renewable energy development, our approach stays the same —
                  dependable delivery, technical competence, and close
                  attention to the specific needs of each project.
                </p>
                <p>
                  As the offshore energy sector continues to evolve, with
                  growing demand across both conventional and renewable
                  projects, Delta Energy Solutions AS is positioned to support
                  operators navigating that transition. We bring together
                  experienced people, well-maintained equipment, and
                  coordinated project oversight, so our clients can focus on
                  what matters most: getting the job done safely and on
                  schedule.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  to="/services"
                  data-testid="about-cta-services"
                  className="group inline-flex items-center gap-2 rounded-sm border border-teal-500/70 bg-teal-500/10 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-teal-300 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-teal-500/20"
                >
                  View our services
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-sm border border-slate-800">
                <img
                  src={IMG_TEAM}
                  alt="Offshore wind turbines"
                  className="h-[480px] w-full object-cover lg:h-[560px]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-8">
                  <p className="font-mono-tech text-[10.5px] uppercase tracking-[0.28em] text-teal-400">
                    Renewable energy support
                  </p>
                  <p className="font-display mt-2 text-lg font-semibold text-slate-100">
                    Offshore wind — Southeast Asia operations
                  </p>
                </div>
              </div>
              <p className="font-mono-tech mt-6 text-[11px] uppercase tracking-[0.28em] text-slate-500">
                Specialist in Southeast Asia · Available Worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Timeline */}
      <section
        data-testid="work-experience-section"
        className="relative border-b border-slate-800 bg-slate-950"
      >
        <div className="grid-lines absolute inset-0 opacity-[0.06]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-teal-400">
                  Work experience
                </p>
                <h2 className="font-display mt-4 text-3xl font-black tracking-tight text-slate-50 sm:text-4xl lg:text-[44px] lg:leading-[1.05]">
                  20 years of offshore delivery.
                </h2>
                <p className="mt-6 text-[15.5px] leading-relaxed text-slate-300">
                  With over 20 years in the subsea and offshore industry, our
                  expertise spans ROV operations, commercial diving, nearshore
                  and offshore trenching, pipelay, cable lay, and survey
                  support. We have delivered projects across Venezuela,
                  Indonesia, Malaysia, Singapore, Nigeria, India, Egypt, and
                  Taiwan — working with leading operators and contractors
                  including ExxonMobil, Shell, BP, McDermott, Subsea7, Seaway7,
                  and Van Oord.
                </p>

                <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-800 pt-8">
                  <div>
                    <dt className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      Projects
                    </dt>
                    <dd className="font-display mt-2 text-2xl font-bold text-teal-300">
                      {PROJECTS.length}+
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      Countries
                    </dt>
                    <dd className="font-display mt-2 text-2xl font-bold text-teal-300">
                      8
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      Since
                    </dt>
                    <dd className="font-display mt-2 text-2xl font-bold text-teal-300">
                      2006
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ol
                data-testid="work-experience-timeline"
                className="relative"
              >
                {/* Rail */}
                <span
                  aria-hidden
                  className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-teal-500/40 via-slate-700/60 to-slate-800"
                />
                {PROJECTS.map((p, i) => (
                  <li
                    key={`${p.year}-${p.name}`}
                    data-testid={`timeline-entry-${i}`}
                    className="relative pl-10 pb-10 last:pb-0"
                  >
                    {/* Dot */}
                    <span
                      aria-hidden
                      className="absolute left-[4px] top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-teal-500/70 bg-slate-950"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                    </span>

                    <div className="group rounded-sm border border-slate-800 bg-slate-900/40 p-5 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-teal-500/50 hover:bg-slate-900/70 sm:p-6">
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <span className="font-mono-tech text-[10.5px] uppercase tracking-[0.22em] text-teal-400">
                          {p.year}
                        </span>
                        <span className="font-mono-tech inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.18em] text-slate-500">
                          <MapPin className="h-3 w-3" />
                          {p.location}
                        </span>
                      </div>

                      <h3 className="font-display mt-3 text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
                        {p.name}
                      </h3>

                      <p className="mt-2 flex items-center gap-2 text-[12.5px] text-slate-400">
                        <Briefcase className="h-3.5 w-3.5 text-teal-400/80" />
                        <span className="font-medium text-slate-200">Client:</span>
                        <span>{p.client}</span>
                      </p>

                      <p className="mt-3 text-[14px] leading-relaxed text-slate-400">
                        {p.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="relative border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <SectionHeading
            overline="Our commitment"
            title="What every client can count on."
            description="These are the standards we work to on every campaign — from the moment a scope lands on our desk to the closeout report."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {COMMITMENTS.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="group border border-slate-800 bg-slate-900/30 p-7 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-teal-500/50 hover:bg-slate-900/60"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-teal-500/50 bg-teal-500/10 text-teal-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display mt-6 text-lg font-semibold tracking-tight text-slate-50">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-slate-400">
                    {c.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company details */}
      <section className="relative bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                overline="Company details"
                title="Delta Energy Solutions AS"
                description="Registered in Norway. Specialist in Southeast Asia — available for engagements across Southeast Asia and international offshore markets."
              />
            </div>

            <div className="lg:col-span-7">
              <ul className="divide-y divide-slate-800 border-y border-slate-800">
                {DETAILS.map((d) => {
                  const Icon = d.icon;
                  return (
                    <li key={d.label} className="grid grid-cols-1 items-start gap-4 py-6 sm:grid-cols-12 sm:items-center">
                      <div className="flex items-center gap-3 sm:col-span-5">
                        <Icon className="h-4 w-4 text-teal-400" />
                        <span className="font-mono-tech text-[11px] uppercase tracking-[0.24em] text-slate-500">
                          {d.label}
                        </span>
                      </div>
                      <div className="sm:col-span-7">
                        {d.href ? (
                          <a
                            href={d.href}
                            className="text-[15.5px] text-slate-100 hover:text-teal-300"
                          >
                            {d.value}
                          </a>
                        ) : (
                          <span className="text-[15.5px] text-slate-100">
                            {d.value}
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
