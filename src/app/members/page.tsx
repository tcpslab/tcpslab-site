import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import MemberCard from "@/components/MemberCard";
import { alumni, professor, researchers } from "@/lib/members";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold tracking-wide text-[#4b3a24]/50 uppercase">
      {children}
    </h2>
  );
}

export default function MembersPage() {
  const graduateStudents = researchers.filter(
    (member) => member.role === "Master Course",
  );
  const undergraduateStudents = researchers.filter(
    (member) => member.role === "Undergraduate Student",
  );

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
          <section>
            <SectionTitle>Professor</SectionTitle>
            <div className="mt-8 border-b border-[#4b3a24]/10 pb-16">
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
                href="/members/professor"
              />
            </div>
          </section>

          <section className="pt-16">
            <SectionTitle>Graduate Students</SectionTitle>
            <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-16 border-b border-[#4b3a24]/10 pb-16 lg:grid-cols-2">
              {graduateStudents.map((member) => (
                <MemberCard
                  key={member.slug}
                  name={member.name}
                  slug={member.slug}
                  photoExt={member.photoExt}
                  lines={[member.role]}
                  researchInterests={member.researchInterests}
                  bottomItems={[{ icon: "email", text: member.email }]}
                />
              ))}
            </div>
          </section>

          <section className="pt-16">
            <SectionTitle>Undergraduate Students</SectionTitle>
            <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-16 border-b border-[#4b3a24]/10 pb-16 lg:grid-cols-2">
              {undergraduateStudents.map((member) => (
                <MemberCard
                  key={member.slug}
                  name={member.name}
                  slug={member.slug}
                  lines={[member.role]}
                  bottomItems={[{ icon: "email", text: member.email }]}
                />
              ))}
            </div>
          </section>

          <section className="pt-16">
            <SectionTitle>Alumni</SectionTitle>
            <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
              {alumni.map((member) => (
                <MemberCard
                  key={member.slug}
                  name={member.name}
                  slug={member.slug}
                  lines={[member.role]}
                  bottomItems={[{ text: member.period }]}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
