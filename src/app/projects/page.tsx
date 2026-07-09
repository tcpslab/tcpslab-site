import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-3 inline-block rounded-full border border-[#4b3a24]/20 px-3 py-1 text-xs font-medium text-[#4b3a24]/70">
      {children}
    </span>
  );
}

export default function ProjectsPage() {
  const sorted = [...projects].reverse();

  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader title="Projects" image="/projects.jpg" />

      <main className="flex-1 bg-white">
        <div
          className="mx-auto w-full max-w-[1920px] py-16"
          style={{
            paddingLeft: "clamp(24px, 3vw, 40px)",
            paddingRight: "clamp(24px, 3vw, 40px)",
          }}
        >
          <div className="flex flex-col divide-y divide-[#4b3a24]/10 border-t border-[#4b3a24]/10">
            {sorted.map((project, i) => (
              <div key={project.title} className="flex gap-6 py-8">
                <div className="w-8 shrink-0 text-base font-semibold text-[#4b3a24]/30">
                  {sorted.length - i}
                </div>
                <div>
                  <p className="text-base font-medium tracking-wide text-[#9c5b33]">
                    {project.period}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[#26343a]">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-base text-[#4b3a24]/70">
                    {project.koreanTitle}
                    {project.description && `: ${project.description}`}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Pill>
                      {project.fundingAgencyKo} ({project.fundingAgency})
                    </Pill>
                    <Pill>
                      {project.leadOrganizationKo
                        ? `${project.leadOrganizationKo} (${project.leadOrganization})`
                        : project.leadOrganization}
                    </Pill>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
