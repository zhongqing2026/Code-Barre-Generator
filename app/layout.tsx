import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import LanguageBanner from "@/components/language-banner"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Code Barre Generator Gratuit et Efficace | Créez Vos Codes en Ligne",
  description:
    "Utilisez notre generateur de code barre en ligne pour créer et télécharger des codes barres (EAN, QR, etc.). CodeBarreGenerator.com : simple, rapide et gratuit.",
  alternates: {
    canonical: "https://codebarregenerator.com",
    languages: {
      fr: "https://codebarregenerator.com",
      pt: "https://codebarregenerator.com/pt",
      "x-default": "https://codebarregenerator.com",
    },
  },
  applicationName: "Code Barre Generator",
  themeColor: "#000000",
  appleWebApp: {
    title: "Code Barre Generator",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.png",
        color: "#000000",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://codebarregenerator.com" />
        <link rel="alternate" hrefLang="fr" href="https://codebarregenerator.com" />
        <link rel="alternate" hrefLang="pt" href="https://codebarregenerator.com/pt" />
        <link rel="alternate" hrefLang="x-default" href="https://codebarregenerator.com" />
        <meta name="application-name" content="Code Barre Generator" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Code Barre Generator" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageBanner />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
