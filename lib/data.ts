import {
  BarChart3,
  Palette,
  Briefcase,
  Cpu,
  Languages,
  Sparkles,
  type LucideIcon
} from "lucide-react";

export type Category = {
  slug: string;
  title: string;
  description: string;
  courseCount: number;
  icon: LucideIcon;
};

export const categories: Category[] = [
  {
    slug: "data-science",
    title: "Data Science",
    description: "From statistics fundamentals to applied machine learning.",
    courseCount: 142,
    icon: BarChart3
  },
  {
    slug: "design",
    title: "Design",
    description: "Visual, product, and systems design for working teams.",
    courseCount: 98,
    icon: Palette
  },
  {
    slug: "business",
    title: "Business",
    description: "Operating, strategy, and leadership essentials.",
    courseCount: 167,
    icon: Briefcase
  },
  {
    slug: "engineering",
    title: "Engineering",
    description: "Modern software, systems, and platform engineering.",
    courseCount: 213,
    icon: Cpu
  },
  {
    slug: "languages",
    title: "Languages",
    description: "Speak and write with confidence in eight languages.",
    courseCount: 54,
    icon: Languages
  },
  {
    slug: "personal-growth",
    title: "Personal Growth",
    description: "Habits, communication, and creative practice.",
    courseCount: 76,
    icon: Sparkles
  }
];

export type Course = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  instructor: string;
  instructorTitle: string;
  rating: number;
  reviews: number;
  durationHours: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  thumbnail: string;
  summary: string;
  whatYoullLearn: string[];
  modules: { title: string; lessons: number; minutes: number }[];
  tags: string[];
};

