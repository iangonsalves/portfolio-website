import {
  FaDatabase,
  FaDocker,
  FaExternalLinkAlt,
  FaGithub,
  FaMicrochip,
  FaGitAlt,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaCode,
} from "react-icons/fa";
import {
  SiDjango,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiStripe,
  SiTypescript,
  SiGithubactions,
} from "react-icons/si";
import type { Project, TechnologyGroup } from "@/components/portfolio/types";

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Backend",
    items: [
      { label: "Python", icon: FaPython, className: "bg-yellow-100 text-yellow-700" },
      { label: "FastAPI", icon: FaPython, className: "bg-teal-100 text-teal-800" },
      { label: "Node.js", icon: FaNodeJs, className: "bg-green-100 text-green-700" },
      { label: "PHP", icon: FaPhp, className: "bg-indigo-100 text-indigo-700" },
      { label: "Laravel", icon: SiLaravel, className: "bg-rose-100 text-rose-700" },
      { label: "Django", icon: SiDjango, className: "bg-emerald-100 text-emerald-800" },
      { label: "REST APIs", icon: FaCode, className: "bg-slate-100 text-slate-700" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { label: "React", icon: FaReact, className: "bg-blue-100 text-blue-700" },
      { label: "Next.js", icon: SiNextdotjs, className: "bg-slate-100 text-slate-700" },
      { label: "TypeScript", icon: SiTypescript, className: "bg-sky-100 text-sky-700" },
      { label: "JavaScript", icon: SiJavascript, className: "bg-yellow-100 text-yellow-800" },
      { label: "HTML/CSS", icon: SiHtml5, className: "bg-orange-100 text-orange-800" },
    ],
  },
  {
    title: "Data",
    items: [
      { label: "PostgreSQL", icon: SiPostgresql, className: "bg-blue-100 text-blue-700" },
      { label: "SQL", icon: FaDatabase, className: "bg-slate-100 text-slate-700" },
      { label: "pgvector", icon: FaDatabase, className: "bg-indigo-100 text-indigo-700" },
      { label: "MySQL", icon: SiMysql, className: "bg-amber-100 text-amber-700" },
      { label: "Redis", icon: SiRedis, className: "bg-rose-100 text-rose-700" },
    ],
  },
  {
    title: "Platform",
    items: [
      { label: "Docker", icon: FaDocker, className: "bg-blue-500 text-white" },
      { label: "Git", icon: FaGitAlt, className: "bg-slate-100 text-slate-700" },
      { label: "GitHub Actions", icon: SiGithubactions, className: "bg-slate-100 text-slate-700" },
      { label: "ONNX", icon: FaMicrochip, className: "bg-violet-100 text-violet-700" },
    ],
  },
];

const knowflowBadges = [
  { label: "Next.js", icon: SiNextdotjs, className: "bg-slate-100 text-slate-700" },
  { label: "TypeScript", icon: SiTypescript, className: "bg-sky-100 text-sky-700" },
  { label: "FastAPI", icon: FaPython, className: "bg-teal-100 text-teal-800" },
  { label: "PostgreSQL", icon: SiPostgresql, className: "bg-blue-100 text-blue-700" },
  { label: "pgvector", icon: FaDatabase, className: "bg-indigo-100 text-indigo-700" },
  { label: "Docker", icon: FaDocker, className: "bg-blue-500 text-white" },
  { label: "ONNX", icon: FaMicrochip, className: "bg-violet-100 text-violet-700" },
];

const teamflowBadges = [
  { label: "React", icon: FaReact, className: "bg-blue-100 text-blue-700" },
  { label: "Next.js", icon: SiNextdotjs, className: "bg-slate-100 text-slate-700" },
  { label: "Stripe", icon: SiStripe, className: "bg-violet-100 text-violet-700" },
  { label: "Node.js", icon: FaNodeJs, className: "bg-green-100 text-green-700" },
  { label: "PostgreSQL", icon: SiPostgresql, className: "bg-blue-100 text-blue-700" },
];

