"use client"

import React from "react"
import { useParams } from "next/navigation"
import themeColors from "@/app/component/themeColor"
import { useCart } from "@/app/context/CartContext"

const allProducts = [
    // men
    { id: 1, name: "Black Minimalist Hoodie", category: "men", price: "$150", image: "/Men_Hoodies_Collections/men1.jpg" },
    { id: 2, name: "urban streetwear style, vibrant red ", category: "men", price: "$240", image: "/Men_Hoodies_Collections/men2.jpg" },
    { id: 3, name: "Urban Streetwear Navy Hoodie", category: "men", price: "$140", image: "/Men_Hoodies_Collections/men3.jpg" },
    { id: 4, name: "Forest Green Sporty Hoodie", category: "men", price: "$45", image: "/Men_Hoodies_Collections/men4.jpg" },
    { id: 5, name: "Charcoal Grey Casual Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men5.jpg" },
    { id: 6, name: "Olive Green Techwear Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men6.jpg" },
    { id: 7, name: "Red Urban Street Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men7.jpg" },
    { id: 8, name: "Blue Gradient Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men8.jpg" },
    { id: 9, name: "Yellow Bold Logo Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men9.jpg" },
    { id: 10, name: "Maroon Classic Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men10.jpg" },
    { id: 11, name: "White Clean Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men11.jpg" },
    { id: 12, name: "Orange Vibrant Hoodie", category: "men", price: "$450", image: "/Men_Hoodies_Collections/men12.jpg" },

    // women
    { id: 1, name: "Soft Pink Aesthetic Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg1.jpg" },
    { id: 2, name: "White Clean Minimal Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg2.jpg" },
    { id: 3, name: "Lavender Cozy Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg3.jpg" },
    { id: 4, name: "Black Elegant Fashion Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg4.jpg" },
    { id: 5, name: "Beige Neutral Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg5.jpg" },
    { id: 6, name: "Sky Blue Casual Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg6.jpg" },
    { id: 7, name: "Red Bold Vibrant Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg7.jpg" },
    { id: 8, name: "Purple Gradient Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg8.jpg" },
    { id: 9, name: "Brown Coffee-Tone Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg9.jpg" },
    { id: 10, name: "White & Black Contrast Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg10.jpg" },
    { id: 11, name: "Retro 90s Color Splash Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg11.jpg" },
    { id: 12, name: "90s Neon Street Hoodie", category: "women", price: "$50", image: "/Women_Hoodies_Collections/bg12.jpg" },

    // unisex
    { id: 1, name: "Minimalist Unisex Black Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg1.jpg" },
    { id: 2, name: "", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg10.jpg" },
    { id: 3, name: "Futuristic Techwear Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg3.jpg" },
    { id: 4, name: "Gradient Colorflow Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg4.jpg" },
    { id: 5, name: "Retro Street Graphic Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg5.jpg" },
    { id: 6, name: "Classic White Clean Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg6.jpg" },
    { id: 7, name: "Classic White Clean Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg7.jpg" },
    { id: 8, name: "Urban Camouflage Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg8.jpg" },
    { id: 9, name: "rainbow swirl pattern, HoodAnix", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg9.jpg" },
    { id: 10, name: "Oversized Urban Street Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg2.jpg" },
    { id: 11, name: "Premium Velvet Texture Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg11.jpg" },
    { id: 12, name: "Two-Tone Split Hoodie", category: "unisex", price: "$48", image: "/Unisex_Hoodies_Collections/bg12.jpg" },

    // new-arrivals
    { id: 4, name: "New Arrivals Hoodie 1", category: "new-arrivals", price: "$48", image: "/Men_Hoodies_Collections/men12.jpg" },

















    // limited-edition
    { id: 5, name: "Unisex Hoodie 1", category: "limited-edition", price: "$48", image: "/Men_Hoodies_Collections/men12.jpg" },

    // best-sellers
    { id: 5, name: "Unisex Hoodie 1", category: "best-sellers", price: "$48", image: "/Men_Hoodies_Collections/men12.jpg" },


]

const CategoryPage = () => {
    const theme = themeColors.dark
    const params = useParams();
    const slug = params.slug;

    const products = allProducts.filter(prod => prod.category === slug);
    const { addToCart } = useCart();


    return (
        <div style={{ background: theme.background, color: theme.text, minHeight: "100vh", padding: "40px" }}>
            <h1 className="text-3xl font-bold mb-6">
                {slug} Hoodies
            </h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.length === 0 ? (
                    <p>No products found in this category.</p>
                ) : (
                    products.map(prod => (
                        <div key={prod.id} className="border p-3 rounded shadow hover:shadow-lg">
                            <img src={prod.image} alt={prod.name} className="w-full h-96 object-cover rounded mb-2" />
                            <h2 className="font-semibold">{prod.name}</h2>
                            <p>{prod.price}</p>
                            <button
                                className="mt-3 w-full bg-[rgb(20,55,70)] text-white py-2 rounded cursor-pointer"
                                onClick={() => addToCart(prod)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default CategoryPage
