"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import allProducts, { Product } from "@/app/data/products";
import themeColors from "@/app/component/themeColor";

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [highlightIndex, setHighlightIndex] = useState<number>(-1);
  const router = useRouter();
  const theme = themeColors.dark;

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    setHighlightIndex(-1);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = allProducts.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filtered);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightIndex >= 0 && highlightIndex < suggestions.length) {
        selectItem(suggestions[highlightIndex]);
      } else if (searchText.trim() !== "") {
        router.push(`/search?query=${encodeURIComponent(searchText)}`);
        setSearchText("");
        setSuggestions([]);
      }
    }
  };

  const selectItem = (item: Product) => {
    setSearchText("");
    setSuggestions([]);
    setHighlightIndex(-1);
    router.push(`/product/${item.id}`); // ✅ Redirect to product 3D detail page
  };

  // Close suggestions if click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setSuggestions([]);
        setHighlightIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full max-w-md mx-auto">
      {/* Input */}
      <input
        value={searchText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search hoodies..."
        style={{
          background: theme.background,
          color: theme.text,
        }}
        className="w-full p-3 rounded-xl placeholder-gray-400 outline-none transition-transform "
      />

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="absolute top-full mt-2 w-90 bg-white shadow-2xl rounded-xl z-50 max-h-80 overflow-y-auto">
          {suggestions.map((item, index) => (
            <div
              key={item.id + item.category}
              onClick={() => selectItem(item)}
              onMouseEnter={() => setHighlightIndex(index)}
              className={`flex items-center gap-3 p-3 cursor-pointer rounded-lg transition-all duration-200 transform ${
                highlightIndex === index
                  ? "bg-[rgb(20,55,70)] text-white scale-105"
                  : "hover:bg-gray-100 hover:scale-102"
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded shadow-sm"
              />
              <span className="font-medium">{item.name}</span>
              <span className="ml-auto text-sm text-gray-500">{item.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
