"use client"

import React, { useState, useEffect } from 'react'
import themeColors from '../themeColor'
import { FiMenu, FiShoppingCart, FiUser, FiX } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import { useCart } from "@/app/context/CartContext";
import SearchBar from '@/app/component/SearchBar'
import { signIn, signOut, useSession } from 'next-auth/react'
import toast from 'react-hot-toast'

const Navbar = () => {
    const theme = themeColors.dark;
    const [menuOpen, setMenuOpen] = useState(false);
    const [categoriesOpen, setCategoriesOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const router = useRouter();
    const { cart } = useCart();
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            const shown = localStorage.getItem("welcome_shown");
            if (!shown) {
                setTimeout(() => {
                    toast.success(`Welcome, ${session.user?.name}`);
                }, 300);
                localStorage.setItem("welcome_shown", "true");
            }
        }
        if (status === "unauthenticated") {
            localStorage.removeItem("welcome_shown");
        }
    }, [status, session]);

    const totalItems = cart.reduce((total: number, item: any) => total + (item.quantity || 1), 0);

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

                <li
                    className="relative"
                    onMouseEnter={() => setCategoriesOpen(true)}
                    onMouseLeave={() => setCategoriesOpen(false)}
                >
                    <span className="cursor-pointer">Categories ▼</span>

                    {categoriesOpen && (
                        <ul
                            style={{ background: theme.background }}
                            className="absolute top-full left-0 mt-1 w-48 p-2 list-none shadow-lg rounded z-50"
                            onMouseEnter={() => setCategoriesOpen(true)}
                            onMouseLeave={() => setCategoriesOpen(false)}
                        >
                            {categories.map((cat, index) => (
                                <li
                                    key={index}
                                    onClick={() => {
                                        router.push(`/category/${cat.slug}`);
                                        setCategoriesOpen(false);
                                    }}
                                    className="p-2 hover:bg-[rgb(20,55,70)] hover:text-white cursor-pointer rounded"
                                >
                                    {cat.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>

                <li className='cursor-pointer' onClick={() => router.push("/shop")}>Shop</li>
                <li className='cursor-pointer' onClick={() => router.push("/contact")}>Contact</li>
            </ul>

            <div className="flex items-center gap-5 sm:gap-4">
                <div className="hidden lg:block w-48 sm:w-60 md:w-64">
                    <SearchBar />
                </div>

                <div className="relative">
                    {session ? (
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => signOut({ callbackUrl: "/" })}
                                className="text-white px-3 py-1 bg-red-600 rounded cursor-pointer hover:bg-red-700 transition"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <button
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                                className="cursor-pointer relative"
                            >
                                <FiUser size={24} />
                            </button>

                            {userMenuOpen && (
                                <div
                                    style={{ background: theme.background }}
                                    className="absolute top-full right-0 mt-2 w-56 p-2 shadow-lg rounded z-50 border border-white/10"
                                    onMouseLeave={() => setUserMenuOpen(false)}
                                >
                                    {/* <button
                                        onClick={() => {
                                            signIn("google", { callbackUrl: "/" });
                                            setUserMenuOpen(false);
                                        }}
                                        className="w-full text-left px-4 py-2 hover:bg-white/10 rounded cursor-pointer transition mb-2"
                                    >
                                        Continue with Google
                                    </button> */}

                                    <button
                                        onClick={() => {
                                            router.push("/auth");
                                            setUserMenuOpen(false);
                                        }}
                                        className="w-full text-left px-4 py-2 hover:bg-white/10 rounded cursor-pointer transition"
                                    >
                                        Signup / Login
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>

                <div className="relative">
                    <FiShoppingCart
                        size={24}
                        className="cursor-pointer"
                        onClick={() => router.push("/cart")}
                    />
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                            {totalItems}
                        </span>
                    )}
                </div>

                <div className="lg:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
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