export const courses: Course[] = [
  {
    slug: "applied-machine-learning",
    title: "Applied Machine Learning with Python",
    category: "Data Science",
    categorySlug: "data-science",
    instructor: "Dr. Hannah Okafor",
    instructorTitle: "Principal Data Scientist, Northwind Labs",
    rating: 4.9,
    reviews: 3142,
    durationHours: 42,
    level: "Intermediate",
    price: 89,
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A hands-on course covering the full machine learning workflow — from clean data preparation to model evaluation and shipping reliable predictions into production.",
    whatYoullLearn: [
      "Build and evaluate supervised and unsupervised models",
      "Engineer features that hold up in production",
      "Tune, version, and monitor models confidently",
      "Communicate trade-offs to product and engineering peers"
    ],
    modules: [
      { title: "Foundations and tooling", lessons: 8, minutes: 96 },
      { title: "Supervised learning in practice", lessons: 12, minutes: 184 },
      { title: "Unsupervised and clustering", lessons: 9, minutes: 120 },
      { title: "Evaluation and reliability", lessons: 10, minutes: 142 },
      { title: "Deployment and monitoring", lessons: 7, minutes: 98 }
    ],
    tags: ["Python", "scikit-learn", "Production ML"]
  },
  {
    slug: "product-design-fundamentals",
    title: "Product Design Fundamentals",
    category: "Design",
    categorySlug: "design",
    instructor: "Marco Bellucci",
    instructorTitle: "Design Lead, Linear",
    rating: 4.8,
    reviews: 2210,
    durationHours: 28,
    level: "Beginner",
    price: 59,
    thumbnail:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Learn how working designers think — from research and information architecture to interface craft, design systems, and effective stakeholder collaboration.",
    whatYoullLearn: [
      "Translate research into clear product decisions",
      "Build interfaces that respect hierarchy and rhythm",
      "Use components and tokens as design infrastructure",
      "Present and defend design work without ego"
    ],
    modules: [
      { title: "Research that earns its keep", lessons: 6, minutes: 72 },
      { title: "Information architecture", lessons: 7, minutes: 88 },
      { title: "Interface craft", lessons: 10, minutes: 124 },
      { title: "Design systems in practice", lessons: 8, minutes: 96 }
    ],
    tags: ["Figma", "Research", "Design Systems"]
  },
  {
    slug: "modern-typescript",
    title: "Modern TypeScript for React Developers",
    category: "Engineering",
    categorySlug: "engineering",
    instructor: "Priya Raman",
    instructorTitle: "Staff Engineer, Vercel",
    rating: 4.9,
    reviews: 4080,
    durationHours: 22,
    level: "Intermediate",
    price: 79,
    thumbnail:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Push your TypeScript past the basics — generics, conditional types, and patterns that scale to large React codebases without becoming clever for its own sake.",
    whatYoullLearn: [
      "Model real product domains with precise types",
      "Use generics and conditional types with intent",
      "Type APIs end-to-end, from server to client",
      "Refactor confidently with the compiler on your side"
    ],
    modules: [
      { title: "Types as documentation", lessons: 6, minutes: 64 },
      { title: "Generics in real code", lessons: 8, minutes: 102 },
      { title: "Patterns at scale", lessons: 9, minutes: 118 },
      { title: "End-to-end type safety", lessons: 6, minutes: 76 }
    ],
    tags: ["TypeScript", "React", "Next.js"]
  },
  {
    slug: "leading-without-authority",
    title: "Leading Without Authority",
    category: "Business",
    categorySlug: "business",
    instructor: "Ezra Whitfield",
    instructorTitle: "Former VP Operations, Asana",
    rating: 4.7,
    reviews: 1854,
    durationHours: 14,
    level: "Beginner",
    price: 49,
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Move work forward across teams you don't manage. Build influence, run honest meetings, and turn ambiguity into momentum.",
    whatYoullLearn: [
      "Build credibility across functions quickly",
      "Run meetings that earn the time they take",
      "Negotiate scope without losing trust",
      "Lead through ambiguity with steady judgement"
    ],
    modules: [
      { title: "Credibility, not authority", lessons: 5, minutes: 58 },
      { title: "Running good meetings", lessons: 6, minutes: 64 },
      { title: "Scope and stakeholders", lessons: 5, minutes: 52 },
      { title: "Operating under ambiguity", lessons: 4, minutes: 48 }
    ],
    tags: ["Leadership", "Communication", "Cross-functional"]
  },
  {
    slug: "spanish-for-real-conversations",
    title: "Spanish for Real Conversations",
    category: "Languages",
    categorySlug: "languages",
    instructor: "Lucía Fernández",
    instructorTitle: "Author, Hablar Sin Miedo",
    rating: 4.8,
    reviews: 2670,
    durationHours: 32,
    level: "Beginner",
    price: 39,
    thumbnail:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A spoken-first Spanish course built around the conversations you'll actually have — ordering, traveling, working, and making friends.",
    whatYoullLearn: [
      "Hold a natural conversation from week three",
      "Move between past, present and future fluidly",
      "Train your ear with real accents",
      "Build vocabulary that survives the moment"
    ],
    modules: [
      { title: "Sounds and rhythm", lessons: 8, minutes: 80 },
      { title: "Everyday conversation", lessons: 12, minutes: 144 },
      { title: "Talking about time", lessons: 9, minutes: 108 },
      { title: "Travel and work", lessons: 7, minutes: 84 }
    ],
    tags: ["Spanish", "Conversation", "A1–B1"]
  },
  {
    slug: "writing-with-clarity",
    title: "Writing with Clarity",
    category: "Personal Growth",
    categorySlug: "personal-growth",
    instructor: "Naomi Park",
    instructorTitle: "Senior Editor, The Atlantic",
    rating: 4.9,
    reviews: 1920,
    durationHours: 12,
    level: "Beginner",
    price: 39,
    thumbnail:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A short, dense course on writing that earns attention. Sentence-level craft, structure, editing, and the discipline behind a clear draft.",
    whatYoullLearn: [
      "Write sentences a reader doesn't fight",
      "Build paragraphs around one good idea",
      "Edit your own work with distance",
      "Find a voice without performing one"
    ],
    modules: [
      { title: "Sentences", lessons: 6, minutes: 60 },
      { title: "Paragraphs and structure", lessons: 5, minutes: 56 },
      { title: "Editing yourself", lessons: 4, minutes: 44 },
      { title: "Voice and restraint", lessons: 3, minutes: 36 }
    ],
    tags: ["Writing", "Editing", "Communication"]
  },
  {
    slug: "data-visualization-in-d3",
    title: "Data Visualization in D3",
    category: "Data Science",
    categorySlug: "data-science",
    instructor: "Tomás Andrade",
    instructorTitle: "Data Viz Engineer, The Pudding",
    rating: 4.7,
    reviews: 980,
    durationHours: 18,
    level: "Intermediate",
    price: 69,
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Move beyond charting libraries. Build expressive, accessible, performant visualizations using D3 and modern web standards.",
    whatYoullLearn: [
      "Bind data to the DOM with intent",
      "Design encodings that respect the data",
      "Handle interaction and animation tastefully",
      "Make your charts accessible to everyone"
    ],
    modules: [
      { title: "Data, scales, and shape", lessons: 6, minutes: 72 },
      { title: "Encodings with purpose", lessons: 5, minutes: 60 },
      { title: "Interaction and motion", lessons: 5, minutes: 64 },
      { title: "Accessibility and craft", lessons: 4, minutes: 48 }
    ],
    tags: ["D3", "SVG", "Visualization"]
  },
  {
    slug: "interviewing-engineers-well",
    title: "Interviewing Engineers Well",
    category: "Business",
    categorySlug: "business",
    instructor: "Devon Mitchell",
    instructorTitle: "Engineering Director, Stripe",
    rating: 4.8,
    reviews: 1340,
    durationHours: 9,
    level: "Intermediate",
    price: 49,
    thumbnail:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Run interviews that predict performance, not pedigree. A practical course for hiring managers and interviewers who want to do this seriously.",
    whatYoullLearn: [
      "Design loops that test the actual job",
      "Calibrate with peers, not in a vacuum",
      "Reduce noise from bias and panel drift",
      "Make decisions you can defend in writing"
    ],
    modules: [
      { title: "What you're actually measuring", lessons: 4, minutes: 44 },
      { title: "Loop design", lessons: 5, minutes: 58 },
      { title: "Calibration in practice", lessons: 4, minutes: 46 },
      { title: "Decisions and feedback", lessons: 3, minutes: 36 }
    ],
    tags: ["Hiring", "Engineering Management"]
  }
];

