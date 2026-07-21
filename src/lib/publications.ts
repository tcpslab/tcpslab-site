// Content lives in /content/publications.json (editable via /admin CMS).
// This file only defines types and re-exports the data.
import data from "../../content/publications.json";

export type PublicationCategory =
  | "International Journal"
  | "International Conference"
  | "Domestic Journal"
  | "Domestic Conference"
  | "Patents";

export type Publication = {
  category: PublicationCategory;
  year: number;
  date: string;
  title: string;
  authors: string;
  venue: string;
  link?: string;
  extra?: string;
};

export const publicationCategories: PublicationCategory[] = [
  "International Journal",
  "International Conference",
  "Domestic Journal",
  "Domestic Conference",
  "Patents",
];

export const publications = data.publications as Publication[];
