import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="min-h-[80vh] bg-gray-50 py-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            🛒 Your Cart
          </h2>

          {/* Empty cart */}
          {cart.length === 0 && (
            <p className="text-gray-500 text-center py-10">
              Your cart is empty.
            </p>
          )}

          {/* Cart items */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <p className="font-medium text-gray-800">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <p className="font-semibold text-gray-700">
                  ₹{item.price * item.quantity}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total + Checkout */}
          {cart.length > 0 && (
            <div className="mt-8 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Total: ₹{total}
              </h3>

              <button
                onClick={() => navigate("/checkout")}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;