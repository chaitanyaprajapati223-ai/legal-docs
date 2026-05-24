/**
 * Single source of truth for business content.
 * Edit values here to update the entire website.
 */

import {
  FileSignature,
  Home,
  Stamp,
  FileText,
  Building2,
  Languages,
  UserCheck,
  Plane,
  CreditCard,
  Scale,
  PenLine,
  ScrollText,
} from "lucide-react";

export const business = {
  name: "Legal Documents & Affidavit Services",
  shortName: "Legal Docs",
  tagline: "Gandhinagar's Trusted Legal Documentation Partner",
  established: "2008",
  phone: "+91 90336 36031",
  phoneHref: "tel:+919033636031",
  whatsapp: "919033636031",
  whatsappHref:
    "https://wa.me/919033636031?text=Namaste!%20I%20need%20help%20with%20legal%20documentation.",
  email: "oshoart1@gmail.com",
  address: {
    line1: "Office No. 12, Ground Floor, Sector 11 Market",
    line2: "Near Notary Court, Sector 11",
    city: "Gandhinagar",
    state: "Gujarat",
    pincode: "382011",
    country: "India",
  },
  hours: {
    weekdays: "Mon - Sat: 9:00 AM – 8:00 PM",
    sunday: "Sunday: 10:00 AM – 2:00 PM",
  },
  social: {
    facebook: "https://facebook.com/legaldocsgnr",
    instagram: "https://instagram.com/legaldocsgnr",
    google: "https://g.page/legaldocsgnr",
  },
  gmapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.5616!2d72.6369!3d23.2156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b1234567890%3A0xabcdef1234567890!2sSector%2011%2C%20Gandhinagar!5e0!3m2!1sen!2sin!4v1700000000000",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const trustBadges = [
  { label: "Govt. Authorized", icon: "shield" },
  { label: "15+ Years Trusted", icon: "award" },
  { label: "5000+ Happy Clients", icon: "users" },
  { label: "Same-Day Service", icon: "zap" },
];

export const services = [
  {
    id: "affidavit",
    title: "Affidavit Services",
    description:
      "All types of affidavits drafted, notarized & delivered same day. Court-acceptable format.",
    icon: FileSignature,
    price: "₹250",
    keywords: ["affidavit gandhinagar", "notary affidavit", "court affidavit"],
  },
  {
    id: "rent-agreement",
    title: "Rent Agreement",
    description:
      "Registered & notarized rent agreements with proper stamp paper. Owner-tenant friendly drafts.",
    icon: Home,
    price: "₹499",
    keywords: ["rent agreement gandhinagar", "rental deed", "leave license"],
  },
  {
    id: "notary",
    title: "Notary Work",
    description:
      "Document attestation, oath commissioner & notary public services by certified professionals.",
    icon: Stamp,
    price: "₹100",
    keywords: ["notary near me", "document attestation", "notary public"],
  },
  {
    id: "stamp-paper",
    title: "Stamp Paper Documentation",
    description:
      "E-stamp & physical stamp papers of all denominations. Authentic Gujarat State authorized.",
    icon: ScrollText,
    price: "₹50",
    keywords: ["e-stamp paper", "stamp paper gandhinagar", "franking"],
  },
  {
    id: "office-applications",
    title: "Office Applications",
    description:
      "Job applications, leave letters, complaints & official letters drafted in professional format.",
    icon: FileText,
    price: "₹150",
    keywords: ["application writing", "official letter", "complaint letter"],
  },
  {
    id: "govt-forms",
    title: "Government Form Filling",
    description:
      "Ration card, voter ID, driving licence, RTO, electricity forms — all government applications.",
    icon: Building2,
    price: "₹100",
    keywords: ["government form filling", "RTO form", "ration card form"],
  },
  {
    id: "typing",
    title: "Gujarati & English Typing",
    description:
      "Professional Gujarati & English typing for legal docs, applications & content. Print-ready output.",
    icon: Languages,
    price: "₹20/page",
    keywords: ["gujarati typing", "english typing", "document typing"],
  },
  {
    id: "name-change",
    title: "Name Change Affidavit",
    description:
      "Legal name change affidavit drafting, gazette publication & newspaper ad assistance — start to end.",
    icon: UserCheck,
    price: "₹999",
    keywords: ["name change affidavit", "gazette publication", "name change"],
  },
  {
    id: "passport",
    title: "Passport Documentation",
    description:
      "Address proof affidavits, annexures, passport supporting documents & appointment help.",
    icon: Plane,
    price: "₹399",
    keywords: ["passport documents", "passport affidavit", "annexure F"],
  },
  {
    id: "pan-aadhar",
    title: "PAN / Aadhar Support",
    description:
      "PAN card apply, correction, Aadhar update, linking & related documentation assistance.",
    icon: CreditCard,
    price: "₹199",
    keywords: ["pan card apply", "aadhar update", "pan aadhar linking"],
  },
  {
    id: "legal-drafting",
    title: "Legal Drafting",
    description:
      "Sale deed, MOU, partnership deed, GPA, will & all legal document drafting by experts.",
    icon: Scale,
    price: "₹1,499",
    keywords: ["legal drafting", "deed writing", "MOU drafting"],
  },
  {
    id: "general-docs",
    title: "General Documentation",
    description:
      "Birth/death certificate, income certificate, domicile, marriage registration help & more.",
    icon: PenLine,
    price: "₹299",
    keywords: ["income certificate", "domicile certificate", "marriage registration"],
  },
];

