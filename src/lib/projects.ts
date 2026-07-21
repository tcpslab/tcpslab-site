// Content lives in /content/projects.json (editable via /admin CMS).
// This file only defines types and re-exports the data.
import data from "../../content/projects.json";

export type Project = {
  title: string;
  koreanTitle: string;
  period: string;
  fundingAgency: string;
  fundingAgencyKo: string;
  leadOrganization: string;
  leadOrganizationKo?: string;
  description?: string;
};

export const projects: Project[] = data.projects;
