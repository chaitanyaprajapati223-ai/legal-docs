"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";
import { business } from "@/data/content";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <>
      {/* Mobile sticky bottom bar */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-3 bottom-3 z-40 lg:hidden"
            role="region"
            aria-label="Quick contact"
          >
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-premium backdrop-blur-xl">
              <a
                href={business.phoneHref}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-navy-900 px-4 py-3 text-sm font-semibold text-white transition-colors active:scale-[0.98]"
                aria-label="Call now"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-saffron-500 px-4 py-3 text-sm font-semibold text-white shadow-glow transition-colors active:scale-[0.98]"
                aria-label="Open WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <button
                type="button"
                onClick={() => setDismissed(true)}
                aria-label="Dismiss"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop floating WhatsApp button */}
      <AnimatePresence>
        {show && (
          <motion.a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 260 }}
            className="group fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-saffron-500 text-white shadow-glow transition-transform hover:scale-110 lg:flex"
            aria-label="Chat on WhatsApp"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-saffron-400/40" />
            <svg viewBox="0 0 24 24" className="relative h-6 w-6" fill="currentColor">
              <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2c-5.43 0-9.85 4.42-9.85 9.85 0 1.74.46 3.4 1.32 4.89L2.05 22l5.4-1.41a9.84 9.84 0 0 0 4.58 1.16h.01c5.43 0 9.86-4.42 9.86-9.85 0-2.63-1.03-5.1-2.85-6.99M12.04 20.13h-.01a8.17 8.17 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.18 8.18 0 0 1-1.26-4.37c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4a8.13 8.13 0 0 1 2.4 5.8c0 4.51-3.68 8.21-8.2 8.21" />
            </svg>
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-navy-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
              Chat with us
            </span>
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}
