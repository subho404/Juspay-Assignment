"use client"

import { Bell, Bug, UserPlus } from "lucide-react"

const notifications = [
  { id: 1, type: "bug", title: "You have a bug that needs...", time: "1s ago" },
  { id: 2, type: "user", title: "New user registered", time: "2m ago" },
  { id: 3, type: "bug", title: "You have a bug that needs...", time: "12 hours ago" },
  { id: 4, type: "user", title: "Ardi Lane subscribed to you", time: "1 hour ago" },
]

export function Notifications() {
  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <h3 className="text-sm font-semibold text-card-foreground mb-4 flex items-center gap-2">
        <Bell className="w-4 h-4" />
        Notifications
      </h3>
      <div className="space-y-2">
        {notifications.map((notif) => (
          <div key={notif.id} className="flex items-start gap-3 p-3 rounded-md hover:bg-muted/50 transition-colors">
            <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              {notif.type === "bug" ? (
                <Bug className="w-4 h-4 text-red-500" />
              ) : (
                <UserPlus className="w-4 h-4 text-blue-500" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground leading-tight">{notif.title}</p>
              <p className="text-xs text-muted-foreground/60 mt-1">{notif.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
