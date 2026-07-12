// =============================================
// CENTRAL INDUSTRY DATA — edit all industry content here
// =============================================

export interface IndustryChallengeBlock {
  heading: string;
  paragraphs: string[];
}

export interface IndustryResultItem {
  metric: string;
  label: string;
}

export interface IndustrySolution {
  title: string;
  description: string;
}

export interface IndustryData {
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  challenge: IndustryChallengeBlock;
  ourRole: IndustryChallengeBlock;
  solutions: IndustrySolution[];
  results: IndustryResultItem[];
  // Other industries shown in the sidebar
  relatedIndustries: { name: string; slug: string }[];
}

// ─── SHARED SIDEBAR LINKS ─────────────────────────────
const ALL_INDUSTRY_LINKS = [
  { name: "HEALTHCARE", slug: "healthcare-healthtech" },
  { name: "FINTECH", slug: "fintech-financial-services" },
  { name: "SAAS", slug: "saas-cloud-products" },
  { name: "EDTECH", slug: "edtech-learning-platforms" },
  { name: "REAL ESTATE", slug: "real-estate-proptech" },
  { name: "HR TECH", slug: "hr-tech-future-of-work" },
  { name: "LOGISTICS", slug: "logistics-supply-chain" },
  { name: "E-COMMERCE", slug: "ecommerce-retail" },
  { name: "MANUFACTURING", slug: "manufacturing-industry-4" },
  { name: "TRAVEL", slug: "travel-hospitality" },
  { name: "INSURANCE", slug: "insurance-insurtech" },
  { name: "MEDIA", slug: "media-entertainment" },
];

const generateDummyData = (name: string, description: string) => ({
  challenge: {
    heading: "The Challenge",
    paragraphs: [
      `When building solutions for ${name}, businesses face unique challenges. The outdated systems often lack intuitive navigation and user-centred workflows, creating friction for end-users. Our clients seek modern digital transformation to improve their platforms while addressing core user pain points.`,
      "Through our comprehensive audit, we identify deeper issues. Beyond aesthetic updates, these platforms need robust backend architecture, scalable data models, and enterprise-grade security to align with long-term business goals."
    ],
  },
  ourRole: {
    heading: "Our Role",
    paragraphs: [
      description,
      "We join as an extension of the client's team, offering expertise in user-centred design and full-stack development. Our contribution goes beyond visual enhancements — we reimagine the product to deliver a seamless and intuitive user experience."
    ],
  },
  solutions: [
    { title: "Product UX Audit", description: "Deep-dive usability assessment identifying friction points across the entire user journey." },
    { title: "Design System Creation", description: "Built a scalable component library ensuring visual consistency and faster future development." },
    { title: "Workflow Redesign", description: "Simplified complex multi-step processes into intuitive single-screen experiences." },
    { title: "Enterprise Architecture", description: "Built a robust, scalable backend capable of handling millions of concurrent operations securely." },
  ],
  results: [
    { metric: "40%", label: "Reduction in operational costs" },
    { metric: "3×", label: "Faster time to market" },
    { metric: "92%", label: "User satisfaction score" },
    { metric: "28%", label: "Increase in platform adoption" },
  ],
});

