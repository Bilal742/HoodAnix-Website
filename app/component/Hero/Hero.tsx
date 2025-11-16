"use client"

import React, { useState, useEffect } from 'react'
import themeColors from '../themeColor'
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
            className="h-[700px] flex flex-col justify-center items-center text-center px-10 transition-all duration-1000 opacity-95"
        >
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome to HoodAnix</h1>
            <p className="text-xl mb-6 drop-shadow-lg">Discover the best hoodies for Men, Women, and Unisex</p>
            <button style={{ background: theme.background, color: theme.text }} className="px-6 py-3 rounded font-semibold hover:bg-gray-200 transition cursor-pointer" onClick={()=> router.push("/shop")}>
                Shop Now
            </button>
        </section>

    )
}

export default Hero
