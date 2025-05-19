import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Code Barre Generator - Générateur de code barre en ligne gratuit"
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        color: "#4169e1",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 40,
        }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-512x512-hjL269U4bOUtCS18IUlExlkignEvQD.png"
          alt="Code Barre Generator Logo"
          width={200}
          height={200}
        />
        <h1
          style={{
            fontSize: 64,
            fontWeight: 800,
            marginTop: 20,
          }}
        >
          Code Barre Generator
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
        Générateur de code barre en ligne gratuit et facile à utiliser
      </p>
    </div>,
    {
      ...size,
    },
  )
}
