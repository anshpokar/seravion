// =============================================
// CENTRAL SERVICE DATA — edit all service content here
// =============================================

export interface WhatWeDoItem {
  title: string;
  description: string;
  image: string;
}

export interface ApproachStep {
  label: string;
  description: string;
}

export interface ServiceOverview {
  paragraphs: string[];
  approachTitle: string;
  approachSteps: ApproachStep[];
  images: [string, string]; // exactly 2 images
}

export interface WhatWeOfferCard {
  title: string;
  bullets: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  bannerImage: string;
  whatWeDo: WhatWeDoItem[];
  serviceOverview: ServiceOverview;
  whatWeOffer: WhatWeOfferCard[];
  guidedSection: {
    heading: string;
    description: string;
    image: string;
  };
  processSteps: ProcessStep[];
  faqs: FaqItem[];
}

// ─── SHARED ASSETS ─────────────────────────────────
const BANNER = "/serviceDetailsBanner.jpg";
const WD1 = "/what we do1.png";
const WD2 = "/what we do 2.png";
const WD3 = "/what we do 3.png";
const OV1 = "/service overview1.png";
const OV2 = "/service overview 2.png";
const GUIDED = "/guided circle 1.png";

const SHARED_FAQS: FaqItem[] = [
  {
    question: "What industries do you serve?",
    answer:
      "Partnering with this AI agency was one of the best decisions we've made. From the very first call, their team demonstrated deep technical knowledge and a strong understanding.",
  },
  {
    question: "How do you protect client data and privacy?",
    answer:
      "We follow strict data governance policies, use end-to-end encryption, and comply with relevant regulations (GDPR, HIPAA, etc.) depending on your industry.",
  },
  {
    question: "Do you provide support after the project is done?",
    answer:
      "Yes. We offer post-launch support packages ranging from bug fixes and patches to full ongoing maintenance and feature development.",
  },
  {
    question: "How long does an average AI project take?",
    answer:
      "Typical projects range from 6 to 16 weeks depending on scope and complexity. We will give you a detailed timeline estimate during the discovery phase.",
  },
  {
    question: "Is my data safe and secure?",
    answer:
      "Absolutely. All client data is stored securely, with access restricted to authorized team members only. We sign NDAs before any project kickoff.",
  },
];

const SHARED_PROCESS: ProcessStep[] = [
  {
    number: "{01}",
    title: "Design\n& Prototyping",
    description: "Conduct user research (interviews, surveys, analytics).",
  },
  {
    number: "{02}",
    title: "Research\n& Analysis",
    description: "Conduct user research (interviews, surveys, analytics).",
  },
  {
    number: "{03}",
    title: "Testing\n& Iteration",
    description: "Conduct user research (interviews, surveys, analytics).",
  },
  {
    number: "{04}",
    title: "Prepare\nfor Delivery",
    description: "Conduct user research (interviews, surveys, analytics).",
  },
];

