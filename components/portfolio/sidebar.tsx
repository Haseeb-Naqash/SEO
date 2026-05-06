"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "case-studies", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "education", label: "Education" },
]

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }))

      const viewportMid = window.innerHeight / 2

      for (const section of sections) {
        if (!section.element) continue
        const rect = section.element.getBoundingClientRect()
        if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Available for freelance & full-time
          </span>
        </div>

        <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          Haseeb Naqash
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
          Web Developer & SEO Specialist
        </h2>
        <p className="mt-4 max-w-xs text-pretty leading-relaxed text-muted-foreground">
          Full-stack developer based in Lahore, Pakistan — building fast, ranked, conversion-ready
          websites with React, Next.js, and the MERN stack.
        </p>

        <nav className="mt-16 hidden lg:block" aria-label="In-page navigation">
          <ul className="flex w-max flex-col gap-4 font-mono text-xs uppercase tracking-[0.2em]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="group flex items-center py-1.5"
                  >
                    <span
                      className={cn(
                        "mr-4 h-px transition-all",
                        isActive
                          ? "w-16 bg-foreground"
                          : "w-8 bg-muted-foreground/40 group-hover:w-16 group-hover:bg-foreground",
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        "transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-12 flex items-center gap-5" aria-label="Contact and social media">
        <li>
          <a
            href="https://www.linkedin.com/in/haseeb-naqash"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href="mailto:haseebnaqash6704217@gmail.com"
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            href="tel:+923216704217"
            aria-label="Phone"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-5 w-5" />
          </a>
        </li>
        <li className="ml-auto hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-primary"
          >
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </li>
      </ul>
    </aside>
  )
}
