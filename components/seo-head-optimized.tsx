import Head from "next/head"

interface SEOHeadProps {
  title: string
  description: string
  canonicalPath: string
  ogImage?: string
  locale: string
  keywords?: string[]
}

export default function SEOHead({
  title,
  description,
  canonicalPath,
  ogImage = "/og-image.png",
  locale,
  keywords = [],
}: SEOHeadProps) {
  const domain = "https://codebarregenerator.com"
  const canonicalUrl = `${domain}${canonicalPath}`
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${domain}${ogImage}`

  // 将关键词转换为字符串
  const keywordsString = keywords.join(", ")

  return (
    <Head>
      {/* 规范标签 */}
      <link rel="canonical" href={canonicalUrl} />

      {/* 基本元标签 */}
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywordsString} />}

      {/* Open Graph 标签 */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale === "fr" ? "fr_FR" : "pt_BR"} />
      <meta property="og:site_name" content="CodeBarreGenerator.com" />

      {/* Twitter 卡片标签 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Head>
  )
}
