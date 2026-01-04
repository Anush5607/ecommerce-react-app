import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }: any) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="card overflow-hidden">
      {/* PRODUCT IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover bg-gray-100 cursor-pointer"
        loading="lazy"
        onClick={() => navigate(`/products/${product.id}`)}
        onError={(e) => {
          const img = e.currentTarget as HTMLImageElement;
          img.onerror = null; // prevent infinite loop
          img.src =
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80";
        }}
      />

      {/* PRODUCT DETAILS */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1">
          {product.name}
        </h3>

        <p className="text-gray-500 mb-4">
          ₹{product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="btn-primary w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;