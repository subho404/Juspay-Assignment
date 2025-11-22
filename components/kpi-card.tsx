"use client"

import { TrendingUp, TrendingDown } from "lucide-react"

interface KPICardProps {
  label: string
  value: string
  change: string
  trend: "up" | "down"
  variant?: "default" | "highlighted"
}

export function KPICard({ label, value, change, trend, variant = "default" }: KPICardProps) {
  const isPositive = trend === "up"
  const isHighlighted = variant === "highlighted"

  return (
    <div
      className={`
      border rounded-xl p-6 transition-colors group
      ${isHighlighted
          ? "bg-primary/10 border-primary/20 hover:border-primary/30"
          : "bg-card border-border hover:border-border/80"
        }
    `}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className={`text-sm mb-2 ${isHighlighted ? "text-primary/80" : "text-muted-foreground"}`}>{label}</p>
          <h3 className={`text-2xl font-bold mb-2 ${isHighlighted ? "text-primary" : "text-card-foreground"}`}>{value}</h3>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {isPositive ? (
          <TrendingUp size={16} className={isHighlighted ? "text-primary" : "text-green-500"} />
        ) : (
          <TrendingDown size={16} className={isHighlighted ? "text-primary" : "text-red-500"} />
        )}
        <span
          className={`text-xs font-medium ${isHighlighted ? "text-primary" : isPositive ? "text-green-500" : "text-red-500"
            }`}
        >
          {change}
        </span>
      </div>
    </div>
  )
}
