"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"

const contacts = [
  { name: "Notai Croig", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Notai" },
  {
    name: "Drew Cono",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Drew",
    badge: "",
    badgeColor: "amber",
  },
  { name: "Orlando Diggs", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Orlando" },
  { name: "Andi Lane", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andi" },
  { name: "Kate Morrison", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kate" },
  { name: "Koray Okumus", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Koray" },
]

export function Contacts() {
  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <h3 className="text-sm font-semibold text-card-foreground mb-4 flex items-center gap-2">
        <Users className="w-4 h-4" />
        Contacts
      </h3>
      <div className="space-y-2">
        {contacts.map((contact) => (
          <div
            key={contact.name}
            className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50 transition-colors group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <Avatar className="w-7 h-7 flex-shrink-0">
                <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground truncate">{contact.name}</span>
            </div>
            {contact.badge && (
              <Badge
                className={`text-xs whitespace-nowrap ${contact.badgeColor === "amber"
                    ? "bg-amber-500/20 text-amber-500 border border-amber-500/30"
                    : "bg-muted text-muted-foreground border border-border"
                  }`}
              >
                {contact.badge}
              </Badge>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
