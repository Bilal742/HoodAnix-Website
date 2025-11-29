"use client"

import React from 'react'
import themeColors from '../component/themeColor';
import { useRouter } from 'next/navigation';

const About = () => {
  const theme = themeColors.dark;
  const router = useRouter();

  return (
    <section style={{ background: theme.background, color: theme.text }} className="min-h-96 flex flex-col items-center px-10 py-30">
      <h1 className="text-5xl font-bold mb-6 text-center">About HoodAnix</h1>

      <p className="text-xl mb-12 text-center max-w-3xl">
        HoodAnix is a modern streetwear brand bringing stylish, high-quality hoodies to men, women, and unisex fashion lovers.
        We are passionate about creating urban, trendy designs with comfort and style in mind. Our hoodies are made from premium fabrics
        and crafted to keep you looking fresh while feeling comfortable. Join the HoodAnix community and embrace your urban lifestyle.
      </p>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl">
        <div style={{ background: theme.background, color: theme.text }} className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Premium Quality</h2>
          <p>Our hoodies are made from the finest fabrics for ultimate comfort and durability.</p>
        </div>

        <div style={{ background: theme.background, color: theme.text }} className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Trendy Designs</h2>
          <p>Stay ahead of the fashion curve with our urban streetwear inspired hoodie collection.</p>
        </div>

        <div style={{ background: theme.background, color: theme.text }} className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Unisex Style</h2>
          <p>Designed to suit everyone, our hoodies are perfect for men, women, and anyone who loves streetwear.</p>
        </div>
      </div>

      <button style={{ background: theme.text, color: theme.background }} className="mt-16 px-8 py-3 rounded font-semibold hover:bg-gray-200 transition cursor-pointer" onClick={() => router.push(`/shop`)}>
        Explore Our Collection
      </button>
    </section>
  )
}

export default About
