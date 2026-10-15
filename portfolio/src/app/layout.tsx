import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PortfolioNavigation from "@/components/portfolio/PortfolioNavigation";
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
  title: "Ian Gonsalves | Software Engineer — Backend & Full-Stack",
  description:
    "Portfolio of Ian Gonsalves, a software engineer focused on backend systems, full-stack applications, APIs, data-intensive software, and practical AI integration.",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PortfolioNavigation />
        {children}
      </body>
    </html>
  );
}