// ─── SERVICE DATA ────────────────────────────────────
export const servicesData: ServiceData[] = [
  {
    slug: "ux-ui-design",
    category: "UX/UI Design",
    title: "AI-enhanced UX/UI design",
    subtitle: "Optimizing governance, risk & compliance for top institutions",
    bannerImage: BANNER,
    whatWeDo: [
      {
        title: "Finance consulting",
        description: "Finance consulting involves providing expert advice to businesses, individuals, or organizations",
        image: WD1,
      },
      {
        title: "Marketing consulting",
        description: "Marketing consulting involves providing expert advice and strategies to businesses to improve",
        image: WD2,
      },
      {
        title: "Business consulting",
        description: "Finance consulting involves providing expert advice to businesses, individuals, or organizations",
        image: WD3,
      },
    ],
    serviceOverview: {
      paragraphs: [
        "Branding design is the process of creating a unique identity that visually and strategically represents a business. It includes logo design, color schemes, typography, and brand messaging to ensure consistency across all platforms.",
        "Branding design is the visual and strategic identity of a business, shaping how it is perceived by customers. It includes elements like the logo, color palette, typography, imagery, and messaging, all working together to create a strong and memorable brand presence.",
      ],
      approachTitle: "Our Approach to Branding",
      approachSteps: [
        { label: "Discovery & Research", description: "Understanding your business, audience, and competition." },
        { label: "Concept Development", description: "Creating initial branding concepts and design ideas." },
        { label: "Refinement & Testing", description: "Perfecting the visuals and ensuring they resonate with your audience." },
        { label: "Final Implementation", description: "Delivering all branding assets with a detailed style guide." },
      ],
      images: [OV1, OV2],
    },
    whatWeOffer: [
      { title: "Brand Strategy & Positioning", bullets: ["+ Brand Discovery", "+ Brand Voice & Messaging", "+ Brand Positioning Strategy"] },
      { title: "Logo & Visual Identity", bullets: ["+ Brand Discovery", "+ Brand Voice & Messaging", "+ Brand Positioning Strategy"] },
      { title: "Rebranding & Brand Refresh", bullets: ["+ Brand Discovery", "+ Brand Voice & Messaging", "+ Brand Positioning Strategy"] },
    ],
    guidedSection: {
      heading: "Guided by Process,\nDriven by Results.",
      description: "We follow a streamlined, intelligent workflow designed to eliminate friction and deliver consistent results.",
      image: GUIDED,
    },
    processSteps: SHARED_PROCESS,
    faqs: SHARED_FAQS,
  },

  {
    slug: "custom-development",
    category: "Engineering",
    title: "Custom development",
    subtitle: "Full-stack engineering that scales from MVP to enterprise",
    bannerImage: BANNER,
    whatWeDo: [
      { title: "Frontend Engineering", description: "Pixel-perfect interfaces built with modern React, Next.js, and TypeScript.", image: WD1 },
      { title: "Backend & APIs", description: "Scalable server infrastructure, RESTful and GraphQL APIs, microservices.", image: WD2 },
      { title: "AI Integrations", description: "Embedding LLMs, recommendation engines, and predictive models into your product.", image: WD3 },
    ],
    serviceOverview: {
      paragraphs: [
        "Custom development means building software precisely tailored to your workflow — not adapting your business to an off-the-shelf tool. We architect, engineer, and ship products that solve real problems at real scale.",
        "From a single MVP feature to a full-stack SaaS platform, our engineering team works end-to-end — design system, API, database, CI/CD — so you ship faster and with confidence.",
      ],
      approachTitle: "Our Engineering Approach",
      approachSteps: [
        { label: "Requirements & Architecture", description: "Defining the system design, tech stack, and data models." },
        { label: "Agile Sprints", description: "Two-week sprint cycles with demos and stakeholder feedback." },
        { label: "QA & Testing", description: "Automated tests, code reviews, and performance audits before every release." },
        { label: "Deployment & Handoff", description: "CI/CD pipelines, documentation, and knowledge transfer." },
      ],
      images: [OV1, OV2],
    },
    whatWeOffer: [
      { title: "Web Application Development", bullets: ["+ React / Next.js", "+ Node.js / Python backends", "+ Database Architecture"] },
      { title: "Mobile App Development", bullets: ["+ React Native", "+ iOS & Android", "+ Offline-first design"] },
      { title: "API & Integration Work", bullets: ["+ REST & GraphQL", "+ Third-party integrations", "+ Webhook systems"] },
    ],
    guidedSection: {
      heading: "Guided by Process,\nDriven by Results.",
      description: "We follow a streamlined, intelligent workflow designed to eliminate friction and deliver consistent results.",
      image: GUIDED,
    },
    processSteps: SHARED_PROCESS,
    faqs: SHARED_FAQS,
  },

  {
    slug: "brand-identity",
    category: "Branding",
    title: "Brand Identity",
    subtitle: "Building brands that resonate, endure, and inspire loyalty",
    bannerImage: BANNER,
    whatWeDo: [
      { title: "Visual Identity Systems", description: "Logos, color palettes, and typography systems that scale across every medium.", image: WD1 },
      { title: "Brand Strategy", description: "Positioning, messaging frameworks, and competitive differentiation.", image: WD2 },
      { title: "Brand Guidelines", description: "Comprehensive documentation so your brand stays consistent across all teams.", image: WD3 },
    ],
    serviceOverview: {
      paragraphs: [
        "A strong brand identity is more than a logo — it's the story your company tells every time it shows up. We build identity systems that communicate your values instantly, consistently, and memorably.",
        "From naming and positioning to the full visual language, we create brands that feel premium out of the gate and grow stronger over time.",
      ],
      approachTitle: "Our Approach to Branding",
      approachSteps: [
        { label: "Discovery & Research", description: "Understanding your business, audience, and competition." },
        { label: "Concept Development", description: "Creating initial branding concepts and design ideas." },
        { label: "Refinement & Testing", description: "Perfecting the visuals and ensuring they resonate with your audience." },
        { label: "Final Implementation", description: "Delivering all branding assets with a detailed style guide." },
      ],
      images: [OV1, OV2],
    },
    whatWeOffer: [
      { title: "Brand Strategy & Positioning", bullets: ["+ Brand Discovery", "+ Brand Voice & Messaging", "+ Brand Positioning Strategy"] },
      { title: "Logo & Visual Identity", bullets: ["+ Logomark & Wordmark", "+ Color System", "+ Typography"] },
      { title: "Rebranding & Brand Refresh", bullets: ["+ Audit & Analysis", "+ Evolution Strategy", "+ Launch Playbook"] },
    ],
    guidedSection: {
      heading: "Guided by Process,\nDriven by Results.",
      description: "We follow a streamlined, intelligent workflow designed to eliminate friction and deliver consistent results.",
      image: GUIDED,
    },
    processSteps: SHARED_PROCESS,
    faqs: SHARED_FAQS,
  },

  {
    slug: "outbound-scheduling",
    category: "Automation",
    title: "Outbound Scheduling Support",
    subtitle: "AI-powered outreach that fills your calendar automatically",
    bannerImage: BANNER,
    whatWeDo: [
      { title: "Automated Outreach", description: "AI sends personalized scheduling messages at the optimal time for each contact.", image: WD1 },
      { title: "Calendar Integration", description: "Syncs with Google Calendar, Outlook, and your CRM to prevent double-booking.", image: WD2 },
      { title: "Follow-up Sequences", description: "Automated multi-step follow-up until a time is confirmed or the lead is disqualified.", image: WD3 },
    ],
    serviceOverview: {
      paragraphs: [
        "Outbound scheduling is one of the most time-consuming activities in any sales or support team. Our AI solution handles the entire back-and-forth — proposing times, handling rescheduling, and sending reminders — without any human intervention.",
        "The result is a fully booked calendar, zero missed meetings, and your team focused only on the conversations that matter.",
      ],
      approachTitle: "How It Works",
      approachSteps: [
        { label: "Connect Your Calendar", description: "We integrate directly with your existing calendar and CRM." },
        { label: "Configure Rules", description: "Define availability windows, lead priority, and outreach tone." },
        { label: "AI Takes Over", description: "The AI sends personalized scheduling messages and handles all replies." },
        { label: "You Show Up", description: "You get a notification with meeting details — nothing else required." },
      ],
      images: [OV1, OV2],
    },
    whatWeOffer: [
      { title: "AI Scheduling Engine", bullets: ["+ Natural language outreach", "+ Time zone awareness", "+ Conflict resolution"] },
      { title: "CRM Integration", bullets: ["+ Salesforce & HubSpot", "+ Lead scoring sync", "+ Activity logging"] },
      { title: "Analytics Dashboard", bullets: ["+ Booking rate metrics", "+ Response time tracking", "+ Funnel visibility"] },
    ],
    guidedSection: {
      heading: "Guided by Process,\nDriven by Results.",
      description: "We follow a streamlined, intelligent workflow designed to eliminate friction and deliver consistent results.",
      image: GUIDED,
    },
    processSteps: SHARED_PROCESS,
    faqs: SHARED_FAQS,
  },

  {
    slug: "appointment-reminder",
    category: "Automation",
    title: "Appointment Reminder",
    subtitle: "Reduce no-shows and keep your schedule full automatically",
    bannerImage: BANNER,
    whatWeDo: [
      { title: "Multi-Channel Reminders", description: "Send reminders via SMS, email, and voice calls — whichever channel your clients prefer.", image: WD1 },
      { title: "Smart Timing", description: "AI determines the optimal reminder window to maximize show rates for your specific audience.", image: WD2 },
      { title: "Reschedule Handling", description: "Clients can reschedule directly from the reminder without any staff involvement.", image: WD3 },
    ],
    serviceOverview: {
      paragraphs: [
        "No-shows cost businesses thousands in lost revenue every month. Our appointment reminder system sends automated, personalized reminders through the right channel at the right time — dramatically reducing your no-show rate.",
        "The system integrates with your existing booking platform and handles everything from initial confirmation to day-of reminders and post-appointment follow-ups.",
      ],
      approachTitle: "Our Reminder Strategy",
      approachSteps: [
        { label: "Booking Confirmation", description: "Immediate confirmation message the moment an appointment is booked." },
        { label: "24-Hour Reminder", description: "Personalized reminder the day before with easy reschedule option." },
        { label: "Day-of Reminder", description: "Morning-of nudge with location, link, or instructions." },
        { label: "Post-Appointment Follow-up", description: "Review request and rebooking prompt sent automatically after." },
      ],
      images: [OV1, OV2],
    },
    whatWeOffer: [
      { title: "SMS Reminders", bullets: ["+ Two-way messaging", "+ Opt-out management", "+ Delivery reporting"] },
      { title: "Email Campaigns", bullets: ["+ Branded templates", "+ Dynamic content", "+ Open & click tracking"] },
      { title: "Voice Reminders", bullets: ["+ AI voice calls", "+ IVR integration", "+ Voicemail drop"] },
    ],
    guidedSection: {
      heading: "Guided by Process,\nDriven by Results.",
      description: "We follow a streamlined, intelligent workflow designed to eliminate friction and deliver consistent results.",
      image: GUIDED,
    },
    processSteps: SHARED_PROCESS,
    faqs: SHARED_FAQS,
  },
];

// Helper to find a service by slug
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
