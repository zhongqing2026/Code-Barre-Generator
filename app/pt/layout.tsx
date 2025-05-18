import type React from "react";
import type { Metadata, Viewport } from 'next'; // 导入 Metadata 和 Viewport 类型
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { // 添加 Metadata 类型
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
  // themeColor 属性已移至下面的 viewport 对象
};

export const viewport: Viewport = { // 新增 viewport 对象并添加 Viewport 类型
  themeColor: "#4169e1", // themeColor 正确配置在这里
};

export default function PtLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 这个布局只返回子节点，它依赖于父布局 (app/layout.tsx) 
  // 来提供 <html> 和 <body> 结构。
  // 请注意，如果父布局的 <html lang="fr">，
  // 那么这个葡萄牙语页面的 lang 属性也会是 "fr"，除非通过其他机制（如 Next.js 国际化路由）正确设置。
  return <>{children}</>;
}
