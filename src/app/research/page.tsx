import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { research, type ResearchImage } from "@/lib/research";

function Figure({ image }: { image: ResearchImage }) {
  return (
    <figure
      className={`group flex flex-col ${image.wide ? "sm:col-span-2" : ""}`}
    >
      <div className="overflow-hidden rounded-2xl border border-[#4b3a24]/10 bg-[#f7f3ec] shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.caption}
          className="block h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-[#4b3a24]/60">
        {image.caption}
        <span className="mt-1 block text-xs text-[#4b3a24]/40">
          {image.credit} · {image.license}
        </span>
      </figcaption>
    </figure>
  );
}

export default function ResearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader title="Research" image={research.hero.image} />

      <main className="flex-1 bg-white">
        <div
          className="mx-auto w-full max-w-[1920px] py-16"
          style={{
            paddingLeft: "clamp(24px, 3vw, 40px)",
            paddingRight: "clamp(24px, 3vw, 40px)",
          }}
        >
          {/* Intro */}
          <section className="border-b border-[#4b3a24]/10 pb-16">
            <p className="text-base font-semibold uppercase tracking-wide text-[#9c5b33] sm:text-lg">
              {research.intro.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-snug text-[#26343a] sm:text-4xl lg:text-[2.75rem]">
              {research.intro.lead}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#4b3a24]/75 sm:text-xl">
              {research.intro.body}
            </p>
          </section>

          {/* Research areas */}
          {research.sections.map((section) => (
            <section
              key={section.id}
              className="border-b border-[#4b3a24]/10 py-16"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4b3a24]/40">
                {section.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-snug text-[#26343a] sm:text-3xl">
                {section.title}
              </h3>

              <div className="mt-6 space-y-5">
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="text-lg leading-relaxed text-[#4b3a24]/80"
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {section.images.map((img) => (
                  <Figure key={img.src} image={img} />
                ))}
              </div>
            </section>
          ))}

          {/* Image credits */}
          <section className="pt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4b3a24]/40">
              Image credits
            </p>
            <ul className="mt-4 space-y-2">
              {research.sections
                .flatMap((s) => s.images)
                .map((img) => (
                  <li
                    key={img.src}
                    className="text-sm leading-relaxed text-[#4b3a24]/55"
                  >
                    {img.credit} — {img.license}.{" "}
                    <a
                      href={img.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9c5b33] underline-offset-2 transition-colors hover:underline"
                    >
                      Source
                    </a>
                  </li>
                ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
