"use client"

import React from 'react'
import themeColors from '../themeColor'

const HomeAboutSection = () => {
    const theme = themeColors.dark;

    return (
        <section style={{ background: theme.background, color: theme.text }} className="py-20 px-10">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

                <div className="lg:w-1/2 flex flex-col gap-6">
                    <h2 className="text-4xl font-bold">Streetwear Redefined</h2>
                    <p className="text-lg">
                        HoodAnix is a modern streetwear brand dedicated to providing high-quality, stylish hoodies for men, women, and unisex fashion enthusiasts.
                        Our hoodies combine comfort, premium fabrics, and trendy urban designs to make you look your best every day.
                    </p>

                    <div className="flex flex-wrap gap-8 mt-6">
                        <div className="flex flex-col ">
                            <span className="text-3xl font-bold">500+</span>
                            <span>Hoodies in Collection</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">2k+</span>
                            <span>Happy Customers</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">5</span>
                            <span>Years of Style</span>
                        </div>
                    </div>

                </div>
                <div className="lg:w-1/2">
                    <img
                        src="/Img/bg.jpg"
                        alt="HoodAnix Hoodies"
                        className="rounded-xl shadow-lg w-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default HomeAboutSection
