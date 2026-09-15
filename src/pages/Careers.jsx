import React, { useState } from "react";
import { ArrowUpRight, Users, ShieldCheck, Compass, CheckCircle2 } from "lucide-react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { toast, Toaster } from "sonner";
import SectionHeading from "../components/SectionHeading";

const IMG =
  "https://images.unsplash.com/photo-1751568258222-da70c98b39ac?fm=jpg&q=85&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0";

const ROLES = [
  "Project Manager",
  "Project Engineer",
  "Subsea Superintendent",
  "Diving Supervisor",
  "Commercial Diver",
  "ROV Supervisor",
  "ROV Pilot Technician",
  "Client Representative",
  "Marine Coordinator",
  "Other",
];

const VALUE_PROP = [
  { icon: Users, title: "Real projects", text: "Deployments on live subsea, oil & gas and renewable energy scopes." },
  { icon: Compass, title: "Global rotations", text: "Southeast Asia and international offshore assignments." },
  { icon: ShieldCheck, title: "Certified operators", text: "We support competency, certification tracking and offshore standards." },
];

export default function Careers() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    location: "",
    certifications: "",
    message: "",
  });

  const set = (k) => (e) => setForm({ ...form, [k]: e?.target?.value ?? e });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) {
      toast.error("Please provide your name, email and role of interest.");
      return;
    }
    const subject = `Career enquiry — ${form.role} — ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Role of interest: ${form.role}`,
      `Location / base: ${form.location}`,
      `Years of experience: ${form.experience}`,
      `Certifications:\n${form.certifications}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    const url = `mailto:Vinay@deltaenergysolutionsas.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    toast.success("Opening your email client…");
  };

  return (
    <div data-testid="page-careers" className="bg-slate-950 text-slate-100">
      <Toaster theme="dark" position="top-right" />

      {/* Header */}
      <section className="relative border-b border-slate-800">
        <div className="grid-lines absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-teal-400">
            Careers · Personnel
          </p>
          <h1
            data-testid="careers-title"
            className="font-display mt-5 max-w-4xl text-4xl font-black tracking-tight text-slate-50 sm:text-5xl lg:text-[68px] lg:leading-[1]"
          >
            Offshore work, done
            <br />
            <span className="text-teal-400">by offshore people.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-[17px] leading-relaxed text-slate-300">
            We&apos;re building a pool of vetted, offshore-ready professionals —
            project managers, engineers, divers, ROV operators and supervisors.
            If you have the certifications and the sea time, we&apos;d like to hear
            from you.
          </p>
        </div>
      </section>

      {/* Value prop */}
      <section className="relative border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VALUE_PROP.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="border border-slate-800 bg-slate-900/40 p-7"
                >
                  <Icon className="h-5 w-5 text-teal-400" />
                  <h3 className="font-display mt-5 text-lg font-semibold tracking-tight text-slate-50">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-400">
                    {v.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + image */}
      <section className="relative bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeading
                overline="Register your interest"
                title="Submit your details."
                description="Fill out the form and we'll come back with any relevant opportunities that match your profile and rotation availability."
              />
              <div className="mt-10 hidden overflow-hidden rounded-sm border border-slate-800 lg:block">
                <img
                  src={IMG}
                  alt="Commercial diver at work"
                  className="h-96 w-full object-cover"
                />
              </div>

              <ul className="mt-8 space-y-3 text-[14px] text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                  Applications reviewed on a rolling basis
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                  Certifications & offshore documents verified before deployment
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                  Feel free to include a link to your CV in the message
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7">
              <form
                data-testid="careers-form"
                onSubmit={submit}
                className="rounded-sm border border-slate-800 bg-slate-900/40 p-8 lg:p-10"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Full name *">
                    <Input
                      data-testid="careers-input-name"
                      value={form.name}
                      onChange={set("name")}
                      required
                      placeholder="Jane Doe"
                      className="border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-600 focus-visible:ring-teal-500"
                    />
                  </Field>
                  <Field label="Email *">
                    <Input
                      data-testid="careers-input-email"
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      required
                      placeholder="you@example.com"
                      className="border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-600 focus-visible:ring-teal-500"
                    />
                  </Field>
                  <Field label="Phone">
                    <Input
                      data-testid="careers-input-phone"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="+47 …"
                      className="border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-600 focus-visible:ring-teal-500"
                    />
                  </Field>
                  <Field label="Location / Base">
                    <Input
                      data-testid="careers-input-location"
                      value={form.location}
                      onChange={set("location")}
                      placeholder="City, Country"
                      className="border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-600 focus-visible:ring-teal-500"
                    />
                  </Field>
                  <Field label="Role of interest *">
                    <Select value={form.role} onValueChange={(v) => setForm({ ...form, role: v })}>
                      <SelectTrigger
                        data-testid="careers-select-role"
                        className="border-slate-700 bg-slate-950 text-slate-100 focus:ring-teal-500"
                      >
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent className="border-slate-700 bg-slate-950 text-slate-100">
                        {ROLES.map((r) => (
                          <SelectItem key={r} value={r} data-testid={`careers-role-${r.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                            {r}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Years of experience">
                    <Input
                      data-testid="careers-input-experience"
                      value={form.experience}
                      onChange={set("experience")}
                      placeholder="e.g. 8 yrs"
                      className="border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-600 focus-visible:ring-teal-500"
                    />
                  </Field>
                </div>

                <div className="mt-5">
                  <Field label="Certifications (IMCA, offshore medical, HUET, etc.)">
                    <Textarea
                      data-testid="careers-input-certifications"
                      value={form.certifications}
                      onChange={set("certifications")}
                      placeholder="List your key certifications…"
                      rows={3}
                      className="resize-none border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-600 focus-visible:ring-teal-500"
                    />
                  </Field>
                </div>

                <div className="mt-5">
                  <Field label="Message / CV link">
                    <Textarea
                      data-testid="careers-input-message"
                      value={form.message}
                      onChange={set("message")}
                      placeholder="A short note about your rotation availability, and a link to your CV if you have one online."
                      rows={5}
                      className="resize-none border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-600 focus-visible:ring-teal-500"
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  data-testid="careers-submit"
                  className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-teal-500 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-slate-950 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-teal-400"
                >
                  Submit application
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <p className="mt-4 text-[12px] text-slate-500">
                  Submitting opens your email client with your details
                  pre-filled to <span className="text-slate-300">Vinay@deltaenergysolutionsas.com</span>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const Field = ({ label, children }) => (
  <div>
    <Label className="font-mono-tech mb-2 block text-[10.5px] uppercase tracking-[0.24em] text-slate-400">
      {label}
    </Label>
    {children}
  </div>
);
