import "./globals.css"
import { Geist } from "next/font/google"
import { SessionWrapper } from "@/components/SessionWrapper"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata = {
  title: "next-social-login",
  description: "An easy authentication way to Github, Google or Facebook using NextAuth.js.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geistSans.className}>
      <body>
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  )
}