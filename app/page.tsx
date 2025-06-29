"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ChartNoAxesColumn, Upload, Database, Settings, Download, BarChart3 } from "lucide-react";
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
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-black text-white sticky top-0 z-40">
          <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-y-4">
              {/* Company Name */}
              <div className="text-3xl font-extrabold text-white tracking-wide">
                Data Alchemist
              </div>

              {/* Nav Links */}
              <div className="flex gap-6 text-white font-medium text-sm md:text-base">
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

        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <div className="w-full lg:w-64 bg-white/90 border-r border-gray-200 sticky top-[88px] lg:top-[88px] z-30 h-auto lg:min-h-screen">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              orientation="vertical"
              className="w-full"
            >
              <TabsList className="flex lg:flex-col flex-row lg:h-auto w-full bg-transparent p-2 gap-1 overflow-x-auto">
                {[{
                  label: 'Dashboard', value: 'dashboard', Icon: ChartNoAxesColumn
                }, {
                  label: 'Data Upload', value: 'ingestion', Icon: Upload
                }, {
                  label: 'Data Grid', value: 'data', Icon: Database
                }, {
                  label: 'Rules', value: 'rules', Icon: Settings
                }, {
                  label: 'Priorities', value: 'priorities', Icon: BarChart3
                }, {
                  label: 'Export', value: 'export', Icon: Download
                }].map(({ label, value, Icon }) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    className="w-full justify-start gap-3 px-4 py-3 data-[state=active]:text-white data-[state=active]:bg-gradient-to-br from-primary to-black hover:text-white-950 hover:bg-gray-200 transition-all duration-100"
                  >
                    <Icon className="h-5 w-5 data-[state=active]:text-white" />
                    <span className="font-bold">{label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 sm:p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsContent value="dashboard">
                <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                  <Dashboard />
                </div>
              </TabsContent>
              <TabsContent value="ingestion">
                <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                  <DataIngestion />
                </div>
              </TabsContent>
              <TabsContent value="data">
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                  <div className="xl:col-span-4">
                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                      <DataGrid />
                    </div>
                  </div>
                  <div className="xl:col-span-4 space-y-4">
                    <div className="bg-white/80 p-4 rounded-xl">
                      <ValidationSummary />
                    </div>
                    <div className="block lg:hidden space-y-4">
                      <details className="group bg-white/80 backdrop-blur-sm rounded-xl border">
                        <summary className="cursor-pointer p-4">
                          <span className="font-medium text-black">🔍 AI Search</span>
                        </summary>
                        <div className="p-4">
                          <NaturalLanguageSearch />
                        </div>
                      </details>
                      <details className="group bg-white/80 backdrop-blur-sm rounded-xl border">
                        <summary className="cursor-pointer p-4">
                          <span className="font-medium text-black">🤖 AI Error Correction</span>
                        </summary>
                        <div className="p-4">
                          <AIErrorCorrection />
                        </div>
                      </details>
                    </div>
                    <div className="hidden lg:block space-y-4">
                      <div className="bg-white/80 p-4 rounded-xl">
                        <NaturalLanguageSearch />
                      </div>
                      <div className="bg-white/80 p-4 rounded-xl">
                        <AIErrorCorrection />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="rules">
                <div className="bg-white/80 p-4 rounded-xl">
                  <RuleBuilder />
                </div>
              </TabsContent>
              <TabsContent value="priorities">
                <div className="bg-white/80 p-4 rounded-xl">
                  <PrioritizationPanel />
                </div>
              </TabsContent>
              <TabsContent value="export">
                <div className="bg-white/80 p-4 rounded-xl">
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
