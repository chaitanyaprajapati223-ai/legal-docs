"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { services, business } from "@/data/content";

export default function Services() {
  return (
    <section
      id="services"
      className="section-py bg-slate-50/60"
      aria-labelledby="services-title"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Services"
          title="Every legal document you need — under one roof"
          description="From a single notary stamp to complex legal drafting, we handle all your documentation requirements with same-day turnaround."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.id}
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 6) * 0.06,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="card-premium group relative flex flex-col"
                aria-label={`Inquire about ${service.title}`}
              >
                <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-saffron-50 px-2.5 py-1 text-[11px] font-semibold text-saffron-700 ring-1 ring-saffron-200">
                  from {service.price}
                </span>

                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-50 to-navy-100 text-navy-800 transition-all duration-300 group-hover:from-saffron-50 group-hover:to-saffron-100 group-hover:text-saffron-700">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>

                <h3 className="font-display text-lg font-bold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs font-medium text-slate-500">
                    WhatsApp to enquire
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy-50 text-navy-900 transition-all group-hover:bg-saffron-500 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-soft sm:p-8"
        >
          <p className="text-sm text-slate-600 sm:text-base">
            Don't see your document type?{" "}
            <span className="font-semibold text-navy-900">
              We probably still handle it.
            </span>{" "}
            Just send us a message.
          </p>
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5 inline-flex"
          >
            Ask on WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
