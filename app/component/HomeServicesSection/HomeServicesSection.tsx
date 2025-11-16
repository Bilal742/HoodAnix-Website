"use client";

import React from "react";
import { FiTruck, FiRepeat, FiShield, FiEdit3 } from "react-icons/fi";
import { motion } from "framer-motion";
import themeColors from "../themeColor";

const services = [
  {
    title: "Premium Quality Fabric",
    description:
      "Ultra-soft, durable, and cozy fabric that feels premium with every wear.",
    icon: <FiShield size={45} />,
  },
  {
    title: "Custom Hoodie Printing",
    description:
      "High-quality digital & embroidery printing for your personalized designs.",
    icon: <FiEdit3 size={45} />,
  },
  {
    title: "Fast Nationwide Delivery",
    description:
      "Lightning-fast delivery with safe packaging all over Pakistan.",
    icon: <FiTruck size={45} />,
  },
  {
    title: "Easy Return & Exchange",
    description:
      "7-day hassle-free return and exchange policy with smooth support.",
    icon: <FiRepeat size={45} />,
  },
];

const HomeServicesSection = () => {
  const theme = themeColors.dark;

  return (
    <section
      style={{ background: theme.background, color: theme.text }}
      className="py-24 px-8"
    >
      <h2 className="text-5xl font-bold text-center mb-16 tracking-wide"
      style={{ background: theme.background, color: theme.text }}
      >
        Why Choose HoodAnix?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto text-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/10 border border-gray-700 backdrop-blur-xl 
                       p-10 rounded-3xl shadow-xl"
          >
            <div style={{ background: theme.background, color: theme.text }} className="text-center mb-6 flex items-center justify-center">
              {service.icon}
            </div>

            <h3 className="text-2xl font-semibold text-center mb-3">
              {service.title}
            </h3>

            <p className="text-black text-center text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServicesSection;
