import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of all projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const prefix = process.env.NODE_ENV === 'production' ? '/portfolio-website' : '';
  return (
    <html lang="en">
      <head>
        
        <link rel="icon" href={`${prefix}/favicon.ico`} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm py-3 px-6 flex justify-between items-center">
          <span className="font-bold text-lg tracking-tight text-blue-700">My Portfolio</span>
          <ul className="flex gap-6 text-base font-medium">
            <li><a href="#technologies" className="text-gray-800 hover:text-blue-600 transition-colors">Technologies</a></li>
            <li><a href="#projects" className="text-gray-800 hover:text-blue-600 transition-colors">Projects</a></li>
            <li><a href="#about" className="text-gray-800 hover:text-blue-600 transition-colors">About</a></li>
            <li><a href="#contact" className="text-gray-800 hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
