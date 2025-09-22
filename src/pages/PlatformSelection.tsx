"use client"

import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Separator } from "../components/ui/separator"
import {
  Zap,
  ArrowRight,
  ArrowLeft,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
  Music,
  Newspaper,
  Check,
} from "lucide-react"

interface Platform {
  id: string
  name: string
  icon: React.ComponentType<any>
  color: string
  bgColor: string
  description: string
  stats: string
}

const platforms: Platform[] = [
  {
    id: "twitter",
    name: "Twitter/X",
    icon: Twitter,
    color: "#1DA1F2",
    bgColor: "bg-blue-50",
    description: "Real-time conversations and trending topics",
    stats: "450M+ posts/day",
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: Facebook,
    color: "#1877F2",
    bgColor: "bg-blue-50",
    description: "Social interactions and community discussions",
    stats: "2.9B+ users",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: Instagram,
    color: "#E4405F",
    bgColor: "bg-pink-50",
    description: "Visual content and story-based engagement",
    stats: "2B+ users",
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: Youtube,
    color: "#FF0000",
    bgColor: "bg-red-50",
    description: "Video content and comment analysis",
    stats: "2.7B+ users",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: Linkedin,
    color: "#0A66C2",
    bgColor: "bg-blue-50",
    description: "Professional networking and business content",
    stats: "900M+ users",
  },
  {
    id: "reddit",
    name: "Reddit",
    icon: MessageCircle,
    color: "#FF4500",
    bgColor: "bg-orange-50",
    description: "Community discussions and forum analysis",
    stats: "430M+ users",
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: Music,
    color: "#000000",
    bgColor: "bg-gray-50",
    description: "Short-form video content and trends",
    stats: "1B+ users",
  },
  {
    id: "news",
    name: "News Media",
    icon: Newspaper,
    color: "#6B7280",
    bgColor: "bg-gray-50",
    description: "News articles and media sentiment",
    stats: "10K+ sources",
  },
]

export default function PlatformSelection() {
  const navigate = useNavigate()
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId) ? prev.filter((id) => id !== platformId) : [...prev, platformId],
    )
  }

  const handleContinue = () => {
    if (selectedPlatforms.length > 0) {
      localStorage.setItem("selectedPlatforms", JSON.stringify(selectedPlatforms))
      navigate("/input")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-300 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#8B1538] to-[#B8425A] rounded-lg flex items-center justify-center shadow-md">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-[#8B1538] to-[#B8425A] bg-clip-text text-transparent">
                  VISTA
                </h1>
                <p className="text-xs text-[#6b6b6b] -mt-1">Sentiment Intelligence</p>
              </div>
              <Separator orientation="vertical" className="h-8 bg-[#d0d0d0]" />
              <div className="hidden sm:block">
                <Badge variant="outline" className="text-xs border-[#8B1538] text-[#8B1538]">
                  Platform Selection
                </Badge>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-[#e5e5e5] text-[#2d2d2d] border-[#d0d0d0] text-xs sm:text-sm">
                Step 1 of 2
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="text-[#6b6b6b] hover:text-[#2d2d2d]"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Button>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#2d2d2d] mb-4">Select Social Media Platforms</h1>
          <p className="text-base sm:text-lg text-[#6b6b6b] mb-6">
            Choose the platforms you want to analyze for sentiment intelligence. You can select multiple platforms for
            comprehensive coverage.
          </p>

          {selectedPlatforms.length > 0 && (
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="outline" className="border-[#8B1538] text-[#8B1538]">
                {selectedPlatforms.length} platform{selectedPlatforms.length !== 1 ? "s" : ""} selected
              </Badge>
            </div>
          )}
        </div>

        {/* Platform Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {platforms.map((platform) => {
            const IconComponent = platform.icon
            const isSelected = selectedPlatforms.includes(platform.id)

            return (
              <Card
                key={platform.id}
                className={`relative cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  isSelected
                    ? "border-[#8B1538] shadow-md ring-2 ring-[#8B1538]/20"
                    : "border-[#d0d0d0] hover:border-[#B8425A]"
                }`}
                onClick={() => togglePlatform(platform.id)}
              >
                {isSelected && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#8B1538] rounded-full flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                )}

                <div className="p-4 sm:p-6">
                  <div className={`w-12 h-12 ${platform.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="h-6 w-6" style={{ color: platform.color }} />
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-[#2d2d2d] mb-2">{platform.name}</h3>

                  <p className="text-sm text-[#6b6b6b] mb-3 leading-relaxed">{platform.description}</p>

                  <Badge variant="secondary" className="text-xs bg-[#f0f0f0] text-[#6b6b6b]">
                    {platform.stats}
                  </Badge>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="text-sm text-[#6b6b6b] text-center sm:text-left">
            Select at least one platform to continue
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="border-[#d0d0d0] text-[#6b6b6b] hover:bg-gray-50 w-full sm:w-auto"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>

            <Button
              onClick={handleContinue}
              disabled={selectedPlatforms.length === 0}
              className="bg-gradient-to-r from-[#8B1538] to-[#B8425A] hover:from-[#7A1230] hover:to-[#A63B52] text-white px-6 w-full sm:w-auto"
            >
              Continue to Input
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Selected Platforms Summary */}
        {selectedPlatforms.length > 0 && (
          <Card className="mt-6 sm:mt-8 border border-[#d0d0d0] bg-white/80">
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-[#2d2d2d] mb-4">Selected Platforms Summary</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {selectedPlatforms.map((platformId) => {
                  const platform = platforms.find((p) => p.id === platformId)
                  if (!platform) return null

                  const IconComponent = platform.icon
                  return (
                    <div key={platformId} className="flex items-center gap-2">
                      <div className={`w-8 h-8 ${platform.bgColor} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="h-4 w-4" style={{ color: platform.color }} />
                      </div>
                      <span className="text-sm font-medium text-[#2d2d2d]">{platform.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </Card>
        )}
      </main>
    </div>
  )
}
