"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { GalleryItem } from "@/lib/gallery";

export default function GalleryCard({
  item,
  number,
}: {
  item: GalleryItem;
  number: number;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setImgFailed(true);
    }
  }, []);

  return (
    <Link
      href={`/gallery/${item.slug}`}
      className="group flex flex-col gap-4 py-8 sm:flex-row sm:gap-6"
    >
      <div className="text-base font-semibold text-[#4b3a24]/30 sm:w-8 sm:shrink-0">
        {number}
      </div>

      <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-lg bg-[#4b3a24]/10 sm:h-40 sm:w-56">
        {!imgFailed && item.images[0] ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src={item.images[0]}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-[#4b3a24]/30">
            No photo yet
          </div>
        )}
      </div>

      <div>
        <p className="text-base font-medium tracking-wide text-[#9c5b33]">
          {item.date}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-[#26343a] transition-colors group-hover:text-[#9c5b33]">
          {item.title}
        </h3>
        <p className="mt-1 max-w-[720px] text-base text-[#4b3a24]/70">
          {item.description}
        </p>
        <span className="mt-3 inline-block rounded-full border border-[#4b3a24]/20 px-3 py-1 text-xs font-medium text-[#4b3a24]/70">
          {item.category}
        </span>
      </div>
    </Link>
  );
}
