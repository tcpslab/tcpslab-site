"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/lib/site";
import DocumentIcon from "@/components/icons/DocumentIcon";
import FolderIcon from "@/components/icons/FolderIcon";
import AcademicCapIcon from "@/components/icons/AcademicCapIcon";
import UserGroupIcon from "@/components/icons/UserGroupIcon";
import PhotoIcon from "@/components/icons/PhotoIcon";

const NAV_ICONS: Record<string, typeof DocumentIcon> = {
  "/members": UserGroupIcon,
  "/publications": DocumentIcon,
  "/projects": FolderIcon,
  "/courses": AcademicCapIcon,
  "/gallery": PhotoIcon,
};

export default function Nav({ light = false }: { light?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const items = navItems.filter((item) => item.href !== "/");

  const base = light ? "text-white" : "text-[#4b3a24]";
  const dim = light ? "text-white/60" : "text-[#4b3a24]/50";
  const dimHover = light ? "hover:text-white/90" : "hover:text-[#4b3a24]/80";
  const divider = light ? "bg-white/30" : "bg-[#4b3a24]/25";
  const dot = light ? "bg-white" : "bg-[#4b3a24]";
  const bar = light ? "bg-white" : "bg-[#4b3a24]";
  const textShadow = light
    ? { textShadow: "0px 2px 15px rgba(0,0,0,0.2)" }
    : undefined;
  const iconShadow = light
    ? { filter: "drop-shadow(0px 2px 10px rgba(0,0,0,0.5))" }
    : undefined;

  return (
    <nav className="relative flex w-full flex-col font-nav">
      <div className="flex w-full items-center justify-between">
        <Link
          href="/"
          className={`text-lg font-bold ${base}`}
          style={textShadow}
        >
          {site.shortName.toUpperCase()}
        </Link>
        <div className="hidden items-center lg:flex">
          {items.map((item, i) => {
            const active = pathname === item.href;
            const Icon = NAV_ICONS[item.href];
            return (
              <div key={item.href} className="flex items-center">
                {i > 0 && (
                  <span className={`mx-4 h-4 w-px ${divider}`} aria-hidden />
                )}
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 text-base uppercase transition ${
                    active
                      ? `font-semibold ${base}`
                      : `font-medium ${dim} ${dimHover}`
                  }`}
                  style={textShadow}
                >
                  {active && Icon ? (
                    <Icon className="h-4 w-4" />
                  ) : (
                    active && <span className={`h-1.5 w-1.5 rounded-full ${dot}`} style={iconShadow} />
                  )}
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-5 ${bar} transition-transform ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 ${bar} transition-transform ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full right-0 z-50 mt-3 w-64 rounded-2xl bg-[#1c140f] p-2 shadow-xl lg:hidden">
          <div className="flex flex-col divide-y divide-white/15">
            {items.map((item) => {
              const active = pathname === item.href;
              const Icon = NAV_ICONS[item.href];
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-1.5 px-3 py-3 text-base uppercase ${
                    active ? "font-semibold text-white" : "font-medium text-white/70"
                  }`}
                >
                  {active && Icon ? (
                    <Icon className="h-4 w-4" />
                  ) : (
                    active && <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
