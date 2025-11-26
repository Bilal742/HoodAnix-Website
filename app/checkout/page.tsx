"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import themeColors from "@/app/component/themeColor";
import { toast } from "react-hot-toast";
import { FiShoppingBag } from "react-icons/fi";

const CheckoutPage = () => {
    const theme = themeColors.dark;
    const router = useRouter();
    const { cart, totalPrice, subtotal, discountAmount, discountApplied } = useCart();

    const [formData, setFormData] = useState({
        email: "",
        createAccount: false,
        firstName: "",
        lastName: "",
        company: "",
        streetAddress: "",
        streetAddress2: "",
        city: "",
        zipCode: "",
        state: "",
        country: "United States",
        phoneNumber: "",
        useShippingAsBilling: true,
    });

    const [selectedShipping, setSelectedShipping] = useState("");
    const [selectedPayment, setSelectedPayment] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validation
        if (!formData.email || !formData.firstName || !formData.lastName || 
            !formData.streetAddress || !formData.city || !formData.zipCode || 
            !formData.phoneNumber) {
            toast.error("Please fill in all required fields");
            return;
        }

        if (!selectedShipping) {
            toast.error("Please select a delivery method");
            return;
        }

        if (!selectedPayment) {
            toast.error("Please select a payment method");
            return;
        }

        toast.success("Order placed successfully!");
        router.push("/");
    };

    if (cart.length === 0) {
        return (
            <div
                style={{ background: theme.background, color: theme.text }}
                className="min-h-screen flex items-center justify-center p-4"
            >
                <div className="text-center">
                    <p className="text-xl mb-4">Your cart is empty.</p>
                    <button
                        onClick={() => router.push("/shop")}
                        className="px-6 py-3 bg-green-600 text-white rounded cursor-pointer hover:bg-green-700 transition"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div
            style={{ background: theme.background, color: theme.text }}
            className="min-h-screen p-4 sm:p-8 md:p-10 pt-32"
        >
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl sm:text-4xl mt-17 font-bold mb-8 flex items-center gap-2">
                    <FiShoppingBag /> Checkout
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Checkout Form */}
                    <div className="lg:col-span-2 space-y-8">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Contact Details */}
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h2 className="text-2xl font-bold mb-6">Contact details</h2>
                                
                                <div className="mb-4">
                                    <p className="text-sm mb-4">
                                        Already have an account?{" "}
                                        <button
                                            type="button"
                                            className="text-green-400 hover:underline cursor-pointer"
                                            onClick={() => router.push("/")}
                                        >
                                            Sign in
                                        </button>
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2">
                                        Email <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="createAccount"
                                        name="createAccount"
                                        checked={formData.createAccount}
                                        onChange={handleChange}
                                        className="cursor-pointer"
                                    />
                                    <label htmlFor="createAccount" className="text-sm cursor-pointer">
                                        I want to create account
                                    </label>
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h2 className="text-2xl font-bold mb-6">Shipping address</h2>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2">Country</label>
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                                    >
                                        <option value="United States">United States</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="India">India</option>
                                        <option value="UK">UK</option>
                                        <option value="Canada">Canada</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            First name <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500"
                                            placeholder="First name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Last name <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500"
                                            placeholder="Last name"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2">Company</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Company name (optional)"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2">
                                        Street address <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="streetAddress"
                                        value={formData.streetAddress}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="House number and street name"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2">
                                        Street address (continue)
                                    </label>
                                    <input
                                        type="text"
                                        name="streetAddress2"
                                        value={formData.streetAddress2}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="Apartment, suite, unit, etc. (optional)"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            City <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500"
                                            placeholder="City"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Zip code <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="zipCode"
                                            value={formData.zipCode}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500"
                                            placeholder="Zip code"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2">State</label>
                                    <input
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="State"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2">
                                        Phone number <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="+1 234 567 8900"
                                    />
                                </div>

                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="useShippingAsBilling"
                                        name="useShippingAsBilling"
                                        checked={formData.useShippingAsBilling}
                                        onChange={handleChange}
                                        className="cursor-pointer"
                                    />
                                    <label htmlFor="useShippingAsBilling" className="text-sm cursor-pointer">
                                        Use shipping address as billing address
                                    </label>
                                </div>
                            </div>

                            {/* Delivery Methods */}
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h2 className="text-2xl font-bold mb-6">Delivery methods</h2>
                                
                                {formData.streetAddress && formData.city && formData.zipCode ? (
                                    <div className="space-y-3">
                                        <label className="flex items-center gap-3 p-4 border border-white/20 rounded cursor-pointer hover:bg-white/5">
                                            <input
                                                type="radio"
                                                name="shipping"
                                                value="standard"
                                                checked={selectedShipping === "standard"}
                                                onChange={(e) => setSelectedShipping(e.target.value)}
                                                className="cursor-pointer"
                                            />
                                            <div className="flex-1">
                                                <span className="font-semibold">Standard Delivery</span>
                                                <p className="text-sm text-gray-400">5-7 business days - $5.00</p>
                                            </div>
                                        </label>
                                        <label className="flex items-center gap-3 p-4 border border-white/20 rounded cursor-pointer hover:bg-white/5">
                                            <input
                                                type="radio"
                                                name="shipping"
                                                value="express"
                                                checked={selectedShipping === "express"}
                                                onChange={(e) => setSelectedShipping(e.target.value)}
                                                className="cursor-pointer"
                                            />
                                            <div className="flex-1">
                                                <span className="font-semibold">Express Delivery</span>
                                                <p className="text-sm text-gray-400">2-3 business days - $15.00</p>
                                            </div>
                                        </label>
                                        <label className="flex items-center gap-3 p-4 border border-white/20 rounded cursor-pointer hover:bg-white/5">
                                            <input
                                                type="radio"
                                                name="shipping"
                                                value="overnight"
                                                checked={selectedShipping === "overnight"}
                                                onChange={(e) => setSelectedShipping(e.target.value)}
                                                className="cursor-pointer"
                                            />
                                            <div className="flex-1">
                                                <span className="font-semibold">Overnight Delivery</span>
                                                <p className="text-sm text-gray-400">Next business day - $25.00</p>
                                            </div>
                                        </label>
                                    </div>
                                ) : (
                                    <p className="text-gray-400 text-sm">
                                        Please fill in shipping address to see available shipping methods
                                    </p>
                                )}
                            </div>

                            {/* Payment Methods */}
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h2 className="text-2xl font-bold mb-6">Payment methods</h2>
                                
                                <div className="space-y-3">
                                    <label className="flex items-center gap-3 p-4 border border-white/20 rounded cursor-pointer hover:bg-white/5">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="card"
                                            checked={selectedPayment === "card"}
                                            onChange={(e) => setSelectedPayment(e.target.value)}
                                            className="cursor-pointer"
                                        />
                                        <span className="font-semibold">Credit/Debit Card</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-4 border border-white/20 rounded cursor-pointer hover:bg-white/5">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="paypal"
                                            checked={selectedPayment === "paypal"}
                                            onChange={(e) => setSelectedPayment(e.target.value)}
                                            className="cursor-pointer"
                                        />
                                        <span className="font-semibold">PayPal</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-4 border border-white/20 rounded cursor-pointer hover:bg-white/5">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="cod"
                                            checked={selectedPayment === "cod"}
                                            onChange={(e) => setSelectedPayment(e.target.value)}
                                            className="cursor-pointer"
                                        />
                                        <span className="font-semibold">Cash on Delivery</span>
                                    </label>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 px-6 py-4 rounded-lg text-white font-semibold text-lg transition-colors cursor-pointer"
                            >
                                Make payment and create order
                            </button>
                        </form>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white/5 border border-white/10 rounded-lg p-6 sticky top-24">
                            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                            
                            <div className="space-y-4 mb-6">
                                {cart.map((item: any) => (
                                    <div key={item.cartId} className="flex gap-3">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                            <p className="font-semibold text-sm">{item.name}</p>
                                            <p className="text-xs text-gray-400">
                                                Size: {item.size || "M"} × {item.quantity || 1}
                                            </p>
                                            <p className="text-sm">{item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 border-t border-white/20 pt-4">
                                <div className="flex justify-between text-sm">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                {discountApplied && (
                                    <div className="flex justify-between text-sm text-green-400">
                                        <span>Discount</span>
                                        <span>-${discountAmount.toFixed(2)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between text-xl font-bold border-t border-white/20 pt-3">
                                    <span>Total</span>
                                    <span className="text-green-400">${totalPrice.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;