export const steps = [
  {
    step: "01",
    title: "Tell Us Your Need",
    description:
      "Call or WhatsApp us — share what document you need. Free guidance, no obligation.",
  },
  {
    step: "02",
    title: "Share Documents",
    description:
      "Send required IDs & details via WhatsApp or visit our Sector 11 office in person.",
  },
  {
    step: "03",
    title: "We Draft & Verify",
    description:
      "Our experts prepare your document on correct stamp paper with proper legal format.",
  },
  {
    step: "04",
    title: "Notarize & Collect",
    description:
      "Get notarized document — pickup from office or home delivery within Gandhinagar.",
  },
];

export const whyUs = [
  {
    title: "15+ Years of Experience",
    description:
      "Since 2008 serving Gandhinagar families with legal documentation expertise.",
  },
  {
    title: "Same-Day Service",
    description:
      "Most documents ready within hours — no long waiting, no repeat visits.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden charges. Clear pricing shared upfront over phone or WhatsApp.",
  },
  {
    title: "Govt. Authorized Notary",
    description:
      "Certified notary public & licensed document writers on our panel.",
  },
  {
    title: "Home Pickup & Delivery",
    description:
      "Free pickup-drop within Gandhinagar for senior citizens & busy clients.",
  },
  {
    title: "Bilingual Support",
    description:
      "Gujarati, Hindi & English — comfortable communication in your language.",
  },
];

export const pricingPlans = [
  {
    name: "Basic",
    price: "₹250",
    period: "starting",
    description: "Single affidavit or simple document with notary.",
    features: [
      "1 affidavit drafting",
      "Notary attestation",
      "Stamp paper included",
      "Same-day delivery",
      "WhatsApp support",
    ],
    cta: "WhatsApp Now",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "₹999",
    period: "starting",
    description: "Most popular for rent agreements & name change.",
    features: [
      "Drafting + Notary",
      "Premium stamp paper",
      "2 hard copies + soft copy",
      "Free corrections",
      "Priority same-day service",
      "Home delivery (Gandhinagar)",
    ],
    cta: "Get Started",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Premium",
    price: "₹2,499",
    period: "starting",
    description: "Legal drafting & end-to-end documentation.",
    features: [
      "Custom legal drafting",
      "Multiple revisions",
      "Gazette / newspaper assistance",
      "5 hard copies + soft copy",
      "Dedicated case handler",
      "Free home pickup & drop",
    ],
    cta: "Contact Expert",
    highlighted: false,
  },
];

