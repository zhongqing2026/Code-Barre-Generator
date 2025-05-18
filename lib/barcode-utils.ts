import type { MutableRefObject } from "react"

interface GenerateBarcodeParams {
  canvasRef: MutableRefObject<HTMLCanvasElement | null>
  barcodeType: string
  barcodeData: string
  barcodeColor: string
  backgroundColor: string
  showText: boolean
  height: number
  moduleWidth: number
  errorCorrectionLevel: string
}

// 验证条形码数据
export function validateBarcodeData(barcodeType: string, data: string, t: any) {
  if (!data) {
    return { isValid: false, message: t.enterData }
  }

  let isValid = true
  let message = ""

  switch (barcodeType) {
    case "EAN13":
      // EAN-13需要12位数字（第13位是校验位）
      isValid = /^\d{12,13}$/.test(data)
      message = isValid ? "" : t.validation.ean13
      break
    case "EAN8":
      // EAN-8需要7位数字（第8位是校验位）
      isValid = /^\d{7,8}$/.test(data)
      message = isValid ? "" : t.validation.ean8
      break
    case "UPC":
      // UPC-A需要11位数字（第12位是校验位）
      isValid = /^\d{11,12}$/.test(data)
      message = isValid ? "" : t.validation.upc
      break
    case "CODE39":
      // Code 39支持大写字母、数字和一些特殊字符
      isValid = /^[A-Z0-9\-. $/+%]+$/.test(data)
      message = isValid ? "" : t.validation.code39
      break
    case "ITF14":
      // ITF-14需要13位数字（第14位是校验位）
      isValid = /^\d{13,14}$/.test(data)
      message = isValid ? t.validation.valid : t.validation.itf14
      break
    case "MSI":
      // MSI只支持数字
      isValid = /^\d+$/.test(data)
      message = isValid ? t.validation.valid : t.validation.msi
      break
    case "QR":
      // QR码几乎可以包含任何文本，但我们可以设置一个最大长度
      isValid = data.length > 0 && data.length <= 2000
      message = isValid ? t.validation.valid : t.validation.qr
      break
    default:
      // CODE128等其他类型默认有效
      isValid = true
      message = t.validation.valid
  }

  return { isValid, message }
}

// 生成条形码
export async function generateBarcode({
  canvasRef,
  barcodeType,
  barcodeData,
  barcodeColor,
  backgroundColor,
  showText,
  height,
  moduleWidth,
  errorCorrectionLevel,
}: GenerateBarcodeParams): Promise<void> {
  if (!canvasRef.current) return

  if (barcodeType === "QR") {
    // 生成QR码
    const QRCode = (await import("qrcode")).default
    const canvas = canvasRef.current

    const options = {
      errorCorrectionLevel,
      margin: 4,
      color: {
        dark: barcodeColor,
        light: backgroundColor,
      },
      width: 200,
    }

    await QRCode.toCanvas(canvas, barcodeData, options)
  } else {
    // Generate linear barcodes
    const JsBarcode = (await import("jsbarcode")).default
    const canvas = canvasRef.current

    // Map our barcode types to JsBarcode's expected format values
    let format
    switch (barcodeType) {
      case "EAN13":
        format = "EAN13"
        break
      case "EAN8":
        format = "EAN8"
        break
      case "UPC":
        format = "UPC"
        break
      case "CODE39":
        format = "CODE39"
        break
      case "ITF14":
        format = "ITF14"
        break
      case "MSI":
        format = "MSI"
        break
      case "CODE128":
      default:
        format = "CODE128"
        break
    }

    // Process data for specific barcode types
    let processedData = barcodeData
    if (barcodeType === "EAN13" && barcodeData.length === 12) {
      // Auto-calculate EAN-13 check digit
      const checkDigit = calculateEANCheckDigit(barcodeData)
      processedData = barcodeData + checkDigit
    } else if (barcodeType === "EAN8" && barcodeData.length === 7) {
      // Auto-calculate EAN-8 check digit
      const checkDigit = calculateEANCheckDigit(barcodeData)
      processedData = barcodeData + checkDigit
    } else if (barcodeType === "UPC" && barcodeData.length === 11) {
      // Auto-calculate UPC-A check digit
      const checkDigit = calculateUPCCheckDigit(barcodeData)
      processedData = barcodeData + checkDigit
    }

    try {
      JsBarcode(canvas, processedData, {
        format: format,
        lineColor: barcodeColor,
        background: backgroundColor,
        displayValue: showText,
        height: height,
        width: moduleWidth,
        margin: 10,
        fontSize: 16,
        valid: () => true, // We've already validated
      })
    } catch (error) {
      console.error("JsBarcode error:", error)
      throw new Error(`Failed to generate barcode: ${error.message}`)
    }
  }
}

// 计算EAN校验位
function calculateEANCheckDigit(digits: string): string {
  let sum = 0

  for (let i = 0; i < digits.length; i++) {
    const digit = Number.parseInt(digits[i], 10)
    // 奇数位乘以3，偶数位乘以1
    sum += i % 2 === 0 ? digit : digit * 3
  }

  const checkDigit = (10 - (sum % 10)) % 10
  return checkDigit.toString()
}

// 计算UPC校验位
function calculateUPCCheckDigit(digits: string): string {
  let sum = 0

  for (let i = 0; i < digits.length; i++) {
    const digit = Number.parseInt(digits[i], 10)
    // 奇数位乘以3，偶数位乘以1（UPC与EAN相反）
    sum += i % 2 === 1 ? digit : digit * 3
  }

  const checkDigit = (10 - (sum % 10)) % 10
  return checkDigit.toString()
}
