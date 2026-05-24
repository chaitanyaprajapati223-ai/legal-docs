import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { business } from "@/data/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const SITE_URL = "https://legaldocsgnr.netlify.app";
const TITLE = `${business.name} | Notary & Affidavit Services in Gandhinagar`;
const DESCRIPTION =
  "Trusted legal document, affidavit, rent agreement, notary & stamp paper services in Gandhinagar, Gujarat. Same-day service, transparent pricing. Call +91 90336 36031.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${business.shortName}`,
  },
  description: DESCRIPTION,
  applicationName: business.name,
  authors: [{ name: business.name }],
  generator: "Next.js",
  keywords: [
    "affidavit gandhinagar",
    "notary gandhinagar",
    "rent agreement gandhinagar",
    "legal documents gandhinagar",
    "stamp paper gandhinagar",
    "name change affidavit gujarat",
    "document writer gandhinagar",
    "passport documentation",
    "gujarati typing services",
    "legal drafting ahmedabad",
    "notary public sector 11 gandhinagar",
  ],
  referrer: "origin-when-cross-origin",
  creator: business.name,
  publisher: business.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: business.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: business.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "legal services",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a2540" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE_URL}/#business`,
  name: business.name,
  alternateName: business.shortName,
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: business.phone,
  email: business.email,
  image: `${SITE_URL}/og-image.png`,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${business.address.line1}, ${business.address.line2}`,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.2156",
    longitude: "72.6369",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Gandhinagar" },
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "City", name: "Kalol" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "287",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [business.social.facebook, business.social.instagram, business.social.google],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
