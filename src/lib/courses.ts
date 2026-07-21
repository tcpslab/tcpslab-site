// Content lives in /content/courses.json (editable via /admin CMS).
// This file only defines types and re-exports the data.
import data from "../../content/courses.json";

export type CourseLevel = "Undergraduate" | "Graduate";

export type Course = {
  number: number;
  semester: string;
  title: string;
  level: CourseLevel;
  code: string;
  location: string;
  schedule: string;
  description: string;
};

export const courses = data.courses as Course[];
