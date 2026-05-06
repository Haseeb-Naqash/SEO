import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="rounded-lg border border-border/60 bg-card/40 p-8 sm:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Get in touch</p>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s build something fast, ranked, and worth shipping.
        </h2>
        <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          I&apos;m open to freelance projects, full-time roles, and collaborations on web
          development, SEO, and AI/ML work. Tell me about your project and what you&apos;re trying
          to achieve.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="mailto:haseebnaqash6704217@gmail.com"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            haseebnaqash6704217@gmail.com
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href="tel:+923216704217"
            className="group inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-card"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            +92 321 6704217
          </a>
        </div>

        <ul className="mt-8 grid gap-4 border-t border-border/60 pt-6 sm:grid-cols-3">
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="block text-foreground">Location</span>
              Clifton Colony, Lahore, Pakistan
            </span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="block text-foreground">Email</span>
              haseebnaqash6704217@gmail.com
            </span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="block text-foreground">Phone</span>
              +92 321 6704217
            </span>
          </li>
        </ul>
      </div>

      <p className="mt-16 text-xs leading-relaxed text-muted-foreground">
        Designed and built by Haseeb Naqash. Set in{" "}
        <span className="font-medium text-foreground">Inter</span> and{" "}
        <span className="font-mono text-foreground">JetBrains Mono</span>. Built with Next.js and
        Tailwind, deployed on Vercel.
      </p>
    </section>
  )
}
