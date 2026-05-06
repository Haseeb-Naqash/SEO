"use client"

import { useEffect, useRef } from "react"
import { Sidebar } from "@/components/portfolio/sidebar"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { CaseStudies } from "@/components/portfolio/case-studies"
import { Services } from "@/components/portfolio/services"
import { Education } from "@/components/portfolio/education"
import { Contact } from "@/components/portfolio/contact"

export default function Page() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      el.style.setProperty("--x", `${e.clientX}px`)
      el.style.setProperty("--y", `${e.clientY}px`)
    }

    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <div
      ref={rootRef}
      className="spotlight relative min-h-screen bg-background leading-relaxed text-foreground antialiased selection:bg-primary/30 selection:text-foreground"
    >
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />

          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <div className="h-24" aria-hidden="true" />
            <Experience />
            <div className="h-24" aria-hidden="true" />
            <CaseStudies />
            <div className="h-24" aria-hidden="true" />
            <Services />
            <div className="h-24" aria-hidden="true" />
            <Education />
            <div className="h-24" aria-hidden="true" />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  )
}
