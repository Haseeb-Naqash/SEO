import { Code2, Server, Database, Search, Brain, ShieldCheck } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Front-End Development",
    description:
      "Responsive, accessible interfaces in HTML, CSS, JavaScript, Tailwind, React, and Next.js — built to perform on every device and ready for production.",
  },
  {
    icon: Server,
    title: "Back-End Development",
    description:
      "REST APIs and server logic with Node.js, Express, and PHP. Clean architecture, secure authentication, and integrations that don&apos;t break under load.",
  },
  {
    icon: Database,
    title: "Database & Full-Stack",
    description:
      "MongoDB, MySQL, and SQL — schema design, queries, and end-to-end MERN-stack apps. Built for clarity now and scale later.",
  },
  {
    icon: Search,
    title: "On-Page & Technical SEO",
    description:
      "Keyword research, metadata, headings, internal linking, and clean URL structure — so the sites I build actually rank, not just look good.",
  },
  {
    icon: Brain,
    title: "Python, ML & Data",
    description:
      "Python for data analytics, machine learning, and automation. Currently applying AI/ML at Programmer Force on real-world problems.",
  },
  {
    icon: ShieldCheck,
    title: "WordPress & Networking",
    description:
      "Custom WordPress builds, theme &amp; plugin work, plus a working knowledge of networking and cybersecurity strategies for safer deployments.",
  },
]

export function Services() {
  return (
    <section id="services" aria-label="Services" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/85 px-6 py-5 backdrop-blur-sm lg:sr-only lg:relative lg:mx-0 lg:w-auto lg:bg-transparent lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">Services</h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              className="group rounded-md border border-border/60 bg-card/40 p-5 transition-colors hover:border-primary/40 hover:bg-card/70"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="text-sm font-medium text-foreground">{service.title}</h3>
              </div>
              <p
                className="mt-3 text-sm leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
