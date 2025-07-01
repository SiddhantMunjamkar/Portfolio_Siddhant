import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Siddhant Munjamkar - Automation Engineer, AI Agent Builder & Web Developer",
  description:
    "Professional portfolio showcasing automation engineering, AI agent development, and scalable web platforms.",
  keywords: ["creative developer", "digital artist", "web development", "3D design", "portfolio"],
  authors: [{ name: "Alexandra Chen" }],
  openGraph: {
    title: "Siddhant Munjamkar - Automation Engineer",
    description:
      "Crafting intelligent systems and scalable web platforms at the crossroads of automation, AI, and infrastructure engineering",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
