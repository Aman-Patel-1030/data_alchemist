// import type { Metadata } from 'next'
// import './globals.css'
// import { AppNavbar } from "@/components/app-navbar"
// import { AppSidebar } from "@/components/app-sidebar"
// import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

// export const metadata: Metadata = {
//   title: 'Data Management Dashboard',
//   description: 'Created with Next.js, Tailwind CSS, and Shadcn UI',
//   generator: 'Aman-Patel',
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//        <AppNavbar />
//        <AppSidebar/>
//       <body>{children}</body>
//     </html>
//   )
// }
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"


import { AppNavbar } from "@/components/app-navbar"
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Data Alchemist - AI-Powered Data Processing",
  description:
    "Transform your raw data into intelligent insights with AI-powered validation, natural language processing, and automated rule generation.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
         {/* flex-1 space-y-4 pb-4 */}
            
              <main >{children}</main>
          
        </ThemeProvider>
      </body>
    </html>
  )
}
// bg-gradient-to-br from-primary to-black text-white

