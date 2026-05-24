"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Scale } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, business } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-soft"
            : "bg-transparent",
        )}
      >
        <div className="container-px flex h-16 items-center justify-between sm:h-20">
          <Link
            href="#home"
            aria-label={business.name}
            className="flex items-center gap-2.5 group"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-navy-900 to-navy-700 text-white shadow-premium transition-transform group-hover:scale-105">
              <Scale className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="hidden sm:block">
              <span className="block font-display text-base font-bold leading-tight text-navy-900">
                {business.shortName}
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-500">
                Gandhinagar
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active === link.href
                    ? "text-saffron-600"
                    : "text-slate-700 hover:text-navy-900",
                )}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-saffron-50"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={business.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-navy-100 bg-white px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-50 sm:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" />
              Call
            </a>
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-saffron-500 px-4 py-2 text-sm font-semibold text-white shadow-premium transition-colors hover:bg-saffron-600 sm:inline-flex"
            >
              WhatsApp Now
            </a>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-navy-900 transition-colors hover:bg-slate-50 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy-950/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="absolute inset-x-3 top-20 rounded-2xl border border-slate-200 bg-white p-3 shadow-premium"
            >
              <nav className="flex flex-col" aria-label="Mobile">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                      active === link.href
                        ? "bg-saffron-50 text-saffron-600"
                        : "text-navy-900 hover:bg-slate-50",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-2 flex gap-2 border-t border-slate-100 pt-3">
                <a
                  href={business.phoneHref}
                  className="btn-secondary flex-1 !py-3 !text-sm"
                  onClick={() => setOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
                <a
                  href={business.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 !py-3 !text-sm"
                  onClick={() => setOpen(false)}
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
