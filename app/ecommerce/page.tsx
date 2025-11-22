import { OrderList } from "@/components/order-list"
import { Sidebar } from "@/components/sidebar"

export default function eCommercePage() {
  return (
    <div className="flex h-screen bg-slate-950">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <OrderList />
      </main>
    </div>
  )
}
