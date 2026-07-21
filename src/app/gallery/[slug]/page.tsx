import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import GalleryCarousel from "@/components/GalleryCarousel";
import { galleryItems } from "@/lib/gallery";

export function generateStaticParams() {
  return galleryItems.map((item) => ({ slug: item.slug }));
}

export default async function GalleryItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = galleryItems.find((i) => i.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader title="Gallery" image="/gallery.jpg" />

      <main className="flex-1 bg-white">
        <div
          className="mx-auto w-full max-w-[1920px] py-16"
          style={{
            paddingLeft: "clamp(24px, 3vw, 40px)",
            paddingRight: "clamp(24px, 3vw, 40px)",
          }}
        >
          <div className="max-w-[900px]">
            <Link
              href="/gallery"
              className="text-base font-medium text-[#4b3a24]/50 transition-colors hover:text-[#9c5b33]"
            >
              ← Back to Gallery
            </Link>

            <div className="mt-6 flex items-center gap-3">
              <p className="text-lg font-medium tracking-wide text-[#9c5b33]">
                {item.date}
              </p>
              <span className="inline-block rounded-full border border-[#4b3a24]/20 px-3 py-1 text-xs font-medium text-[#4b3a24]/70">
                {item.category}
              </span>
            </div>

            <h1 className="mt-2 text-4xl font-semibold text-[#26343a]">
              {item.title}
            </h1>

            <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-xl bg-[#4b3a24]/10">
              <GalleryCarousel images={item.images} alt={item.title} />
            </div>

            {item.intro && (
              <p className="mt-8 text-xl text-[#26343a]">{item.intro}</p>
            )}

            <p className="mt-4 text-lg text-[#4b3a24]/70">
              {item.description}
            </p>

            {item.presenters && item.presenters.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-semibold tracking-wide text-[#4b3a24]/50 uppercase">
                  Presenters
                </h2>
                <div className="mt-6 flex flex-col divide-y divide-[#4b3a24]/10 border-b border-[#4b3a24]/10">
                  {item.presenters.map((presenter) => (
                    <div key={presenter.name} className="py-6">
                      <p className="text-xl font-semibold text-[#26343a]">
                        {presenter.name}
                      </p>
                      <p className="mt-1 text-lg text-[#4b3a24]/70">
                        {presenter.topic}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
