"use client"

import { Zap, Copy, Trash2, Edit3 } from "lucide-react"

const activities = [
  { id: 1, type: "bug", title: "You have a bug that needs...", time: "1 hour ago" },
  { id: 2, type: "release", title: "Released a new version", time: "1.5 hours ago" },
  { id: 3, type: "bug", title: "Submitted a bug", time: "12 hours ago" },
  { id: 4, type: "edit", title: "Modified A data in Page X", time: "1 hour ago" },
  { id: 5, type: "delete", title: "Deleted a page in Project X", time: "Feb 2, 2023" },
]

export function Activities() {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "bug":
        return <div className="w-2 h-2 bg-red-500 rounded-full" />
      case "release":
        return <Zap className="w-4 h-4 text-amber-400" />
      case "edit":
        return <Edit3 className="w-4 h-4 text-blue-400" />
      case "delete":
        return <Trash2 className="w-4 h-4 text-slate-400" />
      default:
        return <Copy className="w-4 h-4 text-slate-400" />
    }
  }

  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <h3 className="text-sm font-semibold text-card-foreground mb-4">Activities</h3>
      <div className="space-y-2">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 p-3 rounded-md hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center justify-center flex-shrink-0 mt-0.5">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground leading-tight">{activity.title}</p>
              <p className="text-xs text-muted-foreground/60 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
