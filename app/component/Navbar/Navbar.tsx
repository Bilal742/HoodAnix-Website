"use client"

import React, { useState } from 'react'
import themeColors from '../themeColor'
import { FiMenu, FiShoppingCart, FiUser, FiX } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import { useCart } from "@/app/context/CartContext";


const Navbar = () => {
    const theme = themeColors.dark;
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const router = useRouter();
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        if (e.key === "Enter" && search.trim() !== "") {
            router.push(`/search?query=${search}`);
        }
    }; const { cart } = useCart();


    const categories = [
        { name: "Men", slug: "men" },
        { name: "Women", slug: "women" },
        { name: "Unisex", slug: "unisex" },
        { name: "New Arrivals", slug: "new-arrivals" },
        { name: "Limited Edition", slug: "limited-edition" },
        { name: "Best Sellers", slug: "best-sellers" }
    ];

    return (
        <nav style={{ background: theme.background, color: theme.text }} className="fixed top-0 left-0 w-full flex justify-between items-center px-40 py-4 z-50">

            <h1 className="font-bold text-2xl cursor-pointer" onClick={() => router.push("/")}>HoodAnix</h1>

            <ul className="hidden lg:flex gap-6 items-center">
                <li className='cursor-pointer' onClick={() => router.push("/")}>Home</li>
                <li className='cursor-pointer' onClick={() => router.push("/about")}>About</li>
                <li className="relative group cursor-pointer">
                    Categorys ▼
                    <ul style={{ background: theme.background }} className="absolute top-full left-0 mt-1 w-48 p-2 list-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg rounded">
                        {categories.map((cat, index) => (
                            <li
                                key={index}
                                onClick={() => router.push(`/category/${cat.slug}`)}
                                className="p-2 hover:bg-[rgb(20,55,70)] hover:text-white cursor-pointer rounded"
                            >
                                {cat.name}
                            </li>
                        ))}
                    </ul>
                </li>

                <li className='cursor-pointer' onClick={() => router.push("/shop")}>Shop</li>
                <li className='cursor-pointer' onClick={() => router.push("/contact")}>Contact</li>
            </ul>

            <div className="flex items-center gap-4">
                <input
                    style={{ background: theme.background, color: theme.text }}
                    type="text"
                    placeholder="Search hoodies…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleSearch}
                    className="p-2 rounded outline-none placeholder-gray-400 hidden lg:block"
                />
                <FiUser size={24} className="cursor-pointer" />
                <div className="relative">
                    <FiShoppingCart
                        size={24}
                        className="cursor-pointer"
                        onClick={() => router.push("/cart")}
                    />
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                            {cart.length}
                        </span>
                    )}
                </div>
                <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </div>
            </div>

            {menuOpen && (
                <ul style={{ background: theme.background }} className="absolute top-full left-0 w-full flex flex-col gap-4 p-4 lg:hidden">
                    <li className='cursor-pointer' onClick={() => router.push("/")}>Home</li>
                    <li className='cursor-pointer' onClick={() => router.push("/about")}>About</li>

                    <li className="cursor-pointer">
                        Categories
                        <ul className="pl-4 mt-2 flex flex-col gap-2">
                            {categories.map((cat, index) => (
                                <li
                                    key={index}
                                    className="cursor-pointer"
                                    onClick={() => router.push(`/category/${cat.slug}`)}
                                >
                                    {cat.name}
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li className='cursor-pointer' onClick={() => router.push("/shop")}>Shop</li>
                    <li className='cursor-pointer' onClick={() => router.push("/contact")}>Contact</li>
                </ul>
            )}

        </nav>
    )
}

export default Navbar
