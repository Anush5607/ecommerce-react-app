import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const OrderSuccess = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Order Placed Successfully!
        </h2>

        <p className="text-gray-600 mb-6">
          Thank you for shopping with us.
        </p>

        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    </>
  );
};

export default OrderSuccess;