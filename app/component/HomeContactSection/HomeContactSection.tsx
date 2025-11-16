"use client";

import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import themeColors from "../themeColor";

const HomeContactSection = () => {
    const theme = themeColors.dark;

    return (
        <section
            style={{ background: theme.background, color: theme.text }}
            className="py-24 px-8"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                <div style={{ background: theme.background, color: theme.text }} className="flex flex-col justify-center">
                    <h2 className="text-5xl font-bold leading-tight mb-6">
                        Let’s Talk
                        <span className="block ">with HoodAnix Team</span>
                    </h2>

                    <p className=" text-lg mb-10">
                        Have questions about your hoodie order, size guide, or custom design?
                        We’re here to help you anytime.
                        Your comfort, your style — our responsibility.
                    </p>

                    <div className="space-y-6">

                        <div className="flex items-center gap-4">
                            <FiPhone className=" text-3xl" />
                            <div>
                                <h4 className="text-xl font-semibold">Phone</h4>
                                <p >+92 300 1234567</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <FiMail className=" text-3xl" />
                            <div>
                                <h4 className="text-xl font-semibold">Email</h4>
                                <p >support@hoodanix.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <FiMapPin className=" text-3xl" />
                            <div>
                                <h4 className="text-xl font-semibold">Address</h4>
                                <p >Karachi, Pakistan</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="border p-10 rounded-3xl backdrop-blur-xl"
                    style={{ background: theme.background, color: theme.text }}

                >
                    <form className="space-y-8">

                        <div>
                            <label className="block mb-2">Full Name</label>
                            <input
                                type="text"
                                className="w-full p-3 border
                           rounded-xl outline-none"
                            />
                        </div>

                        <div>
                            <label className="block mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full p-3 border 
                           rounded-xl outline-none focus:border-rgb(26 ,68, 80)"
                            />
                        </div>

                        <div>
                            <label className="block mb-2">Message</label>
                            <textarea
                                className="w-full p-3 border
                           rounded-xl "
                            ></textarea>
                        </div>

                        <button
                            style={{ background: theme.text, color: theme.background }}

                            className="w-full font-semibold 
                         py-3 rounded-xl transition cursor-pointer">
                            Send Message
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default HomeContactSection;
