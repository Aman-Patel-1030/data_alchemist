"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ChartNoAxesColumn } from "lucide-react";
import {
  Upload,
  Database,
  Settings,
  Download,
  Sparkles,
  BarChart3,
} from "lucide-react";
import DataIngestion from "@/components/data-ingestion";
import DataGrid from "@/components/data-grid";
import RuleBuilder from "@/components/rule-builder";
import PrioritizationPanel from "@/components/prioritization-panel";
import ValidationSummary from "@/components/validation-summary";
import NaturalLanguageSearch from "@/components/natural-language-search";
import ExportPanel from "@/components/export-panel";
import { DataProvider } from "@/contexts/data-context";
import AIErrorCorrection from "@/components/ai-error-correction";

import Dashboard from "./Dashboard";
import Link from "next/link";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    
    <DataProvider>
      
      <div className="min-h-screen bg-white ">
        
        {/* Header */}
      <div className="bg-gradient-to-r from-primary  to-black text-white backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
  <div className="container py-4">
   
    <div className="flex items-center justify-between">
      {/* Company Name */}
     <div className="text-3xl font-extrabold px-5 py-1  text-white  backdrop:blur-sm tracking-wide border-none">
  Data Alchemist
</div>

      {/* Search Bar */}
      {/* <div className="flex-1 px-6 mx-16 ">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div> */}

      {/* Nav Links */}
      <div className="flex gap-9 text-white font-medium">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/signin" className="hover:text-blue-600">
          Sign In
        </Link>
        <Link href="/about" className="hover:text-blue-600">
          About
        </Link>
        <Link href="/contact" className="hover:text-blue-600">
          Contact
        </Link>
      </div>
    </div>
  </div>
</div>

        <div className="flex">
          {/* Sidebar Navigation */}
          <div className=" fixed w-64 bg-white/90  backdrop-blur-sm border-r border-gray-200 min-h-screen top-[112px] h-full overflow-hidden ">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              orientation="vertical"
              className="w-full "
            >
              <TabsList className="flex flex-col h-auto w-full bg-transparent p-2 gap-1">
                
                 <TabsTrigger
                  value="dashboard"
                  className="w-full justify-start gap-3 px-4 py-3 data-[state=active]:text-white data-[state=active]:bg-gradient-to-br from-primary to-black  
                  hover:text-white-950 hover:bg-gray-200 transition-all duration-100"
                >
                  <ChartNoAxesColumn className="h-5 w-5 data-[state=active]:text-white" />
                  <span className="font-bold ">Dashboard</span>
                </TabsTrigger>

                <TabsTrigger
                  value="ingestion"
                  className="w-full justify-start gap-3 px-4 py-3 data-[state=active]:text-white data-[state=active]:bg-gradient-to-br from-primary to-black  
                  hover:text-white-950 hover:bg-gray-200 transition-all duration-100"
                >
                  <Upload className="h-5 w-5 data-[state=active]:text-white" />
                  <span className="font-bold">Data Upload</span>
                </TabsTrigger>
               

                <TabsTrigger
                  value="data"
                  className="w-full justify-start gap-3 px-4 py-3 data-[state=active]:text-white data-[state=active]:bg-gradient-to-br from-primary to-black  
                  hover:text-white-950 hover:bg-gray-200 transition-all duration-100"
                >
                  <Database className="h-5 w-5 data-[state=active]:text-white" />
                  <span className="font-bold">Data Grid</span>
                </TabsTrigger>

                <TabsTrigger
                  value="rules"
                  className="w-full justify-start gap-3 px-4 py-3 data-[state=active]:text-white data-[state=active]:bg-gradient-to-br from-primary to-black  
                  hover:text-white-950 hover:bg-gray-200 transition-all duration-100"
                >
                  <Settings className="h-5 w-5 data-[state=active]:text-white" />
                  <span className="font-bold">Rules</span>
                </TabsTrigger>

                <TabsTrigger
                  value="priorities"
                  className="w-full justify-start gap-3 px-4 py-3 data-[state=active]:text-white data-[state=active]:bg-gradient-to-br from-primary to-black  
                  hover:text-white-950 hover:bg-gray-200 transition-all duration-100"
                >
                  <BarChart3 className="h-5 w-5 data-[state=active]:text-white" />
                  <span className="font-bold">Priorities</span>
                </TabsTrigger>

                <TabsTrigger
                  value="export"
                className="w-full justify-start gap-3 px-4 py-3 data-[state=active]:text-white data-[state=active]:bg-gradient-to-br from-primary to-black  
                  hover:text-white-950 hover:bg-gray-200 transition-all duration-100"
                >
                  <Download className="h-5 w-5 data-[state=active]:text-white" />
                  <span className="font-bold">Export</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Main Content Area */}
          <div className="ml-64 flex-1 p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsContent value="dashboard" className="mt-0">
                <div className="bg-white/80 backdrop-blur-sm p-6">
                  <Dashboard />
                </div>
              </TabsContent>

              <TabsContent value="ingestion" className="mt-0">
                <div className="bg-white/80 backdrop-blur-sm  p-6">
                  <DataIngestion />
                </div>
              </TabsContent>

              <TabsContent value="data" className="mt-0">
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                  {/* Main Data Grid */}
                  <div className="xl:col-span-4 order-2 xl:order-1">
                    <div className="bg-white/80 backdrop-blur-sm ">
                      <DataGrid />
                    </div>
                  </div>

                  {/* Right Sidebar Components */}
                  <div className="xl:col-span-4 order-2 xl:order-2 space-y-4">
                    <div className="bg-white/80">
                      <ValidationSummary />
                    </div>

                    {/* Mobile: Expandable sections */}
                    <div className="block lg:hidden space-y-4">
                      <details className="group bg-white/80  backdrop-blur-sm rounded-xl border overflow-hidden">
                        <summary className="cursor-pointer p-4 ">
                          <span className="font-medium text-black bg-white">
                            🔍 AI Search
                          </span>
                        </summary>
                        <div className="p-4">
                          <NaturalLanguageSearch />
                        </div>
                      </details>

                      <details className="group bg-white/80 overflow-hidden backdrop-blur-sm rounded-xl border">
                        <summary className="cursor-pointer p-4  ">
                          <span className="font-medium text-black bg-white">
                            🤖 AI Error Correction
                          </span>
                        </summary>
                        <div className="p-4">
                          <AIErrorCorrection />
                        </div>
                      </details>
                    </div>

                    {/* Desktop: Normal display */}
                    <div className="hidden lg:block space-y-4">
                      <div className="bg-white/80 backdrop-blur-sm  ">
                        <NaturalLanguageSearch />
                      </div>
                      <div className="bg-white/80">
                        <AIErrorCorrection />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="rules" className="mt-0">
                <div className="bg-white/80">
                  <RuleBuilder />
                </div>
              </TabsContent>

              <TabsContent value="priorities" className="mt-0">
                <div className="bg-white/80 p-6">
                  <PrioritizationPanel />
                </div>
              </TabsContent>

              <TabsContent value="export" className="mt-0">
                <div className="bg-white/80">
                  <ExportPanel />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DataProvider>
  );
}
