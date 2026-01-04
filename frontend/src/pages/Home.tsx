import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20 items-center">
          
          {/* Text */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Shop Smart. <br />
              Shop Premium.
            </h1>

            <p className="text-lg text-gray-300 max-w-xl">
              Discover handpicked electronics, fashion, accessories, and home
              essentials — designed for a premium shopping experience.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => navigate("/products")}
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Shop Now
              </button>

              <button
                onClick={() => navigate("/orders")}
                className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
              >
                My Orders
              </button>
            </div>
          </div>

          {/* ✅ FIXED HERO IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1555529771-35a38f43f62a?auto=format&fit=crop&w=1000&q=80"
              alt="Premium Shopping"
              className="w-full max-w-md h-auto rounded-3xl shadow-2xl ring-1 ring-white/10"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.onerror = null;
                img.src =
                  "https://dummyimage.com/600x400/000/fff&text=Premium+Shopping";
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= OFFERS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "🔥 Summer Sale",
              text: "Up to 40% off on fashion & accessories",
              bg: "from-pink-500 to-red-500",
            },
            {
              title: "🎧 Electronics Deals",
              text: "Best prices on gadgets & accessories",
              bg: "from-gray-800 to-black",
            },
            {
              title: "🏠 Home Essentials",
              text: "Upgrade your comfort this season",
              bg: "from-gray-700 to-gray-900",
            },
          ].map((offer) => (
            <div
              key={offer.title}
              className={`bg-gradient-to-r ${offer.bg} text-white rounded-2xl p-10 shadow-lg flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-3">{offer.title}</h3>
                <p className="text-white/90 mb-8">{offer.text}</p>
              </div>

              <button
                onClick={() => navigate("/products")}
                className="bg-white text-black px-6 py-2 rounded-lg font-semibold w-fit hover:bg-gray-200"
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => navigate("/products")}
              className="bg-black text-white px-12 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          {[
            { icon: "🚚", title: "Fast Delivery" },
            { icon: "🔒", title: "Secure Checkout" },
            { icon: "⭐", title: "Premium Quality" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 p-12 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-gray-600 max-w-sm mx-auto">
                Trusted service with a customer-first shopping experience.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;