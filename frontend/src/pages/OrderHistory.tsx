import Navbar from "../components/Navbar";

const orders = [
  {
    id: "ORD-1001",
    date: "02 Jan 2026",
    status: "Delivered",
    total: 4998,
    items: [
      { name: "Premium Perfume", quantity: 1 },
      { name: "Wireless Headphones", quantity: 1 },
    ],
  },
  {
    id: "ORD-1002",
    date: "01 Jan 2026",
    status: "Processing",
    total: 1999,
    items: [
      { name: "Stylish Sneakers", quantity: 1 },
    ],
  },
];

const OrderHistory = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-[80vh] bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            📦 My Orders
          </h2>

          {orders.length === 0 && (
            <p className="text-gray-500">
              You have not placed any orders yet.
            </p>
          )}

          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow p-6 mb-6"
            >
              {/* Order Header */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-semibold">
                    Order ID: {order.id}
                  </p>
                  <p className="text-sm text-gray-500">
                    Placed on {order.date}
                  </p>
                </div>

                <span
                  className={`px-4 py-1 rounded-full text-sm font-medium ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              {/* Items */}
              <div className="border-t pt-4">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-gray-700 mb-2"
                  >
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t mt-4 pt-4 flex justify-between font-semibold">
                <span>Total</span>
                <span>₹{order.total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrderHistory;