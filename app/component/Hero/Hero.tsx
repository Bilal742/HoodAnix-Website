"use client"

import React, { useState, useEffect } from 'react'
import themeColors from '../themeColors/themeColor'
import { useRouter } from 'next/navigation';

const Hero = () => {
    const theme = themeColors.dark;
    const router = useRouter();
    
    const images = [
        '/Slider_Images/bg.jpg',
        '/Slider_Images/bg2.jpg',
        '/Slider_Images/bg4.jpg'
    ]

    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length)
        }, 4000)
  
        return () => clearInterval(interval)
    }, [])

    return (
        <section
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${images[current]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: theme.background
            }}
            className="h-[500px] sm:h-[600px] md:h-[700px] flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 transition-all duration-1000 opacity-95"
        >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                Welcome to HoodAnix
            </h1>
            <p className="text-1xl sm:text-xl md:text-2xl mb-6 drop-shadow-lg max-w-2xl">
                Discover the best hoodies for Men, Women, and Unisex
            </p>
            <button
                style={{ background: theme.background, color: theme.text }}
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded font-semibold hover:bg-gray-200 transition cursor-pointer text-sm sm:text-base md:text-lg"
                onClick={() => router.push("/shop")}
            >
                Shop Now
            </button>
        </section>
    )
}

export default Hero
