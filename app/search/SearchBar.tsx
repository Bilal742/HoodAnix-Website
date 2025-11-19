"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import allProducts, { Product } from "@/app/data/products";
import themeColors from "@/app/component/themeColor";

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const router = useRouter();
  const theme = themeColors.dark;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = allProducts.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filtered);
  };

  const handleSelect = (item: Product) => {
    setSearchText("");
    setSuggestions([]);
    router.push(`/search?query=${encodeURIComponent(item.name)}`);
  };

  return (
    <div className="relative w-full">
      <input
        value={searchText}
        onChange={handleChange}
        placeholder="Search hoodies..."
        style={{ background: theme.background, color: theme.text }}
        className="p-2 rounded outline-none placeholder-gray-400 w-full"
      />

      {suggestions.length > 0 && (
        <div className="absolute mt-1 w-full bg-white shadow-lg rounded z-50 max-h-64 overflow-y-auto">
          {suggestions.map((item) => (
            <div
              key={item.id + item.category}
              onClick={() => handleSelect(item)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