export const trustedBy = [
  "Northwind",
  "Acme University",
  "Helio",
  "Brightline",
  "Atlas Co.",
  "Meridian"
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I'd tried three other platforms before this. The difference is the editing — every lesson respects your time and ships you forward.",
    name: "Amara Singh",
    role: "Product Manager, Helio",
    avatar: "https://i.pravatar.cc/120?img=47"
  },
  {
    quote:
      "Six months in and I've shipped two ML models into production. The instructors actually answer questions like working engineers.",
    name: "Jonas Weber",
    role: "Software Engineer, Brightline",
    avatar: "https://i.pravatar.cc/120?img=12"
  },
  {
    quote:
      "Our entire design team is on the platform now. We've replaced three internal training programs with three of their courses.",
    name: "Renata Ortiz",
    role: "Head of Design, Atlas Co.",
    avatar: "https://i.pravatar.cc/120?img=32"
  }
];

export type FAQItem = { q: string; a: string };

export const faqs: FAQItem[] = [
  {
    q: "Is there a free tier?",
    a: "Yes. The Free plan gives you full access to a curated set of introductory courses and limited access to advanced material. No credit card required."
  },
  {
    q: "How long do I have access to courses I purchase?",
    a: "Lifetime access. Once a course is in your library, you keep it — including every future update from the instructor."
  },
  {
    q: "Do you issue certificates?",
    a: "Pro and Teams plans include verified certificates of completion that you can share on LinkedIn, in PDF, or via a public link."
  },
  {
    q: "Can my team use one shared account?",
    a: "No, and we'd gently push back on doing that — your progress, certificates, and recommendations are tied to your individual learner profile. Teams plans handle multiple seats cleanly."
  },
  {
    q: "What if a course isn't a good fit?",
    a: "We have a 14-day refund window on any paid course. No forms, no friction — request it from your dashboard."
  },
  {
    q: "Do you support offline learning?",
    a: "Yes. The mobile apps support downloading lessons for offline viewing, including subtitles and exercises."
  }
];

