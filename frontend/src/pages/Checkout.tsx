import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (!address || !city || !pincode) {
      alert("Please fill all address fields");
      return;
    }

    // 🔥 Simulate successful order
    clearCart();
    navigate("/order-success");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-[80vh] bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          {/* LEFT: Address Form */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-6">
              Delivery Address
            </h2>

            <input
              id="address"
              name="address"
              placeholder="Address"
              className="w-full mb-4 p-3 border rounded-lg"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />

            <input
              id="city"
              name="city"
              placeholder="City"
              className="w-full mb-4 p-3 border rounded-lg"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />

            <input
              id="pincode"
              name="pincode"
              placeholder="Pincode"
              className="w-full mb-4 p-3 border rounded-lg"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
            />
          </div>

          {/* RIGHT: Order Summary */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-6">
              Order Summary
            </h2>

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between mb-3 text-gray-700"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>
                  ₹{item.price * item.quantity}
                </span>
              </div>
            ))}

            <hr className="my-4" />

            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;