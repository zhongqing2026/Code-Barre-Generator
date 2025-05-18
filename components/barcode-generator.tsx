"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, ImageIcon, FileImage, FileCode2, Settings, Eye } from "lucide-react"
import { translations } from "@/lib/translations"
import { barcodeTypes } from "@/lib/barcode-types"
import { useToast } from "@/hooks/use-toast"

interface BarcodeGeneratorProps {
  locale: string
}

export default function BarcodeGenerator({ locale }: BarcodeGeneratorProps) {
  const t = translations[locale]
  const { toast } = useToast()

  // State management
  const [barcodeType, setBarcodeType] = useState("CODE128")
  const [barcodeData, setBarcodeData] = useState("12345678")
  const [barcodeColor, setBarcodeColor] = useState("#000000")
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF")
  const [transparentBg, setTransparentBg] = useState(false)
  const [showText, setShowText] = useState(true)
  const [height, setHeight] = useState(100)
  const [moduleWidth, setModuleWidth] = useState(2)
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState("M")
  const [isValid, setIsValid] = useState(true) // Start with valid since we have default data
  const [validationMessage, setValidationMessage] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [barcodeUrl, setBarcodeUrl] = useState("")
  const [activeTab, setActiveTab] = useState("customize")

  // Get current barcode type configuration
  const currentBarcodeType = barcodeTypes.find((type) => type.value === barcodeType)

  // Validate input based on barcode type
  useEffect(() => {
    if (!barcodeData) {
      setIsValid(false)
      setValidationMessage(t.enterData)
      return
    }

    let valid = true
    let message = ""

    switch (barcodeType) {
      case "EAN13":
        valid = /^\d{12,13}$/.test(barcodeData)
        message = valid ? "" : t.validation.ean13
        break
      case "EAN8":
        valid = /^\d{7,8}$/.test(barcodeData)
        message = valid ? "" : t.validation.ean8
        break
      case "UPC":
        valid = /^\d{11,12}$/.test(barcodeData)
        message = valid ? "" : t.validation.upc
        break
      case "CODE39":
        valid = /^[A-Z0-9\-. $/+%]+$/.test(barcodeData)
        message = valid ? "" : t.validation.code39
        break
      case "ITF14":
        valid = /^\d{13,14}$/.test(barcodeData)
        message = valid ? t.validation.valid : t.validation.itf14
        break
      case "MSI":
        valid = /^\d+$/.test(barcodeData)
        message = valid ? t.validation.valid : t.validation.msi
        break
      case "QR":
        valid = barcodeData.length > 0 && barcodeData.length <= 2000
        message = valid ? t.validation.valid : t.validation.qr
        break
      default:
        valid = barcodeData.length > 0
        message = valid ? t.validation.valid : t.enterData
    }

    setIsValid(valid)
    setValidationMessage(message)
  }, [barcodeType, barcodeData, t])

  // Generate barcode
  useEffect(() => {
    if (!isValid || !barcodeData) return

    const generateBarcode = async () => {
      setIsGenerating(true)
      try {
        if (barcodeType === "QR") {
          // For QR codes
          const QRCode = (await import("qrcode")).default

          // Generate QR code as data URL
          const dataUrl = await QRCode.toDataURL(barcodeData, {
            errorCorrectionLevel,
            margin: 4,
            color: {
              dark: barcodeColor,
              light: transparentBg ? "#00000000" : backgroundColor,
            },
            width: 200,
          })

          setBarcodeUrl(dataUrl)
        } else {
          // For linear barcodes using JsBarcode
          const { default: JsBarcode } = await import("jsbarcode")

          // Create a temporary SVG element
          const tempSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg")

          // Process data for specific barcode types
          let processedData = barcodeData
          if (barcodeType === "EAN13" && barcodeData.length === 12) {
            // Auto-calculate check digit if needed
            processedData = barcodeData // JsBarcode will handle this
          }

          // Apply JsBarcode to the SVG
          JsBarcode(tempSvg, processedData, {
            format: barcodeType,
            lineColor: barcodeColor,
            background: transparentBg ? "transparent" : backgroundColor,
            displayValue: showText,
            height: height,
            width: moduleWidth,
            margin: 10,
            fontSize: 16,
          })

          // Convert SVG to data URL
          const svgData = new XMLSerializer().serializeToString(tempSvg)
          const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" })
          const url = URL.createObjectURL(svgBlob)
          setBarcodeUrl(url)

          // Clean up the URL when component unmounts
          return () => URL.revokeObjectURL(url)
        }
      } catch (error) {
        console.error("Error generating barcode:", error)
        toast({
          title: t.errorTitle,
          description: t.errorGenerating,
          variant: "destructive",
        })
      } finally {
        setIsGenerating(false)
      }
    }

    // Use debounce to avoid frequent updates
    const debounceTimer = setTimeout(() => {
      generateBarcode()
    }, 300)

    return () => clearTimeout(debounceTimer)
  }, [
    barcodeType,
    barcodeData,
    barcodeColor,
    backgroundColor,
    transparentBg,
    showText,
    height,
    moduleWidth,
    errorCorrectionLevel,
    isValid,
    toast,
    t,
  ])

  // Download barcode
  const downloadBarcode = (format: string) => {
    if (!barcodeUrl || !isValid || !barcodeData) return

    try {
      if (format === "svg" && barcodeType !== "QR") {
        // For SVG download (only for linear barcodes)
        const link = document.createElement("a")
        link.download =
          locale === "fr" ? `code_barre_CodeBarreGenerator_com.svg` : `codigo_de_barras_CodeBarreGenerator_com.svg`
        link.href = barcodeUrl
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        // For PNG or JPEG, we need to draw the image on a canvas first
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
        const img = new Image()
        img.crossOrigin = "anonymous"

        img.onload = () => {
          canvas.width = img.width
          canvas.height = img.height

          // Fill with background color if not transparent
          if (!transparentBg) {
            ctx!.fillStyle = backgroundColor
            ctx!.fillRect(0, 0, canvas.width, canvas.height)
          }

          // Draw the barcode image
          ctx!.drawImage(img, 0, 0)

          // Convert to data URL and download
          const mimeType = format === "png" ? "image/png" : "image/jpeg"
          const dataURL = canvas.toDataURL(mimeType, 1.0)

          const link = document.createElement("a")
          link.download =
            locale === "fr"
              ? `code_barre_CodeBarreGenerator_com.${format}`
              : `codigo_de_barras_CodeBarreGenerator_com.${format}`
          link.href = dataURL
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }

        img.src = barcodeUrl
      }

      toast({
        title: t.downloadSuccess,
        description: t.downloadComplete,
      })
    } catch (error) {
      console.error("Error downloading barcode:", error)
      toast({
        title: t.errorTitle,
        description: t.errorDownloading,
        variant: "destructive",
      })
    }
  }

  return (
    <Card className="max-w-4xl mx-auto shadow-lg border-0 rounded-xl overflow-hidden" id="barcode-generator">
      <div className="bg-black text-white p-5">
        <h2 className="text-xl font-medium font-heading">{t.barcodeGeneratorTitle}</h2>
      </div>

      <CardContent className="p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full rounded-none border-b grid grid-cols-2">
            <TabsTrigger
              value="customize"
              className="rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-black py-3 font-medium"
            >
              <Settings className="h-4 w-4 mr-2" />
              {t.customizeTab}
            </TabsTrigger>
            <TabsTrigger
              value="preview"
              className="rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-black py-3 font-medium"
            >
              <Eye className="h-4 w-4 mr-2" />
              {t.previewTab}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="customize" className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left column - Controls */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="barcode-type" className="text-sm font-medium">
                    {t.barcodeType}
                  </Label>
                  <Select value={barcodeType} onValueChange={setBarcodeType}>
                    <SelectTrigger id="barcode-type" className="w-full">
                      <SelectValue placeholder={t.selectType} />
                    </SelectTrigger>
                    <SelectContent>
                      {barcodeTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="barcode-data" className="text-sm font-medium">
                    {t.barcodeData}
                  </Label>
                  <Input
                    id="barcode-data"
                    value={barcodeData}
                    onChange={(e) => setBarcodeData(e.target.value)}
                    placeholder={currentBarcodeType?.placeholder?.[locale] || t.enterData}
                    className="w-full"
                  />
                  {validationMessage && (
                    <p className={`text-sm ${isValid ? "text-green-600" : "text-red-500"}`}>{validationMessage}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="barcode-color" className="text-sm font-medium">
                      {t.barcodeColor}
                    </Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="barcode-color"
                        type="color"
                        value={barcodeColor}
                        onChange={(e) => setBarcodeColor(e.target.value)}
                        className="w-12 h-8 p-1"
                      />
                      <span className="text-sm font-mono">{barcodeColor}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="background-color" className="text-sm font-medium">
                      {t.backgroundColor}
                    </Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="background-color"
                        type="color"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="w-12 h-8 p-1"
                        disabled={transparentBg}
                      />
                      <span className="text-sm font-mono">{transparentBg ? t.transparent : backgroundColor}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="transparent-bg"
                    checked={transparentBg}
                    onCheckedChange={(checked) => setTransparentBg(checked as boolean)}
                  />
                  <Label htmlFor="transparent-bg" className="text-sm font-medium">
                    {t.transparentBackground}
                  </Label>
                </div>

                {barcodeType !== "QR" && (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="show-text"
                      checked={showText}
                      onCheckedChange={(checked) => setShowText(checked as boolean)}
                    />
                    <Label htmlFor="show-text" className="text-sm font-medium">
                      {t.showText}
                    </Label>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="height-slider" className="text-sm font-medium">
                      {t.height}
                    </Label>
                    <span className="text-sm font-medium font-mono">{height}px</span>
                  </div>
                  <Slider
                    id="height-slider"
                    min={50}
                    max={200}
                    step={1}
                    value={[height]}
                    onValueChange={(value) => setHeight(value[0])}
                    className="w-full"
                  />
                </div>

                {barcodeType !== "QR" && (
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="width-slider" className="text-sm font-medium">
                        {t.moduleWidth}
                      </Label>
                      <span className="text-sm font-medium font-mono">{moduleWidth}px</span>
                    </div>
                    <Slider
                      id="width-slider"
                      min={1}
                      max={5}
                      step={0.5}
                      value={[moduleWidth]}
                      onValueChange={(value) => setModuleWidth(value[0])}
                      className="w-full"
                    />
                  </div>
                )}

                {barcodeType === "QR" && (
                  <div className="space-y-2">
                    <Label htmlFor="error-correction" className="text-sm font-medium">
                      {t.errorCorrection}
                    </Label>
                    <Select value={errorCorrectionLevel} onValueChange={setErrorCorrectionLevel}>
                      <SelectTrigger id="error-correction" className="w-full">
                        <SelectValue placeholder={t.selectErrorLevel} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="L">{t.errorLevels.L}</SelectItem>
                        <SelectItem value="M">{t.errorLevels.M}</SelectItem>
                        <SelectItem value="Q">{t.errorLevels.Q}</SelectItem>
                        <SelectItem value="H">{t.errorLevels.H}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              {/* Right column - Preview */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">{t.preview}</Label>
                  <div
                    className={`flex items-center justify-center p-6 border rounded-lg min-h-[220px] relative ${
                      transparentBg ? "barcode-preview-bg" : ""
                    }`}
                    style={{
                      backgroundColor: transparentBg ? "transparent" : backgroundColor,
                    }}
                  >
                    {isGenerating ? (
                      <div className="text-center text-muted-foreground">{t.generating}</div>
                    ) : barcodeUrl ? (
                      <img
                        src={barcodeUrl || "/placeholder.svg"}
                        alt="Generated barcode"
                        className="max-w-full max-h-[200px]"
                      />
                    ) : (
                      <div className="text-center text-muted-foreground">{t.enterData}</div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">{t.download}</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      onClick={() => downloadBarcode("png")}
                      disabled={!isValid || !barcodeData || isGenerating || !barcodeUrl}
                      className="w-full"
                      variant="outline"
                    >
                      <ImageIcon className="h-4 w-4 mr-2" />
                      PNG
                    </Button>
                    <Button
                      onClick={() => downloadBarcode("jpeg")}
                      disabled={!isValid || !barcodeData || isGenerating || !barcodeUrl}
                      className="w-full"
                      variant="outline"
                    >
                      <FileImage className="h-4 w-4 mr-2" />
                      JPEG
                    </Button>
                    <Button
                      onClick={() => downloadBarcode("svg")}
                      disabled={!isValid || !barcodeData || isGenerating || !barcodeUrl || barcodeType === "QR"}
                      className="w-full"
                      variant="outline"
                    >
                      <FileCode2 className="h-4 w-4 mr-2" />
                      SVG
                    </Button>
                  </div>
                  {barcodeType === "QR" && (
                    <p className="text-xs text-muted-foreground mt-1">{t.svgNotSupportedForQR}</p>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preview" className="p-6">
            <div className="flex flex-col items-center justify-center space-y-8">
              <div
                className={`flex items-center justify-center p-8 border rounded-lg min-h-[320px] w-full max-w-md relative ${
                  transparentBg ? "barcode-preview-bg" : ""
                }`}
                style={{
                  backgroundColor: transparentBg ? "transparent" : backgroundColor,
                }}
              >
                {isGenerating ? (
                  <div className="text-center text-muted-foreground">{t.generating}</div>
                ) : barcodeUrl ? (
                  <img
                    src={barcodeUrl || "/placeholder.svg"}
                    alt="Generated barcode"
                    className="max-w-full max-h-[300px]"
                  />
                ) : (
                  <div className="text-center text-muted-foreground">{t.enterData}</div>
                )}
              </div>

              <Button
                onClick={() => downloadBarcode("png")}
                disabled={!isValid || !barcodeData || isGenerating || !barcodeUrl}
                className="w-full max-w-md bg-black hover:bg-gray-800"
                size="lg"
              >
                <Download className="h-5 w-5 mr-2" />
                {t.downloadBarcode}
              </Button>

              <div className="flex gap-2 w-full max-w-md">
                <Button
                  onClick={() => downloadBarcode("jpeg")}
                  disabled={!isValid || !barcodeData || isGenerating || !barcodeUrl}
                  className="w-full"
                  variant="outline"
                >
                  JPEG
                </Button>
                <Button
                  onClick={() => downloadBarcode("svg")}
                  disabled={!isValid || !barcodeData || isGenerating || !barcodeUrl || barcodeType === "QR"}
                  className="w-full"
                  variant="outline"
                >
                  SVG
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
