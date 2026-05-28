export const site = {
  name: "Anurag Patnaik",
  initials: "AP",
  tagline: "Building the future of work in shared, immersive environments.",
  bio: "Head of Cloud and AI Engineering for Autodesk's Extended Reality division. 17 years building cloud products, data platforms, and AI/XR systems at Autodesk and AWS — directing launches that have generated over $1.8B in revenue. Work has been covered by Time, Fast Company, AEC Magazine, and the LA28 Olympics. Industry mentor at Cornell University and member of the NSF-funded Computational Sustainability research team.",
  location: "Portland, OR",
  email: "anurag.patnaik@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/patnaikanurag/",
  },
} as const;

export const stats = [
  { label: "Years leading", value: "17" },
  { label: "Revenue impact", value: "$1.8B+" },
  { label: "Users served", value: "4.6M" },
  { label: "Teams led", value: "8" },
] as const;

export type Role = {
  company: string;
  org?: string;
  title: string;
  start: string;
  end: string;
  summary: string;
  highlights?: string[];
  link?: string;
};

export const roles: Role[] = [
  {
    company: "Autodesk",
    org: "Extended Reality (XR)",
    title: "Head of Cloud and AI Engineering",
    start: "Jan 2024",
    end: "Present",
    summary:
      "Lead 4 global teams — Cloud Engineering, Web Technology, Infrastructure, and Data Engineering — building Autodesk Workshop XR, a collaborative VR platform for architecture, engineering, and construction. Set XR strategy and roadmap inside Autodesk Incubation; present quarterly to Autodesk's CEO and C-Suite.",
    highlights: [
      "Workshop XR launched at Autodesk University 2024; grew monthly active users 10× in under 6 months",
      "Workshop XR featured in Time, Fast Company, AEC Magazine, and named part of Autodesk's LA28 Olympics partnership",
      "Direct GenAI agentic workflows using proprietary LLMs for real-time XR design automation across AWS and Azure",
      "Own a $10M+ operational budget across 5 regions",
    ],
    link: "https://www.autodesk.com",
  },
  {
    company: "Amazon Web Services",
    org: "Foundational Data Services",
    title: "Team Lead — Amazon Managed Grafana",
    start: "Sept 2021",
    end: "Jan 2024",
    summary:
      "One of the founding engineers on AWS Foundational Data Services. Took Amazon Managed Grafana from ideation to a Tier-1 AWS product — a leading tool in cloud observability that has generated over $141M in revenue and was included in the 2024 Gartner Magic Quadrant for Observability Platforms.",
    highlights: [
      "Re-architected the AMG data platform, boosting YoY growth by 250% in 2023",
      "Led compliance work that unlocked $4M in revenue and $100M in opportunity cost",
      "Re-architected data platform now used across other AWS data services and by AWS partner Grafana Labs",
    ],
  },
  {
    company: "Autodesk",
    org: "Fusion Cloud Products",
    title: "Founding Senior Engineer — Fusion Data",
    start: "Nov 2013",
    end: "Aug 2021",
    summary:
      "Founding senior engineer on Autodesk Fusion 360 — architecting the data systems that drove Autodesk's transition from desktop CAD to a cloud-native platform. Fusion 360 grew under my tenure from a few hundred MAUs to a market leader with 4.6M+ users worldwide.",
    highlights: [
      "Estimated to have generated $1.7B in revenue over product lifetime; led CAD market with 31.4% share (2022)",
      "Designed High-Frequency Data Management (HFDM) protocol now powering Autodesk Generative Design",
      "Adopted by NASA, SpaceX, Toyota, Ford, Lockheed Martin, Yamaha, and Logitech for design and manufacturing",
      "Headless Fusion APIs I built now power Autodesk's Generative AI offerings",
    ],
  },
  {
    company: "CSDC Systems Inc.",
    title: "Technical Consultant",
    start: "Feb 2008",
    end: "Oct 2013",
    summary:
      "Led a team deploying information systems across 10+ city and state governments in the US and Canada.",
  },
];

export type Press = {
  outlet: string;
  title: string;
  product: string;
  excerpt: string;
  url: string;
};

