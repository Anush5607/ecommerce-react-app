import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    const matchPrice =
      maxPrice === "" || product.price <= maxPrice;

    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* PAGE TITLE */}
          <h1 className="text-3xl font-bold mb-8">
            Our Products
          </h1>

          {/* SEARCH BAR */}
          <div className="mb-10">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/3 border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* FILTERS */}
            <aside className="md:col-span-1 bg-white p-6 rounded-xl shadow-sm h-fit">
              <h2 className="font-semibold text-lg mb-6">
                Filters
              </h2>

              {/* CATEGORY */}
              <div className="mb-8">
                <p className="font-medium mb-3">
                  Category
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "All",
                    "Electronics",
                    "Fashion",
                    "Accessories",
                    "Home",
                  ].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`px-3 py-1 rounded-full text-sm border transition ${
                        category === cat
                          ? "bg-blue-600 text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* PRICE */}
              <div className="mb-6">
                <p className="font-medium mb-2">
                  Max Price
                </p>
                <input
                  type="number"
                  placeholder="Enter price"
                  value={maxPrice}
                  onChange={(e) =>
                    setMaxPrice(
                      e.target.value
                        ? Number(e.target.value)
                        : ""
                    )
                  }
                  className="w-full border px-3 py-2 rounded-lg"
                />
              </div>

              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                  setMaxPrice("");
                }}
                className="w-full bg-gray-100 py-2 rounded-lg text-sm hover:bg-gray-200"
              >
                Reset Filters
              </button>
            </aside>

            {/* PRODUCTS GRID */}
            <section className="md:col-span-3">
              {filteredProducts.length === 0 ? (
                <p className="text-gray-500">
                  No products found.
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;