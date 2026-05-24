"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { business } from "@/data/content";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Namaste! I'd like to enquire about legal documentation.\n\n` +
        `*Name:* ${form.name}\n` +
        `*Phone:* ${form.phone}\n` +
        `*Service:* ${form.service}\n` +
        `*Message:* ${form.message}`,
    );
    window.open(`https://wa.me/${business.whatsapp}?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contacts = [
    {
      icon: Phone,
      label: "Call us",
      value: business.phone,
      href: business.phoneHref,
      cta: "Tap to call",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: business.phone,
      href: business.whatsappHref,
      cta: "Chat now",
    },
    {
      icon: Mail,
      label: "Email",
      value: business.email,
      href: `mailto:${business.email}`,
      cta: "Send email",
    },
    {
      icon: MapPin,
      label: "Visit office",
      value: `${business.address.city}, ${business.address.state}`,
      href: business.social.google,
      cta: "Get directions",
    },
  ];

  return (
    <section
      id="contact"
      className="section-py bg-white"
      aria-labelledby="contact-title"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's get your document done — today"
          description="Talk to us through your preferred channel. We respond fast and never share your details."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left - contact details + map */}
          <div className="space-y-5 lg:col-span-2">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contacts.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-saffron-200 hover:shadow-premium"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-saffron-50 text-saffron-600 transition-colors group-hover:bg-saffron-500 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        {c.label}
                      </p>
                      <p className="truncate text-sm font-semibold text-navy-900">
                        {c.value}
                      </p>
                    </div>
                    <span className="hidden text-xs font-medium text-saffron-600 sm:block">
                      {c.cta}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-navy-100 bg-navy-50/40 p-5"
            >
              <div className="flex items-center gap-2 text-navy-900">
                <Clock className="h-4 w-4 text-saffron-500" />
                <span className="font-display text-sm font-bold">
                  Business Hours
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-700">{business.hours.weekdays}</p>
              <p className="text-sm text-slate-700">{business.hours.sunday}</p>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-slate-200 shadow-soft"
            >
              <iframe
                src={business.gmapEmbed}
                title={`${business.name} - Google Maps Location`}
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
              <div className="border-t border-slate-200 bg-white p-4 text-sm">
                <p className="font-semibold text-navy-900">{business.name}</p>
                <p className="mt-0.5 text-xs text-slate-600">
                  {business.address.line1}, {business.address.city} -{" "}
                  {business.address.pincode}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right - form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/60 p-6 shadow-soft sm:p-8"
            >
              <h3 className="font-display text-xl font-bold text-navy-900 sm:text-2xl">
                Send your enquiry
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Fill the form — we'll continue the chat on WhatsApp instantly.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-semibold text-navy-900"
                  >
                    Your Name <span className="text-saffron-500">*</span>
                  </label>
                  <input
                    required
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Rajesh Patel"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:border-saffron-400 focus:outline-none focus:ring-2 focus:ring-saffron-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-xs font-semibold text-navy-900"
                  >
                    Phone Number <span className="text-saffron-500">*</span>
                  </label>
                  <input
                    required
                    id="phone"
                    type="tel"
                    pattern="[0-9+\s\-]{10,15}"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 90336 36031"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:border-saffron-400 focus:outline-none focus:ring-2 focus:ring-saffron-200"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="service"
                  className="mb-1.5 block text-xs font-semibold text-navy-900"
                >
                  Service Required <span className="text-saffron-500">*</span>
                </label>
                <select
                  required
                  id="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 focus:border-saffron-400 focus:outline-none focus:ring-2 focus:ring-saffron-200"
                >
                  <option value="">Select a service</option>
                  <option>Affidavit</option>
                  <option>Rent Agreement</option>
                  <option>Notary Work</option>
                  <option>Stamp Paper</option>
                  <option>Name Change Affidavit</option>
                  <option>Passport Documentation</option>
                  <option>PAN / Aadhar Support</option>
                  <option>Legal Drafting</option>
                  <option>Government Form Filling</option>
                  <option>Gujarati/English Typing</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-semibold text-navy-900"
                >
                  Brief Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us a bit about what you need..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:border-saffron-400 focus:outline-none focus:ring-2 focus:ring-saffron-200"
                />
              </div>

              <button type="submit" className="btn-primary mt-6 w-full">
                {submitted ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Opened in WhatsApp
                  </>
                ) : (
                  <>
                    Send via WhatsApp
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="mt-3 text-center text-[11px] text-slate-500">
                By submitting, you agree to be contacted via WhatsApp / Phone.
                We don't share your details.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
