"use client";
import { useState } from "react";
import Image from "next/image";
import { FaReact, FaPhp, FaPython, FaJava, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaDocker, FaGit, FaDatabase, FaCloud } from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiC, SiLaravel, SiDjango, SiExpress, SiMongodb, SiMysql, SiMariadb, SiPostgresql, SiRedis, SiGitlab, SiPhpstorm, SiSentry, SiElastic, SiJson, SiYaml, SiXml, SiTestinglibrary } from 'react-icons/si';

export default function Home() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const prefix = process.env.NODE_ENV === 'production' ? '/portfolio-website' : '';
  return (
    <main className="flex flex-col gap-24 max-w-4xl mx-auto w-full px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-4" id="hero">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700">Hi, I&#39;m Ian Gonsalves</h1>
        <p className="text-lg text-gray-700 max-w-xl">
          Backend Developer | Full Stack Engineer.<br />
          A passionate developer crafting beautiful, interactive web experiences.<br />
          Welcome to my portfolio!
        </p>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Technologies</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {/* Languages */}
          <span className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium"><FaPython /> Python</span>
          <span className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium"><FaPhp /> PHP</span>
          <span className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium"><FaJava /> Java</span>
          <span className="flex items-center gap-2 bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full font-medium"><FaJs /> JavaScript</span>
          <span className="flex items-center gap-2 bg-blue-200 text-blue-900 px-4 py-2 rounded-full font-medium"><SiTypescript /> TypeScript</span>
          <span className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-medium"><SiCplusplus /> C++</span>
          <span className="flex items-center gap-2 bg-gray-300 text-gray-900 px-4 py-2 rounded-full font-medium"><SiC /> C</span>

          {/* Frameworks & Libraries */}
          <span className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium"><SiLaravel /> Laravel</span>
          <span className="flex items-center gap-2 bg-green-200 text-green-800 px-4 py-2 rounded-full font-medium"><SiDjango /> Django</span>
          <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"><FaReact /> React</span>
          <span className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium"><FaNodeJs /> Node.js</span>
          <span className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium"><SiExpress /> Express.js</span>

          {/* Databases */}
          <span className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium"><SiMongodb /> MongoDB</span>
          <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"><SiMysql /> MySQL</span>
          <span className="flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium"><SiMariadb /> MariaDB</span>
          <span className="flex items-center gap-2 bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium"><SiPostgresql /> PostgreSQL</span>
          <span className="flex items-center gap-2 bg-red-200 text-red-800 px-4 py-2 rounded-full font-medium"><SiRedis /> Redis</span>

          {/* Cloud & DevOps */}
          <span className="flex items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded-full font-medium"><FaCloud /> Microsoft Azure</span>
          <span className="flex items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded-full font-medium"><FaDocker /> Docker</span>
          <span className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-medium"><FaGit /> Git</span>
          <span className="flex items-center gap-2 bg-orange-200 text-orange-800 px-4 py-2 rounded-full font-medium"><SiGitlab /> GitLab CI/CD</span>
          <span className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium"><SiPhpstorm /> PhpStorm</span>

          {/* Monitoring & Search */}
          <span className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium"><SiSentry /> Sentry</span>
          <span className="flex items-center gap-2 bg-gray-300 text-gray-900 px-4 py-2 rounded-full font-medium">Graylog</span>
          <span className="flex items-center gap-2 bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full font-medium"><SiElastic /> ElasticSearch</span>

          {/* Web Technologies */}
          <span className="flex items-center gap-2 bg-orange-200 text-orange-800 px-4 py-2 rounded-full font-medium"><FaHtml5 /> HTML5</span>
          <span className="flex items-center gap-2 bg-blue-300 text-blue-900 px-4 py-2 rounded-full font-medium"><FaCss3Alt /> CSS3</span>
          <span className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium">REST API</span>
          <span className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-medium"><SiJson /> JSON</span>
          <span className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium"><SiYaml /> YAML</span>
          <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"><SiXml /> XML</span>

          {/* Testing & QA */}
          <span className="flex items-center gap-2 bg-green-200 text-green-800 px-4 py-2 rounded-full font-medium"><SiTestinglibrary /> Unit Testing</span>
          <span className="flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-medium">A/B Testing</span>
          <span className="flex items-center gap-2 bg-orange-200 text-orange-800 px-4 py-2 rounded-full font-medium">CI/CD</span>
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
                src="/images/jersey_platform.png"
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
              <h3 className="font-extrabold text-2xl sm:text-3xl text-gray-900 mb-2 font-sans">Alex&#39;s Jersey Hub Platform</h3>
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
                  A comprehensive full-stack ecommerce platform for sports jersey enthusiasts.
                </p>
                <ul className="list-disc list-inside pl-4">
                  <li>Modern React.js frontend with UI components and authentication</li>
                  <li>Shopping cart and secure payment processing</li>
                  <li>PHP REST API backend with PostgreSQL database</li>
                  <li>Admin panels for inventory management</li>
                  <li>Responsive design and state management</li>
                  <li>Secure transaction handling for a complete online shopping experience</li>
                </ul>
              </div>
              <div className="flex gap-3 mt-2 flex-wrap">
                <a
                  href="https://alexjerseyhubbackend.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Load Backend Link First
                </a>
                <a
                  href="https://alexjerseyhubfrontend.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  View Live App Demo
                </a>
                <a
                  href="https://github.com/iangonsalves/ecommerce-shopping-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 hover:underline text-sm font-medium"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col sm:flex-row gap-6 border border-gray-100 items-center animate-fade-in">
            {/* Image on the left */}
            <div className="flex-shrink-0 w-full sm:w-[350px] h-[220px] flex items-center justify-center mb-4 sm:mb-0 relative group">
              <Image
                src="/images/restaurant.png"
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
                  A Django-based web application for restaurant management and online reservations.
                </p>
                <ul className="list-disc list-inside pl-4">
                  <li>Customers can make online reservations and view the menu</li>
                  <li>Manage bookings through a user-friendly interface</li>
                  <li>Features for viewing restaurant info and placing bookings for specific dates</li>
                  <li>Manage existing reservations and maintain a clean, professional UI</li>
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
          {/* Project Card 3 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col sm:flex-row gap-6 border border-gray-100 items-center animate-fade-in">
            {/* Image on the left */}
            <div className="flex-shrink-0 w-full sm:w-[350px] h-[220px] flex items-center justify-center mb-4 sm:mb-0 relative group">
              <Image
                src="/images/calculator.png"
                alt="Screenshot of Calculator Application"
                width={350}
                height={220}
                className="object-contain w-full h-full rounded cursor-pointer"
                onClick={() => setModalImage('/images/calculator.png')}
              />
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-90 transition-opacity pointer-events-none z-10">
                Click to view
              </span>
            </div>
            {/* Info on the right */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-extrabold text-2xl sm:text-3xl text-gray-900 mb-2 font-sans">Calculator</h3>
              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="flex items-center gap-1 bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold"><FaJs /> JavaScript</span>
                <span className="flex items-center gap-1 bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold"><FaHtml5 /> HTML5</span>
                <span className="flex items-center gap-1 bg-blue-300 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold"><FaCss3Alt /> CSS3</span>
              </div>
              <div className="space-y-2 text-gray-700 text-base font-sans mb-2">
                <p>
                  A modern, user-friendly calculator web application with a retro-inspired LED display.
                </p>
                <ul className="list-disc list-inside pl-4">
                  <li>Supports all basic arithmetic operations</li>
                  <li>Decimal point, Clear (CLR), and Delete (DEL) functionality</li>
                  <li>Real-time calculation display and error handling</li>
                  <li>Responsive design with CSS Grid and Orbitron font</li>
                </ul>
              </div>
              <div className="flex gap-3 mt-2 flex-wrap">
                <a
                  href="https://iangonsalves.github.io/calculator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  View Live Demo
                </a>
                <a
                  href="https://github.com/iangonsalves/calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 hover:underline text-sm font-medium"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
          {/* Project Card 4*/}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col sm:flex-row gap-6 border border-gray-100 items-center animate-fade-in">
            {/* Image on the left */}
            <div className="flex-shrink-0 w-full sm:w-[350px] h-[220px] flex items-center justify-center mb-4 sm:mb-0 relative group">
              <Image
                src="/images/etch-a-sketch.png"
                alt="Screenshot of Project 4"
                width={350}
                height={220}
                className="object-contain w-full h-full rounded cursor-pointer"
                onClick={() => setModalImage('/images/etch-a-sketch.png')}
              />
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-90 transition-opacity pointer-events-none z-10">
                Click to view
              </span>
            </div>
            {/* Info on the right */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-extrabold text-2xl sm:text-3xl text-gray-900 mb-2 font-sans">Etch-a-Sketch</h3>
              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="flex items-center gap-1 bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold"><FaHtml5 /> HTML5</span>
                <span className="flex items-center gap-1 bg-blue-300 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold"><FaCss3Alt /> CSS3</span>
                <span className="flex items-center gap-1 bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold"><FaJs /> JavaScript</span>
              </div>
              <div className="space-y-2 text-gray-700 text-base font-sans mb-2">
                <p>
                  A digital drawing board inspired by the classic Etch-a-Sketch toy, allowing users to create pixel art by hovering over a customizable grid.
                </p>
                <ul className="list-disc list-inside pl-4">
                  <li>Customizable grid size for different drawing resolutions</li>
                  <li>Multiple drawing modes: classic black and dynamic rainbow color</li>
                  <li>Clear grid function for starting fresh</li>
                  <li>Intuitive interface for creating pixel art by hovering</li>
                  <li>Perfect for digital sketches or pixel-based artwork</li>
                </ul>
              </div>
              <div className="flex gap-3 mt-2 flex-wrap">
                <a
                  href="https://iangonsalves.github.io/etch-a-sketch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  View Live Demo
                </a>
                <a
                  href="https://github.com/iangonsalves/etch-a-sketch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 hover:underline text-sm font-medium"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
          {/* Project Card 5 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col sm:flex-row gap-6 border border-gray-100 items-center animate-fade-in">
            {/* Image on the left */}
            <div className="flex-shrink-0 w-full sm:w-[350px] h-[220px] flex items-center justify-center mb-4 sm:mb-0 relative group">
              <Image
                src="/images/rpg.png"
                alt="Screenshot of Project 5"
                width={350}
                height={220}
                className="object-contain w-full h-full rounded cursor-pointer"
                onClick={() => setModalImage('/images/rpg.png')}
              />
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-90 transition-opacity pointer-events-none z-10">
                Click to view
              </span>
            </div>
            {/* Info on the right */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-extrabold text-2xl sm:text-3xl text-gray-900 mb-2 font-sans">Rock Paper Scissors</h3>
              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="flex items-center gap-1 bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold"><FaJs /> JavaScript</span>
                <span className="flex items-center gap-1 bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold"><FaHtml5 /> HTML5</span>
                <span className="flex items-center gap-1 bg-blue-300 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold"><FaCss3Alt /> CSS3</span>
              </div>
              <div className="space-y-2 text-gray-700 text-base font-sans mb-2">
                <p>
                  An interactive implementation of the classic Rock Paper Scissors game where players compete against the computer in a first-to-5 scoring system.
                </p>
                <ul className="list-disc list-inside pl-4">
                  <li>First-to-5 scoring system with dynamic scoreboard</li>
                  <li>Real-time display of player and computer choices</li>
                  <li>Immediate feedback on game outcomes</li>
                  <li>Reset function to start a new game</li>
                  <li>Clear visual feedback for each choice</li>
                </ul>
              </div>
              <div className="flex gap-3 mt-2 flex-wrap">
                <a
                  href="https://iangonsalves.github.io/rock-paper-scissors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  View Live Demo
                </a>
                <a
                  href="https://github.com/iangonsalves/rock-paper-scissors"
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
              onClick={e => e.stopPropagation()}
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
            Backend Developer with two years of experience at Belsimpel, Netherlands; largest telecom company.
          </li>
          <li>
            Proficient in PHP, Python, JavaScript, and SQL, with expertise in Laravel, Django, and React frameworks.
          </li>
          <li>
            Experienced in database management and optimization using SQL, MariaDB, and MongoDB for large-scale applications.
          </li>
          <li>
            Strong background in DevOps practices using Docker, GitLab CI/CD, and modern monitoring tools.
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
