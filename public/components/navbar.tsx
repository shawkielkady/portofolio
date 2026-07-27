"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import logo from "@/public/assets/images/logo.png";

const cv = "/assets/elkadyresume.pdf";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  // { name: "Contact", href: "#about" },
];

// Map each section id to detect active state
const SECTION_IDS = ["home", "about", "skills", "projects", "experience"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-40% 0px -55% 0px",
          threshold: 0,
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const isActive = (href: string) => {
    const sectionId = href.replace("#", "");
    // Contact links to #about so treat it as active when about is active
    if (href === "#contact") return activeSection === "about";
    return activeSection === sectionId;
  };

  return (
    <>
      {/* Top Navbar Header */}
      <header className="fixed top-0 left-0 w-full bg-[#030712]/90 backdrop-blur-md z-40 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logo}
                alt="Logo"
                width={70}
                height={70}
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      active
                        ? "text-blue-400 bg-blue-500/10 border border-blue-500/25 shadow-sm shadow-blue-500/10"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                    {/* Active underline bar */}
                    {active && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Download CV Button */}
            <div className="hidden md:block">
              <a
                href={cv}
                download
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-lg shadow-blue-600/20"
              >
                <FiDownload className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <HiX className="w-7 h-7" />
                ) : (
                  <HiMenu className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop / Overlay for Mobile */}
      <div
        className={`fixed inset-0 backdrop-blur-sm transition-opacity duration-300 md:hidden z-[999] ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Sidebar Drawer */}
      <aside
        className={`fixed top-0 right-0 h-screen h-dvh w-80 max-w-[85vw] border-l border-gray-800 p-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden z-[1000] flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "#070a12" }}
      >
        <div>
          {/* Sidebar Header */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-800/80">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-blue-500">SE</span>
              <span className="font-semibold text-white text-sm">
                Shawky Elkady
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Close Menu"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-2 mt-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    active
                      ? "bg-blue-600/15 text-blue-400 border border-blue-500/25 shadow-sm"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Download CV Button */}
        <div className="pt-6 border-t border-gray-800/80">
          <a
            href={cv}
            download
            className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-3 rounded-xl transition-colors shadow-lg shadow-blue-600/20"
          >
            <FiDownload className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </div>
      </aside>
    </>
  );
}
