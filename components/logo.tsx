import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  withText?: boolean
  href?: string
  darkMode?: boolean
}

export default function Logo({ size = "md", withText = true, href = "/", darkMode = false }: LogoProps) {
  // 根据尺寸设置宽高
  const dimensions = {
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 40, height: 40 },
  }

  const { width, height } = dimensions[size]

  // Logo 组件内容
  const logoContent = (
    <>
      <Image
        src="/android-chrome-192x192.png"
        alt="Code Barre Generator Logo"
        width={width}
        height={height}
        className={`${darkMode ? "bg-white rounded-md p-0.5" : ""}`}
        priority={size === "lg"}
      />
      {withText && (
        <span
          className={`font-bold font-heading ${size === "lg" ? "text-xl" : size === "md" ? "text-lg" : "text-base"} ${darkMode ? "text-white" : "text-black"}`}
        >
          CodeBarreGenerator.com
        </span>
      )}
    </>
  )

  // 如果提供了 href，则包装在 Link 中
  if (href) {
    return (
      <Link href={href} className="flex items-center gap-2">
        {logoContent}
      </Link>
    )
  }

  // 否则只返回内容
  return <div className="flex items-center gap-2">{logoContent}</div>
}
