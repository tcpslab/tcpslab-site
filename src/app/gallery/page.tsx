import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import GalleryCard from "@/components/GalleryCard";
import { galleryItems } from "@/lib/gallery";

export default function GalleryPage() {
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
          <div className="flex flex-col divide-y divide-[#4b3a24]/10 border-t border-[#4b3a24]/10">
            {galleryItems.map((item, i) => (
              <GalleryCard
                key={item.slug}
                item={item}
                number={galleryItems.length - i}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
