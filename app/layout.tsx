import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollRestoration from "@/components/ui/scroll-restoration"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Abdul Sport Center - Premium Fitness & Wellness",
  description:
    "Transform your fitness journey at Abdul Sport Center. Premium gym facilities, expert trainers, and personalized programs in a luxurious environment.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ScrollRestoration />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
