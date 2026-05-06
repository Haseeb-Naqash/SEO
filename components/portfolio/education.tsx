import { GraduationCap, BookOpen } from "lucide-react"

type Item = {
  period: string
  title: string
  institution: string
  description?: string
}

const degrees: Item[] = [
  {
    period: "2021 — 2025",
    title: "Bachelor of Information Technology (BS IT)",
    institution: "University of Management and Technology (UMT), Lahore",
  },
  {
    period: "2020 — 2024",
    title: "Bachelor of Commerce (B.Com)",
    institution: "Allama Iqbal Open University",
  },
  {
    period: "2018 — 2020",
    title: "Intermediate in Science (FSc Pre-Engineering)",
    institution: "Punjab Group of Colleges, Fateh Pur, Layyah",
  },
  {
    period: "Aug 2021",
    title: "Computer Application (CCA)",
    institution: "TEVTA — Technical Education & Vocational Training Authority",
  },
]

const courses: Item[] = [
  {
    period: "2024 — Present",
    title: "Full Stack Developer",
    institution: "Udemy",
    description: "Hands-on full-stack curriculum covering front-end, back-end, and databases.",
  },
  {
    period: "2025 — Present",
    title: "Advanced Python Programming",
    institution: "ExD Navttc Course",
    description: "Advanced Python — OOP, data structures, and applied programming patterns.",
  },
]

export function Education() {
  return (
    <section id="education" aria-label="Education" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/85 px-6 py-5 backdrop-blur-sm lg:sr-only lg:relative lg:mx-0 lg:w-auto lg:bg-transparent lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">Education</h2>
      </div>

      <div className="space-y-10">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-primary" aria-hidden="true" />
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">
              Degrees
            </h3>
          </div>
          <ol className="group/list">
            {degrees.map((item, idx) => (
              <li key={idx} className="mb-6 last:mb-0">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-3 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card/50 lg:group-hover:shadow-[inset_0_1px_0_0_oklch(1_0_0_/_0.05)]" />
                  <header className="z-10 mb-1 mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground sm:col-span-2">
                    {item.period}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h4 className="text-base font-medium leading-snug text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.institution}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">
              Courses & Certifications
            </h3>
          </div>
          <ol className="group/list">
            {courses.map((item, idx) => (
              <li key={idx} className="mb-6 last:mb-0">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-3 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card/50 lg:group-hover:shadow-[inset_0_1px_0_0_oklch(1_0_0_/_0.05)]" />
                  <header className="z-10 mb-1 mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground sm:col-span-2">
                    {item.period}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h4 className="text-base font-medium leading-snug text-foreground">
                      {item.title}{" "}
                      <span className="text-muted-foreground">· {item.institution}</span>
                    </h4>
                    {item.description && (
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
