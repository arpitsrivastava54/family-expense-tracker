"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Home, PlusCircle, Settings, Users, LogOut, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const routes = [
    {
      icon: Home,
      href: "/dashboard",
      label: "Dashboard",
    },
    {
      icon: BarChart3,
      href: "/dashboard/transactions",
      label: "Transactions",
    },
    {
      icon: PlusCircle,
      href: "/dashboard/add-transaction",
      label: "Add Transaction",
    },
    {
      icon: Users,
      href: "/dashboard/family",
      label: "Family Members",
    },
    {
      icon: Settings,
      href: "/dashboard/settings",
      label: "Settings",
    },
  ]

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Mobile menu button */}
        <div className="fixed right-4 top-4 z-50 md:hidden">
          <Button variant="outline" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile sidebar */}
        <div
          className={`fixed inset-0 z-40 transform bg-background transition-transform duration-300 ease-in-out md:hidden ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-semibold">
                <span className="text-primary">Family</span>
                <span>Finance</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 space-y-2">
              {routes.map((route) => (
                <Link key={route.href} href={route.href} onClick={() => setMobileMenuOpen(false)}>
                  <Button variant={pathname === route.href ? "default" : "ghost"} className="w-full justify-start">
                    <route.icon className="mr-2 h-5 w-5" />
                    {route.label}
                  </Button>
                </Link>
              ))}
            </div>
            <div className="mt-auto">
              <Link href="/">
                <Button variant="ghost" className="w-full justify-start">
                  <LogOut className="mr-2 h-5 w-5" />
                  Sign Out
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop sidebar */}
        <Sidebar className="hidden md:flex">
          <SidebarHeader className="border-b p-4">
            <div className="flex items-center gap-2 font-semibold">
              <span className="text-primary">Family</span>
              <span>Finance</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {routes.map((route) => (
                <SidebarMenuItem key={route.href}>
                  <SidebarMenuButton asChild isActive={pathname === route.href} tooltip={route.label}>
                    <Link href={route.href}>
                      <route.icon />
                      <span>{route.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Sign Out">
                  <Link href="/">
                    <LogOut />
                    <span>Sign Out</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 overflow-auto">
          <div className="container py-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  )
}

