"use client";

import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import themeColors from "../themeColor";
import { useRouter } from "next/navigation";

const Footer = () => {
    const theme = themeColors.dark;
    const router = useRouter();


    return (
        <footer
            style={{ background: theme.background, color: theme.text }}
            className="pt-20 pb-10 px-10 border-t border-gray-700"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                <div>
                    <h2 className="text-3xl font-bold mb-4">HoodAnix</h2>
                    <p className="text-black leading-relaxed">
                        Premium quality hoodies crafted for comfort, style, and the modern streetwear lifestyle.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <FiFacebook className="text-2xl cursor-pointer transition" />
                        <FiInstagram className="text-2xl cursor-pointer transition" />
                        <FiTwitter className="text-2xl cursor-pointer transition" />
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-3 text-black">
                        <li className='cursor-pointer' onClick={() => router.push("/")}>Home</li>
                        <li className='cursor-pointer' onClick={() => router.push("/about")}>About</li>
                        {/* <li className=" cursor-pointer" onClick={() => router.push("/Categories")}>Categories</li> */}
                        <li className='cursor-pointer' onClick={() => router.push("/shop")}>Shop</li>
                        <li className='cursor-pointer' onClick={() => router.push("/contact")}>Contact</li>
                    </ul>
                </div>

                {/* 3. CUSTOMER HELP */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Customer Support</h3>

                    <p className="flex items-center gap-3 text-black transition cursor-pointer mb-3">
                        <FiPhone /> +92 370 2675457
                    </p>

                    <p className="flex items-center gap-3 text-black transition cursor-pointer mb-3">
                        <FiMail /> bilalusman1291@gmail.com
                    </p>

                    <p className="flex items-center gap-3 text-black transition cursor-pointer">
                        <FiMapPin /> Karachi, Pakistan
                    </p>
                </div>

                {/* 4. NEWSLETTER */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
                    <p className="text-black mb-4">
                        Join our newsletter for exclusive hoodie drops & discounts.
                    </p>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-3 rounded-lg bg-white/10 border border-gray-700 outline-none mb-4 placeholder-gray-400"
                    />

                    <button
                        style={{ background: theme.text, color: theme.background }}
                        className="w-full py-3 rounded-lg font-semibold cursor-pointer transition">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* COPYRIGHT BOTTOM */}
            <div className="text-center text-gray-400 mt-16 pt-6 border-t border-gray-800">
                © {new Date().getFullYear()} HoodAnix. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
