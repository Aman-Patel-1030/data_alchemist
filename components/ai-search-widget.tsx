"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Sparkles, TrendingUp, ArrowRight, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function AISearchWidget() {
  const [query, setQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const quickQueries = [
    { text: "High priority clients", category: "Popular" },
    { text: "Workers with JavaScript", category: "Skills" },
    { text: "Tasks requiring 3+ phases", category: "Complex" },
    { text: "Clients with errors", category: "Issues" },
  ]

  const handleQuickSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
  }

  return (
    <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-purple-600 text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xl font-bold">AI Search</span>
            <p className="text-sm text-muted-foreground font-normal mt-1">Query your data using natural language</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Ask about your data in plain English..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-base bg-white/50 border-gray-200/50 focus:bg-white focus:border-primary/50 transition-all rounded-xl"
                onKeyDown={(e) => e.key === "Enter" && query.trim() && handleQuickSearch(query)}
              />
            </div>
            <Button
              size="lg"
              onClick={() => handleQuickSearch(query)}
              disabled={!query.trim()}
              className="bg-gradient-to-br from-primary to-black text-white hover:from-primary/90 hover:to-purple-600/90  px-6 rounded-xl"
            >
              <Zap className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
            <TrendingUp className="h-4 w-4" />
            Popular Queries
          </div>
          <div className="grid grid-cols-1 gap-2">
            {quickQueries.map((quickQuery, index) => (
              <Button
                key={index}
                variant="ghost"
                className="justify-between h-auto p-4 text-left bg-gradient-to-r from-gray-50/80 to-gray-100/80 hover:from-primary/5 hover:to-purple-500/5 transition-all rounded-xl group"
                onClick={() => handleQuickSearch(quickQuery.text)}
              >
                <div className="flex items-center gap-3">
                  <Search className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-medium">{quickQuery.text}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs px-2 py-1">
                    {quickQuery.category}
                  </Badge>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Button>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200/50">
          <Button
            variant="outline"
            className="w-full bg-white/50 hover:bg-white border-gray-200/50 hover:border-primary/50 transition-all rounded-xl"
            onClick={() => (window.location.href = "/search")}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Open Advanced AI Search
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
