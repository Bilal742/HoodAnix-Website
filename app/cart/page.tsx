"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import themeColors from "@/app/component/themeColor";
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";
import { FiX, FiPlus, FiMinus, FiShoppingBag } from "react-icons/fi";

type CartItem = {
    cartId: string;
    name: string;
    price: string;
    image: string;
    quantity?: number;
    size?: string;
};

const CartPage = () => {
    const theme = themeColors.dark;
    const router = useRouter();
    const {
        cart,
        removeFromCart,
        clearCart,
        totalPrice,
        subtotal,
        updateQuantity,
        updateSize,
        discountCode,
        discountApplied,
        discountPercent,
        discountAmount,
        applyDiscount,
        setDiscountApplied
    } = useCart();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [discountInput, setDiscountInput] = useState("");

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };

    const handleDiscountApply = () => {
        if (applyDiscount(discountInput)) {
            toast.success(`Discount ${discountPercent}% applied!`);
            setDiscountInput("");
        } else {
            toast.error("Invalid discount code!");
        }
    };

    return (
        <div
            style={{ background: theme.background, color: theme.text }}
            className="min-h-screen p-4 sm:p-8 md:p-10 pt-32"
        >
            <h1 className="text-3xl sm:text-4xl font-bold mb-8 mt-15 text-center md:text-left flex items-center gap-8">
                <FiShoppingBag /> Your Shopping Cart
            </h1>

            {cart.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-xl mb-4">Your cart is empty.</p>   
                    <p className="text-gray-400">Start shopping to add items!</p>
                </div>
            ) : (
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cart.map((item: CartItem, index: number) => {
                                const itemPrice = Number(item.price.replace("$", ""));
                                const quantity = item.quantity || 1;
                                const itemTotal = itemPrice * quantity;
                                const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
                                const currentSize = item.size || "M";

                                return (
                                    <div
                                        key={index}
                                        className="bg-white/5 border border-white/10 rounded-lg p-6 hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="flex flex-col md:flex-row gap-6">
                                            {/* Image Section */}
                                            <div
                                                className="relative w-full md:w-64 h-64 overflow-hidden rounded-lg cursor-pointer group"
                                                onClick={() => handleImageClick(item.image)}
                                            >
                                                <img
                                                    src={item.image}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                                                    alt={item.name}
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                                    <span className="opacity-0 group-hover:opacity-100 text-white font-semibold text-lg transition-opacity">
                                                        Click to View
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Details Section */}
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div>
                                                    <h2 className="font-bold text-xl mb-2">{item.name}</h2>
                                                    <p className="text-lg font-semibold text-green-400 mb-4">
                                                        {item.price} {quantity > 1 && `× ${quantity} = $${itemTotal.toFixed(2)}`}
                                                    </p>
                                                </div>

                                                {/* Size Selector */}
                                                <div className="flex items-center gap-4 mb-4">
                                                    <span className="text-sm font-medium">Size:</span>
                                                    <select
                                                        value={currentSize}
                                                        onChange={(e) => updateSize(item.cartId, e.target.value)}
                                                        className="px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                                                    >
                                                        {sizes.map((size) => (
                                                            <option key={size} value={size}>
                                                                {size}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-4 mb-4">
                                                    <span className="text-sm font-medium">Quantity:</span>
                                                    <div className="flex items-center gap-2 border border-white/20 rounded-lg">
                                                        <button
                                                            onClick={() => updateQuantity(item.cartId, quantity - 1)}
                                                            className="p-2 hover:bg-white/10 transition-colors cursor-pointer"
                                                        >
                                                            <FiMinus size={18} />
                                                        </button>
                                                        <span className="px-4 py-2 min-w-[50px] text-center font-semibold">
                                                            {quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.cartId, quantity + 1)}
                                                            className="p-2 hover:bg-white/10 transition-colors cursor-pointer"
                                                        >
                                                            <FiPlus size={18} />
                                                        </button>
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() => {
                                                        removeFromCart(item.cartId);
                                                        toast.error("Item removed from cart");
                                                    }}
                                                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white cursor-pointer transition-colors w-full md:w-auto"
                                                >
                                                    Remove Item
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6 sticky top-24">
                                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                                {/* Discount Code */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium mb-2">Discount Code</label>
                                    {!discountApplied ? (
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                value={discountInput}
                                                onChange={(e) => setDiscountInput(e.target.value)}
                                                placeholder="Enter code"
                                                className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                onKeyPress={(e) => e.key === "Enter" && handleDiscountApply()}
                                            />
                                            <button
                                                onClick={handleDiscountApply}
                                                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white transition-colors cursor-pointer"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-between p-3 bg-green-500/20 border border-green-500/50 rounded">
                                            <div>
                                                <p className="text-sm text-green-400">Code: {discountCode}</p>
                                                <p className="text-xs text-gray-400">{discountPercent}% OFF</p>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    setDiscountApplied(false);
                                                    setDiscountInput("");
                                                }}
                                                className="text-red-400 hover:text-red-500 cursor-pointer"
                                            >
                                                <FiX size={20} />
                                            </button>
                                        </div>
                                    )}
                                    <p className="text-xs text-gray-400 mt-2">
                                        Try: SAVE10, SAVE20, SAVE30, WELCOME, HOODIE50
                                    </p>
                                </div>

                                {/* Price Breakdown */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    {discountApplied && (
                                        <div className="flex justify-between text-sm text-green-400">
                                            <span>Discount ({discountPercent}%)</span>
                                            <span>-${discountAmount.toFixed(2)}</span>
                                        </div>
                                    )}
                                    <div className="border-t border-white/20 pt-3 flex justify-between text-xl font-bold">
                                        <span>Total</span>
                                        <span className="text-green-400">${totalPrice.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="space-y-3">
                                    <button
                                        onClick={() => {
                                            router.push("/checkout");
                                        }}
                                        className="w-full bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors cursor-pointer"
                                    >
                                        Proceed to Checkout
                                    </button>
                                    <button
                                        onClick={() => {
                                            clearCart();
                                            toast.success("Cart cleared");
                                        }}
                                        className="w-full bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg text-white transition-colors cursor-pointer"
                                    >
                                        Clear Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Image Modal/Slider */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 cursor-pointer"
                    >
                        <FiX size={32} />
                    </button>
                    <div className="max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImage}
                            className="w-full h-full object-contain rounded-lg"
                            alt="Product view"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
