"use client"

import { useState } from "react"
import { Filter, ChevronLeft, ChevronRight, Plus, ArrowUpDown, Search } from "lucide-react"
import { OrderTable } from "./order-table"
import { TopBar } from "./top-bar"

export function OrderList() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  return (
    <div className="h-full bg-background flex flex-col">
      <TopBar title="Order List" />

      <div className="flex-1 p-8 overflow-auto">
        <h2 className="text-lg font-semibold text-foreground mb-4">Order List</h2>

        {/* Toolbar */}
        <div className="flex items-center justify-between bg-muted/50 p-1.5 rounded-lg mb-4">
          <div className="flex items-center gap-1">
            <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">
              <Plus size={16} />
            </button>
            <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">
              <Filter size={16} />
            </button>
            <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">
              <ArrowUpDown size={16} />
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="bg-background border-none text-foreground text-sm rounded-md pl-9 pr-4 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary w-48 placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden">
          <OrderTable />
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-lg transition-colors font-medium ${currentPage === page
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
