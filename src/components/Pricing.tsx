"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { pricingPlans, business } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section-py bg-slate-50/60"
      aria-labelledby="pricing-title"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Transparent Pricing"
          title="Honest pricing. No surprises."
          description="Pick a plan that fits — or talk to us for custom requirements. All prices include drafting, stamp paper & notary."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={cn(
                "relative flex flex-col rounded-3xl border p-6 transition-all duration-300 sm:p-8",
                plan.highlighted
                  ? "border-saffron-300 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white shadow-premium lg:-translate-y-4 lg:scale-[1.02]"
                  : "border-slate-200 bg-white text-navy-900 shadow-soft hover:-translate-y-1 hover:shadow-premium",
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-saffron-500 px-3 py-1 text-xs font-bold text-white shadow-glow">
                  <Sparkles className="h-3 w-3" />
                  {plan.badge}
                </span>
              )}

              <div>
                <h3
                  className={cn(
                    "font-display text-xl font-bold sm:text-2xl",
                    plan.highlighted ? "text-white" : "text-navy-900",
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    "mt-1.5 text-sm",
                    plan.highlighted ? "text-white/70" : "text-slate-600",
                  )}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span
                  className={cn(
                    "font-display text-4xl font-bold sm:text-5xl",
                    plan.highlighted ? "text-saffron-400" : "text-navy-900",
                  )}
                >
                  {plan.price}
                </span>
                <span
                  className={cn(
                    "text-sm font-medium",
                    plan.highlighted ? "text-white/60" : "text-slate-500",
                  )}
                >
                  {plan.period}
                </span>
              </div>

              <ul
                className={cn(
                  "mt-6 space-y-3 border-t pt-6",
                  plan.highlighted ? "border-white/10" : "border-slate-100",
                )}
              >
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={cn(
                        "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full",
                        plan.highlighted
                          ? "bg-saffron-500/20 text-saffron-400"
                          : "bg-saffron-50 text-saffron-600",
                      )}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span
                      className={
                        plan.highlighted ? "text-white/90" : "text-slate-700"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-[0.98]",
                  plan.highlighted
                    ? "mt-8 bg-saffron-500 text-white shadow-glow hover:bg-saffron-400"
                    : "mt-8 border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white",
                )}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          * Government fees & stamp duty (where applicable) charged at actuals.
          GST extra.
        </p>
      </div>
    </section>
  );
}
