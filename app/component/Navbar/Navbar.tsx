"use client"

import React, { useState } from 'react'
import themeColors from '../themeColor'
import { FiMenu, FiShoppingCart, FiUser, FiX } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import { useCart } from "@/app/context/CartContext";
import SearchBar from '../../search/SearchBar'
import { signIn, signOut, useSession } from 'next-auth/react'

const Navbar = () => {
    const theme = themeColors.dark;
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const router = useRouter();
    const { cart } = useCart();
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>Loading...</p>;
    }


    const categories = [
        { name: "Men", slug: "men" },
        { name: "Women", slug: "women" },
        { name: "Unisex", slug: "unisex" },
        { name: "New Arrivals", slug: "new-arrivals" },
        { name: "Limited Edition", slug: "limited-edition" },
        { name: "Best Sellers", slug: "best-sellers" }
    ];

    return (
        <nav
            style={{ background: theme.background, color: theme.text }}
            className="fixed top-0 left-0 w-full flex justify-between items-center px-4 sm:px-6 md:px-20 py-4 z-50 shadow-md"
        >
            <h1
                className="font-bold text-xl sm:text-2xl cursor-pointer"
                onClick={() => router.push("/")}
            >
                HoodAnix
            </h1>

            <ul className="hidden lg:flex gap-4 lg:gap-6 items-center">
                <li className='cursor-pointer' onClick={() => router.push("/")}>Home</li>
                <li className='cursor-pointer' onClick={() => router.push("/about")}>About</li>
                <li className="relative group cursor-pointer">
                    Categories ▼
                    <ul
                        style={{ background: theme.background }}
                        className="absolute top-full left-0 mt-1 w-48 p-2 list-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg rounded"
                    >
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

            <div className="flex items-center gap-5 sm:gap-4">
                <div className="hidden lg:block w-48 sm:w-60 md:w-64">
                    <SearchBar />
                </div>
                {/* <FiUser /> */}

                {session ? (
                    <>
                        <p>Welcome, {session.user?.name}</p>
                        <button onClick={() => signOut({ callbackUrl: "/" })} className="px-3 py-1 bg-red-600 rounded">
                            Logout
                        </button>
                    </>
                ) : (
                    <button onClick={() => signIn("google", { callbackUrl: "/" })} className="px-3 py-1 bg-blue-600 rounded flex items-center gap-1">
                        <FiUser /> Continue with Google
                    </button>
                )}


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
                <ul
                    style={{ background: theme.background }}
                    className="absolute top-full left-0 w-full flex flex-col gap-2 p-4 lg:hidden shadow-lg"
                >
                    <li
                        className='cursor-pointer py-1'
                        onClick={() => { router.push("/"); setMenuOpen(false); }}
                    >
                        Home
                    </li>
                    <li
                        className='cursor-pointer py-1'
                        onClick={() => { router.push("/about"); setMenuOpen(false); }}
                    >
                        About
                    </li>

                    <li className="cursor-pointer py-1">
                        Categories
                        <ul className="pl-4 mt-1 flex flex-col gap-1">
                            {categories.map((cat, index) => (
                                <li
                                    key={index}
                                    className="cursor-pointer py-1"
                                    onClick={() => { router.push(`/category/${cat.slug}`); setMenuOpen(false); }}
                                >
                                    {cat.name}
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li
                        className='cursor-pointer py-1'
                        onClick={() => { router.push("/shop"); setMenuOpen(false); }}
                    >
                        Shop
                    </li>
                    <li
                        className='cursor-pointer py-1'
                        onClick={() => { router.push("/contact"); setMenuOpen(false); }}
                    >
                        Contact
                    </li>

                    <div className="mt-2">
                        <SearchBar />
                    </div>
                </ul>
            )}

        </nav>
    )
}

export default Navbar
