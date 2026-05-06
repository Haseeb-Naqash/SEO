import Image from "next/image"
import { ArrowUpRight, Sparkles } from "lucide-react"

type Project = {
  client: string
  industry: string
  headline: string
  description: string
  highlights: { label: string; value: string }[]
  image: string
  imageAlt: string
  url: string
}

const projects: Project[] = [
  {
    client: "Zamadina",
    industry: "Travel · Hajj & Umrah",
    headline: "On-page SEO & content optimization for an Umrah & Hajj travel brand",
    description:
      "Led full on-page SEO for the Zamadina website — keyword research around high-intent Umrah and Hajj queries, optimized titles, meta descriptions, headings, and internal linking across package landing pages. Cleaned up URL structure, added schema markup for travel offers, and improved page speed and Core Web Vitals to lift organic visibility.",
    highlights: [
      { label: "Focus", value: "On-page SEO" },
      { label: "Schema", value: "Travel / Offer" },
      { label: "Goal", value: "Organic Leads" },
    ],
    image: "/zamadina-umrah-hajj-seo-traffic-growth.jpg",
    imageAlt: "Organic traffic growth chart for Zamadina Umrah and Hajj website",
    url: "https://zamadina.com",
  },
  {
    client: "Stretchabilitation",
    industry: "Health · Wellness · Local SEO",
    headline: "Local SEO & keyword targeting for a stretching & rehab brand",
    description:
      "Optimized the Stretchabilitation website for local and service-based search. Researched bottom-of-funnel keywords around assisted stretching and rehabilitation, restructured service pages, fixed thin content, and improved metadata, alt text, and internal linking. Tuned the Google Business Profile and on-page signals to compete in the local pack.",
    highlights: [
      { label: "Focus", value: "Local + On-page" },
      { label: "Pages", value: "Service Hubs" },
      { label: "Goal", value: "Local Pack Rank" },
    ],
    image: "/stretchabilitation-wellness-seo-keyword-rankings.jpg",
    imageAlt: "Local keyword ranking dashboard for Stretchabilitation wellness brand",
    url: "https://stretchabilitation.com",
  },
  {
    client: "BDVail",
    industry: "Business Directory · Authority SEO",
    headline: "Technical SEO & authority building for a business directory",
    description:
      "Worked on technical and off-page SEO for BDVail — fixed crawlability issues, improved site architecture and category structure, deduplicated thin listing pages, and added structured data for local businesses. Built a clean backlink profile with relevant directory and partner placements to grow domain authority over time.",
    highlights: [
      { label: "Focus", value: "Technical + Off-page" },
      { label: "Schema", value: "LocalBusiness" },
      { label: "Goal", value: "Domain Authority" },
    ],
    image: "/bdvail-business-directory-seo-backlink-graph.jpg",
    imageAlt: "Backlink and authority graph for BDVail business directory",
    url: "https://bdvail.com",
  },
  {
    client: "Sierra Dumpster",
    industry: "Service Business · Local SEO",
    headline: "Local SEO for a dumpster rental service across service areas",
    description:
      "Built out location-specific landing pages for Sierra Dumpster targeting dumpster rental queries across multiple service areas. Optimized titles, meta tags, headings, and internal linking, added LocalBusiness schema, and tuned the Google Business Profile to capture map-pack and service-area intent for high-converting local searches.",
    highlights: [
      { label: "Focus", value: "Local SEO" },
      { label: "Pages", value: "Service Areas" },
      { label: "Goal", value: "Map Pack Calls" },
    ],
    image: "/sierra-dumpster-local-seo-google-maps-rankings.jpg",
    imageAlt: "Local SEO map and rankings dashboard for Sierra Dumpster rental service",
    url: "https://sierradumpster.com",
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" aria-label="Projects" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/85 px-6 py-5 backdrop-blur-sm lg:sr-only lg:relative lg:mx-0 lg:w-auto lg:bg-transparent lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">Projects</h2>
      </div>

      <ul className="group/list space-y-12">
        {projects.map((project, idx) => (
          <li key={idx}>
            <article className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card/50 lg:group-hover:shadow-[inset_0_1px_0_0_oklch(1_0_0_/_0.05)] lg:group-hover:drop-shadow-lg" />

              <div className="z-10 sm:col-span-2 sm:translate-y-1">
                <div className="overflow-hidden rounded border border-border/60 bg-card">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.imageAlt}
                    width={400}
                    height={240}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {project.industry}
                </p>
              </div>

              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-baseline gap-1 text-base text-foreground transition-colors hover:text-primary focus-visible:text-primary"
                  >
                    <span>
                      {project.client} <span className="text-muted-foreground">·</span>{" "}
                      <span>
                        {project.headline}
                        <ArrowUpRight
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </a>
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <dl className="mt-4 grid grid-cols-3 gap-3">
                  {project.highlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-md border border-border/60 bg-card/40 p-3"
                    >
                      <dt className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        <Sparkles className="h-3 w-3 text-primary" aria-hidden="true" />
                        {item.label}
                      </dt>
                      <dd className="mt-1 font-mono text-sm font-semibold text-foreground">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
