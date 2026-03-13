"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGit,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiDjango,
  SiGitlab,
  SiLaravel,
  SiMariadb,
  SiMysql,
  SiPostgresql,
  SiStripe,
} from "react-icons/si";

export default function Home() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const prefix = process.env.NODE_ENV === "production" ? "/portfolio-website" : "";
  return (
    <main className="flex flex-col gap-24 max-w-4xl mx-auto w-full px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-4" id="hero">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700">Hi, I&#39;m Ian Gonsalves</h1>
        <p className="text-lg text-gray-700 max-w-xl">
          Backend and Full-Stack Developer specializing in building scalable web applications and RESTful APIs.<br />
          Experienced with Django, Laravel, Node.js, and PostgreSQL.<br />
          Welcome to my portfolio!
        </p>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Technologies</h2>
        <div className="w-full max-w-4xl rounded-xl border border-gray-200 bg-white shadow-sm px-6 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Backend</p>
              <div className="flex flex-wrap gap-3 justify-start">
                <span className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium">
                  <FaPython /> Python
                </span>
                <span className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium">
                  <FaDatabase /> REST APIs
                </span>
                <span className="flex items-center gap-2 bg-green-200 text-green-800 px-4 py-2 rounded-full font-medium">
                  <SiDjango /> Django
                </span>
                <span className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium">
                  <FaPhp /> PHP
                </span>
                <span className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium">
                  <SiLaravel /> Laravel
                </span>
                <span className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                  <FaNodeJs /> Node.js
                </span>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-2">Frontend</p>
              <div className="flex flex-wrap gap-3 justify-start">
                <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                  <FaReact /> React
                </span>
                <span className="flex items-center gap-2 bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full font-medium">
                  <FaJs /> JavaScript
                </span>
                <span className="flex items-center gap-2 bg-orange-200 text-orange-800 px-4 py-2 rounded-full font-medium">
                  <FaHtml5 /> HTML
                </span>
                <span className="flex items-center gap-2 bg-blue-300 text-blue-900 px-4 py-2 rounded-full font-medium">
                  <FaCss3Alt /> CSS
                </span>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-2">Databases</p>
              <div className="flex flex-wrap gap-3 justify-start">
                <span className="flex items-center gap-2 bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">
                  <SiPostgresql /> PostgreSQL
                </span>
                <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                  <SiMysql /> MySQL
                </span>
                <span className="flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">
                  <SiMariadb /> MariaDB
                </span>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-2">DevOps</p>
              <div className="flex flex-wrap gap-3 justify-start">
                <span className="flex items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded-full font-medium">
                  <FaDocker /> Docker
                </span>
                <span className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-medium">
                  <FaGit /> Git
                </span>
                <span className="flex items-center gap-2 bg-orange-200 text-orange-800 px-4 py-2 rounded-full font-medium">
                  <SiGitlab /> CI/CD
                </span>
              </div>
            </div>

            <div className="sm:col-span-2">
              <p className="font-semibold text-gray-900 mb-2">Integrations</p>
              <div className="flex flex-wrap gap-3 justify-start">
                <span className="flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full font-medium">
                  <SiStripe /> Stripe API
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Projects</h2>
        <div className="flex flex-col gap-6 w-full">
          {/* Project Card 1 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col sm:flex-row gap-6 border border-gray-100 items-center animate-fade-in">
            {/* Image on the left */}
            <div className="flex-shrink-0 w-full sm:w-[350px] h-[220px] flex items-center justify-center mb-4 sm:mb-0 relative group">
              <Image
                src={prefix + "/images/jersey_platform.png"}
                alt="Screenshot of Online Football Jersey Shop"
                width={350}
                height={220}
                className="object-contain w-full h-full rounded cursor-pointer"
                onClick={() => setModalImage('/images/jersey_platform.png')}
              />
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-90 transition-opacity pointer-events-none z-10">
                Click to view
              </span>
            </div>
            {/* Info on the right */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-extrabold text-2xl sm:text-3xl text-gray-900 mb-2 font-sans">E-Commerce Platform</h3>
              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold"><FaReact /> React.js</span>
                <span className="flex items-center gap-1 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold"><FaPhp /> PHP</span>
                <span className="flex items-center gap-1 bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold"><SiPostgresql /> PostgreSQL</span>
                <span className="flex items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded-full font-medium"><FaDocker /> Docker</span>
                <span className="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold"><FaDatabase /> REST API</span>
                <span className="flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold"> Admin Panel</span>
              </div>
              <div className="space-y-2 text-gray-700 text-base font-sans mb-2">
                <p>
                  Alex&#39;s Jersey Hub Platfrom is a full-stack ecommerce platform built with React and a PHP REST API, backed by PostgreSQL.
                </p>
                <ul className="list-disc list-inside pl-4">
                  <li>React UI with authentication, product browsing, and a persistent cart</li>
                  <li>Stripe payment processing for checkout (no webhooks)</li>
                  <li>RESTful backend with PostgreSQL for products, users, and orders</li>
                  <li>Admin panel for inventory management and product updates</li>
                  <li>Dockerized setup to run the full stack consistently</li>
                </ul>
              </div>
              <div className="flex gap-3 mt-2 flex-wrap">
                <a
                  href="https://alexjerseyhubbackend.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Backend Server (load server)
                </a>
                |
                <a
                  href="https://alexjerseyhubfrontend.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Live Demo
                </a>
                |
                <a
                  href="https://github.com/iangonsalves/ecommerce-shopping-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 hover:underline text-sm font-medium"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col sm:flex-row gap-6 border border-gray-100 items-center animate-fade-in">
            {/* Image on the left */}
            <div className="flex-shrink-0 w-full sm:w-[350px] h-[220px] flex items-center justify-center mb-4 sm:mb-0 relative group">
              <Image
                src={prefix + "/images/restaurant.png"}
                alt="Screenshot of Restaurant Booking System"
                width={350}
                height={220}
                className="object-contain w-full h-full rounded cursor-pointer"
                onClick={() => setModalImage('/images/restaurant.png')}
              />
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-90 transition-opacity pointer-events-none z-10">
                Click to view
              </span>
            </div>
            {/* Info on the right */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-extrabold text-2xl sm:text-3xl text-gray-900 mb-2 font-sans">Restaurant Booking System</h3>
              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="flex items-center gap-1 bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-semibold"><SiDjango /> Django</span>
                <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold"><FaPython /> Python</span>
                <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"><SiMysql /> MySQL</span>
                <span className="flex items-center gap-1 bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold"><FaDatabase /> Reservations</span>
                <span className="flex items-center gap-1 bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold"><FaReact /> Responsive UI</span>
              </div>
              <div className="space-y-2 text-gray-700 text-base font-sans mb-2">
                <p>
                  Restaurant management and online booking system built with Django and MySQL.
                </p>
                <ul className="list-disc list-inside pl-4">
                  <li>Customer-facing pages for menu browsing and reservations</li>
                  <li>Reservation creation, viewing, and management with server-side validation</li>
                  <li>Admin-friendly workflows to manage restaurant info and bookings</li>
                  <li>Clean, responsive UI designed for everyday operational use</li>
                </ul>
              </div>
              <div className="flex gap-3 mt-2 flex-wrap">
                <a
                  href="https://restaurantbookingservice.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  View Live Demo
                </a>
                |
                <a
                  href="https://github.com/iangonsalves/RestaurantBookingService"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 hover:underline text-sm font-medium"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Modal for fullscreen image */}
        {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setModalImage(null)}
          >
            <img
              src={prefix + modalImage}
              alt="Project Fullscreen"
              className="max-w-full max-h-full rounded shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-6 right-6 text-white text-3xl font-bold"
              onClick={() => setModalImage(null)}
            >
              &times;
            </button>
          </div>
        )}
      </section>

      {/* About Section */}
      <section id="about" className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">About Me</h2>
        <ul className="list-disc pl-6 text-gray-800 max-w-2xl w-full text-left space-y-1 text-lg font-medium leading-snug">
          <li>
            Backend and Full-Stack Developer with experience building scalable web applications.
          </li>
          <li>
            Strong focus on API development, relational databases, and clean backend architecture.
          </li>
          <li>
            Comfortable across Django/Python, PHP, and modern React frontends when needed.
          </li>
          <li>
            Hands-on with PostgreSQL/MySQL, Docker, and production-style deployments.
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Contact</h2>
        <div className="flex flex-col gap-2 mt-2 w-full max-w-md">
          <div className="flex items-center gap-2">
            <a href="https://github.com/iangonsalves" className="text-blue-500 hover:underline">GitHub</a>
            <span className="text-gray-500 text-sm">See all my project repositories on Github.</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com/in/iangonsalves" className="text-blue-500 hover:underline">LinkedIn</a>
            <span className="text-gray-500 text-sm">Connect with me professionally through LinkedIn.</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="mailto:iangonsalves29@gmail.com" className="text-blue-500 hover:underline">Email</a>
            <span className="text-gray-500 text-sm">Send me an email directly through e-mail.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
