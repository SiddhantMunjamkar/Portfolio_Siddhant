import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Siddhant Munjamkar - Software Engineer Full-Stack & Platform Systems",
  description:
    "Software engineer building production-grade backend systems, scalable web applications, and platform infrastructure.",
  keywords: [
    "software engineer",
    "backend developer",
    "full stack developer",
    "systems engineering",
    "web applications",
    "microservices",
    "devops",
  ],
  authors: [{ name: "Siddhant Munjamkar" }],
  openGraph: {
    title: "Siddhant Munjamkar | Software Engineer",
    description:
      "Building reliable backend systems, scalable web applications, and production-ready platforms.",
    type: "website",
  },
  
  verification: {
    google: "5pyN-KrRtWJyxuBFJVJnXsw8o2cZhn1LmUtVGX7JvWo",
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
