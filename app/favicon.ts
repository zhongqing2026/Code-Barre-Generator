import type { MetadataRoute } from "next"

export default function favicon(): MetadataRoute.Favicon {
  return [
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
      sizes: "any",
    },
    {
      rel: "icon",
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/icon.png",
      type: "image/svg+xml",
    },
    {
      rel: "manifest",
      url: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      url: "/safari-pinned-tab.png",
      color: "#000000",
    },
  ]
}
