import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { courses } from "@/lib/courses";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-3 inline-block rounded-full border border-[#4b3a24]/20 px-3 py-1 text-xs font-medium text-[#4b3a24]/70">
      {children}
    </span>
  );
}

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader title="Courses" image="/courses.jpg" />

      <main className="flex-1 bg-white">
        <div
          className="mx-auto w-full max-w-[1920px] py-16"
          style={{
            paddingLeft: "clamp(24px, 3vw, 40px)",
            paddingRight: "clamp(24px, 3vw, 40px)",
          }}
        >
          <div className="flex flex-col divide-y divide-[#4b3a24]/10 border-t border-[#4b3a24]/10">
            {courses.map((course) => (
              <div key={course.number} className="flex gap-6 py-8">
                <div className="w-8 shrink-0 text-base font-semibold text-[#4b3a24]/30">
                  {course.number}
                </div>
                <div>
                  <p className="text-base font-medium tracking-wide text-[#9c5b33]">
                    {course.semester} · {course.schedule}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[#26343a]">
                    {course.title}
                  </h3>
                  <p className="mt-1 text-base text-[#4b3a24]/70">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Pill>{course.level}</Pill>
                    <Pill>{course.code}</Pill>
                    <Pill>{course.location}</Pill>
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
