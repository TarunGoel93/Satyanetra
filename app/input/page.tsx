"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Zap, ArrowLeft, Search, LinkIcon, Hash, AtSign, Plus, X, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function InputPage() {
  const [inputType, setInputType] = useState<"urls" | "keywords" | "handles">("urls")
  const [inputs, setInputs] = useState<string[]>([""])
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const inputTypes = [
    {
      id: "urls",
      label: "URLs & Links",
      icon: LinkIcon,
      placeholder: "https://twitter.com/username/status/123456789",
      description: "Paste direct links to posts, threads, or profiles",
    },
    {
      id: "keywords",
      label: "Keywords & Hashtags",
      icon: Hash,
      placeholder: "#climatechange, renewable energy, sustainability",
      description: "Enter keywords, hashtags, or search terms",
    },
    {
      id: "handles",
      label: "User Handles & IDs",
      icon: AtSign,
      placeholder: "@username, user123, profile_name",
      description: "Monitor specific users or account handles",
    },
  ]

  const addInput = () => {
    setInputs([...inputs, ""])
  }

  const removeInput = (index: number) => {
    if (inputs.length > 1) {
      setInputs(inputs.filter((_, i) => i !== index))
    }
  }

  const updateInput = (index: number, value: string) => {
    const newInputs = [...inputs]
    newInputs[index] = value
    setInputs(newInputs)
  }

  const hasValidInputs = inputs.some((input) => input.trim().length > 0)

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    // Simulate analysis loading
    setTimeout(() => {
      // Redirect to the existing dashboard
      window.location.href = "/dashboard"
    }, 2000)
  }

  const currentType = inputTypes.find((type) => type.id === inputType)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-300 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link href="/platforms">
                <Button variant="ghost" size="sm" className="text-[#6b6b6b] hover:text-[#2d2d2d]">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <Separator orientation="vertical" className="h-8 bg-[#d0d0d0]" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#8B1538] to-[#B8425A] rounded-lg flex items-center justify-center shadow-md">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-[#8B1538] to-[#B8425A] bg-clip-text text-transparent">
                    SATYANETRA
                  </h1>
                  <p className="text-xs text-[#6b6b6b] -mt-1">Data Input</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Badge variant="outline" className="border-[#8B1538] text-[#8B1538] bg-white">
                Step 2 of 2
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-4">Configure Your Analysis</h1>
          <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto">
            Enter the specific data sources you want to analyze. You can add URLs, keywords, or user handles depending
            on your analysis needs.
          </p>
        </div>

        {/* Input Type Selection */}
        <Card className="p-6 border border-[#d0d0d0] bg-white shadow-lg mb-8">
          <div className="mb-6">
            <Label className="text-base font-medium text-[#2d2d2d] mb-4 block">Select Input Type</Label>
            <div className="grid md:grid-cols-3 gap-4">
              {inputTypes.map((type) => {
                const IconComponent = type.icon
                const isSelected = inputType === type.id

                return (
                  <Card
                    key={type.id}
                    className={`p-4 cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? "border-[#8B1538] bg-gradient-to-br from-[#8B1538]/5 to-[#B8425A]/5"
                        : "border-[#d0d0d0] hover:border-[#8B1538]/50"
                    }`}
                    onClick={() => setInputType(type.id as any)}
                  >
                    <div className="flex flex-col items-center text-center">
                      <IconComponent className={`h-6 w-6 mb-2 ${isSelected ? "text-[#8B1538]" : "text-[#6b6b6b]"}`} />
                      <h3 className={`font-medium mb-1 ${isSelected ? "text-[#8B1538]" : "text-[#2d2d2d]"}`}>
                        {type.label}
                      </h3>
                      <p className="text-xs text-[#6b6b6b] text-pretty">{type.description}</p>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </Card>

        {/* Input Fields */}
        <Card className="p-6 border border-[#d0d0d0] bg-white shadow-lg mb-8">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <Label className="text-base font-medium text-[#2d2d2d]">{currentType?.label}</Label>
              <Button
                variant="outline"
                size="sm"
                onClick={addInput}
                className="border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white bg-transparent"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add More
              </Button>
            </div>

            <div className="space-y-4">
              {inputs.map((input, index) => (
                <div key={index} className="flex gap-2">
                  <div className="flex-1">
                    {inputType === "keywords" ? (
                      <Textarea
                        placeholder={currentType?.placeholder}
                        value={input}
                        onChange={(e) => updateInput(index, e.target.value)}
                        className="min-h-[80px] border-[#d0d0d0] focus:border-[#8B1538] focus:ring-[#8B1538]"
                      />
                    ) : (
                      <Input
                        placeholder={currentType?.placeholder}
                        value={input}
                        onChange={(e) => updateInput(index, e.target.value)}
                        className="border-[#d0d0d0] focus:border-[#8B1538] focus:ring-[#8B1538]"
                      />
                    )}
                  </div>
                  {inputs.length > 1 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeInput(index)}
                      className="border-red-300 text-red-600 hover:bg-red-50"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">Tips for better results:</p>
                  <ul className="text-xs space-y-1 text-blue-700">
                    {inputType === "urls" && (
                      <>
                        <li>• Use direct links to specific posts or profiles</li>
                        <li>• Include both individual posts and profile URLs</li>
                        <li>• Ensure URLs are publicly accessible</li>
                      </>
                    )}
                    {inputType === "keywords" && (
                      <>
                        <li>• Separate multiple keywords with commas</li>
                        <li>• Include relevant hashtags and variations</li>
                        <li>• Use specific terms for more targeted results</li>
                      </>
                    )}
                    {inputType === "handles" && (
                      <>
                        <li>• Include @ symbol for social media handles</li>
                        <li>• Add both official and unofficial accounts</li>
                        <li>• Ensure accounts are public for analysis</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Analysis Options */}
        <Card className="p-6 border border-[#d0d0d0] bg-white shadow-lg mb-8">
          <Label className="text-base font-medium text-[#2d2d2d] mb-4 block">Analysis Configuration</Label>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="text-sm font-medium text-[#2d2d2d] mb-2 block">Time Range</Label>
              <select className="w-full p-2 border border-[#d0d0d0] rounded-md focus:border-[#8B1538] focus:ring-[#8B1538]">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
                <option>Custom range</option>
              </select>
            </div>
            <div>
              <Label className="text-sm font-medium text-[#2d2d2d] mb-2 block">Analysis Depth</Label>
              <select className="w-full p-2 border border-[#d0d0d0] rounded-md focus:border-[#8B1538] focus:ring-[#8B1538]">
                <option>Standard Analysis</option>
                <option>Deep Analysis</option>
                <option>Real-time Monitoring</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/platforms">
            <Button
              variant="outline"
              size="lg"
              className="border-[#6b6b6b] text-[#6b6b6b] hover:bg-[#6b6b6b] hover:text-white bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Platforms
            </Button>
          </Link>

          <Button
            size="lg"
            onClick={handleAnalyze}
            disabled={!hasValidInputs || isAnalyzing}
            className="bg-gradient-to-r from-[#8B1538] to-[#B8425A] hover:from-[#7A1230] hover:to-[#A63B52] text-white shadow-lg disabled:opacity-50"
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Analyzing...
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                Start Analysis
              </>
            )}
          </Button>
        </div>

        {!hasValidInputs && (
          <div className="text-center mt-6">
            <p className="text-[#6b6b6b] text-sm">
              Please enter at least one {currentType?.label.toLowerCase()} to start your analysis.
            </p>
          </div>
        )}

        {isAnalyzing && (
          <div className="mt-8">
            <Card className="p-6 border border-[#8B1538] bg-gradient-to-br from-[#8B1538]/5 to-[#B8425A]/5">
              <div className="flex items-center justify-center gap-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#8B1538]"></div>
                <div className="text-center">
                  <p className="font-medium text-[#8B1538]">Initializing SATYANETRA Analysis...</p>
                  <p className="text-sm text-[#6b6b6b]">Processing your data sources and preparing the dashboard</p>
                </div>
              </div>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#f8f8f8] backdrop-blur-sm border-t border-[#d0d0d0] shadow-lg mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="text-sm text-[#6b6b6b]">
              © 2025 SATYANETRA Sentiment Intelligence Framework • Government Analytics Platform
            </div>
            <div className="flex items-center gap-4 text-xs text-[#6b6b6b]">
              <span>Privacy Compliant</span>
              <span className="text-[#d0d0d0]">•</span>
              <span>Secure Processing</span>
              <span className="text-[#d0d0d0]">•</span>
              <span>Real-time Analytics</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