export const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Resident, Sector 7",
    content:
      "Rent agreement just 2 hours mein ready ho gaya. Bahut professional team hai. Pricing bhi transparent.",
    rating: 5,
    initial: "R",
  },
  {
    name: "Priya Shah",
    role: "Software Engineer",
    content:
      "Name change affidavit ke liye contact kiya tha. Gazette tak ka pura process unhone handle kiya. Stress-free experience.",
    rating: 5,
    initial: "P",
  },
  {
    name: "Hitesh Joshi",
    role: "Business Owner",
    content:
      "MOU and partnership deed drafted perfectly. Legal language strong tha. Court mein bhi acceptable hua.",
    rating: 5,
    initial: "H",
  },
  {
    name: "Anjali Mehta",
    role: "Senior Citizen, Sector 11",
    content:
      "Mere ghar tak pickup-delivery ki. Bahut polite staff. Pension documentation ki saari help mili.",
    rating: 5,
    initial: "A",
  },
  {
    name: "Vikram Desai",
    role: "Student",
    content:
      "Passport ke liye saare annexure same day mein ban gaye. Reasonable price aur quality work. Highly recommended.",
    rating: 5,
    initial: "V",
  },
  {
    name: "Meera Trivedi",
    role: "Teacher",
    content:
      "School documents typing aur affidavit dono ek hi jagah mil gaya. Time aur paisa dono bach gaya.",
    rating: 5,
    initial: "M",
  },
];

export const faqs = [
  {
    q: "Where is your office located in Gandhinagar?",
    a: "Our office is at Sector 11 Market, near Notary Court, Gandhinagar 382011. We're easily accessible from Sector 7, 8, 10, 16 and serve all sectors of Gandhinagar including Kudasan, Sargasan & Adalaj area.",
  },
  {
    q: "How long does an affidavit take in Gandhinagar?",
    a: "Most standard affidavits — name correction, address proof, income, character — are ready within 1-3 hours. Complex legal drafts may take 1-2 days. Same-day notary service is our specialty.",
  },
  {
    q: "What documents do I need for a rent agreement?",
    a: "You need: owner's Aadhar + PAN, tenant's Aadhar + PAN, 2 passport photos each, property documents (any one), and rent details. We handle the rest — stamp paper, drafting, notary, all in one place.",
  },
  {
    q: "Do you provide service to areas outside Gandhinagar?",
    a: "Yes! We serve all of Ahmedabad, Kalol, Mehsana, Sargasan, Kudasan and nearby areas. For Gandhinagar, we offer free home pickup-delivery. For outstation, document courier service is available.",
  },
  {
    q: "How much does a name change affidavit cost?",
    a: "Name change affidavit starts at ₹999 including drafting + stamp paper + notary. Gazette publication is additional (~₹1,500 Gujarat State). Total end-to-end package is around ₹3,000 — we handle everything.",
  },
  {
    q: "Can I get my documents over WhatsApp?",
    a: "Absolutely. Send your details on WhatsApp +91 90336 36031, share scans of required IDs, we'll draft the document, send a soft copy for approval, then deliver the original signed-notarized copy.",
  },
  {
    q: "Do you accept online payments?",
    a: "Yes — UPI (Google Pay, PhonePe, Paytm), bank transfer & cash all accepted. We share a payment link or QR code on WhatsApp for your convenience.",
  },
  {
    q: "Is e-stamp paper accepted by Gujarat government?",
    a: "Yes, e-stamp papers issued through SHCIL are fully valid and accepted by all Gujarat government offices, courts and registration departments. We provide authentic e-stamps directly.",
  },
];

export const stats = [
  { value: "5000+", label: "Documents Processed" },
  { value: "15+", label: "Years of Service" },
  { value: "4.9★", label: "Google Rating" },
  { value: "2-3h", label: "Average Turnaround" },
];
