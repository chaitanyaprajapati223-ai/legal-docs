"use client";

import Link from "next/link";
import { Scale, Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { business, navLinks, services } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid opacity-[0.04]"
      />
      <div
        aria-hidden
        className="absolute -left-20 top-0 -z-10 h-64 w-64 rounded-full bg-saffron-500/10 blur-3xl"
      />

      <div className="container-px py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Link href="#home" className="inline-flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-saffron-500 to-saffron-600 text-white shadow-glow">
                <Scale className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span>
                <span className="block font-display text-base font-bold leading-tight">
                  {business.shortName}
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-wider text-white/50">
                  Gandhinagar, Gujarat
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {business.name} — your trusted partner for affidavits, notary,
              rent agreements & legal documentation in Gandhinagar since{" "}
              {business.established}.
            </p>

            <div className="mt-5 flex gap-2">
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white hover:text-navy-900"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white hover:text-navy-900"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={business.social.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Business"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white hover:text-navy-900"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.75h3.56c2.08-1.92 3.28-4.74 3.28-8.08Z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.75c-.98.66-2.23 1.05-3.72 1.05-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
                  <path d="M5.84 14.11A6.6 6.6 0 0 1 5.5 12c0-.73.12-1.44.34-2.11V7.05H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.95l3.66-2.84Z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.29 9.14 5.38 12 5.38Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/65 transition-colors hover:text-saffron-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">
              Top Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <Link
                    href="#services"
                    className="text-white/65 transition-colors hover:text-saffron-400"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">
              Reach Us
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0 text-saffron-400" />
                <span className="text-white/70">
                  {business.address.line1}, {business.address.line2},{" "}
                  {business.address.city} - {business.address.pincode}
                </span>
              </li>
              <li>
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-3 text-white/70 transition-colors hover:text-saffron-400"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-saffron-400" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-3 text-white/70 transition-colors hover:text-saffron-400"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-saffron-400" />
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Local SEO keyword footer */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/45">
            <strong className="text-white/70">Serving locally:</strong>{" "}
            Affidavit services in Gandhinagar Sector 7, 8, 9, 10, 11, 16, 21, 22 •
            Notary public Kudasan, Sargasan, Adalaj • Rent agreement Ahmedabad,
            Kalol, Mehsana • Name change affidavit Gujarat • Stamp paper
            Gandhinagar • Passport documentation Gandhinagar • Legal drafting
            Gujarat • Gujarati typing services • Government form filling.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p className="flex gap-4">
            <Link href="#" className="hover:text-saffron-400">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-saffron-400">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
