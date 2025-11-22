"use client"

import { TopBar } from "./top-bar"
import { KPICard } from "./kpi-card"
import { RevenueChart } from "./revenue-chart"
import { TopProducts } from "./top-products"
import { TotalSalesChart } from "./total-sales-chart"
import { Notifications } from "./notifications"
import { Activities } from "./activities"
import { Contacts } from "./contacts"
import { RevenueByLocation } from "./revenue-by-location"
import { ProjectionsChart } from "./projections-chart"

export function Dashboard() {
  return (
    <div className="h-full bg-background flex flex-col">
      <TopBar title="eCommerce" subtitle="Dashboards > Default" />

      <div className="flex-1 overflow-auto">
        <div className="p-8 grid grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="col-span-3 space-y-6">
            {/* Top Section: KPIs + Projections */}
            <div className="grid grid-cols-3 gap-6">
              {/* KPI Cards */}
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <KPICard label="Customers" value="3,781" change="+11.01%" trend="up" variant="highlighted" />
                <KPICard label="Orders" value="1,219" change="-0.03%" trend="down" />
                <KPICard label="Revenue" value="$695" change="+15.03%" trend="up" />
                <KPICard label="Growth" value="30.1%" change="+6.08%" trend="up" variant="highlighted" />
              </div>

              {/* Projections Chart */}
              <div className="col-span-1">
                <ProjectionsChart />
              </div>
            </div>

            {/* Charts & Bottom Section */}
            <div className="grid grid-cols-3 gap-6">
              {/* Left Column: Revenue & Top Products */}
              <div className="col-span-2 space-y-6">
                <RevenueChart />
                <TopProducts />
              </div>

              {/* Right Column: Location & Total Sales */}
              <div className="col-span-1 space-y-6">
                <RevenueByLocation />
                <TotalSalesChart />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Notifications />
            <Activities />
            <Contacts />
          </div>
        </div>
      </div>
    </div>
  )
}
