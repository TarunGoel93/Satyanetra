"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Switch } from "../components/ui/switch"
import { Globe, Hash, Link, User, Play, Settings } from "lucide-react"

export default function InputConfiguration() {
  const router = useRouter()
  const [selectedPlatforms] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("selectedPlatforms") || "[]")
    } catch {
      return []
    }
  })
  const [inputType, setInputType] = useState("urls")
  const [urls, setUrls] = useState([""])
  const [keywords, setKeywords] = useState([""])
  const [userHandles, setUserHandles] = useState([""])
  const [analysisConfig, setAnalysisConfig] = useState({
    timeRange: "7d",
    language: "en",
    includeReplies: true,
    includeRetweets: false,
    sentimentAnalysis: true,
    emotionAnalysis: true,
    topicModeling: true,
  })

  const addInput = (type: string) => {
    if (type === "urls") setUrls([...urls, ""])
    if (type === "keywords") setKeywords([...keywords, ""])
    if (type === "userHandles") setUserHandles([...userHandles, ""])
  }

  const removeInput = (type: string, index: number) => {
    if (type === "urls") setUrls(urls.filter((_, i) => i !== index))
    if (type === "keywords") setKeywords(keywords.filter((_, i) => i !== index))
    if (type === "userHandles") setUserHandles(userHandles.filter((_, i) => i !== index))
  }

  const updateInput = (type: string, index: number, value: string) => {
    if (type === "urls") {
      const newUrls = [...urls]
      newUrls[index] = value
      setUrls(newUrls)
    }
    if (type === "keywords") {
      const newKeywords = [...keywords]
      newKeywords[index] = value
      setKeywords(newKeywords)
    }
    if (type === "userHandles") {
      const newHandles = [...userHandles]
      newHandles[index] = value
      setUserHandles(newHandles)
    }
  }

  const handleStartAnalysis = () => {
    console.log("[v0] Starting analysis with config:", {
      platforms: selectedPlatforms,
      inputType,
      data: inputType === "urls" ? urls : inputType === "keywords" ? keywords : userHandles,
      analysisConfig,
    })

    // Store configuration in localStorage for the dashboard
    const config = {
      platforms: selectedPlatforms,
      inputType,
      data: inputType === "urls" ? urls : inputType === "keywords" ? keywords : userHandles,
      analysisConfig,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("analysisConfig", JSON.stringify(config))

    console.log("[v0] Navigating to dashboard...")
    router.push("/dashboard")
  }

  const isConfigValid = () => {
    const currentData = inputType === "urls" ? urls : inputType === "keywords" ? keywords : userHandles
    return selectedPlatforms.length > 0 && currentData.some((item) => item.trim() !== "")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B1538] to-[#B8425A] text-white py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">Configure Analysis</h1>
              <p className="text-white/90">Set up your data sources and analysis parameters</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-left sm:text-right">
                <p className="text-sm text-white/80">Selected Platforms</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {selectedPlatforms.map((platform: string) => (
                    <Badge key={platform} variant="secondary" className="bg-white/20 text-white text-xs">
                      {platform}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Input Configuration */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Link className="h-5 w-5 text-[#8B1538]" />
                  Data Sources
                </CardTitle>
                <CardDescription>Choose your input method and provide the data sources for analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={inputType} onValueChange={setInputType} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="urls" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                      <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline">URLs</span>
                      <span className="sm:hidden">URL</span>
                    </TabsTrigger>
                    <TabsTrigger value="keywords" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                      <Hash className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline">Keywords</span>
                      <span className="sm:hidden">Keys</span>
                    </TabsTrigger>
                    <TabsTrigger value="userHandles" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                      <User className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline">User Handles</span>
                      <span className="sm:hidden">Users</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="urls" className="space-y-4">
                    <div>
                      <Label className="text-base font-medium">Post URLs</Label>
                      <p className="text-sm text-gray-600 mb-3">
                        Enter direct links to posts, articles, or content you want to analyze
                      </p>
                      {urls.map((url, index) => (
                        <div key={index} className="flex flex-col sm:flex-row gap-2 mb-2">
                          <Input
                            placeholder="https://twitter.com/user/status/123456789"
                            value={url}
                            onChange={(e) => updateInput("urls", index, e.target.value)}
                            className="flex-1"
                          />
                          {urls.length > 1 && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => removeInput("urls", index)}
                              className="w-full sm:w-auto"
                            >
                              Remove
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button variant="outline" onClick={() => addInput("urls")} className="mt-2 w-full sm:w-auto">
                        Add Another URL
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="keywords" className="space-y-4">
                    <div>
                      <Label className="text-base font-medium">Keywords & Hashtags</Label>
                      <p className="text-sm text-gray-600 mb-3">
                        Enter keywords, phrases, or hashtags to search for across platforms
                      </p>
                      {keywords.map((keyword, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <Input
                            placeholder="#sustainability OR climate change"
                            value={keyword}
                            onChange={(e) => updateInput("keywords", index, e.target.value)}
                            className="flex-1"
                          />
                          {keywords.length > 1 && (
                            <Button variant="outline" size="sm" onClick={() => removeInput("keywords", index)}>
                              Remove
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button variant="outline" onClick={() => addInput("keywords")} className="mt-2">
                        Add Another Keyword
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="userHandles" className="space-y-4">
                    <div>
                      <Label className="text-base font-medium">User Handles</Label>
                      <p className="text-sm text-gray-600 mb-3">
                        Enter usernames or handles to analyze their content and interactions
                      </p>
                      {userHandles.map((handle, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <Input
                            placeholder="@username"
                            value={handle}
                            onChange={(e) => updateInput("userHandles", index, e.target.value)}
                            className="flex-1"
                          />
                          {userHandles.length > 1 && (
                            <Button variant="outline" size="sm" onClick={() => removeInput("userHandles", index)}>
                              Remove
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button variant="outline" onClick={() => addInput("userHandles")} className="mt-2">
                        Add Another Handle
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Analysis Configuration */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Settings className="h-5 w-5 text-[#8B1538]" />
                  Analysis Settings
                </CardTitle>
                <CardDescription>Configure your analysis parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-sm font-medium">Time Range</Label>
                  <Select
                    value={analysisConfig.timeRange}
                    onValueChange={(value) => setAnalysisConfig({ ...analysisConfig, timeRange: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1d">Last 24 hours</SelectItem>
                      <SelectItem value="7d">Last 7 days</SelectItem>
                      <SelectItem value="30d">Last 30 days</SelectItem>
                      <SelectItem value="90d">Last 3 months</SelectItem>
                      <SelectItem value="1y">Last year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-medium">Language</Label>
                  <Select
                    value={analysisConfig.language}
                    onValueChange={(value) => setAnalysisConfig({ ...analysisConfig, language: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="auto">Auto-detect</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label className="text-sm font-medium">Content Options</Label>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="replies" className="text-sm">
                      Include Replies
                    </Label>
                    <Switch
                      id="replies"
                      checked={analysisConfig.includeReplies}
                      onCheckedChange={(checked) => setAnalysisConfig({ ...analysisConfig, includeReplies: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="retweets" className="text-sm">
                      Include Retweets
                    </Label>
                    <Switch
                      id="retweets"
                      checked={analysisConfig.includeRetweets}
                      onCheckedChange={(checked) => setAnalysisConfig({ ...analysisConfig, includeRetweets: checked })}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-sm font-medium">Analysis Types</Label>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="sentiment" className="text-sm">
                      Sentiment Analysis
                    </Label>
                    <Switch
                      id="sentiment"
                      checked={analysisConfig.sentimentAnalysis}
                      onCheckedChange={(checked) =>
                        setAnalysisConfig({ ...analysisConfig, sentimentAnalysis: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="emotion" className="text-sm">
                      Emotion Analysis
                    </Label>
                    <Switch
                      id="emotion"
                      checked={analysisConfig.emotionAnalysis}
                      onCheckedChange={(checked) => setAnalysisConfig({ ...analysisConfig, emotionAnalysis: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="topics" className="text-sm">
                      Topic Modeling
                    </Label>
                    <Switch
                      id="topics"
                      checked={analysisConfig.topicModeling}
                      onCheckedChange={(checked) => setAnalysisConfig({ ...analysisConfig, topicModeling: checked })}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Start Analysis Button */}
            <Card>
              <CardContent className="pt-6">
                <Button
                  onClick={handleStartAnalysis}
                  disabled={!isConfigValid()}
                  className="w-full bg-gradient-to-r from-[#8B1538] to-[#B8425A] hover:from-[#7A1230] hover:to-[#A63B52] text-white py-3 text-lg font-semibold"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Start VISTA Analysis
                </Button>

                {!isConfigValid() && (
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Please select platforms and provide at least one data source
                  </p>
                )}

                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Estimated processing time:</span>
                    <span className="font-medium">2-5 minutes</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
                    <span>Analysis framework:</span>
                    <span className="font-medium">VISTA</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
