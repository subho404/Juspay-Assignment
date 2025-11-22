"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", actual: 18, projection: 4 },
  { month: "Feb", actual: 22, projection: 5 },
  { month: "Mar", actual: 19, projection: 4 },
  { month: "Apr", actual: 24, projection: 6 },
  { month: "May", actual: 16, projection: 4 },
  { month: "Jun", actual: 22, projection: 5 },
]

export function ProjectionsChart() {
  return (
    <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col">
      <h3 className="text-lg font-semibold text-card-foreground mb-6">Projections vs Actuals</h3>

      <div className="flex-1 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={20}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis
              dataKey="month"
              stroke="var(--muted-foreground)"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              dy={10}
            />
            <YAxis
              stroke="var(--muted-foreground)"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `${value}M`}
            />
            <Bar dataKey="actual" stackId="a" fill="var(--primary)" radius={[0, 0, 0, 0]} />
            <Bar dataKey="projection" stackId="a" fill="var(--muted)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
