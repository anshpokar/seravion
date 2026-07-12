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
    slug: "ai-machine-learning",
    category: "AI & ML",
    title: "AI & Machine Learning Solutions",
    subtitle: "Embed Intelligence Into Every Layer of Your Business",
    bannerImage: BANNER,
    whatWeDo: [
      {
        title: "Predictive Analytics",
        description: "Forecast trends, identify opportunities, and mitigate risks using advanced predictive models.",
        image: WD1,
      },
      {
        title: "Computer Vision",
        description: "Extract actionable insights from visual data, automating inspection and monitoring workflows.",
        image: WD2,
      },
      {
        title: "NLP & LLMs",
        description: "Deploy intelligent chatbots and document analysis systems using state-of-the-art language models.",
        image: WD3,
      },
    ],
    serviceOverview: {
      paragraphs: [
        "End-to-End Digital Engineering. Tailored for Your Ambition. From a single MVP to a full enterprise transformation — we bring the right team, the right technology, and the right process to every engagement.",
        "We help businesses unlock the full power of artificial intelligence — from predictive analytics and computer vision to NLP, LLM integrations, and custom AI model development. Our AI team combines data science expertise with engineering rigor to deliver AI systems that work in the real world.",
        "BUSINESS VALUE: Move from AI experimentation to production-grade AI deployment. Our solutions reduce operational costs, automate complex workflows, and generate insights that drive competitive advantage across every department."
      ],
      approachTitle: "Our Intelligent Approach",
      approachSteps: [
        { label: "Discovery", description: "Identifying high-ROI AI use cases specific to your operations." },
        { label: "Data Engineering", description: "Cleaning, structuring, and preparing your data for ML models." },
        { label: "Model Training", description: "Developing custom algorithms tailored to your exact requirements." },
        { label: "Deployment", description: "Seamless integration into your existing software ecosystem." },
      ],
      images: [OV1, OV2],
    },
    whatWeOffer: [
      { title: "Custom Models", bullets: ["+ Scalable architectures", "+ Continuous learning", "+ Low-latency inference"] },
      { title: "Generative AI", bullets: ["+ Content automation", "+ Enterprise search", "+ Code generation"] },
      { title: "Data Pipelines", bullets: ["+ ETL automation", "+ Real-time processing", "+ Data warehousing"] },
    ],
    guidedSection: {
      heading: "Guided by Data,\nDriven by AI.",
      description: "We follow a rigorous methodology to ensure your AI investments deliver measurable business impact.",
      image: GUIDED,
    },
    processSteps: SHARED_PROCESS,
    faqs: SHARED_FAQS,
  },
  {
    slug: "full-stack-development",
    category: "Development",
    title: "Full Stack Development",
    subtitle: "End-to-End Full Stack Solutions for Scalable Digital Products",
    bannerImage: BANNER,
    whatWeDo: [
      {
        title: "Frontend Development",
        description: "Engaging, accessible, and performant user interfaces built with React, Next.js, and Vue.",
        image: WD1,
      },
      {
        title: "Backend Engineering",
        description: "Robust, secure APIs and microservices using Node.js, Python, and Spring Boot.",
        image: WD2,
      },
      {
        title: "Database Architecture",
        description: "Scalable SQL and NoSQL data structures designed for complex enterprise requirements.",
        image: WD3,
      },
    ],
    serviceOverview: {
      paragraphs: [
        "End-to-End Digital Engineering. Tailored for Your Ambition. From a single MVP to a full enterprise transformation — we bring the right team, the right technology, and the right process to every engagement.",
        "We build powerful, secure, and scalable full stack applications using modern technologies like React, Next.js, Angular, Vue.js, Node.js, Python, Django, Java Spring Boot, PostgreSQL, MongoDB, and AWS. From startup MVPs to enterprise-grade platforms — our team handles frontend, backend, APIs, databases, cloud infrastructure, and deployment with a seamless development approach.",
        "BUSINESS VALUE: Transform your ideas into high-performing digital products with a robust full stack architecture designed for speed, scalability, and business growth. We create applications that offer exceptional user experiences, reliable backend systems, secure APIs, and cloud-ready infrastructure — helping businesses launch faster, reduce operational costs, and scale confidently."
      ],
      approachTitle: "Full-Stack Lifecycle",
      approachSteps: [
        { label: "Architecture", description: "Selecting the optimal tech stack for your specific requirements." },
        { label: "Prototyping", description: "Rapid MVP development to validate core business concepts." },
        { label: "Engineering", description: "Agile sprints delivering production-ready features iteratively." },
        { label: "Scaling", description: "Optimizing infrastructure and code for massive user growth." },
      ],
      images: [OV1, OV2],
    },
    whatWeOffer: [
      { title: "Web Platforms", bullets: ["+ Custom SaaS", "+ Enterprise portals", "+ Real-time dashboards"] },
      { title: "API Development", bullets: ["+ RESTful services", "+ GraphQL integration", "+ 3rd-party connections"] },
      { title: "System Migration", bullets: ["+ Legacy modernization", "+ Zero-downtime transition", "+ Cloud replatforming"] },
    ],
    guidedSection: {
      heading: "Guided by Process,\nBuilt to Scale.",
      description: "Our engineering standards ensure that what we build today will comfortably support your growth tomorrow.",
      image: GUIDED,
    },
    processSteps: SHARED_PROCESS,
    faqs: SHARED_FAQS,
  },
  {
    slug: "mobile-app-development",
    category: "Mobile",
    title: "Mobile App Development",
    subtitle: "Native & Cross-Platform Mobile Experiences That Users Love",
    bannerImage: BANNER,
    whatWeDo: [
      {
        title: "iOS Development",
        description: "Native applications leveraging the latest Swift and Apple ecosystem features.",
        image: WD1,
      },
      {
        title: "Android Development",
        description: "Robust Kotlin-based apps optimized across the diverse Android device landscape.",
        image: WD2,
      },
      {
        title: "Cross-Platform",
        description: "Unified codebases using React Native or Flutter to reduce time-to-market.",
        image: WD3,
      },
    ],
    serviceOverview: {
      paragraphs: [
        "End-to-End Digital Engineering. Tailored for Your Ambition. From a single MVP to a full enterprise transformation — we bring the right team, the right technology, and the right process to every engagement.",
        "We design and engineer mobile applications across iOS, Android, and cross-platform frameworks that are intuitive, performant, and built for scale. From consumer apps with millions of users to enterprise-grade mobile platforms, our mobile engineering team delivers products that redefine user expectations.",
        "BUSINESS VALUE: Reduce time-to-market by up to 40% with our proven mobile development framework. We ship polished, production-ready mobile apps with robust backend integration, offline capability, and enterprise security standards."
      ],
      approachTitle: "Mobile-First Strategy",
      approachSteps: [
        { label: "UX Research", description: "Understanding context and constraints of mobile users." },
        { label: "UI Design", description: "Crafting fluid, gesture-driven interfaces that feel native." },
        { label: "Development", description: "Building responsive, memory-efficient mobile clients." },
        { label: "App Store Ops", description: "Managing compliance, submission, and rollout processes." },
      ],
      images: [OV1, OV2],
    },
    whatWeOffer: [
      { title: "Native Apps", bullets: ["+ Swift/Objective-C", "+ Kotlin/Java", "+ Hardware integration"] },
      { title: "Hybrid Apps", bullets: ["+ React Native", "+ Flutter", "+ Shared business logic"] },
      { title: "App Optimization", bullets: ["+ Crash reduction", "+ Battery efficiency", "+ Bundle size reduction"] },
    ],
    guidedSection: {
      heading: "Guided by Users,\nPerfected in Hand.",
      description: "We obsess over micro-interactions and performance to deliver mobile apps that earn 5-star ratings.",
      image: GUIDED,
    },
    processSteps: SHARED_PROCESS,
    faqs: SHARED_FAQS,
  },
  {
    slug: "web-development",
    category: "Web",
    title: "Web Development",
    subtitle: "High-Performance Web Applications Built for the Modern Stack",
    bannerImage: BANNER,
    whatWeDo: [
      {
        title: "Marketing Websites",
        description: "High-converting, SEO-optimized digital storefronts that load instantly.",
        image: WD1,
      },
      {
        title: "SaaS Platforms",
        description: "Complex, feature-rich web applications built for recurring revenue businesses.",
        image: WD2,
      },
      {
        title: "Enterprise Portals",
        description: "Secure, role-based dashboards integrating multiple internal data sources.",
        image: WD3,
      },
    ],
    serviceOverview: {
      paragraphs: [
        "End-to-End Digital Engineering. Tailored for Your Ambition. From a single MVP to a full enterprise transformation — we bring the right team, the right technology, and the right process to every engagement.",
        "We build fast, scalable, and beautiful web applications using modern frameworks like React, Next.js, Vue, and Node.js. From marketing websites to complex SaaS platforms and enterprise web portals — our full-stack engineers bring precision to every line of code.",
        "BUSINESS VALUE: Accelerate your digital presence with web applications that load in milliseconds, rank on search engines, and convert visitors into customers. Our web architecture is designed for performance, security, and long-term maintainability."
      ],
      approachTitle: "Web Excellence",
      approachSteps: [
        { label: "Wireframing", description: "Mapping out the user journey and page structure." },
        { label: "Visual Design", description: "Applying your brand identity to digital components." },
        { label: "Frontend Build", description: "Translating designs into accessible, semantic HTML/CSS/JS." },
        { label: "Performance Tuning", description: "Optimizing Core Web Vitals and SEO metrics." },
      ],
      images: [OV1, OV2],
    },
    whatWeOffer: [
      { title: "Modern Frameworks", bullets: ["+ Next.js / React", "+ Nuxt / Vue", "+ Server-side rendering"] },
      { title: "CMS Integration", bullets: ["+ Headless CMS", "+ Contentful / Sanity", "+ WordPress"] },
      { title: "E-Commerce", bullets: ["+ Shopify Plus", "+ Custom checkouts", "+ Payment gateways"] },
    ],
    guidedSection: {
      heading: "Guided by Metrics,\nDesigned for Speed.",
      description: "We build for the modern web, where every millisecond matters for conversion and retention.",
      image: GUIDED,
    },
    processSteps: SHARED_PROCESS,
    faqs: SHARED_FAQS,
  },
  {
    slug: "cloud-devops",
    category: "Infrastructure",
    title: "Cloud & DevOps Services",
    subtitle: "Cloud-Native Infrastructure Built for Scale, Security, and Speed",
    bannerImage: BANNER,
    whatWeDo: [
      {
        title: "Cloud Migration",
        description: "Seamlessly transition legacy workloads to modern cloud environments.",
        image: WD1,
      },
      {
        title: "CI/CD Automation",
        description: "Streamline code delivery with robust testing and deployment pipelines.",
        image: WD2,
      },
      {
        title: "Containerization",
        description: "Package applications with Docker and orchestrate them via Kubernetes.",
        image: WD3,
      },
    ],
    serviceOverview: {
      paragraphs: [
        "End-to-End Digital Engineering. Tailored for Your Ambition. From a single MVP to a full enterprise transformation — we bring the right team, the right technology, and the right process to every engagement.",
        "We architect, migrate, and optimize cloud environments on AWS, Azure, and GCP — implementing DevOps best practices that reduce deployment risk and accelerate delivery velocity. From CI/CD pipelines to Kubernetes orchestration and cloud cost optimization, our DevOps team operates as your infrastructure partner.",
        "BUSINESS VALUE: Cut infrastructure costs by up to 35% while improving uptime and deployment frequency. Our cloud-native approach gives your engineering team the foundation to move faster without breaking things."
      ],
      approachTitle: "DevOps Philosophy",
      approachSteps: [
        { label: "Assessment", description: "Auditing current infrastructure and deployment bottlenecks." },
        { label: "Infrastructure as Code", description: "Automating environment provisioning with Terraform." },
        { label: "Pipeline Setup", description: "Implementing continuous integration and delivery flows." },
        { label: "Monitoring", description: "Establishing comprehensive alerting and observability." },
      ],
      images: [OV1, OV2],
    },
    whatWeOffer: [
      { title: "Cloud Platforms", bullets: ["+ AWS Architecture", "+ Google Cloud", "+ Microsoft Azure"] },
      { title: "DevOps Tooling", bullets: ["+ GitHub Actions", "+ GitLab CI", "+ Jenkins/CircleCI"] },
      { title: "Security & Ops", bullets: ["+ Cloud cost optimization", "+ DevSecOps", "+ 24/7 Monitoring"] },
    ],
    guidedSection: {
      heading: "Guided by Stability,\nEngineered for Scale.",
      description: "We build resilient, automated infrastructure that lets your engineering team focus on shipping features.",
      image: GUIDED,
    },
    processSteps: SHARED_PROCESS,
    faqs: SHARED_FAQS,
  },
  {
    slug: "erp-crm-development",
    category: "Enterprise Systems",
    title: "ERP & CRM Development",
    subtitle: "Enterprise Systems That Drive Operational Excellence",
    bannerImage: BANNER,
    whatWeDo: [
      {
        title: "Custom ERP Systems",
        description: "Tailored resource planning software designed for your unique operational workflows.",
        image: WD1,
      },
      {
        title: "CRM Integration",
        description: "Centralized customer data platforms integrating sales, marketing, and support.",
        image: WD2,
      },
      {
        title: "Platform Implementation",
        description: "Expert configuration of Salesforce, SAP, Microsoft Dynamics, and Odoo.",
        image: WD3,
      },
    ],
    serviceOverview: {
      paragraphs: [
        "End-to-End Digital Engineering. Tailored for Your Ambition. From a single MVP to a full enterprise transformation — we bring the right team, the right technology, and the right process to every engagement.",
        "We build custom ERP and CRM systems tailored to your industry, workflows, and growth trajectory — as well as implement and customize leading platforms like Salesforce, SAP, Microsoft Dynamics, and Odoo. Our enterprise systems team brings decades of combined experience in complex system integration.",
        "BUSINESS VALUE: Eliminate operational silos, automate business processes, and gain real-time visibility across your organization. Our ERP/CRM solutions are designed for long-term ROI and minimal disruption during rollout."
      ],
      approachTitle: "Enterprise Integration",
      approachSteps: [
        { label: "Process Mapping", description: "Documenting and optimizing your current business workflows." },
        { label: "Architecture", description: "Designing a unified system architecture that eliminates data silos." },
        { label: "Implementation", description: "Phased rollout to minimize operational disruption." },
        { label: "Training", description: "Comprehensive change management and team onboarding." },
      ],
      images: [OV1, OV2],
    },
    whatWeOffer: [
      { title: "Custom Solutions", bullets: ["+ Modular architecture", "+ Workflow automation", "+ Real-time analytics"] },
      { title: "Platform Experts", bullets: ["+ Salesforce", "+ SAP", "+ Microsoft Dynamics"] },
      { title: "Data Migration", bullets: ["+ Secure transfer", "+ Data cleansing", "+ Zero data loss"] },
    ],
    guidedSection: {
      heading: "Guided by Process,\nBuilt for Efficiency.",
      description: "We align enterprise software with your human workflows, not the other way around.",
      image: GUIDED,
    },
    processSteps: SHARED_PROCESS,
    faqs: SHARED_FAQS,
  },
  {
    slug: "saas-product-development",
    category: "Software Products",
    title: "SaaS Product Development",
    subtitle: "Build SaaS Products That Scale From Zero to Enterprise",
    bannerImage: BANNER,
    whatWeDo: [
      {
        title: "MVP Development",
        description: "Rapidly build and launch your core product to validate market fit.",
        image: WD1,
      },
      {
        title: "Multi-Tenant Architecture",
        description: "Secure, scalable backend structures designed for B2B and B2C SaaS models.",
        image: WD2,
      },
      {
        title: "SaaS Growth Features",
        description: "Integrated billing, subscription management, and user analytics.",
        image: WD3,
      },
    ],
    serviceOverview: {
      paragraphs: [
        "End-to-End Digital Engineering. Tailored for Your Ambition. From a single MVP to a full enterprise transformation — we bring the right team, the right technology, and the right process to every engagement.",
        "We are the engineering partner behind some of the most innovative SaaS products in the market. From architecture and MVP to multi-tenant enterprise platforms, our team brings deep SaaS DNA — understanding product metrics, monetization models, and the technical complexity of building for scale.",
        "BUSINESS VALUE: Launch your SaaS product with the infrastructure, architecture, and product thinking it needs to grow. We build with security, scalability, and subscription economics built in from day one."
      ],
      approachTitle: "SaaS Engineering",
      approachSteps: [
        { label: "Validation", description: "Testing core assumptions before writing extensive code." },
        { label: "Architecture", description: "Designing multi-tenant databases and scalable APIs." },
        { label: "Development", description: "Agile iterations focusing on high-value user features." },
        { label: "Go-To-Market", description: "Integrating analytics, payment gateways, and CRM tools." },
      ],
      images: [OV1, OV2],
    },
    whatWeOffer: [
      { title: "Core Features", bullets: ["+ Role-based access", "+ Subscription billing", "+ Analytics dashboards"] },
      { title: "Architecture", bullets: ["+ Microservices", "+ Serverless", "+ Multi-tenant databases"] },
      { title: "Product Growth", bullets: ["+ A/B testing frameworks", "+ PLG funnels", "+ Usage tracking"] },
    ],
    guidedSection: {
      heading: "Guided by Growth,\nBuilt for Scale.",
      description: "We understand the metrics that drive SaaS success and engineer platforms to maximize them.",
      image: GUIDED,
    },
    processSteps: SHARED_PROCESS,
    faqs: SHARED_FAQS,
  },
  {
    slug: "ui-ux-design",
    category: "Design",
    title: "UI/UX Design",
    subtitle: "Design Systems and Experiences That Convert, Delight, and Scale",
    bannerImage: BANNER,
    whatWeDo: [
      {
        title: "User Research",
        description: "Deep dive into user behavior, pain points, and product opportunities.",
        image: WD1,
      },
      {
        title: "UX & Interaction Design",
        description: "Intuitive user journeys, wireframing, and interactive prototyping.",
        image: WD2,
      },
      {
        title: "Design Systems",
        description: "Scalable component libraries that ensure visual consistency and speed up development.",
        image: WD3,
      },
    ],
    serviceOverview: {
      paragraphs: [
        "End-to-End Digital Engineering. Tailored for Your Ambition. From a single MVP to a full enterprise transformation — we bring the right team, the right technology, and the right process to every engagement.",
        "Our design studio creates product experiences that are not just beautiful — they are strategically crafted to drive adoption, reduce churn, and amplify brand equity. We operate at every layer of the design process: user research, IA, interaction design, visual design, prototyping, and design systems.",
        "BUSINESS VALUE: Great design is your most underrated competitive advantage. Our product designers reduce support tickets, improve conversion rates, and increase user retention through research-driven, pixel-perfect execution."
      ],
      approachTitle: "Design Process",
      approachSteps: [
        { label: "Discover", description: "Auditing existing experiences and understanding user needs." },
        { label: "Define", description: "Information architecture and low-fidelity wireframing." },
        { label: "Design", description: "High-fidelity visual design and interactive prototyping." },
        { label: "Deliver", description: "Creating a comprehensive design system for developers." },
      ],
      images: [OV1, OV2],
    },
    whatWeOffer: [
      { title: "UX Strategy", bullets: ["+ User journey mapping", "+ Persona development", "+ Usability testing"] },
      { title: "Visual Design", bullets: ["+ Pixel-perfect UI", "+ Micro-interactions", "+ Brand integration"] },
      { title: "Design Systems", bullets: ["+ Figma libraries", "+ Component tokens", "+ Documentation"] },
    ],
    guidedSection: {
      heading: "Guided by Empathy,\nDesigned for Impact.",
      description: "We design experiences that solve real user problems while driving your business objectives forward.",
      image: GUIDED,
    },
    processSteps: SHARED_PROCESS,
    faqs: SHARED_FAQS,
  },
  {
    slug: "iot-solutions",
    category: "IoT",
    title: "IoT Solutions",
    subtitle: "Connected Intelligence for the Physical World",
    bannerImage: BANNER,
    whatWeDo: [
      {
        title: "Embedded Systems",
        description: "Custom firmware development for smart devices and sensors.",
        image: WD1,
      },
      {
        title: "Edge Computing",
        description: "Processing data locally for zero-latency decision making.",
        image: WD2,
      },
      {
        title: "IoT Dashboards",
        description: "Real-time web and mobile interfaces for device management and analytics.",
        image: WD3,
      },
    ],
    serviceOverview: {
      paragraphs: [
        "End-to-End Digital Engineering. Tailored for Your Ambition. From a single MVP to a full enterprise transformation — we bring the right team, the right technology, and the right process to every engagement.",
        "We build end-to-end IoT solutions — from embedded firmware and edge computing to cloud connectivity, real-time dashboards, and AI-powered analytics. Our IoT engineering team bridges hardware and software to create connected products that deliver measurable operational intelligence.",
        "BUSINESS VALUE: Gain real-time visibility into your physical operations, reduce equipment downtime with predictive maintenance, and unlock new revenue streams through connected product capabilities."
      ],
      approachTitle: "IoT Architecture",
      approachSteps: [
        { label: "Hardware Strategy", description: "Selecting the right sensors, microcontrollers, and connectivity." },
        { label: "Firmware Dev", description: "Writing secure, battery-efficient code for the edge." },
        { label: "Cloud Integration", description: "Building robust data pipelines to ingest IoT telemetry." },
        { label: "Interface Design", description: "Creating dashboards to monitor and control your device fleet." },
      ],
      images: [OV1, OV2],
    },
    whatWeOffer: [
      { title: "Device Engineering", bullets: ["+ C/C++ firmware", "+ RTOS integration", "+ OTA updates"] },
      { title: "Connectivity", bullets: ["+ MQTT & CoAP", "+ Bluetooth/BLE", "+ Cellular & LoRaWAN"] },
      { title: "Data Platform", bullets: ["+ Time-series DBs", "+ Predictive analytics", "+ Digital twins"] },
    ],
    guidedSection: {
      heading: "Guided by Data,\nConnected by Design.",
      description: "We bridge the gap between physical hardware and digital intelligence to transform your operations.",
      image: GUIDED,
    },
    processSteps: SHARED_PROCESS,
    faqs: SHARED_FAQS,
  },
  {
    slug: "product-engineering",
    category: "Engineering",
    title: "Product Engineering",
    subtitle: "Full Lifecycle Engineering for Digital Products",
    bannerImage: BANNER,
    whatWeDo: [
      {
        title: "Product Strategy",
        description: "Aligning technical architecture with your business goals and market needs.",
        image: WD1,
      },
      {
        title: "Agile Development",
        description: "Iterative, sprint-based engineering delivering continuous value.",
        image: WD2,
      },
      {
        title: "Quality Assurance",
        description: "Automated and manual testing ensuring flawless product launches.",
        image: WD3,
      },
    ],
    serviceOverview: {
      paragraphs: [
        "End-to-End Digital Engineering. Tailored for Your Ambition. From a single MVP to a full enterprise transformation — we bring the right team, the right technology, and the right process to every engagement.",
        "Product engineering is what we do best. We partner with product leaders from ideation through to global launch — bringing together design, engineering, QA, data, and DevOps under one roof. Our product squads operate like an in-house team with the flexibility of an agency.",
        "BUSINESS VALUE: Ship faster, iterate smarter, and scale confidently. Our product engineering approach combines agile velocity with engineering discipline, delivering products that are built to last and loved by users."
      ],
      approachTitle: "Engineering Excellence",
      approachSteps: [
        { label: "Ideation", description: "Validating concepts and defining the product roadmap." },
        { label: "Execution", description: "Cross-functional squads building features in agile sprints." },
        { label: "Testing", description: "Rigorous QA automation for stability and security." },
        { label: "Launch & Scale", description: "Deploying to production and monitoring user telemetry." },
      ],
      images: [OV1, OV2],
    },
    whatWeOffer: [
      { title: "Dedicated Squads", bullets: ["+ Product managers", "+ Tech leads", "+ QA engineers"] },
      { title: "Engineering Specs", bullets: ["+ Microservices", "+ TDD / BDD", "+ Scalable databases"] },
      { title: "Product Ops", bullets: ["+ Release management", "+ Feature flagging", "+ User analytics"] },
    ],
    guidedSection: {
      heading: "Guided by Vision,\nBuilt with Precision.",
      description: "We don't just write code; we engineer products that solve problems and delight users.",
      image: GUIDED,
    },
    processSteps: SHARED_PROCESS,
    faqs: SHARED_FAQS,
  },
  {
    slug: "dedicated-development-teams",
    category: "Team Augmentation",
    title: "Dedicated Development Teams",
    subtitle: "Extend Your Engineering Capacity. Instantly.",
    bannerImage: BANNER,
    whatWeDo: [
      {
        title: "Team Assembly",
        description: "Hand-picking senior talent that matches your technical stack and culture.",
        image: WD1,
      },
      {
        title: "Seamless Integration",
        description: "Our engineers adopt your tools, workflows, and communication rhythms.",
        image: WD2,
      },
      {
        title: "Managed Scaling",
        description: "Flexibly scale your team up or down based on your product roadmap.",
        image: WD3,
      },
    ],
    serviceOverview: {
      paragraphs: [
        "End-to-End Digital Engineering. Tailored for Your Ambition. From a single MVP to a full enterprise transformation — we bring the right team, the right technology, and the right process to every engagement.",
        "Access a pre-vetted, instantly deployable team of senior engineers, designers, and product specialists — fully integrated into your workflow, culture, and tech stack. Our dedicated teams operate on your timezone, speak your language, and treat your product as their own.",
        "BUSINESS VALUE: Scale your engineering capacity without the overhead of hiring, onboarding, and management. Our dedicated teams deliver from day one with zero ramp-up friction."
      ],
      approachTitle: "Team Integration",
      approachSteps: [
        { label: "Requirement Analysis", description: "Understanding your tech stack, gaps, and team culture." },
        { label: "Talent Selection", description: "Providing a curated list of top-tier engineering talent." },
        { label: "Onboarding", description: "Seamlessly integrating our engineers into your Slack, Jira, and Git." },
        { label: "Delivery", description: "Continuous output governed by your internal product managers." },
      ],
      images: [OV1, OV2],
    },
    whatWeOffer: [
      { title: "Engineering Talent", bullets: ["+ Frontend / Backend", "+ Mobile / DevOps", "+ Data Science"] },
      { title: "Design Talent", bullets: ["+ UI/UX Designers", "+ Product Designers", "+ UX Researchers"] },
      { title: "Management", bullets: ["+ Scrum Masters", "+ Product Owners", "+ Tech Leads"] },
    ],
    guidedSection: {
      heading: "Guided by Collaboration,\nDriven by Talent.",
      description: "We provide the engineering firepower you need to hit your product milestones on time.",
      image: GUIDED,
    },
    processSteps: SHARED_PROCESS,
    faqs: SHARED_FAQS,
  },
  {
    slug: "digital-transformation",
    category: "Consulting",
    title: "Digital Transformation",
    subtitle: "Reimagine Your Business for the Digital Age",
    bannerImage: BANNER,
    whatWeDo: [
      {
        title: "Legacy Modernization",
        description: "Upgrading outdated monolithic systems to agile, cloud-native microservices.",
        image: WD1,
      },
      {
        title: "Process Automation",
        description: "Replacing manual, paper-based workflows with intelligent digital systems.",
        image: WD2,
      },
      {
        title: "Data Strategy",
        description: "Breaking down data silos to create a unified source of truth across the enterprise.",
        image: WD3,
      },
    ],
    serviceOverview: {
      paragraphs: [
        "End-to-End Digital Engineering. Tailored for Your Ambition. From a single MVP to a full enterprise transformation — we bring the right team, the right technology, and the right process to every engagement.",
        "Digital transformation is not a technology project — it's a business evolution. We work with enterprise leaders to modernize legacy systems, implement intelligent automation, digitize core operations, and build a technology foundation that enables sustainable competitive advantage.",
        "BUSINESS VALUE: Organizations that complete digital transformation see an average 23% increase in revenue and 45% reduction in operational costs. We guide you through every phase with minimal disruption and maximum ROI."
      ],
      approachTitle: "Transformation Strategy",
      approachSteps: [
        { label: "Audit", description: "Comprehensive analysis of existing systems and workflows." },
        { label: "Strategy", description: "Defining the technology roadmap and desired business outcomes." },
        { label: "Modernization", description: "Iterative replatforming and custom software development." },
        { label: "Adoption", description: "Ensuring organizational alignment and high user adoption rates." },
      ],
      images: [OV1, OV2],
    },
    whatWeOffer: [
      { title: "Cloud Migration", bullets: ["+ Lift & shift", "+ Replatforming", "+ Cloud-native rewrite"] },
      { title: "Automation", bullets: ["+ RPA implementation", "+ Custom workflow apps", "+ AI integration"] },
      { title: "Consulting", bullets: ["+ Tech stack selection", "+ Vendor analysis", "+ IT strategy"] },
    ],
    guidedSection: {
      heading: "Guided by Strategy,\nPowered by Technology.",
      description: "We help you navigate the complexities of enterprise transformation to emerge stronger and faster.",
      image: GUIDED,
    },
    processSteps: SHARED_PROCESS,
    faqs: SHARED_FAQS,
  },
  {
    slug: "maintenance-support",
    category: "Support",
    title: "Maintenance & Support",
    subtitle: "Always-On Engineering Support for Mission-Critical Systems",
    bannerImage: BANNER,
    whatWeDo: [
      {
        title: "Proactive Monitoring",
        description: "24/7 observability to detect and resolve issues before they impact users.",
        image: WD1,
      },
      {
        title: "Performance Optimization",
        description: "Continuous tuning of databases, APIs, and frontend assets for maximum speed.",
        image: WD2,
      },
      {
        title: "Security Updates",
        description: "Regular patching, dependency updates, and vulnerability management.",
        image: WD3,
      },
    ],
    serviceOverview: {
      paragraphs: [
        "End-to-End Digital Engineering. Tailored for Your Ambition. From a single MVP to a full enterprise transformation — we bring the right team, the right technology, and the right process to every engagement.",
        "Your product never sleeps — and neither does our support team. We offer comprehensive maintenance, monitoring, performance optimization, and enhancement services that ensure your digital systems are always secure, performant, and evolving.",
        "BUSINESS VALUE: Reduce system downtime by up to 99.9% uptime SLA. Our proactive monitoring and rapid response protocols ensure your business-critical systems are always operating at peak performance."
      ],
      approachTitle: "Support Workflow",
      approachSteps: [
        { label: "Audit", description: "Establishing baselines and setting up comprehensive observability." },
        { label: "Monitoring", description: "24/7 automated tracking of system health and error rates." },
        { label: "Response", description: "SLA-driven incident response and root cause analysis." },
        { label: "Enhancement", description: "Continuous deployment of minor features and technical debt reduction." },
      ],
      images: [OV1, OV2],
    },
    whatWeOffer: [
      { title: "Monitoring", bullets: ["+ APM integration", "+ Uptime tracking", "+ Log aggregation"] },
      { title: "Security", bullets: ["+ Dependency audits", "+ Penetration testing", "+ Compliance checks"] },
      { title: "Enhancements", bullets: ["+ Bug fixes", "+ UI tweaks", "+ Server upgrades"] },
    ],
    guidedSection: {
      heading: "Guided by Reliability,\nFocused on Uptime.",
      description: "We protect your digital investment so you can focus on growing your business.",
      image: GUIDED,
    },
    processSteps: SHARED_PROCESS,
    faqs: SHARED_FAQS,
  }

];

// Helper to find a service by slug
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
