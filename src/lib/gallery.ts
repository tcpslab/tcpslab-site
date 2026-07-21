// Content lives in /content/gallery.json (editable via /admin CMS).
// This file only defines types and re-exports the data.
// `images` entries are public paths (e.g. "/gallery/winter-mt/winter-mt_1.avif" or "/uploads/x.jpg").
import data from "../../content/gallery.json";

export type GalleryItem = {
  slug: string;
  photoDir?: string;
  title: string;
  date: string;
  category: string;
  description: string;
  intro?: string;
  presenters?: { name: string; topic: string }[];
  images: string[];
};

export const galleryItems: GalleryItem[] = (data.items as GalleryItem[]).map(
  (item) => ({
    ...item,
    // Backward compatibility: bare filenames are resolved against photoDir.
    images: item.images.map((img) =>
      img.startsWith("/") ? img : `/gallery/${item.photoDir ?? ""}/${img}`,
    ),
  }),
);
