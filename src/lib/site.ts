// Lab name/department live in /content/site.json (editable via /admin CMS).
// Navigation stays in code because it mirrors the app's routes.
import siteData from "../../content/site.json";

export const site = siteData;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Members", href: "/members" },
  { label: "Publications", href: "/publications" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Courses", href: "/courses" },
] as const;
