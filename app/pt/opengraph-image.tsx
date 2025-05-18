import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Gerador de Código de Barras - Gerador de código de barras online gratuito"
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(to right, #000000, #1a1a1a)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        color: "white",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'url(\'data:image/svg+xml,%3Csvg width="100" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h4v20H0zM7 0h1v20H7zM11 0h1v20h-1zM14 0h3v20h-3zM19 0h2v20h-2zM24 0h2v20h-2zM29 0h1v20h-1zM32 0h2v20h-2zM37 0h1v20h-1zM40 0h3v20h-3zM45 0h1v20h-1zM48 0h1v20h-1zM52 0h3v20h-3zM57 0h1v20h-1zM60 0h3v20h-3zM66 0h2v20h-2zM70 0h1v20h-1zM73 0h3v20h-3zM79 0h1v20h-1zM82 0h3v20h-3zM87 0h1v20h-1zM90 0h2v20h-2zM94 0h1v20h-1zM97 0h3v20h-3z" fill="rgba(255,255,255,0.05)"%2F%3E%3C%2Fsvg%3E\')',
          backgroundRepeat: "repeat",
          opacity: 0.3,
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            backgroundColor: "#4169e1",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 20,
          }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="white">
            <rect x="10" y="10" width="10" height="40" rx="2" />
            <rect x="25" y="10" width="2" height="40" />
            <rect x="30" y="10" width="2" height="40" />
            <rect x="35" y="10" width="4" height="40" />
            <rect x="42" y="10" width="2" height="40" />
            <rect x="47" y="10" width="3" height="40" />
          </svg>
        </div>
        <h1
          style={{
            fontSize: 64,
            fontWeight: 800,
          }}
        >
          Gerador de Código de Barras
        </h1>
      </div>
      <p
        style={{
          fontSize: 32,
          opacity: 0.8,
          maxWidth: 800,
          textAlign: "center",
        }}
      >
        Gerador de código de barras online gratuito e fácil de usar
      </p>
    </div>,
    {
      ...size,
    },
  )
}
