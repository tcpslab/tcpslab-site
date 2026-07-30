// Content lives in /content/research.json (editable via /admin CMS).
// This file only defines types and re-exports the data.
import data from "../../content/research.json";

export type ResearchImage = {
  src: string;
  caption: string;
  credit: string;
  license: string;
  source: string;
  wide?: boolean;
};

export type ResearchSection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  images: ResearchImage[];
};

export type ResearchContent = {
  hero: { image: string };
  intro: { eyebrow: string; lead: string; body: string };
  sections: ResearchSection[];
};

export const research: ResearchContent = data;
