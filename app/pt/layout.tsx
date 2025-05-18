import type React from "react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gerador de Código de Barras Gratuito Online | Crie Já Seus Códigos",
  description:
    "Crie diversos tipos de código de barras gratuitamente com nosso gerador online. Ferramenta fácil para gerar seu código de barras rapidamente em CodeBarreGenerator.com.",
  alternates: {
    languages: {
      fr: "/",
      pt: "/pt",
      "x-default": "/",
    },
  },
  applicationName: "Code Barre Generator",
  themeColor: "#4169e1",
}

export default function PtLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
