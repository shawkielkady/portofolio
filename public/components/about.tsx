import React, { memo } from "react";
import Link from "next/link";

import {
  FiUser as UserIcon,
  FiMapPin as LocationIcon,
  FiMail as MailIcon,
  FiPhone as PhoneIcon,
  FiArrowRight as ArrowIcon,
} from "react-icons/fi";

// 1. فصل البيانات الثابتة خارج المكون لمنع إنشائها مجددًا في الميموري
interface InfoItem {
  id: string;
  label: string;
  value: string;
  icon: React.ElementType;
  href?: string;
}

const INFO_ITEMS: ReadonlyArray<InfoItem> = [
  {
    id: "name",
    label: "Name",
    value: "Shawky Gaber Elkady",
    icon: UserIcon,
  },
  {
    id: "location",
    label: "Location",
    value: "Alexandria, Egypt",
    icon: LocationIcon,
  },
  {
    id: "email",
    label: "Email",
    value: "Shawkielkady7@gmail.com",
    icon: MailIcon,
    href: "mailto:Shawkielkady7@gmail.com",
  },
  {
    id: "phone",
    label: "Phone",
    value: "+20 128 300 7009",
    icon: PhoneIcon,
    href: "tel:+201283007009",
  },
];

// 2. مكون فرعي مخصص لكروت البيانات مع Memoization
const InfoCard = memo(function InfoCard({ item }: { item: InfoItem }) {
  const Icon = item.icon;

  const content = (
    <div className="flex items-center gap-4 group transition-colors">
      <div className="w-12 h-12 rounded-xl bg-[#0d1322] border border-gray-800/80 flex items-center justify-center text-gray-400 group-hover:text-blue-500 group-hover:border-blue-500/40 transition-all duration-300 shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
          {item.label}
        </span>
        <span className="text-sm sm:text-base font-semibold text-gray-200 group-hover:text-white transition-colors">
          {item.value}
        </span>
      </div>
    </div>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        className="block focus:outline-none rounded-xl focus:ring-1 focus:ring-blue-500"
      >
        {content}
      </a>
    );
  }

  return content;
});

// 3. المكون الرئيسي (Server Component)
export default function AboutSection() {
  return (
    <section id="about" className="bg-[#030712] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-[#070c18]/80 border border-gray-800/60 rounded-3xl p-8 sm:p-12 backdrop-blur-sm shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Content Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-widest text-blue-500 uppercase">
              ABOUT ME
            </span>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Building digital products <br className="hidden sm:inline" />
              that make a <span className="text-blue-500">difference.</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Frontend & Mobile Application Developer with 2+ years of
              experience building production-ready applications for different
              industries including Healthcare, E-commerce, Real Estate, AI,
              Booking Systems, and Gaming.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              I focus on writing clean, maintainable code and delivering
              exceptional user experiences.
            </p>

            <div className="pt-2">
              <Link
                href="#about"
                className="inline-flex items-center gap-2 border border-blue-600/60 hover:border-blue-500 bg-blue-950/20 hover:bg-blue-600/10 text-blue-400 hover:text-blue-300 text-sm font-medium px-6 py-3 rounded-xl transition-all duration-300 group"
              >
                <span>Read More About Me</span>
                <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Info Right Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6 bg-[#030712]/40 p-6 sm:p-8 rounded-2xl border border-gray-800/40">
            {INFO_ITEMS.map((item) => (
              <InfoCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
