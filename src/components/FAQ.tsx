"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs, business } from "@/data/content";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section
      id="faq"
      className="section-py bg-slate-50/60"
      aria-labelledby="faq-title"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-px">
        <SectionHeading
          eyebrow="FAQs"
          title="Sab kuch jo aapko jaanna chahiye"
          description="Quick answers to the most common questions about our legal documentation services in Gandhinagar."
        />

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = openIdx === i;
              return (
                <motion.div
                  key={f.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-colors hover:border-saffron-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span className="font-display text-base font-semibold text-navy-900 sm:text-lg">
                      {f.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-saffron-500 text-white"
                          : "bg-slate-100 text-navy-900"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <p className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600 sm:px-6 sm:py-5 sm:text-base">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Side help card */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-fit rounded-2xl border border-saffron-200 bg-gradient-to-br from-saffron-50 to-white p-6 lg:sticky lg:top-24"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-500 text-white shadow-glow">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
              Still have questions?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Bata do WhatsApp pe — we reply within minutes during business hours.
              Free consultation, no pressure.
            </p>
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5 w-full"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
