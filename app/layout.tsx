import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Haseeb Naqash — Web Developer & SEO Specialist",
  description:
    "Full-stack web developer and SEO specialist based in Lahore, Pakistan. Building modern websites with React, Next.js, and the MERN stack — ranked, fast, and conversion-ready.",
  generator: "v0.app",
  keywords: [
    "Haseeb Naqash",
    "Web Developer Pakistan",
    "SEO Expert Lahore",
    "Full Stack Developer",
    "Next.js Developer",
    "MERN Stack",
    "WordPress Developer",
    "Search Engine Optimization",
  ],
  authors: [{ name: "Haseeb Naqash" }],
  openGraph: {
    title: "Haseeb Naqash — Web Developer & SEO Specialist",
    description:
      "Full-stack web developer and SEO specialist building fast, ranked, conversion-ready websites with React, Next.js, and the MERN stack.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background dark`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
