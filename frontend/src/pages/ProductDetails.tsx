import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500 text-lg">
            Product not found
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* PRODUCT IMAGE */}
          <div className="flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md h-[420px] object-cover rounded-xl shadow"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.onerror = null;
                img.src =
                  "https://images.unsplash.com/photo-1607082349566-1870f6f2b7a3?auto=format&fit=crop&w=800&q=80";
              }}
            />
          </div>

          {/* PRODUCT DETAILS */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-6">
              {product.name}
            </h1>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Premium quality product carefully selected to deliver the best
              performance, durability, and value for your everyday needs.
            </p>

            <p className="text-3xl font-semibold text-blue-600 mb-10">
              ₹{product.price}
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => addToCart(product)}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700"
              >
                Add to Cart
              </button>

              <button
                onClick={() => navigate("/products")}
                className="border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
              >
                Back to Products
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductDetails;