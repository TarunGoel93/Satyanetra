"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
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
  Globe,
  Rss,
} from "lucide-react"
import Link from "next/link"

export default function PlatformsPage() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])

  const platforms = [
    {
      id: "twitter",
      name: "Twitter/X",
      icon: Twitter,
      description: "Real-time tweets, replies, and trending topics",
      color: "from-blue-500 to-blue-600",
      stats: "450K+ posts/day",
    },
    {
      id: "facebook",
      name: "Facebook",
      icon: Facebook,
      description: "Public posts, comments, and page interactions",
      color: "from-blue-600 to-blue-700",
      stats: "320K+ posts/day",
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: Instagram,
      description: "Stories, posts, and public comments analysis",
      color: "from-pink-500 to-purple-600",
      stats: "280K+ posts/day",
    },
    {
      id: "youtube",
      name: "YouTube",
      icon: Youtube,
      description: "Video comments, descriptions, and community posts",
      color: "from-red-500 to-red-600",
      stats: "150K+ comments/day",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: Linkedin,
      description: "Professional posts and industry discussions",
      color: "from-blue-700 to-blue-800",
      stats: "95K+ posts/day",
    },
    {
      id: "reddit",
      name: "Reddit",
      icon: MessageCircle,
      description: "Forum discussions and community sentiment",
      color: "from-orange-500 to-orange-600",
      stats: "200K+ posts/day",
    },
    {
      id: "tiktok",
      name: "Stakeholder Trends",
      icon: Globe,
      description: "Analysis of comment patterns and engagement across eConsultation submissions",
      color: "from-black to-gray-800",
      stats: "12K+ comments/month",
    },
    {
      id: "news",
      name: "MyGov.in Feedback",
      icon: Rss,
      description: "Analysis of citizen suggestions and comments submitted via the MyGov.in portal",
      color: "from-gray-600 to-gray-700",
      stats: "15K+ comments/month",
    },
  ]

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId) ? prev.filter((id) => id !== platformId) : [...prev, platformId],
    )
  }

  const isSelected = (platformId: string) => selectedPlatforms.includes(platformId)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-300 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link href="/">
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
                  <p className="text-xs text-[#6b6b6b] -mt-1">Module Selection</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Badge variant="outline" className="border-[#8B1538] text-[#8B1538] bg-white">
                Step 1 of 2
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-4">Select Your Analysis Platforms</h1>
          <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto mb-6">
            Choose the type of analysis you want to perform on stakeholder comments submitted through the eConsultation module. You can select multiple options for comprehensive insights.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Badge variant="outline" className="border-[#8B1538] text-[#8B1538] bg-white">
              {selectedPlatforms.length} Platform{selectedPlatforms.length !== 1 ? "s" : ""} Selected
            </Badge>
            {selectedPlatforms.length > 0 && (
              <Badge variant="outline" className="border-[#B8425A] text-[#B8425A] bg-white">
                Ready to Proceed
              </Badge>
            )}
          </div>
        </div>

        {/* Platform Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {platforms.map((platform) => {
            const IconComponent = platform.icon
            const selected = isSelected(platform.id)

            return (
              <Card
                key={platform.id}
                className={`p-6 cursor-pointer transition-all duration-200 hover:shadow-xl ${
                  selected
                    ? "border-[#8B1538] bg-gradient-to-br from-[#8B1538]/5 to-[#B8425A]/5 shadow-lg"
                    : "border-[#d0d0d0] bg-white hover:border-[#8B1538]/50"
                }`}
                onClick={() => togglePlatform(platform.id)}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2d2d2d] mb-2">{platform.name}</h3>
                  <p className="text-[#6b6b6b] text-sm mb-3 text-pretty">{platform.description}</p>
                  <Badge variant="secondary" className="bg-[#e5e5e5] text-[#2d2d2d] text-xs">
                    {platform.stats}
                  </Badge>
                  {selected && (
                    <div className="mt-3">
                      <Badge className="bg-[#8B1538] text-white">Selected</Badge>
                    </div>
                  )}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              className="border-[#6b6b6b] text-[#6b6b6b] hover:bg-[#6b6b6b] hover:text-white bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          {selectedPlatforms.length > 0 && (
            <Link href="/input">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#8B1538] to-[#B8425A] hover:from-[#7A1230] hover:to-[#A63B52] text-white shadow-lg"
              >
                Continue to Input
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>

        {selectedPlatforms.length === 0 && (
          <div className="text-center mt-8">
            <p className="text-[#6b6b6b] text-sm">
              Please select at least one platform to continue with your sentiment analysis.
            </p>
          </div>
        )}

        {/* Platform Info */}
        <div className="mt-16">
          <Card className="p-8 border border-[#d0d0d0] bg-white/95 backdrop-blur-sm shadow-lg">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#2d2d2d] mb-4">Why Multi-Platform Analysis?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-medium text-[#8B1538] mb-2">Comprehensive Coverage</h4>
                  <p className="text-sm text-[#6b6b6b]">
                    Different platforms attract different demographics and conversation styles, providing a complete
                    picture of public sentiment.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-[#8B1538] mb-2">Cross-Platform Trends</h4>
                  <p className="text-sm text-[#6b6b6b]">
                    Identify how sentiment spreads across platforms and which channels drive the most engagement for
                    specific topics.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-[#8B1538] mb-2">Audience Insights</h4>
                  <p className="text-sm text-[#6b6b6b]">
                    Understand how different audiences react to policies and initiatives across various social media
                    environments.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#f8f8f8] backdrop-blur-sm border-t border-[#d0d0d0] shadow-lg mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="text-sm text-[#6b6b6b]">
              © 2024 SATYANETRA Sentiment Intelligence Framework • Government Analytics Platform
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
