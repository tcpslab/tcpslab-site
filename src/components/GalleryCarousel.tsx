"use client";

import { useState } from "react";

export default function GalleryCarousel({
  photoDir,
  images,
  alt,
}: {
  photoDir: string;
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="absolute inset-0 flex items-center justify-center text-base text-[#4b3a24]/30">
        No photo yet
      </div>
    );
  }

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/gallery/${photoDir}/${images[index]}`}
        alt={`${alt} (${index + 1}/${images.length})`}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={goPrev}
            className="absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={goNext}
            className="absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((img, i) => (
              <button
                key={img}
                type="button"
                aria-label={`Go to photo ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-1.5 rounded-full transition ${
                  i === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
