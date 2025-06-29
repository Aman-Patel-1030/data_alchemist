// app/page.tsx or src/app/page.tsx (Next.js 13+ with App Router)

'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileSpreadsheet, CheckCircle, AlertCircle, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Image from 'next/image'

import {

  Search,
  Settings,
  Download,
  
  TrendingUp,
  Shield,
  Zap,
  ArrowRight,
  BarChart3,
  Database,
  Brain,
} from "lucide-react"
import { AISearchWidget } from "@/components/ai-search-widget"

export default function HomePage() {




   const stats = [
    { label: "Data Records Processed", value: "1.2M+", icon: Database, color: "text-blue-600" },
    { label: "AI Validations Run", value: "45K+", icon: Shield, color: "text-green-600" },
    { label: "Rules Generated", value: "2.8K+", icon: Settings, color: "text-purple-600" },
    { label: "Success Rate", value: "99.7%", icon: TrendingUp, color: "text-orange-600" },
  ]

  const features = [
    {
      title: "Smart Data Upload",
      description: "AI-powered CSV/XLSX parsing with intelligent column mapping",
      icon: Upload,
      gradient: "from-blue-500 to-cyan-500",
      href: "/upload",
    },
    {
      title: "Natural Language Search",
      description: "Query your data using plain English with AI understanding",
      icon: Search,
      gradient: "from-purple-500 to-pink-500",
      href: "/search",
    },
    {
      title: "Intelligent Rules Engine",
      description: "Create complex validation rules with AI assistance",
      icon: Settings,
      gradient: "from-green-500 to-emerald-500",
      href: "/rules",
    },
    {
      title: "Advanced Analytics",
      description: "Deep insights and pattern recognition in your data",
      icon: BarChart3,
      gradient: "from-orange-500 to-red-500",
      href: "/analytics",
    },
  ]

 
 return (
  
    <div className='min-h-screen p-8 transition-colors bg-white text-black'>


      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5" />
        <div className="relative px-6 py-24 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 " />
                <div className="relative  p-3 rounded-2xl">
                        
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gradient">Welcome To Data Alchemist</h1>
            </div>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform raw data into intelligent insights with our AI-powered platform. Advanced validation, natural
              language processing, and automated rule generation make data management effortless and precise.
            </p>

            <div className="flex items-center justify-center gap-4 mb-12">
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                Natural Language
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                <Brain className="h-4 w-4 mr-2 text-primary" />
                AI-Powered
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                <Zap className="h-4 w-4 mr-2 text-yellow-600" />
                Real-time Processing
              </Badge>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary  to-black text-white  px-8 py-3"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-7xl space-y-16">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="card-hover border-0 bg-white/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold mt-1">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-xl bg-gradient-to-br from-white to-gray-50 ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Grid */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to process, validate, and analyze your data with AI assistance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="card-hover border-0 bg-white/80 backdrop-blur-sm overflow-hidden group cursor-pointer"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-base mt-1">{feature.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button
                      variant="ghost"
                      className="w-full justify-between group-hover:bg-primary/5 transition-colors"
                    >
                      Explore Feature
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* AI Search Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-primary/5 via-purple-500/5 to-primary/5 rounded-2xl p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Try AI Search</h3>
                  <p className="text-muted-foreground">Experience the power of natural language data querying</p>
                </div>
                <AISearchWidget />
              </div>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Popular Queries
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Priority 5 clients with errors",
                  "JavaScript developers available",
                  "Tasks requiring 3+ phases",
                  "High-value client requests",
                ].map((query, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 hover:from-primary/5 hover:to-purple-500/5 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2">
                      <Search className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm font-medium">{query}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Process Flow */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple, powerful workflow that transforms your data processing experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Upload & Parse",
                  description: "AI automatically detects data types and maps columns intelligently",
                  icon: Upload,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  step: "02",
                  title: "Validate & Clean",
                  description: "12+ validation rules ensure data quality with real-time feedback",
                  icon: Shield,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  step: "03",
                  title: "Analyze & Export",
                  description: "Generate insights and export clean, validated data packages",
                  icon: Download,
                  color: "from-purple-500 to-pink-500",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <Card className="card-hover border-0 bg-white/80 backdrop-blur-sm text-center">
                    <CardContent className="p-8">
                      <div className="relative mb-6">
                        <div
                          className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-4`}
                        >
                          <step.icon className="h-8 w-8" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {step.step}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>

                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 transform -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
  )
}
