"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";

const EXPANDED_HEIGHT = "clamp(200px, 20vw, 300px)";

export default function PageHeader({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => {
    function onScroll() {
      setNavSolid(window.scrollY > 4);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Nav: always fixed, constant padding — position never shifts. The pill
          backdrop lives here (not on the hero) so the nav stays readable even
          after the hero has fully scrolled away. */}
      <div
        className="fixed top-0 left-1/2 z-[60] w-full max-w-[2080px] -translate-x-1/2"
        style={{
          paddingLeft: "clamp(20px, 7vw, 72px)",
          paddingRight: "clamp(20px, 7vw, 72px)",
          paddingTop: "40px",
        }}
      >
        <div className="relative flex items-center" style={{ height: "68px" }}>
          <div
            className="pointer-events-none absolute inset-y-0 transition-all duration-500 ease-out"
            style={{
              left: navSolid ? "-32px" : "0px",
              right: navSolid ? "-32px" : "0px",
              borderRadius: "999px",
              background: navSolid
                ? "linear-gradient(90deg, rgba(156,91,51,0.95), rgba(28,20,15,0.95))"
                : "transparent",
              boxShadow: navSolid ? "0 16px 40px rgba(0,0,0,0.3)" : "none",
            }}
          />
          <div className="relative z-10 w-full">
            <Nav light />
          </div>
        </div>
      </div>

      {/* Hero: constant flow height, so content below never moves or gets covered early. */}
      <div
        className="relative mx-auto w-full max-w-[2080px]"
        style={{ height: EXPANDED_HEIGHT }}
      >
        <div
          className="absolute inset-0 overflow-hidden bg-cover bg-center rounded-b-[32px] transition-opacity duration-500 ease-out md:rounded-b-[48px]"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: navSolid ? 0 : 1,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/55" />
        </div>

        <h1
          className="absolute bottom-0 left-0 text-4xl font-semibold text-white transition-all duration-300 ease-out md:text-5xl"
          style={{
            paddingLeft: "clamp(20px, 7vw, 72px)",
            paddingBottom: "clamp(24px, 5vw, 44px)",
            opacity: navSolid ? 0 : 1,
            transform: navSolid ? "translateY(8px)" : "translateY(0px)",
            pointerEvents: navSolid ? "none" : "auto",
          }}
        >
          {title}
        </h1>
      </div>
    </>
  );
}
