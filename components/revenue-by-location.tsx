"use client"

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import { useTheme } from "next-themes"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const markers = [
  { markerOffset: -15, name: "New York", coordinates: [-74.006, 40.7128], revenue: "72k" },
  { markerOffset: -15, name: "San Francisco", coordinates: [-122.4194, 37.7749], revenue: "39k" },
  { markerOffset: 25, name: "Sydney", coordinates: [151.2093, -33.8688], revenue: "25k" },
  { markerOffset: 25, name: "Singapore", coordinates: [103.8198, 1.3521], revenue: "61k" },
]

export function RevenueByLocation() {
  const { theme, resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h3 className="text-lg font-semibold text-card-foreground mb-6">Revenue by Location</h3>

      <div className="relative bg-muted/50 rounded-lg p-4 mb-6 h-48 overflow-hidden">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 100,
            center: [0, 20],
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isDark ? "#334155" : "#e2e8f0"} // slate-700 : slate-200
                  stroke={isDark ? "#1e293b" : "#cbd5e1"} // slate-800 : slate-300
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: isDark ? "#475569" : "#cbd5e1" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates as [number, number]}>
              <circle r={4} fill="var(--primary)" stroke="var(--background)" strokeWidth={2} />
            </Marker>
          ))}
        </ComposableMap>
      </div>

      <div className="space-y-3">
        {markers.map((location) => (
          <div
            key={location.name}
            className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <p className="text-sm text-muted-foreground font-medium">{location.name}</p>
            <p className="text-sm font-semibold text-card-foreground">{location.revenue}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
