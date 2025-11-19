"use client";
import { useSearchParams } from "next/navigation";
import allProducts, { Product } from "@/app/data/products";
import themeColors from "@/app/component/themeColor";
import { useCart } from "../context/CartContext";

const SearchPage = () => {
  const params = useSearchParams();
  const query = params.get("query")?.toLowerCase() || "";
  const theme = themeColors.dark;

  const { addToCart } = useCart();

  // Filter products safely
  const filteredProducts: Product[] = allProducts.filter(
    (item) =>
      item.name.toLowerCase().includes(query) ||
      item.category?.toLowerCase().includes(query)
  );

  return (
    <div
      style={{ background: theme.background, color: theme.text }}
      className="min-h-screen p-6 pt-32"
    >
      <h1 className="text-3xl font-bold mb-6">
        {query ? `Search results for "${query}"` : "All Products"}
      </h1>

      {filteredProducts.length === 0 ? (
        <p>No hoodies found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id + (product.category ?? "unknown")}
              className="border p-4 rounded shadow hover:shadow-lg bg-white/10"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover rounded mb-2"
              />
              <h2 className="font-semibold">{product.name}</h2>
              <p>{product.price}</p>

              <button
                className="mt-3 w-full bg-[rgb(20,55,70)] text-white py-2 rounded cursor-pointer"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
