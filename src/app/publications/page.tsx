"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { publicationCategories, publications } from "@/lib/publications";

const LAB_MEMBERS = [
  "Ji-Tae Kim",
  "Ji-Hwan Park",
  "Joon-Seo Kim",
  "Moo-Young Oh",
  "Ju-Hyun Ahn",
  "Seung-Yeon Lee",
  "Dan-A Kim",
  "Se-Hee Park",
  "Sang-Wook Park",
  "Hae-Jun Kim",
];

const memberPattern = new RegExp(
  `(${LAB_MEMBERS.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
  "g",
);

function renderAuthors(authors: string) {
  const parts = authors.split(memberPattern);
  return parts.map((part, i) =>
    LAB_MEMBERS.includes(part) ? (
      <span key={i} className="font-semibold text-[#62748e]">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-3 inline-block rounded-full border border-[#4b3a24]/20 px-3 py-1 text-xs font-medium text-[#4b3a24]/70">
      {children}
    </span>
  );
}

export default function PublicationsPage() {
  const [active, setActive] = useState(publicationCategories[0]);

  const categoryItems = publications.filter((p) => p.category === active);
  const sorted = [...categoryItems].sort((a, b) => b.year - a.year);
  const items = sorted.map((pub, i) => ({
    ...pub,
    number: sorted.length - i,
  }));

  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader title="Publications" image="/publications.jpg" />

      <main className="flex-1 bg-white">
        <div
          className="mx-auto w-full max-w-[1920px] py-16"
          style={{
            paddingLeft: "clamp(24px, 3vw, 40px)",
            paddingRight: "clamp(24px, 3vw, 40px)",
          }}
        >
          <div className="flex flex-wrap gap-2 border-b border-[#4b3a24]/10 pb-6">
            {publicationCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wide transition ${
                  active === cat
                    ? "bg-[#4b3a24] text-white"
                    : "bg-[#4b3a24]/5 text-[#4b3a24]/60 hover:bg-[#4b3a24]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-col divide-y divide-[#4b3a24]/10">
            {items.map((pub) => (
              <div key={pub.number} className="flex gap-6 py-8">
                <div className="w-8 shrink-0 text-base font-semibold text-[#4b3a24]/30">
                  {pub.number}
                </div>
                <div>
                  <p className="text-base font-medium tracking-wide text-[#9c5b33]">
                    {pub.venue} · {pub.date}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[#26343a]">
                    {pub.title}
                  </h3>
                  <p className="mt-1 text-base text-[#4b3a24]/70">
                    {renderAuthors(pub.authors)}
                  </p>
                  <div className="flex gap-2">
                    {pub.extra && <Pill>{pub.extra}</Pill>}
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block rounded-full border border-[#4b3a24]/20 px-3 py-1 text-xs font-medium text-[#4b3a24]/70 transition hover:border-[#4b3a24]/50 hover:text-[#4b3a24]"
                      >
                        {pub.category === "International Journal" ||
                        pub.category === "Domestic Journal"
                          ? "DOI"
                          : "View"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
