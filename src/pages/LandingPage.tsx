"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import {
  Zap,
  BarChart3,
  MessageSquare,
  Brain,
  GitBranch,
  TrendingUp,
  Target,
  ArrowRight,
  Shield,
  Globe,
  Users,
  Clock,
} from "lucide-react"

export function LandingPage() {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)

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

            <div className="hidden md:flex items-center gap-4">
              <Badge variant="outline" className="border-[#8B1538] text-[#8B1538] bg-white">
                Government Analytics Platform
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <div className="mb-8">
              <Badge variant="outline" className="border-[#B8425A] text-[#B8425A] bg-white mb-4">
                Advanced Sentiment Analysis Framework
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2d2d2d] mb-6 leading-tight">
                Unlock the Power of
                <span className="block bg-gradient-to-r from-[#8B1538] to-[#B8425A] bg-clip-text text-transparent">
                  Social Intelligence
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#6b6b6b] max-w-3xl mx-auto mb-8 px-4">
                VISTA Framework provides comprehensive sentiment analysis across multiple platforms, delivering
                actionable insights through Voice, Interpretation, Storyline, Trajectory, and Alignment analysis.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#8B1538] to-[#B8425A] hover:from-[#7A1230] hover:to-[#A63B52] text-white px-8 py-3 text-lg w-full sm:w-auto"
                onClick={() => navigate("/platforms")}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Start Analysis
                <ArrowRight className={`ml-2 h-5 w-5 transition-transform ${isHovered ? "translate-x-1" : ""}`} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white px-8 py-3 text-lg bg-transparent w-full sm:w-auto"
              >
                View Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#8B1538]">1.2M+</div>
                <div className="text-xs sm:text-sm text-[#6b6b6b]">Posts Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#B8425A]">8</div>
                <div className="text-xs sm:text-sm text-[#6b6b6b]">Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#8B1538]">95%</div>
                <div className="text-xs sm:text-sm text-[#6b6b6b]">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#B8425A]">24/7</div>
                <div className="text-xs sm:text-sm text-[#6b6b6b]">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2d2d2d] mb-4">The VISTA Framework</h2>
            <p className="text-base sm:text-lg text-[#6b6b6b] max-w-2xl mx-auto px-4">
              Our comprehensive approach to sentiment analysis provides deep insights across five key dimensions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-4 sm:p-6 border border-[#d0d0d0] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#8B1538] to-[#B8425A] rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#2d2d2d]">Voice Analysis</h3>
              </div>
              <p className="text-[#6b6b6b] text-sm sm:text-base">
                Analyze tone, emotion, and communication patterns across social media platforms
              </p>
            </Card>

            <Card className="p-4 sm:p-6 border border-[#d0d0d0] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#8B1538] to-[#B8425A] rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#2d2d2d]">Interpretation</h3>
              </div>
              <p className="text-[#6b6b6b] text-sm sm:text-base">
                Deep contextual understanding of sentiment with AI-powered interpretation
              </p>
            </Card>

            <Card className="p-4 sm:p-6 border border-[#d0d0d0] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#8B1538] to-[#B8425A] rounded-lg flex items-center justify-center">
                  <GitBranch className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#2d2d2d]">Storyline</h3>
              </div>
              <p className="text-[#6b6b6b] text-sm sm:text-base">
                Track narrative evolution and story development across time periods
              </p>
            </Card>

            <Card className="p-4 sm:p-6 border border-[#d0d0d0] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#8B1538] to-[#B8425A] rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#2d2d2d]">Trajectory</h3>
              </div>
              <p className="text-[#6b6b6b] text-sm sm:text-base">
                Monitor sentiment trends and predict future patterns with advanced analytics
              </p>
            </Card>

            <Card className="p-4 sm:p-6 border border-[#d0d0d0] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#8B1538] to-[#B8425A] rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#2d2d2d]">Alignment</h3>
              </div>
              <p className="text-[#6b6b6b] text-sm sm:text-base">
                Measure alignment between different groups, topics, and sentiment clusters
              </p>
            </Card>

            <Card className="p-4 sm:p-6 border border-[#d0d0d0] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#8B1538] to-[#B8425A] rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#2d2d2d]">Real-time Analytics</h3>
              </div>
              <p className="text-[#6b6b6b] text-sm sm:text-base">
                Live monitoring and instant insights with comprehensive reporting tools
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2d2d2d] mb-4">Why Choose VISTA?</h2>
            <p className="text-base sm:text-lg text-[#6b6b6b] max-w-2xl mx-auto px-4">
              Built for government and enterprise needs with security, accuracy, and scalability at its core
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#B8425A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#2d2d2d] mb-2">Secure & Compliant</h3>
              <p className="text-[#6b6b6b] text-sm sm:text-base px-2">
                Government-grade security with full privacy compliance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#B8425A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#2d2d2d] mb-2">Multi-Platform</h3>
              <p className="text-[#6b6b6b] text-sm sm:text-base px-2">
                Analyze sentiment across 8+ major social platforms
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#B8425A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#2d2d2d] mb-2">Scalable</h3>
              <p className="text-[#6b6b6b] text-sm sm:text-base px-2">
                Handle millions of posts with enterprise-grade infrastructure
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#B8425A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#2d2d2d] mb-2">Real-time</h3>
              <p className="text-[#6b6b6b] text-sm sm:text-base px-2">
                Live monitoring with instant alerts and notifications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#8B1538] to-[#B8425A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Sentiment Analysis?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 px-4">
            Join government agencies and enterprises using VISTA for comprehensive social intelligence
          </p>
          <Button
            size="lg"
            className="bg-white text-[#8B1538] hover:bg-gray-100 px-8 py-3 text-lg font-semibold w-full sm:w-auto"
            onClick={() => navigate("/platforms")}
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f8f8f8] backdrop-blur-sm border-t border-[#d0d0d0] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#8B1538] to-[#B8425A] rounded-lg flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-bold bg-gradient-to-r from-[#8B1538] to-[#B8425A] bg-clip-text text-transparent">
                  VISTA
                </h3>
                <p className="text-xs text-[#6b6b6b]">Sentiment Intelligence Framework</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-[#6b6b6b]">
              <span>Privacy Compliant</span>
              <span className="text-[#d0d0d0] hidden sm:inline">•</span>
              <span>Secure Processing</span>
              <span className="text-[#d0d0d0] hidden sm:inline">•</span>
              <span>Real-time Analytics</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-[#d0d0d0] text-sm text-[#6b6b6b] text-center">
            © 2024 VISTA Sentiment Intelligence Framework • Government Analytics Platform
          </div>
        </div>
      </footer>
    </div>
  )
}
