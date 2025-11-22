"use client"

import { useState, useEffect } from "react"
import { Search, Bell, History, PanelRight, Sun, Moon, Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { useSidebar } from "./sidebar-provider"

interface TopBarProps {
  title: string
  subtitle?: string
}

export function TopBar({ title, subtitle }: TopBarProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { toggle } = useSidebar()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <div className="border-b border-border bg-background px-8 py-4 transition-colors duration-300 ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-foreground">{title}</h1>
          {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block group">
            <Search
              className="absolute left-3 top-2.5 text-muted-foreground group-focus-within:text-primary transition-colors"
              size={18}
            />
            <input
              type="text"
              placeholder="Search"
              className="bg-muted/50 border-none text-foreground placeholder-muted-foreground rounded-lg pl-10 pr-12 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all w-64"
            />
            <span className="absolute right-3 top-2.5 text-muted-foreground text-xs border border-border rounded px-1.5 py-0.5">
              ⌘/
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {mounted && (resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
            </button>

            <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors">
              <History size={20} />
            </button>

            <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
            </button>

            <button
              onClick={toggle}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              <PanelRight size={20} />
            </button>
          </div>

          <button
            onClick={toggle}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors lg:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
