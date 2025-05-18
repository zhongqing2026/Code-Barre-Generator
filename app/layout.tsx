import type React from "react";
import type { Metadata, Viewport } from 'next';
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import LanguageBanner from "@/components/language-banner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 你的权威网站基础URL (不带 www)
const siteUrl = "https://codebarregenerator.com";

export const metadata: Metadata = {
  // metadataBase 是核心，用于解析所有相对元数据URL (规范URL, hreflang等)
  metadataBase: new URL(siteUrl),

  title: "Code Barre Generator Gratuit et Efficace | Créez Vos Codes en Ligne",
  description:
    "Utilisez notre generateur de code barre en ligne pour créer et télécharger des codes barres (EAN, QR, etc.). CodeBarreGenerator.com : simple, rapide et gratuit.",
  keywords: // 你添加了 keywords，很好！
    "generateur code barre​, generateur de code barre​, code barre generator​, générateur code barre​",
  
  alternates: {
    languages: {
      fr: "/",
      pt: "/pt",
      "x-default": "/",
    },
  },

  applicationName: "Code Barre Generator",
  generator: 'v0.dev',

  verification: {
    google: 'akTpdmoOUkf5GnNiT-wHt_W5h91HQPPD3KwWLelpEkQ',
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Code Barre Generator",
  },
  formatDetection: {
    telephone: false,
  },
  // manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#4169e1' },
    { media: '(prefers-color-scheme: dark)', color: '#223a7a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      {/* 
        ！！！关键修改！！！
        这里不再有手动的 <head> 标签。
        Next.js 会根据上面导出的 `metadata` 和 `viewport` 对象，
        自动在这里生成完整的 <head> 标签及其内容。
      */}

      {/*
        如果那个 <meta name="mobile-web-app-capable" content="yes" /> 对你来说非常重要，
        并且你发现 Next.js 的 appleWebApp 配置没有自动生成类似功能 (通常 appleWebApp.capable: true 应该能处理)，
        你可以尝试将它保留在 <html> 标签之后，<body> 标签之前，
        例如：
        <html lang="fr" suppressHydrationWarning>
          <meta name="mobile-web-app-capable" content="yes" /> // <--- 像这样
          <body className={inter.className}>
            // ...
          </body>
        </html>
        但通常情况下，最好是让 Next.js 的 metadata API 来管理所有头部标签。
        如果 appleWebApp.capable: true 就能达到目的，就不需要手动添加这个 meta 标签。
        为了最纯粹地让 Next.js 工作，我暂时在下面完全移除了它。
        你可以先测试没有它的情况，如果确实需要，再考虑如何添加。
      */}

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageBanner />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
