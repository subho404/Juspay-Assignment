"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Calendar, MoreHorizontal, FileText } from "lucide-react"

const orders = [
  {
    id: "#CM9801",
    user: "Natali Craig",
    avatar: "/placeholder.svg?height=32&width=32",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: "Kate Morrison",
    avatar: "/placeholder.svg?height=32&width=32",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: "Drew Cano",
    avatar: "/placeholder.svg?height=32&width=32",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    avatar: "/placeholder.svg?height=32&width=32",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    checked: true,
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    avatar: "/placeholder.svg?height=32&width=32",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    hasDoc: true,
  },
  {
    id: "#CM9801",
    user: "Natali Craig",
    avatar: "/placeholder.svg?height=32&width=32",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: "Kate Morrison",
    avatar: "/placeholder.svg?height=32&width=32",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: "Drew Cano",
    avatar: "/placeholder.svg?height=32&width=32",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    avatar: "/placeholder.svg?height=32&width=32",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    avatar: "/placeholder.svg?height=32&width=32",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
]

const statusColors: Record<string, string> = {
  "In Progress": "text-indigo-400",
  Complete: "text-emerald-400",
  Pending: "text-blue-400",
  Approved: "text-amber-400",
  Rejected: "text-slate-400",
}

const statusDots: Record<string, string> = {
  "In Progress": "bg-indigo-400",
  Complete: "bg-emerald-400",
  Pending: "bg-blue-400",
  Approved: "bg-amber-400",
  Rejected: "bg-slate-400",
}

export function OrderTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[800px]">
        <thead>
          <tr className="border-b border-border">
            <th className="px-6 py-3 text-left w-10">
              <input
                type="checkbox"
                className="rounded border-border bg-muted/50 text-primary focus:ring-0 focus:ring-offset-0"
              />
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Order ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">User</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Project</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Address</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <tr
              key={`${order.id}-${idx}`}
              className={`border-b border-border hover:bg-muted/50 transition-colors group ${order.checked ? "bg-muted/50" : ""
                }`}
            >
              <td className="px-6 py-3">
                <input
                  type="checkbox"
                  defaultChecked={order.checked}
                  className="rounded border-border bg-muted/50 text-primary focus:ring-0 focus:ring-offset-0"
                />
              </td>
              <td className="px-6 py-3 text-sm text-muted-foreground">{order.id}</td>
              <td className="px-6 py-3 text-sm">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={order.avatar || "/placeholder.svg"} alt={order.user} />
                    <AvatarFallback>{order.user.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-card-foreground">{order.user}</span>
                </div>
              </td>
              <td className="px-6 py-3 text-sm text-card-foreground">{order.project}</td>
              <td className="px-6 py-3 text-sm text-card-foreground">
                <div className="flex items-center gap-2">
                  <span>{order.address}</span>
                  {order.hasDoc && <FileText size={14} className="text-muted-foreground" />}
                </div>
              </td>
              <td className="px-6 py-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-muted-foreground" />
                  <span>{order.date}</span>
                </div>
              </td>
              <td className="px-6 py-3 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${statusDots[order.status]}`} />
                    <span className={statusColors[order.status]}>{order.status}</span>
                  </div>
                  {(order.status === "Rejected" || idx === 4) && (
                    <button className="text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal size={16} />
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
