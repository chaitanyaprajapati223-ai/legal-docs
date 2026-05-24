"use client";

import { motion } from "framer-motion";
import {
  Award,
  Zap,
  IndianRupee,
  ShieldCheck,
  Truck,
  Languages,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyUs, stats, business } from "@/data/content";

const icons = [Award, Zap, IndianRupee, ShieldCheck, Truck, Languages];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative isolate overflow-hidden bg-navy-950 py-16 sm:py-20 lg:py-28"
      aria-labelledby="why-title"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.04]" />
      <div className="absolute -left-20 top-1/4 -z-10 h-72 w-72 rounded-full bg-saffron-500/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-navy-500/30 blur-3xl" />

      <div className="container-px">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="chip mb-4 border-white/15 bg-white/10 text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron-400" />
            Why Choose Us
          </span>
          <h2
            id="why-title"
            className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Gandhinagar trusts us because we{" "}
            <span className="text-gradient-saffron">deliver</span>.
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            15+ years of doing one thing — and doing it right. Here's what makes
            us different.
          </p>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:gap-6 sm:p-6 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center sm:border-r sm:border-white/10 sm:last:border-r-0"
            >
              <p className="font-display text-2xl font-bold text-saffron-400 sm:text-3xl lg:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium text-white/60 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Feature grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => {
            const Icon = icons[i] ?? CheckCircle2;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:border-saffron-400/40 hover:bg-white/[0.07]"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-saffron-500/0 blur-2xl transition-all duration-500 group-hover:bg-saffron-500/20" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-saffron-500/15 text-saffron-400 ring-1 ring-saffron-400/30">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:flex-row sm:justify-between sm:p-8"
        >
          <div>
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
              Ready to get started?
            </h3>
            <p className="mt-1 text-sm text-white/70 sm:text-base">
              Talk to us free — no obligation, no pushy sales.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              WhatsApp Us
            </a>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-navy-900 active:scale-[0.98] sm:text-base"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
