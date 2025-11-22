"use client"

const products = [
  { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,918.18" },
  { name: "Merce Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50" },
  { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36" },
  { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00" },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,956.81" },
]

export function TopProducts() {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h3 className="text-lg font-semibold text-card-foreground mb-6">Top Selling Products</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Product</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Price</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Qty</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.name} className="border-b border-border hover:bg-muted/50 transition-colors">
                <td className="px-4 py-3 text-muted-foreground">{product.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{product.price}</td>
                <td className="px-4 py-3 text-muted-foreground">{product.quantity}</td>
                <td className="px-4 py-3 text-card-foreground font-medium">{product.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