export type PricingPlan = {
  name: string;
  price: number | "Custom";
  cadence?: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: 0,
    cadence: "forever",
    description: "Start exploring with a curated library of introductory courses.",
    features: [
      "Access to 40+ intro courses",
      "Community discussions",
      "Progress tracking",
      "Mobile and web access"
    ],
    cta: "Start free"
  },
  {
    name: "Pro",
    price: 18,
    cadence: "per month, billed yearly",
    description: "Unlimited access to the full catalog and verified certificates.",
    features: [
      "Unlimited course access",
      "Verified certificates",
      "Offline mobile downloads",
      "Priority Q&A with instructors",
      "Learning paths and projects"
    ],
    cta: "Start 14-day trial",
    highlight: true
  },
  {
    name: "Teams",
    price: "Custom",
    description: "Manage learning across your team or organization with admin tooling.",
    features: [
      "Everything in Pro",
      "Admin dashboard and seat management",
      "Custom learning paths",
      "Usage analytics and reporting",
      "SSO and SCIM provisioning",
      "Dedicated success manager"
    ],
    cta: "Talk to sales"
  }
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readMinutes: number;
  category: string;
  cover: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-finish-a-course",
    title: "How to actually finish the course you started",
    excerpt:
      "Most learners drop off in week three. The reason isn't motivation — it's the absence of a structure. Here's the one we recommend.",
    author: "Naomi Park",
    date: "May 14, 2026",
    readMinutes: 6,
    category: "Learning",
    cover:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "what-we-look-for-in-instructors",
    title: "What we look for in an instructor",
    excerpt:
      "We turn down nine in ten instructor applications. Here's the bar — and why we think it's worth holding.",
    author: "Devon Mitchell",
    date: "April 28, 2026",
    readMinutes: 8,
    category: "Inside",
    cover:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "the-quiet-redesign",
    title: "The quiet redesign of our course player",
    excerpt:
      "We shipped a new player last month. No press release — just two months of small, deliberate changes. Here's what we learned.",
    author: "Marco Bellucci",
    date: "April 9, 2026",
    readMinutes: 7,
    category: "Craft",
    cover:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "data-science-without-the-hype",
    title: "Data science without the hype",
    excerpt:
      "Most teams don't need a model. They need clean numbers, honest dashboards, and someone willing to read them.",
    author: "Hannah Okafor",
    date: "March 22, 2026",
    readMinutes: 9,
    category: "Data",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "writing-better-feedback",
    title: "Writing better feedback for learners",
    excerpt:
      "Feedback that lands is short, specific, and kind. We trained our instructor reviewers on a three-part frame — and it's working.",
    author: "Lucía Fernández",
    date: "March 3, 2026",
    readMinutes: 5,
    category: "Teaching",
    cover:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "year-in-review-2025",
    title: "A year in review: 2025",
    excerpt:
      "Two million learners, 180 countries, and a long list of things we want to do better. Our honest annual letter.",
    author: "Ezra Whitfield",
    date: "January 12, 2026",
    readMinutes: 11,
    category: "Inside",
    cover:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
  }
];

export const stats = [
  { value: "94%", label: "Course completion rate" },
  { value: "2M+", label: "Active learners" },
  { value: "180+", label: "Countries reached" },
  { value: "4.8★", label: "Average instructor rating" }
];

export const team = [
  {
    name: "Ezra Whitfield",
    role: "Co-founder & CEO",
    bio: "Former VP Operations at Asana. Spent fifteen years building learning programs at scale.",
    avatar: "https://i.pravatar.cc/200?img=68"
  },
  {
    name: "Naomi Park",
    role: "Co-founder & Head of Content",
    bio: "Senior Editor at The Atlantic. Believes good teaching is mostly good editing.",
    avatar: "https://i.pravatar.cc/200?img=49"
  },
  {
    name: "Priya Raman",
    role: "Chief Technology Officer",
    bio: "Built developer platforms at Vercel and Stripe. Quietly opinionated about TypeScript.",
    avatar: "https://i.pravatar.cc/200?img=23"
  },
  {
    name: "Marco Bellucci",
    role: "Head of Design",
    bio: "Design lead at Linear. Believes restraint is a feature.",
    avatar: "https://i.pravatar.cc/200?img=14"
  }
];
