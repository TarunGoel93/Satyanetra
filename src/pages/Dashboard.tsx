"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import {
  ArrowLeft,
  BarChart3,
  Brain,
  MessageSquare,
  TrendingUp,
  Target,
  Globe,
  FileText,
  Download,
  Settings,
} from "lucide-react"

// Import all dashboard tab components
import { OverviewTab } from "../components/dashboard/overview-tab"
import { VoiceTab } from "../components/dashboard/voice-tab"
import { InterpretationTab } from "../components/dashboard/interpretation-tab"
import { StorylineTab } from "../components/dashboard/storyline-tab"
import { TrajectoryTab } from "../components/dashboard/trajectory-tab"
import { AlignmentTab } from "../components/dashboard/alignment-tab"
import { MetaTab } from "../components/dashboard/meta-tab"
import { MethodsTab } from "../components/dashboard/methods-tab"
import { ExportTab } from "../components/dashboard/export-tab"

export default function Dashboard() {
  const router = useRouter()
  const [analysisConfig, setAnalysisConfig] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    const config = localStorage.getItem("analysisConfig")

    if (config) {
      setAnalysisConfig(JSON.parse(config))
    } else {
      // Fallback dummy config for testing
      const dummyConfig = {
        name: "Dummy Analysis",
        description: "This is dummy data for testing",
        createdAt: new Date().toISOString(),
      }
      localStorage.setItem("analysisConfig", JSON.stringify(dummyConfig))
      setAnalysisConfig(dummyConfig)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push("/input")}
              className="border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Input
            </Button>
            <h1 className="text-xl font-semibold text-[#2d2d2d]">SATYANETRA Analysis Dashboard</h1>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              localStorage.removeItem("analysisConfig")
              router.push("/")
            }}
            className="border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white"
          >
            <Settings className="h-4 w-4 mr-2" />
            New Analysis
          </Button>
        </div>
      </div>

      <div className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full mb-6 bg-white border border-gray-200 h-auto p-2">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-2 w-full">
              <TabsTrigger value="overview" className="flex items-center gap-2 text-sm min-h-[40px] px-3">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="voice" className="flex items-center gap-2 text-sm min-h-[40px] px-3">
                <MessageSquare className="h-4 w-4" />
                <span className="hidden sm:inline">Voice</span>
              </TabsTrigger>
              <TabsTrigger value="interpretation" className="flex items-center gap-2 text-sm min-h-[40px] px-3">
                <Brain className="h-4 w-4" />
                <span className="hidden sm:inline">Interpretation</span>
              </TabsTrigger>
              <TabsTrigger value="storyline" className="flex items-center gap-2 text-sm min-h-[40px] px-3">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Storyline</span>
              </TabsTrigger>
              <TabsTrigger value="trajectory" className="flex items-center gap-2 text-sm min-h-[40px] px-3">
                <TrendingUp className="h-4 w-4" />
                <span className="hidden sm:inline">Trajectory</span>
              </TabsTrigger>
              <TabsTrigger value="alignment" className="flex items-center gap-2 text-sm min-h-[40px] px-3">
                <Target className="h-4 w-4" />
                <span className="hidden sm:inline">Alignment</span>
              </TabsTrigger>
              <TabsTrigger value="meta" className="flex items-center gap-2 text-sm min-h-[40px] px-3">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">Meta</span>
              </TabsTrigger>
              <TabsTrigger value="methods" className="flex items-center gap-2 text-sm min-h-[40px] px-3">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Methods</span>
              </TabsTrigger>
              <TabsTrigger value="export" className="flex items-center gap-2 text-sm min-h-[40px] px-3">
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Export</span>
              </TabsTrigger>
            </div>
          </TabsList>

          <TabsContent value="overview">
            <OverviewTab />
          </TabsContent>
          <TabsContent value="voice">
            <VoiceTab />
          </TabsContent>
          <TabsContent value="interpretation">
            <InterpretationTab />
          </TabsContent>
          <TabsContent value="storyline">
            <StorylineTab />
          </TabsContent>
          <TabsContent value="trajectory">
            <TrajectoryTab />
          </TabsContent>
          <TabsContent value="alignment">
            <AlignmentTab />
          </TabsContent>
          <TabsContent value="meta">
            <MetaTab />
          </TabsContent>
          <TabsContent value="methods">
            <MethodsTab />
          </TabsContent>
          <TabsContent value="export">
            <ExportTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
