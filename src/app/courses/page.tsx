import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { courses } from "@/lib/courses";

type Course = (typeof courses)[number];

const semesterOrder = {
  spring: 1,
  summer: 2,
  fall: 3,
  winter: 4,
} as const;

function getSemesterInfo(semester: string) {
  const label = semester.trim().replace(/\s+/g, " ");
  const match = /^(\d{4})\s+(spring|summer|fall|winter)$/i.exec(label);

  if (!match) {
    return { label: label || "Unspecified Semester", sortKey: 0 };
  }

  const term = match[2].toLowerCase() as keyof typeof semesterOrder;
  return {
    label: `${match[1]} ${term.charAt(0).toUpperCase()}${term.slice(1)}`,
    sortKey: Number(match[1]) * 10 + semesterOrder[term],
  };
}

function groupCoursesBySemester(items: readonly Course[]) {
  const groups = new Map<
    string,
    { semester: string; sortKey: number; courses: Course[] }
  >();

  for (const course of items) {
    const { label, sortKey } = getSemesterInfo(course.semester);
    const group = groups.get(label);

    if (group) {
      group.courses.push(course);
    } else {
      groups.set(label, { semester: label, sortKey, courses: [course] });
    }
  }

  return Array.from(groups.values())
    .sort((a, b) => b.sortKey - a.sortKey || a.semester.localeCompare(b.semester))
    .map((group) => ({
      ...group,
      // Keep the existing manual number for ordering within each semester only.
      courses: group.courses.sort((a, b) => b.number - a.number),
    }));
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-3 inline-block rounded-full border border-[#4b3a24]/20 px-3 py-1 text-xs font-medium text-[#4b3a24]/70">
      {children}
    </span>
  );
}

export default function CoursesPage() {
  const semesterGroups = groupCoursesBySemester(courses);

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
          <div className="flex flex-col divide-y divide-[#4b3a24]/20 border-y border-[#4b3a24]/20">
            {semesterGroups.map(({ semester, courses: semesterCourses }) => (
              <section
                key={semester}
                className="grid grid-cols-1 gap-5 py-8 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8"
              >
                <div className="min-w-0">
                  <h2 className="text-xl font-semibold text-[#26343a] md:text-2xl">
                    {semester}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-[#4b3a24]/50">
                    {semesterCourses.length}{" "}
                    {semesterCourses.length === 1 ? "Course" : "Courses"}
                  </p>
                </div>

                <div className="min-w-0 divide-y divide-[#4b3a24]/10">
                  {semesterCourses.map((course) => (
                    <article key={course.number} className="py-6 first:pt-0 last:pb-0">
                      <p className="text-base font-medium tracking-wide text-[#9c5b33]">
                        {course.schedule}
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
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
