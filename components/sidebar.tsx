"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  FileText,
  Settings,
  HelpCircle,
  BarChart3,
  PieChart,
  Package,
  Bell,
} from "lucide-react"
import { useSidebar } from "./sidebar-provider"

const menuItems = [
  {
    title: "Dashboards",
    items: [
      { title: "Default", icon: LayoutDashboard, href: "/" },
      { title: "eCommerce", icon: ShoppingCart, href: "/ecommerce" },
      { title: "Projects", icon: FileText, href: "/projects" },
      { title: "Online Courses", icon: FileText, href: "/courses" },
    ],
  },
  {
    title: "Pages",
    items: [
      { title: "User Profile", icon: Users, href: "/profile" },
      { title: "Account", icon: Settings, href: "/account" },
      { title: "Corporate", icon: Users, href: "/corporate" },
      { title: "Blog", icon: FileText, href: "/blog" },
      { title: "Social", icon: Users, href: "/social" },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const { isOpen } = useSidebar()

  if (!isOpen) return null

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border overflow-y-auto transition-all duration-300 ease-in-out flex-shrink-0">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            B
          </div>
          <span className="font-semibold text-sidebar-foreground">ByeWind</span>
        </div>
        <div className="flex gap-2 text-xs">
          <button className="text-blue-400 hover:text-blue-300 transition-colors font-medium">Favorites</button>
          <button className="text-sidebar-foreground/60 hover:text-sidebar-foreground/80 transition-colors">Recently</button>
        </div>
      </div>

      {/* Menu */}
      <div className="p-4 space-y-8">
        {menuItems.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-medium text-sidebar-foreground/50 mb-4 px-2">{section.title}</h3>
            <div className="space-y-1">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-2 py-2 text-sm rounded-md transition-colors ${pathname === item.href
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground/80 hover:text-sidebar-accent-foreground hover:bg-sidebar-accent"
                    }`}
                >
                  <item.icon size={16} />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
