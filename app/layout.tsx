import type React from "react";
import type { Metadata, Viewport } from 'next'; // 导入 Metadata 和 Viewport 类型
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import LanguageBanner from "@/components/language-banner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 定义 metadata 对象
export const metadata: Metadata = {
  title: "Code Barre Generator Gratuit et Efficace | Créez Vos Codes en Ligne",
  description:
    "Utilisez notre generateur de code barre en ligne pour créer et télécharger des codes barres (EAN, QR, etc.). CodeBarreGenerator.com : simple, rapide et gratuit.",
  alternates: {
    languages: {
      fr: "/",
      pt: "/pt",
      "x-default": "/",
    },
  },
  applicationName: "Code Barre Generator",
  // themeColor 属性已移至下面的 viewport 对象
  generator: 'v0.dev', // 这是 v0.dev 工具添加的，可以按需保留或移除
};

// 定义 viewport 对象，用于控制视口和主题颜色等
export const viewport: Viewport = {
  themeColor: "#4169e1", // themeColor 正确配置在这里
  // 你也可以在这里添加其他 viewport 相关的元数据，例如：
  // width: 'device-width',
  // initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* 
          Next.js 的 `metadata` 和 `viewport` API 可以管理许多常见的 <meta> 标签。
          例如 `apple-mobile-web-app-*`, `msapplication-TileColor` 等。
          可以查阅 Next.js 文档，考虑是否将以下部分标签通过 API 配置以简化 <head>。
          `hreflang` 标签通过 `metadata.alternates.languages` 配置是推荐的做法，你已经这样做了。
        */}
        <link rel="alternate" hrefLang="fr" href="https://www.codebarregenerator.com/" />
        <link rel="alternate" hrefLang="pt" href="https://www.codebarregenerator.com/pt/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.codebarregenerator.com/" />
        
        {/* 以下是一些PWA和移动设备相关的meta标签，可以检查是否能通过Next.js metadata API配置 */}
        <meta name="application-name" content="Code Barre Generator" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Code Barre Generator" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#4169e1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageBanner />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
