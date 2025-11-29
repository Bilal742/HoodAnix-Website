"use client";

import React, { useRef, useState, useEffect, MouseEvent } from "react";
import { useParams } from "next/navigation";
import allProducts, { Product } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";
import themeColors from "@/app/component/themeColor";

const ProductDetailPage: React.FC = () => {
  const theme = themeColors.dark;
  const params = useParams() as { id: string };
  const { id } = params;

  const product: Product | undefined = allProducts.find(
    (prod) => prod.id.toString() === id
  );

  const { addToCart } = useCart();

  if (!product)
    return (
      <p className="text-center mt-20 text-xl">Product not found!</p>
    );

  const images: string[] = product.images ?? [product.image];

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [styleTransform, setStyleTransform] = useState<string>(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
  );
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const halfW = rect.width / 2;
    const halfH = rect.height / 2;

    const rotateY = ((x - halfW) / halfW) * 10;
    const rotateX = ((halfH - y) / halfH) * 10;

    setStyleTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
    );
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setStyleTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const filtered = allProducts.filter(
      (p) => p.category === product.category && p.id !== product.id
    );
    const randomFour = filtered.sort(() => Math.random() - 0.5).slice(0, 4);
    setRelatedProducts(randomFour);
  }, [product.category, product.id]);

  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 mt-20">
        <div className="md:w-1/2 flex flex-col gap-4">
          <div
            ref={wrapperRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsModalOpen(true)}
            className="relative rounded-xl cursor-pointer overflow-hidden mx-auto"
            style={{
              maxWidth: 700,
              width: "100%",
              transition: "transform 300ms, box-shadow 300ms",
              transform: styleTransform,
              boxShadow: isHovered
                ? "0 30px 60px rgba(0,0,0,0.5)"
                : "0 15px 40px rgba(0,0,0,0.3)",
            }}
          >
            <img
              src={images[activeIndex]}
              alt={product.name}
              className="w-full h-[520px] md:h-[560px] object-cover"
              style={{
                transform: isHovered ? "scale(1.03)" : "scale(1)",
                transition: "transform 400ms",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.25))",
              }}
            />
          </div>

          <div className="flex gap-3 mt-3 justify-center">
            {images.map((src, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`rounded-md overflow-hidden border ${index === activeIndex
                    ? "border-[rgb(20,55,70)]"
                    : "border-gray-600"
                  }`}
                style={{ width: 70, height: 70 }}
              >
                <img src={src} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col justify-center gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-[rgb(20,55,70)]">{product.description}</p>
          <p className="text-xl font-semibold">Price: {product.price}</p>

          <button
            className="bg-[rgb(20,55,70)] hover:bg-[rgb(18,50,65)] text-white py-2 px-6 rounded w-fit mt-2 cursor-pointer"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="border p-3 rounded shadow hover:shadow-xl cursor-pointer transition"
              onClick={() => (window.location.href = `/product/${item.id}`)}
            >
              <img
                src={item.image}
                className="w-full h-52 object-cover rounded mb-2"
              />
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-400">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold z-50 hover:text-gray-300"
            onClick={() => setIsModalOpen(false)}
          >
            &times;
          </button>

          <img
            src={images[activeIndex]}
            className="max-w-[90%] max-h-[90%] object-contain rounded shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
