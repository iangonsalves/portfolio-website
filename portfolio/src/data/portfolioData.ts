import {
  FaDatabase,
  FaDocker,
  FaExternalLinkAlt,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiDjango,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiStripe,
  SiTypescript,
} from "react-icons/si";
import type { Project, TechnologyGroup } from "@/components/portfolio/types";

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Backend",
    items: [
      { label: "Python", icon: FaPython, className: "bg-yellow-100 text-yellow-700" },
      { label: "Django", icon: SiDjango, className: "bg-green-100 text-green-800" },
      { label: "PHP", icon: FaPhp, className: "bg-indigo-100 text-indigo-700" },
      { label: "Laravel", icon: SiLaravel, className: "bg-red-100 text-red-700" },
      { label: "Node.js", icon: FaNodeJs, className: "bg-green-100 text-green-700" },
      { label: "REST APIs", icon: FaDatabase, className: "bg-slate-100 text-slate-700" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { label: "React", icon: FaReact, className: "bg-blue-100 text-blue-700" },
      { label: "Next.js", icon: SiNextdotjs, className: "bg-slate-100 text-slate-700" },
      { label: "TypeScript", icon: SiTypescript, className: "bg-sky-100 text-sky-700" },
      { label: "JavaScript", icon: FaJs, className: "bg-amber-100 text-amber-700" },
      { label: "HTML", icon: FaHtml5, className: "bg-orange-100 text-orange-700" },
    ],
  },
  {
    title: "Data",
    items: [
      { label: "PostgreSQL", icon: SiPostgresql, className: "bg-blue-100 text-blue-700" },
      { label: "MySQL", icon: SiMysql, className: "bg-sky-100 text-sky-700" },
      { label: "Redis", icon: SiRedis, className: "bg-rose-100 text-rose-700" },
      { label: "Prisma ORM", icon: SiPrisma, className: "bg-slate-100 text-slate-700" },
    ],
  },
  {
    title: "Platform",
    items: [
      { label: "Docker", icon: FaDocker, className: "bg-blue-500 text-white" },
      { label: "Git", icon: FaGitAlt, className: "bg-slate-100 text-slate-700" },
      { label: "Stripe API", icon: SiStripe, className: "bg-violet-100 text-violet-700" },
    ],
  },
];

const teamflowBadges = [
  { label: "React", icon: FaReact, className: "bg-blue-100 text-blue-700" },
  { label: "Next.js", icon: SiNextdotjs, className: "bg-slate-100 text-slate-700" },
  { label: "Stripe", icon: SiStripe, className: "bg-violet-100 text-violet-700" },
  { label: "Node.js", icon: FaNodeJs, className: "bg-green-100 text-green-700" },
  { label: "PostgreSQL", icon: SiPostgresql, className: "bg-blue-100 text-blue-700" },
];

export const projectCards: Project[] = [
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
  {
    slug: "ecommerce",
    title: "E-Commerce Platform",
    category: "E-Commerce Application",
    description:
      "Alex's Jersey Hub Platform is a full-stack ecommerce platform built with React and a PHP REST API, backed by PostgreSQL.",
    image: "/images/jersey_platform.png",
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
    image: "/images/restaurant.png",
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
  "Backend and Full-Stack Developer with experience building scalable web applications and APIs.",
  "Strong focus on API development, relational databases, and clean backend architecture.",
  "Comfortable working across Django/Python, PHP, and modern React frontends when needed.",
  "Hands-on with PostgreSQL, MySQL, Docker, and production-style deployments.",
];
