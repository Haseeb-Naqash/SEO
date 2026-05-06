import { ArrowUpRight } from "lucide-react"

type Role = {
  period: string
  title: string
  company: string
  description: string
  tags: string[]
}

const roles: Role[] = [
  {
    period: "Jan 2026 — Present",
    title: "Data Science (AI/ML) Intern",
    company: "Programmer Force",
    description:
      "Working on machine learning workflows and data analytics — building, training, and evaluating models with Python. Collaborating with the team on AI-driven features that turn raw data into product value.",
    tags: ["Python", "Machine Learning", "Data Analytics", "AI"],
  },
  {
    period: "2021 — Present",
    title: "Freelance Web Developer & SEO",
    company: "Self-employed",
    description:
      "Delivering end-to-end digital solutions for clients across multiple industries. Building responsive websites in React, Next.js, and WordPress, applying on-page and technical SEO strategies, and adding clean graphics so every site ships ready to rank and convert.",
    tags: ["React.js", "Next.js", "WordPress", "On-page SEO", "Tailwind CSS"],
  },
  {
    period: "Jul 2024 — Aug 2024",
    title: "Front-End Developer (Remote)",
    company: "HISkyTech",
    description:
      "Built responsive front-end interfaces with HTML, CSS, JavaScript, and modern frameworks. Translated designs into pixel-accurate, accessible components and collaborated with the team on UI improvements across the product.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js"],
  },
  {
    period: "Sep 2024 — Oct 2024",
    title: "Social Media Marketing Officer",
    company: "Lorena Organics",
    description:
      "Planned and executed social-media content for an organic-products brand. Created campaigns, managed the content calendar, and tracked engagement to grow audience reach across platforms.",
    tags: ["Social Media", "Content Strategy", "Campaigns", "Analytics"],
  },
  {
    period: "Aug 2023 — Aug 2024",
    title: "Web Development & SEO",
    company: "Meezab Air",
    description:
      "Maintained and improved the company website with new features and content updates. Implemented on-page SEO across travel and Hajj/Umrah landing pages, optimized metadata and internal linking, and improved overall search visibility.",
    tags: ["WordPress", "On-page SEO", "PHP", "Content Updates"],
  },
  {
    period: "Apr 2023 — Aug 2023",
    title: "Web Development & SEO Trainee",
    company: "Optimiserz",
    description:
      "Worked on client websites alongside the development team — building pages, fixing front-end issues, and assisting with keyword research and SEO implementation. Strengthened practical skills with a real production workflow.",
    tags: ["HTML", "CSS", "JavaScript", "SEO Basics"],
  },
]

export function Experience() {
  return (
    <section id="experience" aria-label="Experience" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/85 px-6 py-5 backdrop-blur-sm lg:sr-only lg:relative lg:mx-0 lg:w-auto lg:bg-transparent lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">Experience</h2>
      </div>

      <ol className="group/list">
        {roles.map((role, idx) => (
          <li key={idx} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card/50 lg:group-hover:shadow-[inset_0_1px_0_0_oklch(1_0_0_/_0.05)] lg:group-hover:drop-shadow-lg" />

              <header className="z-10 mb-2 mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground sm:col-span-2">
                {role.period}
              </header>

              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-foreground">
                  <a
                    href="#"
                    className="group/link inline-flex items-baseline gap-1 text-base text-foreground transition-colors hover:text-primary focus-visible:text-primary"
                    aria-label={`${role.title} at ${role.company}`}
                  >
                    <span>
                      {role.title} <span className="text-muted-foreground">·</span>{" "}
                      <span className="inline-block">
                        {role.company}
                        <ArrowUpRight
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </a>
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {role.description}
                </p>

                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Skills used">
                  {role.tags.map((tag) => (
                    <li key={tag}>
                      <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs leading-5 text-primary">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <a
          href="https://www.linkedin.com/in/haseeb-naqash"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-baseline font-medium leading-tight text-foreground"
        >
          <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
            View Full Résumé
          </span>
          <ArrowUpRight
            className="ml-1 h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  )
}
