"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  BarChart3,
  MessageSquare,
  Brain,
  TrendingUp,
  Target,
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  Shield,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [isHovered, setIsHovered] = useState(false)

  const features = [
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Monitor sentiment across 8+ platforms with live data processing",
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced sentiment analysis using VISTA framework methodology",
    },
    {
      icon: TrendingUp,
      title: "Trend Forecasting",
      description: "Predict sentiment trajectories and emerging narrative patterns",
    },
    {
      icon: Target,
      title: "Policy Alignment",
      description: "Analyze public sentiment alignment with government policies",
    },
  ]

  const stats = [
    { label: "Posts Analyzed", value: "1.2M+", icon: MessageSquare },
    { label: "Platforms Monitored", value: "8", icon: Globe },
    { label: "Government Agencies", value: "50+", icon: Users },
    { label: "Accuracy Rate", value: "94%", icon: CheckCircle },
  ]

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
            </div>

            <div className="flex items-center gap-4">
              <Badge variant="outline" className="border-[#8B1538] text-[#8B1538] bg-white">
                Government Analytics Platform
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="outline" className="border-[#8B1538] text-[#8B1538] bg-white mb-4">
              Next-Generation Sentiment Analysis
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2d2d2d] mb-6 text-balance">
              Unlock the Power of
              <span className="bg-gradient-to-r from-[#8B1538] to-[#B8425A] bg-clip-text text-transparent">
                {" "}
                Public Sentiment
              </span>
            </h1>
            <p className="text-xl text-[#6b6b6b] mb-8 max-w-3xl mx-auto text-pretty">
              VISTA provides comprehensive sentiment intelligence for government agencies, analyzing millions of social
              media posts to deliver actionable insights for policy making and public engagement.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/platforms">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#8B1538] to-[#B8425A] hover:from-[#7A1230] hover:to-[#A63B52] text-white shadow-lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Get Started
                <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${isHovered ? "translate-x-1" : ""}`} />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white bg-transparent"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="p-6 border border-[#d0d0d0] bg-white/95 backdrop-blur-sm shadow-lg">
                  <div className="flex flex-col items-center text-center">
                    <IconComponent className="h-8 w-8 text-[#8B1538] mb-2" />
                    <div className="text-2xl font-bold text-[#2d2d2d]">{stat.value}</div>
                    <div className="text-sm text-[#6b6b6b]">{stat.label}</div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-4">Comprehensive Sentiment Intelligence</h2>
            <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto">
              Our VISTA framework provides deep insights across Voice, Interpretation, Storyline, Trajectory, and
              Alignment dimensions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="p-6 border border-[#d0d0d0] bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8B1538] to-[#B8425A] rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#2d2d2d] mb-2">{feature.title}</h3>
                    <p className="text-[#6b6b6b] text-sm">{feature.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 border border-[#d0d0d0] bg-gradient-to-br from-white to-gray-50 shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-12 w-12 text-[#8B1538]" />
            </div>
            <h2 className="text-3xl font-bold text-[#2d2d2d] mb-4">Ready to Transform Your Analytics?</h2>
            <p className="text-lg text-[#6b6b6b] mb-8">
              Join 50+ government agencies using VISTA for data-driven decision making and public engagement insights.
            </p>
            <Link href="/platforms">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#8B1538] to-[#B8425A] hover:from-[#7A1230] hover:to-[#A63B52] text-white shadow-lg"
              >
                Start Your Analysis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f8f8f8] backdrop-blur-sm border-t border-[#d0d0d0] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-br from-[#8B1538] to-[#B8425A] rounded-md flex items-center justify-center">
                <Zap className="h-3 w-3 text-white" />
              </div>
              <span className="text-sm text-[#6b6b6b]">
                © 2024 VISTA Sentiment Intelligence Framework • Government Analytics Platform
              </span>
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
