import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b">
      <div className="container flex justify-between items-center h-16">
        <h1
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          🛒 Ecommerce
        </h1>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link to="/orders" className="hover:text-blue-600">
            Orders
          </Link>
          <Link to="/cart" className="hover:text-blue-600">
            Cart ({cartCount})
          </Link>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;