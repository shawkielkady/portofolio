import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/public/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shawky Elkady | Frontend Software Engineer & Flutter Developer",
  description:
    "Portfolio of Shawky Gaber Elkady - Frontend Software Engineer specializing in React.js, Next.js, TypeScript, and Flutter. Building scalable, high-performance web and mobile applications with clean architecture.",
  keywords: [
    "Shawky Elkady",
    "Shawky Gaber Elkady",
    "Frontend Engineer",
    "Software Engineer",
    "React.js Developer",
    "Next.js Developer",
    "Flutter Developer",
    "TypeScript Developer",
    "Web Developer Portfolio",
    "Mobile Developer",
  ],
  authors: [{ name: "Shawky Gaber Elkady", url: "https://github.com/shawkielkady" }],
  creator: "Shawky Elkady",
  publisher: "Shawky Elkady",
  icons: {
    icon: "/assets/images/logo.png",
    shortcut: "/assets/images/logo.png",
    apple: "/assets/images/logo.png",
  },
  openGraph: {
    title: "Shawky Elkady | Frontend Software Engineer & Flutter Developer",
    description:
      "Frontend Software Engineer specializing in React.js, Next.js, TypeScript, and Flutter. Building high-performance web and mobile applications.",
    siteName: "Shawky Elkady Portfolio",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 800,
        height: 800,
        alt: "Shawky Elkady Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shawky Elkady | Frontend Software Engineer",
    description:
      "Frontend Software Engineer specializing in React.js, Next.js, TypeScript, and Flutter.",
    images: ["/assets/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
