"use client";

import React, { useState } from "react";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMapPin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import themeColors from "../themeColor";
import { useRouter } from "next/navigation";

const Footer = () => {
  const theme = themeColors.dark;
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ FIXED handleChange with TypeScript-friendly event type
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message. Try again.");
    }
  };

  return (
    <footer
      style={{ background: theme.background, color: theme.text }}
      className="pt-20 pb-10 px-10 border-t border-gray-700"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold mb-4">HoodAnix</h2>
          <p className="text-black leading-relaxed">
            Premium quality hoodies crafted for comfort, style, and the modern
            streetwear lifestyle.
          </p>

          <div className="flex gap-4 mt-6">
            <FiFacebook className="text-2xl cursor-pointer transition" />
            <FiInstagram className="text-2xl cursor-pointer transition" />
            <FiTwitter className="text-2xl cursor-pointer transition" />
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-black">
            <li className="cursor-pointer" onClick={() => router.push("/")}>
              Home
            </li>
            <li className="cursor-pointer" onClick={() => router.push("/about")}>
              About
            </li>
            <li className="cursor-pointer" onClick={() => router.push("/shop")}>
              Shop
            </li>
            <li
              className="cursor-pointer"
              onClick={() => router.push("/contact")}
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Customer Support</h3>

          <p className="flex items-center gap-3 text-black mb-3 cursor-pointer">
            <FiPhone /> +92 370 2675457
          </p>

          <p className="flex items-center gap-3 text-black mb-3 cursor-pointer">
            <FiMail /> bilalusman1291@gmail.com
          </p>

          <p className="flex items-center gap-3 text-black cursor-pointer">
            <FiMapPin /> Karachi, Pakistan
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-black mb-4">
            Join our newsletter for exclusive hoodie drops & discounts.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-white/10 border border-gray-700 outline-none mb-4 placeholder-gray-400"
            />

            <button
              style={{ background: theme.text, color: theme.background }}
              className="w-full py-3 rounded-lg font-semibold cursor-pointer transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-16 pt-6 border-t border-gray-800">
        © {new Date().getFullYear()} HoodAnix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