export const featuredProject: Project = {
  slug: "knowflow",
  title: "KnowFlow",
  category: "Business Knowledge & Document Intelligence Platform",
  description:
    "Full-stack platform for securely managing business documents and retrieving source-backed evidence through hybrid semantic and full-text search.",
  image: "/images/knowflow-ask.png",
  imageAlt:
    "KnowFlow Ask page showing the annual leave evidence of 25 working days and page 2 source provenance",
  badges: knowflowBadges,
  bullets: [
    "Tenant-aware workspaces with Owner and Member authorization",
    "Durable PostgreSQL jobs process PDFs into page-aware searchable chunks",
    "Hybrid PostgreSQL FTS and pgvector retrieval combined with Reciprocal Rank Fusion",
    "Source-backed evidence with document and page provenance",
  ],
  architecture: [
    { label: "Embeddings", value: "E5-small-v2 · ONNX Runtime · local CPU" },
    { label: "Identity", value: "WorkOS AuthKit" },
    { label: "Hosted on", value: "Render · Neon PostgreSQL and private object storage" },
  ],
  links: [
    {
      label: "Live Demo",
      href: "https://knowflow-web.onrender.com",
      variant: "primary",
      icon: FaExternalLinkAlt,
    },
    {
      label: "GitHub",
      href: "https://github.com/iangonsalves/knowflow",
      variant: "secondary",
      icon: FaGithub,
    },
  ],
};

export const selectedProjects: Project[] = [
  {
    slug: "teamflow",
    title: "TeamFlow SaaS Platform",
    category: "SaaS Platform",
    description:
      "Production-style SaaS platform centered on secure workspaces, subscription billing, and structured team collaboration.",
    image: "/images/teamflow_saas_platform.png",
    imageAlt: "Screenshot of TeamFlow SaaS Platform",
    badges: teamflowBadges,
    bullets: [
      "Multi-tenant workspace architecture with tenant-aware data separation across teams and projects",
      "Role-based access control for administrators, managers, and members within each workspace",
      "Stripe-powered subscription billing flows with plan-based access and account lifecycle handling",
      "Project and task management features designed for collaboration, ownership tracking, and status updates",
      "PostgreSQL and Prisma data modeling for structured, production-style relational workflows",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://teamflow-saas-platform.vercel.app/",
        variant: "primary",
        icon: FaExternalLinkAlt,
      },
      {
        label: "GitHub",
        href: "https://github.com/iangonsalves/teamflow-saas-platform",
        variant: "secondary",
        icon: FaGithub,
      },
    ],
  },
];

export const otherProjects: Project[] = [
  {
    slug: "ecommerce",
    title: "E-Commerce Platform",
    category: "E-Commerce Application",
    description:
      "Alex's Jersey Hub Platform is a full-stack ecommerce platform built with React and a PHP REST API, backed by PostgreSQL.",
    image: "/images/jersey_platform.webp",
    imageAlt: "Screenshot of E-Commerce Platform",
    badges: [
      { label: "React", icon: FaReact, className: "bg-blue-100 text-blue-700" },
      { label: "PHP", icon: FaPhp, className: "bg-indigo-100 text-indigo-700" },
      { label: "PostgreSQL", icon: SiPostgresql, className: "bg-blue-100 text-blue-700" },
    ],
    bullets: [
      "React UI with authentication, product browsing, and a persistent cart",
      "Stripe payment processing for checkout (no webhooks)",
      "RESTful backend with PostgreSQL for products, users, and orders",
      "Admin panel for inventory management and product updates",
      "Dockerized setup to run the full stack consistently",
    ],
    links: [
      { label: "Live Demo", href: "https://alexjerseyhubfrontend.onrender.com/", variant: "primary", icon: FaExternalLinkAlt },
      { label: "GitHub", href: "https://github.com/iangonsalves/ecommerce-shopping-platform", variant: "secondary", icon: FaGithub },
    ],
  },
  {
    slug: "restaurant",
    title: "Restaurant Booking System",
    category: "Booking Platform",
    description:
      "Restaurant management and online booking system built with Django and MySQL.",
    image: "/images/restaurant.webp",
    imageAlt: "Screenshot of Restaurant Booking System",
    badges: [
      { label: "Django", icon: SiDjango, className: "bg-green-100 text-green-800" },
      { label: "MySQL", icon: SiMysql, className: "bg-amber-100 text-amber-700" },
      { label: "Redis", icon: SiRedis, className: "bg-rose-100 text-rose-700" },
    ],
    bullets: [
      "Customer-facing pages for menu browsing and reservations",
      "Reservation creation, viewing, and management with server-side validation",
      "Admin-friendly workflows to manage restaurant info and bookings",
      "Clean, responsive UI designed for everyday operational use",
    ],
    links: [
      { label: "Live Demo", href: "https://restaurantbookingservice.onrender.com", variant: "primary", icon: FaExternalLinkAlt },
      { label: "GitHub", href: "https://github.com/iangonsalves/RestaurantBookingService", variant: "secondary", icon: FaGithub },
    ],
  },
];

export const aboutPoints = [
  "Backend services and API development",
  "Relational data modeling and PostgreSQL",
  "Full-stack product implementation",
  "Practical AI integration with source-grounded retrieval",
];
