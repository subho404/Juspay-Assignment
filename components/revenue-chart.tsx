"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", current: 20, previous: 15 },
  { month: "Feb", current: 28, previous: 18 },
  { month: "Mar", current: 22, previous: 25 },
  { month: "Apr", current: 30, previous: 20 },
  { month: "May", current: 25, previous: 28 },
  { month: "Jun", current: 32, previous: 24 },
]

export function RevenueChart() {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Revenue</h3>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-muted-foreground">
              Current Week: <span className="text-card-foreground font-semibold">$58,211</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
            <span className="text-muted-foreground">
              Previous Week: <span className="text-card-foreground font-semibold">$58,708</span>
            </span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="month" stroke="var(--muted-foreground)" />
          <YAxis stroke="var(--muted-foreground)" />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--card)",
              borderColor: "var(--border)",
              borderRadius: "8px",
              color: "var(--card-foreground)",
            }}
            itemStyle={{ color: "var(--card-foreground)" }}
            labelStyle={{ color: "var(--muted-foreground)" }}
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke="var(--primary)"
            strokeWidth={2}
            dot={false}
            isAnimationActive={true}
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="var(--muted-foreground)"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
