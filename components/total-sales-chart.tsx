"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Direct", value: 300.56, color: "#60a5fa" },
  { name: "Affiliate", value: 135.18, color: "#34d399" },
  { name: "Sponsored", value: 155.02, color: "#fbbf24" },
  { name: "E-mail", value: 48.96, color: "#f87171" },
]

export function TotalSalesChart() {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h3 className="text-lg font-semibold text-card-foreground mb-4">Total Sales</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={2} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
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
        </PieChart>
      </ResponsiveContainer>

      <div className="space-y-2 mt-6">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-muted-foreground">{item.name}</span>
            </div>
            <span className="text-card-foreground font-medium">${item.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
