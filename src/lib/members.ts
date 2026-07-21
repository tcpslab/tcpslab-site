// Content lives in /content/members.json and /content/professor.json (editable via /admin CMS).
// This file only defines types and re-exports the data.
import membersData from "../../content/members.json";
import professorData from "../../content/professor.json";

export type Member = {
  name: string;
  slug: string;
  photoExt?: string;
  role: string;
  email: string;
  researchInterests?: string[];
};

export type AlumniMember = {
  name: string;
  slug: string;
  role: string;
  period: string;
};

export type EducationEntry = {
  period: string;
  degree: string;
  thesis?: string;
  advisor?: string;
};

export type ExperienceEntry = {
  period: string;
  title: string;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type AwardEntry = {
  date: string;
  title: string;
};

export type Professor = {
  name: string;
  slug: string;
  role: string;
  email: string;
  office: string;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  researchInterests: string[];
  skills: SkillCategory[];
  awards: AwardEntry[];
};

export const professor: Professor = professorData;

export const researchers: Member[] = membersData.researchers;

export const alumni: AlumniMember[] = membersData.alumni;
