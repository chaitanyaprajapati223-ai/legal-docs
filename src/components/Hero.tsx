"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Award,
  Users,
  Zap,
  Star,
  CheckCircle2,
  FileSignature,
} from "lucide-react";
import { business, stats } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-white pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36"
      aria-labelledby="hero-title"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 bg-hero-pattern" />
      <div className="absolute inset-0 -z-10 bg-grid mask-radial-fade opacity-60" />
      <div className="absolute right-[-10%] top-[10%] -z-10 h-72 w-72 rounded-full bg-saffron-200/30 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute bottom-[-10%] left-[-10%] -z-10 h-72 w-72 rounded-full bg-navy-200/40 blur-3xl sm:h-96 sm:w-96" />

      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left column */}
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="chip mb-5 border-saffron-200 bg-saffron-50 text-saffron-700"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-saffron-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-saffron-500" />
              </span>
              Now serving Gandhinagar & Ahmedabad
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              id="hero-title"
              className="heading-display text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl"
            >
              Affidavit, Notary &{" "}
              <span className="text-gradient-saffron">Legal Documents</span> —
              done in hours, not weeks.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-5 max-w-xl text-balance text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Gandhinagar's most trusted legal documentation centre since 2008.
              Same-day affidavits, rent agreements, notary work, stamp papers &
              all government documentation — under one roof.
            </motion.p>

            {/* Trust checklist */}
            <motion.ul
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-6 grid max-w-xl gap-2.5 text-sm sm:grid-cols-2"
            >
              {[
                "Govt. authorized notary",
                "Same-day delivery",
                "Transparent pricing — no hidden fee",
                "Bilingual: Gujarati / English / Hindi",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-saffron-500" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
                aria-label="Chat on WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2c-5.43 0-9.85 4.42-9.85 9.85 0 1.74.46 3.4 1.32 4.89L2.05 22l5.4-1.41a9.84 9.84 0 0 0 4.58 1.16h.01c5.43 0 9.86-4.42 9.86-9.85 0-2.63-1.03-5.1-2.85-6.99M12.04 20.13h-.01a8.17 8.17 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.18 8.18 0 0 1-1.26-4.37c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4a8.13 8.13 0 0 1 2.4 5.8c0 4.51-3.68 8.21-8.2 8.21" />
                </svg>
                WhatsApp Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={business.phoneHref}
                className="btn-secondary group"
                aria-label="Call now"
              >
                <Phone className="h-4 w-4" />
                Call {business.phone}
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-6 text-xs sm:text-sm"
            >
              {[
                { icon: ShieldCheck, label: "Govt. Authorized" },
                { icon: Award, label: "Since 2008" },
                { icon: Users, label: "5000+ Clients" },
                { icon: Zap, label: "Same-Day Service" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 text-slate-600"
                >
                  <Icon className="h-4 w-4 text-saffron-500" />
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Floating rating card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-3 -top-4 z-20 rounded-2xl border border-slate-200 bg-white p-3 shadow-premium sm:-left-6 sm:p-4"
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-saffron-500 text-saffron-500"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-navy-900">4.9</span>
                </div>
                <p className="mt-0.5 text-[11px] font-medium text-slate-500">
                  287+ Google Reviews
                </p>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-2 top-1/3 z-20 hidden rounded-2xl border border-saffron-200 bg-saffron-50 p-3 shadow-premium sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-saffron-500 text-white">
                    <FileSignature className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-saffron-700">
                      Ready in
                    </p>
                    <p className="text-sm font-bold text-saffron-900">2 Hours</p>
                  </div>
                </div>
              </motion.div>

              {/* Main visual card */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 p-6 shadow-premium sm:p-8">
                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-saffron-500/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-saffron-400/10 blur-2xl" />

                <div className="relative">
                  <span className="chip border-white/20 bg-white/10 text-white/90 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-saffron-400" />
                    Live Service
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-white sm:text-2xl">
                    Quick Affidavit Estimate
                  </h3>
                  <p className="mt-1 text-sm text-white/70">
                    Choose service to see instant pricing
                  </p>

                  <div className="mt-5 space-y-2.5">
                    {[
                      { name: "Notary Affidavit", time: "30 mins", price: "₹250" },
                      { name: "Rent Agreement", time: "2 hours", price: "₹499" },
                      { name: "Name Change Affidavit", time: "Same day", price: "₹999" },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur transition-colors hover:bg-white/10"
                      >
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {item.name}
                          </p>
                          <p className="text-[11px] text-white/60">{item.time}</p>
                        </div>
                        <span className="rounded-full bg-saffron-500 px-2.5 py-1 text-xs font-bold text-white">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-4 gap-2 border-t border-white/10 pt-5">
                    {stats.map((s) => (
                      <div key={s.label} className="text-center">
                        <p className="font-display text-base font-bold text-saffron-400 sm:text-lg">
                          {s.value}
                        </p>
                        <p className="text-[10px] leading-tight text-white/60">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
