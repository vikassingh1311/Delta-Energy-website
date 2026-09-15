import React, { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin, Hash, Clock } from "lucide-react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { toast, Toaster } from "sonner";
import SectionHeading from "../components/SectionHeading";

const DETAILS = [
  { icon: Mail, label: "Email", value: "Vinay@deltaenergysolutionsas.com", href: "mailto:Vinay@deltaenergysolutionsas.com" },
  { icon: Phone, label: "Phone", value: "+47 480 56 113", href: "tel:+4748056113" },
  { icon: MapPin, label: "Address", value: "Myratoppen 26, 1613 Fredrikstad, Norway" },
  { icon: Hash, label: "Org. number", value: "928038378" },
  { icon: Clock, label: "Response time", value: "Within 1 business day" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and a message.");
      return;
    }
    const subject = `Website enquiry — ${form.name}${form.company ? ` (${form.company})` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company}`,
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
    <div data-testid="page-contact" className="bg-slate-950 text-slate-100">
      <Toaster theme="dark" position="top-right" />

      {/* Header */}
      <section className="relative border-b border-slate-800">
        <div className="grid-lines absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-teal-400">
            Contact
          </p>
          <h1
            data-testid="contact-title"
            className="font-display mt-5 max-w-4xl text-4xl font-black tracking-tight text-slate-50 sm:text-5xl lg:text-[68px] lg:leading-[1]"
          >
            Let&apos;s talk about your
            <br />
            <span className="text-teal-400">next offshore scope.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-[17px] leading-relaxed text-slate-300">
            Send us the outline of your scope, timelines and location.
            We&apos;ll come back with an approach, the right assets and — where
            useful — the people to make it happen.
          </p>
        </div>
      </section>

      {/* Form + details */}
      <section className="relative bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-7">
              <form
                data-testid="contact-form"
                onSubmit={submit}
                className="rounded-sm border border-slate-800 bg-slate-900/40 p-8 lg:p-10"
              >
                <SectionHeading overline="Send an enquiry" title="Contact form" />

                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Name *">
                    <Input
                      data-testid="contact-input-name"
                      value={form.name}
                      onChange={set("name")}
                      required
                      placeholder="Your name"
                      className="border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-600 focus-visible:ring-teal-500"
                    />
                  </Field>
                  <Field label="Email *">
                    <Input
                      data-testid="contact-input-email"
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      required
                      placeholder="you@company.com"
                      className="border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-600 focus-visible:ring-teal-500"
                    />
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Company">
                      <Input
                        data-testid="contact-input-company"
                        value={form.company}
                        onChange={set("company")}
                        placeholder="Company name"
                        className="border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-600 focus-visible:ring-teal-500"
                      />
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <Field label="Message *">
                      <Textarea
                        data-testid="contact-input-message"
                        value={form.message}
                        onChange={set("message")}
                        required
                        placeholder="Tell us about the scope — vessel, region, timeline, and any specific equipment or personnel needs."
                        rows={6}
                        className="resize-none border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-600 focus-visible:ring-teal-500"
                      />
                    </Field>
                  </div>
                </div>

                <button
                  type="submit"
                  data-testid="contact-submit"
                  className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-teal-500 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-slate-950 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-teal-400"
                >
                  Send message
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <p className="mt-4 text-[12px] text-slate-500">
                  Submitting opens your email client pre-filled with your
                  message to Vinay@deltaenergysolutionsas.com.
                </p>
              </form>
            </div>

            {/* Details */}
            <aside className="lg:col-span-5">
              <SectionHeading overline="Direct contact" title="Company details." />
              <ul className="mt-10 divide-y divide-slate-800 border-y border-slate-800">
                {DETAILS.map((d) => {
                  const Icon = d.icon;
                  return (
                    <li key={d.label} className="grid grid-cols-12 items-start gap-4 py-5">
                      <div className="col-span-5 flex items-center gap-3">
                        <Icon className="h-4 w-4 text-teal-400" />
                        <span className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-slate-500">
                          {d.label}
                        </span>
                      </div>
                      <div className="col-span-7">
                        {d.href ? (
                          <a
                            href={d.href}
                            data-testid={`contact-detail-${d.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                            className="text-[14.5px] text-slate-100 hover:text-teal-300"
                          >
                            {d.value}
                          </a>
                        ) : (
                          <span
                            data-testid={`contact-detail-${d.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                            className="text-[14.5px] text-slate-100"
                          >
                            {d.value}
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 border border-slate-800 bg-slate-900/40 p-7">
                <p className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-teal-400">
                  Operating region
                </p>
                <p className="font-display mt-3 text-lg font-semibold text-slate-100">
                  Available Worldwide
                  <br />
                  Specialist in Southeast Asia
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-slate-400">
                  Available for mobilisations across Southeast Asia and
                  international offshore markets.
                </p>
              </div>
            </aside>
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
