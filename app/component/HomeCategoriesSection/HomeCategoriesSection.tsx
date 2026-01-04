"use client";

import React from "react";
import themeColors from "../themeColors/themeColor";
import { FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

const categories = [
    { name: "Men", slug: "men", image: "/Category_Img/bg.jpg" },
    { name: "Women", slug: "women", image: "/Category_Img/bg1.jpg" },
    { name: "Unisex", slug: "unisex", image: "/Category_Img/bg2.jpg" },
    { name: "New Arrivals", slug: "new-arrivals", image: "/Category_Img/bg3.jpg" },
    { name: "Limited Edition", slug: "limited-edition", image: "/Category_Img/bg4.jpg" },
    { name: "Best Sellers", slug: "best-sellers", image: "/Category_Img/bg5.jpg" },
];

const HomeCategoriesSection = () => {
    const router = useRouter();
    const theme = themeColors.dark;

    return (
        <section
            style={{ background: theme.background, color: theme.text }}
            className="py-28 px-6 lg:px-10"
        >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">Shop by Category</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        onClick={() => router.push(`/category/${cat.slug}`)}
                        className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    >
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                        <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                            <span className="text-lg font-semibold">{cat.name}</span>
                            <FiChevronRight />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeCategoriesSection;
   