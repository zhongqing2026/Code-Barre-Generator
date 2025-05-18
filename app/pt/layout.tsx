import type React from "react";
import type { Metadata } from 'next'; // 只需要 Metadata 类型，因为 viewport 会从根布局继承

// 如果这个布局本身不直接使用 Inter 字体，可以移除此导入
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

// 定义特定于葡萄牙语部分的元数据
export const metadata: Metadata = {
  title: "Gerador de Código de Barras Gratuito Online",
  description:
    "Crie diversos tipos de código de barras gratuitamente com nosso gerador online. Ferramenta fácil para gerar seu código de barras rapidamente em CodeBarreGenerator.com.",
  
  // alternates.languages: 将从根布局 app/layout.tsx 继承。
  // applicationName: 将从根布局 app/layout.tsx 继承。
  // metadataBase: 将从根布局 app/layout.tsx 继承，用于解析此处的相对URL (如果有的话)
  //               并用于自动生成规范URL。
  // 其他全局元数据也会从根布局继承。
};

// viewport: 将从根布局 app/layout.tsx 继承，以保持主题颜色等行为一致。
// 如果确实希望葡萄牙语部分有完全独立的主题颜色等视口设置，
// 可以在这里取消注释并定义自己的 viewport 对象，它会覆盖根布局的设置。
// export const viewport: Viewport = {
//   themeColor: "#YourSpecificPortugueseThemeColor", // 示例
// };

export default function PtLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 这个布局的主要职责是应用上面定义的特定于葡萄牙语的元数据，
  // 并渲染其子页面/组件。
  //
  // !!! 重要提醒 !!!
  // 此布局文件本身不会修改从根布局 (app/layout.tsx) 继承的 <html lang="fr"> 属性。
  // 你需要确保通过 Next.js 的国际化路由 (i18n routing) 或其他机制，
  // 使得访问 /pt 路径下的页面时，最终渲染的 HTML 具有 <html lang="pt">。
  // 这是SEO和可访问性的关键。
  return <>{children}</>;
}
