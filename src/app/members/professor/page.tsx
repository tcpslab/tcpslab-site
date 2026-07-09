import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import MemberCard from "@/components/MemberCard";
import { professor } from "@/lib/members";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold tracking-wide text-[#4b3a24]/50 uppercase">
      {children}
    </h2>
  );
}

function Entry({
  period,
  children,
}: {
  period?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-8">
      {period && (
        <p className="text-lg font-medium tracking-wide text-[#9c5b33]">
          {period}
        </p>
      )}
      <div className="mt-2 text-2xl font-semibold text-[#26343a]">
        {children}
      </div>
    </div>
  );
}

export default function ProfessorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader title="Members" image="/members.jpg" />

      <main className="flex-1 bg-white">
        <div
          className="mx-auto w-full max-w-[1920px] py-16"
          style={{
            paddingLeft: "clamp(24px, 3vw, 40px)",
            paddingRight: "clamp(24px, 3vw, 40px)",
          }}
        >
          <Link
            href="/members"
            className="text-base font-medium text-[#4b3a24]/50 transition-colors hover:text-[#9c5b33]"
          >
            ← Back to Members
          </Link>

          <div className="mt-6 border-b border-[#4b3a24]/10 pb-16">
            <MemberCard
              name={professor.name}
              slug={professor.slug}
              lines={[
                professor.role,
                "Terramechanics and Cyber-Physical Systems Lab",
                "Department of Convergence Biosystems Engineering",
                "College of Agriculture and Life Sciences",
                "Chonnam National University, Republic of Korea",
              ]}
              bottomItems={[
                { icon: "email", text: professor.email },
                { icon: "location", text: professor.office },
              ]}
              large
            />
          </div>

          <section className="pt-16">
            <SectionTitle>Educations</SectionTitle>
            <div className="mt-8 flex flex-col divide-y divide-[#4b3a24]/10 border-b border-[#4b3a24]/10">
              {professor.education.map((edu) => (
                <Entry key={edu.period} period={edu.period}>
                  <p>{edu.degree}</p>
                  {edu.thesis && (
                    <p className="mt-2 text-xl font-normal text-[#4b3a24]/60">
                      Thesis: {edu.thesis}
                    </p>
                  )}
                  {edu.advisor && (
                    <p className="mt-1 text-xl font-normal text-[#4b3a24]/60">
                      (Advisor: {edu.advisor})
                    </p>
                  )}
                </Entry>
              ))}
            </div>
          </section>

          <section className="pt-16">
            <SectionTitle>Experiences</SectionTitle>
            <div className="mt-8 flex flex-col divide-y divide-[#4b3a24]/10 border-b border-[#4b3a24]/10">
              {professor.experience.map((exp) => (
                <Entry key={exp.period} period={exp.period}>
                  {exp.title}
                </Entry>
              ))}
            </div>
          </section>

          <section className="pt-16">
            <SectionTitle>Research Interests</SectionTitle>
            <div className="mt-8 flex flex-col divide-y divide-[#4b3a24]/10 border-b border-[#4b3a24]/10">
              {professor.researchInterests.map((interest) => (
                <Entry key={interest}>{interest}</Entry>
              ))}
            </div>
          </section>

          <section className="pt-16">
            <SectionTitle>Skills and Techniques</SectionTitle>
            <div className="mt-8 flex flex-col divide-y divide-[#4b3a24]/10 border-b border-[#4b3a24]/10">
              {professor.skills.map((skill) => (
                <div key={skill.category} className="py-8">
                  <p className="text-lg font-medium tracking-wide text-[#9c5b33]">
                    {skill.category}
                  </p>
                  <div className="mt-2 flex flex-col gap-1">
                    {skill.items.map((item) => (
                      <p
                        key={item}
                        className="text-2xl font-semibold text-[#26343a]"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-16">
            <SectionTitle>Awards</SectionTitle>
            <div className="mt-8 flex flex-col divide-y divide-[#4b3a24]/10 border-b border-[#4b3a24]/10">
              {professor.awards.map((award) => (
                <Entry key={award.date + award.title} period={award.date}>
                  {award.title}
                </Entry>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
