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
  
  // Hreflang 标签会由 Next.js 根据此配置和 metadataBase 自动生成
  alternates: {
    languages: {
      fr: "/",       // 会解析为 https://codebarregenerator.com/
      pt: "/pt",     // 会解析为 https://codebarregenerator.com/pt/
      "x-default": "/", // 会解析为 https://codebarregenerator.com/
    },
    // Next.js 会自动为每个页面生成指向其自身的规范URL (结合 metadataBase)
    // 只有当页面的规范URL不是其自身时，才需要在该页面的 page.tsx 中覆盖它
  },

  applicationName: "Code Barre Generator",
  generator: 'v0.dev', // v0.dev 工具添加的

  // Google Search Console 验证标记
  verification: {
    google: 'akTpdmoOUkf5GnNiT-wHt_W5h91HQPPD3KwWLelpEkQ',
    // yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
    // bing: 'YOUR_BING_VERIFICATION_CODE',
  },

  // PWA 和移动设备相关的元数据
  appleWebApp: {
    capable: true,
    statusBarStyle: "default", // 或 'black' 或 'black-translucent'
    title: "Code Barre Generator", // PWA 在主屏幕上的标题
  },
  formatDetection: {
    telephone: false,
  },
  // 如果你有 manifest.json 文件，可以这样链接：
  // manifest: '/manifest.json',

  // 其他有用的元数据（根据需要添加）
  // keywords: ['code barre', 'generateur', 'ean', 'qr code', 'gratuit'],
  // icons: { // 示例：添加网站图标
  //   icon: '/icon.png', // public/icon.png
  //   apple: '/apple-icon.png', // public/apple-icon.png
  // },
};

// Viewport 配置
export const viewport: Viewport = {
  themeColor: [ // 可以为不同色彩模式设置主题颜色
    { media: '(prefers-color-scheme: light)', color: '#4169e1' },
    { media: '(prefers-color-scheme: dark)', color: '#223a7a' }, // 示例深色模式颜色，请替换为你的实际颜色
  ],
  // width: 'device-width', // Next.js 通常会自动处理
  // initialScale: 1, // Next.js 通常会自动处理
  // msapplicationTileColor: '#4169e1', // 如果需要显式设置 Windows 磁贴颜色
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 设置文档的默认语言，与 x-default 和 fr hreflang 对应
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* 
          Next.js 的 metadata 和 viewport API 会自动管理大部分 <meta> 和 <link> 标签。
          手动添加的 hreflang 已被移除，因为 metadata.alternates.languages 会处理。
          Google Search Console 验证也会由 metadata.verification.google 生成。
          大部分 PWA/mobile 标签已移至 metadata 对象。

          下面的 `mobile-web-app-capable` 是一个示例，如果 Next.js metadata API 没有直接覆盖，
          且你确实需要它，可以保留。但优先使用 Next.js API。
        */}
        <meta name="mobile-web-app-capable" content="yes" />
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
