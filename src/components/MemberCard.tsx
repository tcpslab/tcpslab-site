"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon";
import BuildingOfficeIcon from "@/components/icons/BuildingOfficeIcon";

function initials(name: string) {
  return name
    .split(/[\s-]+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export type BottomItem = {
  icon?: "email" | "location";
  text: string;
};

const BOTTOM_ICONS = {
  email: EnvelopeIcon,
  location: BuildingOfficeIcon,
};

export default function MemberCard({
  name,
  slug,
  lines,
  researchInterests,
  bottomItems,
  large = false,
  href,
}: {
  name: string;
  slug: string;
  lines: string[];
  researchInterests?: string[];
  bottomItems: BottomItem[];
  large?: boolean;
  href?: string;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setImgFailed(true);
    }
  }, []);

  const photoWidth = large ? "w-40 sm:w-60" : "w-36 sm:w-48";
  const columnHeight = large ? "sm:min-h-80" : "sm:min-h-64";

  const photo = (
    <div
      className={`relative shrink-0 aspect-[3/4] overflow-hidden rounded-xl bg-[#4b3a24]/10 ${photoWidth} ${href ? "transition-opacity hover:opacity-80" : ""}`}
    >
      {!imgFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={`/members/${slug}.jpg`}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-[#4b3a24]/40">
          {initials(name)}
        </div>
      )}
    </div>
  );

  const nameEl = (
    <p
      className={`font-semibold text-[#26343a] transition-colors ${href ? "hover:text-[#9c5b33]" : ""} ${
        large ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
      }`}
    >
      {name}
    </p>
  );

  return (
    <div
      className={`flex flex-col gap-6 sm:flex-row sm:items-stretch ${large ? "sm:gap-12" : "sm:gap-6"}`}
    >
      {href ? (
        <Link href={href} className="contents">
          {photo}
        </Link>
      ) : (
        photo
      )}

      <div className={`flex flex-col justify-between py-1 ${columnHeight}`}>
        <div>
          {href ? (
            <Link href={href} className="contents">
              {nameEl}
            </Link>
          ) : (
            nameEl
          )}
          <div
            className={`flex flex-col ${large ? "mt-4 gap-1.5" : "mt-3 gap-0.5"}`}
          >
            {lines.map((line) => (
              <span key={line} className="text-base text-[#4b3a24]/60 sm:text-lg">
                {line}
              </span>
            ))}
          </div>

          {researchInterests && researchInterests.length > 0 && (
            <ul className="mt-3 flex flex-col gap-0.5">
              {researchInterests.map((interest) => (
                <li
                  key={interest}
                  className="text-sm text-[#4b3a24]/50 before:mr-2 before:content-['·'] sm:text-base"
                >
                  {interest}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 sm:mt-0">
          {bottomItems.map((item, i) => {
            const Icon = item.icon ? BOTTOM_ICONS[item.icon] : null;
            return (
              <div key={i} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="h-4 w-px bg-[#4b3a24]/20" aria-hidden />
                )}
                <span className="flex items-center gap-1.5 text-base text-[#4b3a24]/50 sm:text-lg">
                  {Icon && <Icon className="h-4 w-4 shrink-0" />}
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