// ─── INDUSTRY DATA ────────────────────────────────────
export const industriesData: IndustryData[] = [
  {
    slug: "healthcare-healthtech",
    name: "Healthcare & HealthTech",
    tagline: "Improving Patient Outcomes with Technology",
    heroImage: "/healthtech.png",
    ...generateDummyData("Healthcare", "We build HIPAA-compliant digital health platforms, patient engagement solutions, clinical workflow automation, and AI-powered diagnostics tools. Our healthcare engineers bridge clinical knowledge with technology to create products that genuinely improve patient outcomes."),
    relatedIndustries: ALL_INDUSTRY_LINKS,
  },
  {
    slug: "fintech-financial-services",
    name: "FinTech & Financial Services",
    tagline: "Secure, Compliant, and Scalable Solutions",
    heroImage: "/fintech.png",
    ...generateDummyData("FinTech", "We engineer secure, compliant, and scalable financial technology solutions — from payment platforms and digital banking to investment tools and InsurTech products. Our FinTech team understands regulatory complexity, real-time data requirements, and the trust architecture that financial products demand."),
    relatedIndustries: ALL_INDUSTRY_LINKS,
  },
  {
    slug: "saas-cloud-products",
    name: "SaaS & Cloud Products",
    tagline: "Architecting Multi-Tenant Platforms",
    heroImage: "/biztech.png",
    ...generateDummyData("SaaS", "SaaS is in our DNA. We architect multi-tenant platforms, implement subscription billing, build product analytics, and help SaaS companies scale from first revenue to enterprise contracts."),
    relatedIndustries: ALL_INDUSTRY_LINKS,
  },
  {
    slug: "edtech-learning-platforms",
    name: "EdTech & Learning Platforms",
    tagline: "Education Technology that Scales",
    heroImage: "/edutech.png",
    ...generateDummyData("EdTech", "From adaptive learning engines and LMS platforms to virtual classrooms and assessment tools — we build education technology that scales from thousands to millions of learners without sacrificing the experience."),
    relatedIndustries: ALL_INDUSTRY_LINKS,
  },
  {
    slug: "real-estate-proptech",
    name: "Real Estate & PropTech",
    tagline: "Digital Platforms for the Modern Era",
    heroImage: "/cartech.png",
    ...generateDummyData("Real Estate", "Digital platforms for property listing, CRM for real estate teams, virtual tour technology, and data-driven valuation tools — we help real estate businesses operate and grow in the digital era."),
    relatedIndustries: ALL_INDUSTRY_LINKS,
  },
  {
    slug: "hr-tech-future-of-work",
    name: "HR Tech & Future of Work",
    tagline: "Smarter Decisions and Better Workplaces",
    heroImage: "/meditech.png",
    ...generateDummyData("HR Tech", "We build applicant tracking systems, employee experience platforms, workforce analytics, and AI-powered talent intelligence tools that help HR teams make smarter decisions and create workplaces people love."),
    relatedIndustries: ALL_INDUSTRY_LINKS,
  },
  {
    slug: "logistics-supply-chain",
    name: "Logistics & Supply Chain",
    tagline: "Intelligent Platforms with Real-Time Tracking",
    heroImage: "/fintech.png",
    ...generateDummyData("Logistics", "We develop intelligent logistics platforms with real-time tracking, route optimization, warehouse management, and predictive analytics. Our solutions reduce operational costs and create visibility across even the most complex supply chains."),
    relatedIndustries: ALL_INDUSTRY_LINKS,
  },
  {
    slug: "ecommerce-retail",
    name: "E-Commerce & Retail",
    tagline: "Next-Generation Commerce Experiences",
    heroImage: "/healthtech.png",
    ...generateDummyData("E-Commerce", "We build next-generation commerce experiences — from headless storefronts and personalization engines to inventory systems and omnichannel platforms — that convert browsers into buyers and buyers into loyalists."),
    relatedIndustries: ALL_INDUSTRY_LINKS,
  },
  {
    slug: "manufacturing-industry-4",
    name: "Manufacturing & Industry 4.0",
    tagline: "Unlocking Value from the Shop Floor",
    heroImage: "/biztech.png",
    ...generateDummyData("Manufacturing", "IoT-enabled factory monitoring, predictive maintenance systems, digital twin solutions, and supply chain visibility platforms — we help manufacturers unlock the value of data from the shop floor to the boardroom."),
    relatedIndustries: ALL_INDUSTRY_LINKS,
  },
  {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    tagline: "Competing in a Digital Market",
    heroImage: "/edutech.png",
    ...generateDummyData("Travel", "From booking engines and dynamic pricing platforms to loyalty programs and guest experience applications — we build technology that helps travel and hospitality businesses compete in a highly digital, customer-driven market."),
    relatedIndustries: ALL_INDUSTRY_LINKS,
  },
  {
    slug: "insurance-insurtech",
    name: "Insurance & InsurTech",
    tagline: "Modernizing How Insurers Operate",
    heroImage: "/meditech.png",
    ...generateDummyData("Insurance", "We develop policy management platforms, claims automation, AI-powered underwriting tools, and customer-facing insurance portals that modernize how insurers operate and engage their customers."),
    relatedIndustries: ALL_INDUSTRY_LINKS,
  },
  {
    slug: "media-entertainment",
    name: "Media & Entertainment",
    tagline: "Powering Modern Media Businesses",
    heroImage: "/cartech.png",
    ...generateDummyData("Media", "OTT platforms, content management systems, audience analytics, interactive experiences, and creator tools — we build the technology infrastructure that powers modern media businesses."),
    relatedIndustries: ALL_INDUSTRY_LINKS,
  }
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industriesData.find((ind) => ind.slug === slug);
}
