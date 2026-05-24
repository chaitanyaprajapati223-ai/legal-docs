"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileUp, PenTool, PackageCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { steps } from "@/data/content";

const stepIcons = [MessageCircle, FileUp, PenTool, PackageCheck];

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="section-py bg-white"
      aria-labelledby="process-title"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="How It Works"
          title="From request to ready document in 4 simple steps"
          description="No queues, no confusion. We've made legal documentation effortless for everyone."
        />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-saffron-300 to-transparent lg:block"
          />

          <ol className="grid gap-6 lg:grid-cols-4 lg:gap-4">
            {steps.map((s, i) => {
              const Icon = stepIcons[i] ?? MessageCircle;
              return (
                <motion.li
                  key={s.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="relative z-10 mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-premium ring-8 ring-white">
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-navy-900 to-navy-700" />
                    <Icon
                      className="relative z-10 h-9 w-9 text-saffron-400"
                      strokeWidth={1.75}
                    />
                    <span className="absolute -right-1 -top-1 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-saffron-500 text-xs font-bold text-white shadow-premium">
                      {s.step}
                    </span>
                  </div>

                  <div className="text-center">
                    <h3 className="font-display text-lg font-bold text-navy-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {s.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