export const press: Press[] = [
  {
    outlet: "Time",
    title: "How Virtual Reality Could Transform Architecture",
    product: "Autodesk Workshop XR",
    excerpt:
      "“Theoretically, dozens of different people working on various aspects of the project could convene here, hashing out decisions in real time before a single brick is laid.”",
    url: "https://time.com/6964951/vr-virtual-reality-architecture-meta-quest/",
  },
  {
    outlet: "Fast Company",
    title: "The wild ways VR is changing how buildings are designed",
    product: "Autodesk Workshop XR",
    excerpt:
      "“Instead of that misaligned pipe being discovered by a contractor during construction, the mistake can be detected and fixed in an immersive 3D model before it's an actual problem.”",
    url: "https://www.fastcompany.com/91011820/the-wild-ways-vr-is-changing-how-buildings-are-designed",
  },
  {
    outlet: "LA28 Olympics",
    title:
      "Autodesk named Official Design and Make Platform of the LA28 Olympic and Paralympic Games",
    product: "Autodesk Workshop XR",
    excerpt:
      "Autodesk's software — including Workshop XR — will support LA28's $1B+ temporary overlay and construction plan, incorporating sustainable design principles.",
    url: "https://la28.org/en/newsroom/autodesk-named-official-design-and-make-platform-of-la28.html",
  },
  {
    outlet: "AEC Magazine",
    title: "Autodesk charts its AI future",
    product: "Autodesk Workshop XR",
    excerpt:
      "Workshop XR is integrated into Autodesk Docs, enabling immersive design-review data to be centrally managed and accessible for AI analysis — powering AI-driven insights across the platform.",
    url: "https://aecmag.com/features/autodesk-charts-its-ai-future/",
  },
  {
    outlet: "NASCAR.com",
    title: "Stewart-Haas Racing, Autodesk extend partnership",
    product: "Autodesk Fusion 360",
    excerpt:
      "“We use their software a ton at the race shop to be able to design parts and do different things, so they're a huge part of what we do.”",
    url: "https://www.nascar.com/news-media/2021/06/02/stewart-haas-racing-autodesk-sponsorship-cup-series/",
  },
];

export type Recognition = {
  title: string;
  org: string;
  detail?: string;
  year: string;
};

export const recognitions: Recognition[] = [
  {
    title: "External Reviewer",
    org: "SIGGRAPH 2026",
    detail:
      "Invitation-only review panel selected by the International Program Committee — the most prestigious venue in computer graphics.",
    year: "2025",
  },
  {
    title: "Hackathon Judge",
    org: "DeepLearning.AI",
    detail:
      "Invite-only judging panel of ~80 AI experts, founded by Andrew Ng's DeepLearning.AI.",
    year: "2025",
  },
  {
    title: "Included in 2024 Gartner Magic Quadrant for Observability Platforms",
    org: "Amazon Managed Grafana",
    detail:
      "AWS product I led from ideation to production was recognized in Gartner's authoritative annual evaluation of the observability market.",
    year: "2024",
  },
  {
    title: "Research Team Member, $10M NSF Grant",
    org: "Cornell University",
    detail:
      "Selected through a competitive interview process for the National Science Foundation's Computational Sustainability research program.",
    year: "2011",
  },
];

export type Engagement = {
  role: string;
  org: string;
  detail?: string;
  years: string;
};

export const engagements: Engagement[] = [
  {
    role: "Industry Mentor",
    org: "Cornell University",
    detail: "Engineering Leadership Program — Spring semester each year",
    years: "2021 — Present",
  },
  {
    role: "Guest Speaker",
    org: "University of Washington",
    detail: "Foster School of Business — Executive MBA Q&A panel",
    years: "Apr 2025",
  },
  {
    role: "Guest Speaker",
    org: "Georgia Tech",
    detail: "GTXR Club — Student networking panel on the XR industry",
    years: "Feb 2025",
  },
  {
    role: "Guest Speaker",
    org: "Cornell University",
    detail:
      "WE LEAD (Women in Leadership) Engineering panel, alongside Col. Matthew P. Flahive (US Space Force)",
    years: "Apr 2024",
  },
  {
    role: "Guest Speaker",
    org: "Cornell University",
    detail: "COMPASS Engineering Leadership Program — alumni industry panel",
    years: "Nov 2023",
  },
];

export type Conference = {
  name: string;
  detail: string;
  year: string;
};

