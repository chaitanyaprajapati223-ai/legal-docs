"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/content";

const cardColors = [
  "from-saffron-50 to-white border-saffron-100",
  "from-navy-50 to-white border-navy-100",
  "from-slate-50 to-white border-slate-100",
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-py bg-white"
      aria-labelledby="testimonials-title"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Client Reviews"
          title="5000+ happy clients across Gandhinagar"
          description="Real reviews from real Gandhinagar residents. We're rated 4.9★ on Google for a reason."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-premium ${cardColors[i % cardColors.length]}`}
            >
              <Quote
                className="absolute right-5 top-5 h-10 w-10 text-saffron-200/60"
                strokeWidth={1.5}
              />

              <div className="flex items-center gap-0.5">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-saffron-500 text-saffron-500"
                  />
                ))}
              </div>

              <blockquote className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                "{t.content}"
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-200/70 pt-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-navy-900 to-navy-700 font-display text-base font-bold text-white">
                  {t.initial}
                </span>
                <div>
                  <p className="font-semibold text-navy-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-navy-50 to-saffron-50/40 p-6 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-saffron-500 text-saffron-500"
                />
              ))}
            </div>
            <div>
              <p className="font-display text-lg font-bold text-navy-900">
                4.9 / 5 on Google
              </p>
              <p className="text-xs text-slate-600">
                Based on 287+ verified reviews
              </p>
            </div>
          </div>
          <a
            href="https://g.page/legaldocsgnr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            See all Google Reviews
          </a>
        </motion.div>
      </div>
    </section>
  );
}
