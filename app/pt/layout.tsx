import type React from "react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

// 定义 viewport 对象
export const viewport = {
  themeColor: "#4169e1", // themeColor 已移到这里
}

// metadata 对象，移除了 themeColor
export const metadata = {
  title: "Gerador de Código de Barras Gratuito Online | Crie Já Seus Códigos",
  description:
    "Crie diversos tipos de código de barras gratuitamente com nosso gerador online. Ferramenta fácil para gerar seu código de barras rapidamente em CodeBarreGenerator.com.",
  alternates: {
    canonical: "https://codebarregenerator.com/pt",
    languages: {
      fr: "https://codebarregenerator.com",
      pt: "https://codebarregenerator.com/pt",
      "x-default": "https://codebarregenerator.com",
    },
  },
  applicationName: "Code Barre Generator",
  // themeColor: "#4169e1", // 已从此对象中移除
}

export default function PtLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <head>
        {/* 
          Next.js App Router 会通过 metadata 和 viewport API 管理 <head> 内容。
          此处的 <head> 标签及其内容 (如 <link rel="canonical">) 
          实际上可能不会按预期方式渲染或可能与 Next.js 自动生成的标签冲突。
          推荐的做法是通过 metadata.alternates.canonical 来处理 canonical links。
          为了最小改动，暂时保留，但后续可以考虑移除此 <head> 部分。
        */}
        <link rel="canonical" href="https://codebarregenerator.com/pt" />
      </head>
      {children}
    </>
  )
}