export const conferences: Conference[] = [
  {
    name: "AWE (Augmented World Expo)",
    detail: "Presentation — Transforming AEC: Autodesk Workshop XR and Beyond",
    year: "2024",
  },
  {
    name: "Autodesk University",
    detail: "Workshop XR launch at Autodesk's annual conference (12,000+ attendees)",
    year: "2024",
  },
  {
    name: "BIM World Paris",
    detail: "Workshop XR showcase",
    year: "2024",
  },
  {
    name: "BIM World Munich",
    detail: "Workshop XR showcase",
    year: "2024",
  },
  {
    name: "AWS re:Invent",
    detail: "Amazon Managed Grafana showcased by customer FINRA",
    year: "2022",
  },
];

export type Paper = {
  title: string;
  venue: string;
  product: string;
  excerpt: string;
  url: string;
  year: string;
};

export const papers: Paper[] = [
  {
    title:
      "Generative design and digital manufacturing: using AI and robots to build lightweight instrument structures",
    venue: "NASA NTRS / SPIE 2022",
    product: "Autodesk Fusion 360",
    excerpt:
      "NASA Goddard's Ryan McClelland on using Fusion 360 generative design and robotic manufacturing to evolve spacecraft instrument structures — stiffer, lighter, and built in hours instead of days.",
    url: "https://ntrs.nasa.gov/citations/20220012523",
    year: "2022",
  },
  {
    title: "Evolved Structures — Generative Design at NASA Goddard",
    venue: "NASA Goddard ETD",
    product: "Autodesk Fusion 360",
    excerpt:
      "NASA Goddard's Evolved Structures capability — AI-driven generative design applied to flight hardware including the EXCITE balloon mission, improving structural performance 3× and cutting development time/cost 10×.",
    url: "https://etd.gsfc.nasa.gov/capabilities/capabilities-listing/generative-design/",
    year: "2024",
  },
  {
    title: "Designing an Interplanetary Lander with Generative Design",
    venue: "NASA JPL × Autodesk",
    product: "Autodesk Generative Design",
    excerpt:
      "NASA's Jet Propulsion Lab and Autodesk used generative design to develop a lander concept for icy moons of Jupiter and Saturn — reducing external structure mass by 35%.",
    url: "https://adsknews.autodesk.com/en/news/nasas-jet-propulsion-lab-teams-autodesk-explore-new-approaches-designing-interplanetary-lander/",
    year: "2018",
  },
  {
    title: "Moon Camp Challenge — Designing a Lunar Habitat in Fusion 360",
    venue: "European Space Agency",
    product: "Autodesk Fusion 360",
    excerpt:
      "ESA and the Airbus Foundation's education program where students design lunar settlements in Fusion 360 — hundreds of teams across 17 countries participating in the advanced Pioneers category.",
    url: "https://www.esa.int/Education/Moon_Camp/Fusion_360",
    year: "2023",
  },
  {
    title:
      "Fusion 360 Gallery: A Dataset and Environment for Programmatic CAD Construction from Human Design Sequences",
    venue: "arXiv / SIGGRAPH 2021",
    product: "Autodesk Fusion 360",
    excerpt:
      "Autodesk AI Lab and MIT CSAIL release 8,625 human CAD design sequences as a dataset for learning programmatic CAD reconstruction — and an interactive Gym environment for training agents.",
    url: "https://arxiv.org/abs/2010.02392",
    year: "2021",
  },
];

export const trustedBy = [
  "NASA",
  "SpaceX",
  "European Space Agency",
  "MIT",
  "LA28 Olympics",
  "Toyota",
  "Ford",
  "Lockheed Martin",
  "Yamaha",
  "Logitech",
  "NASCAR (Stewart-Haas Racing)",
] as const;

export type Degree = {
  school: string;
  degree: string;
  location: string;
  year: string;
};

export const education: Degree[] = [
  {
    school: "Cornell University",
    degree: "Master of Engineering, Computer Science",
    location: "Ithaca, NY",
    year: "2011",
  },
  {
    school: "Manipal Institute of Technology",
    degree: "Bachelor of Engineering, Electronics and Communication",
    location: "Manipal, India",
    year: "2008",
  },
];

export const expertise = [
  "Leadership & Communication",
  "AI & Machine Learning",
  "Extended Reality (XR)",
  "Distributed Systems",
  "Data Platforms",
  "AWS / Azure / GCP",
  "Startup / Incubation",
  "Research",
] as const;
