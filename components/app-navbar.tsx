"use client"

import { Bell, Settings, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AppNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-6">
        {/* Left side */}
        <div className="flex items-center gap-6">
         

          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search data, rules, or ask AI..."
              className="w-80 pl-10 bg-white/90 border-gray-300 focus:bg-white focus:border-primary/50 transition-all text-slate-900 placeholder:text-slate-500"
            />
            <Badge variant="secondary" className="absolute right-2 top-1/2 -translate-y-1/2 text-xs px-2 py-0.5">
              AI
            </Badge>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Status indicator */}
          <div className="hidden sm:flex items-center gap-3 mr-4 px-3 py-1.5 bg-green-50 rounded-full border border-green-200">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-800">AI Online</span>
            </div>
          </div>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative hover:bg-primary/10 transition-colors">
                <Bell className="h-5 w-5" />
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 bg-white border border-gray-200 shadow-xl">
              <DropdownMenuLabel className="font-semibold">Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="p-4">
                <div className="flex flex-col gap-1">
                  <div className="font-medium text-slate-900">Validation Complete</div>
                  <div className="text-sm text-slate-600">Found 12 issues in uploaded data</div>
                  <div className="text-xs text-slate-500 mt-1">2 minutes ago</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-4">
                <div className="flex flex-col gap-1">
                  <div className="font-medium text-slate-900">AI Rule Generated</div>
                  <div className="text-sm text-slate-600">New co-run rule suggested for tasks T1-T3</div>
                  <div className="text-xs text-slate-500 mt-1">5 minutes ago</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-4">
                <div className="flex flex-col gap-1">
                  <div className="font-medium text-slate-900">Export Ready</div>
                  <div className="text-sm text-slate-600">Cleaned data package is ready for download</div>
                  <div className="text-xs text-slate-500 mt-1">10 minutes ago</div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Settings */}
          <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors">
            <Settings className="h-5 w-5" />
          </Button>

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-purple-600 text-white">
                    DA
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-white/95 backdrop-blur-xl">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Data Analyst</p>
                  <p className="text-xs leading-none text-muted-foreground">analyst@company.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile Settings</DropdownMenuItem>
              <DropdownMenuItem>API Keys</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Help & Support</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
