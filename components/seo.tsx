"use client"

import Head from "next/head"
import { usePathname } from "next/navigation"

interface SEOProps {
  title?: string
  description?: string
  canonicalPath?: string
  ogImage?: string
  noindex?: boolean
  locale?: string
  alternateLanguages?: {
    [key: string]: string
  }
}

export default function SEO({
  title,
  description,
  canonicalPath,
  ogImage = "/og-image.png",
  noindex = false,
  locale = "fr",
  alternateLanguages,
}: SEOProps) {
  const pathname = usePathname()

  // Base domain
  const domain = "https://codebarregenerator.com"

  // Determine canonical URL
  // If canonicalPath is provided, use it; otherwise use current pathname
  const canonicalUrl = `${domain}${canonicalPath || pathname}`

  // Format OG image URL
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${domain}${ogImage}`

  return (
    <Head>
      {/* Basic Meta Tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}

      {/* Canonical URL - Critical for SEO */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Alternate language versions */}
      {alternateLanguages &&
        Object.entries(alternateLanguages).map(([lang, path]) => (
          <link key={lang} rel="alternate" hrefLang={lang} href={`${domain}${path}`} />
        ))}
      <link rel="alternate" hrefLang="x-default" href={domain} />

      {/* Open Graph Tags */}
      <meta property="og:url" content={canonicalUrl} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale === "fr" ? "fr_FR" : "pt_BR"} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Indexing Control */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
    </Head>
  )
}
