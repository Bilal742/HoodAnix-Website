"use client";

import React, { useState } from "react";
import themeColors from "@/app/component/themeColor";
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";

const CartPage = () => {
    const theme = themeColors.dark;
    const { cart, removeFromCart, clearCart, totalPrice } = useCart();
    const [shownToast, setShownToast] = useState(false);

    return (
        <div
            style={{ background: theme.background, color: theme.text }}
            className="min-h-screen p-10"
        >
            <h1 className="text-3xl font-bold mb-6 mt-7">Your Cart</h1>

            {cart.length === 0 ? (
                <p className="text-lg">Your cart is empty.</p>
            ) : (
                <div className="space-y-4">

                    {cart.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-5 border p-4 rounded"
                        >
                            <img
                                src={item.image}
                                className="w-32 h-32 rounded object-cover"
                                alt={item.name}
                            />

                            <div className="flex-1">
                                <h2 className="font-bold text-lg">{item.name}</h2>
                                <p className="text-sm">{item.price}</p>
                            </div>

                            <button
                                onClick={() => removeFromCart(item.cartId)}
                                className="bg-red-600 px-4 py-2 rounded text-white cursor-pointer"
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    <div className="mt-6 text-xl font-semibold">
                        Total: ${totalPrice}
                    </div>

                    <button
                        onClick={clearCart}
                        className="bg-gray-600 px-5 py-2 mt-4 rounded text-white cursor-pointer"
                    >
                        Clear Cart
                    </button>

                    <button
                        onClick={() => {
                            if (!shownToast) {
                                toast.success("Proceeding to checkout...");
                                setShownToast(true);
                            }
                        }}
                        className="bg-green-600 px-5 py-2 mt-4 m-3 rounded text-white cursor-pointer"
                    >
                        Proceed to Checkout
                    </button>

                </div>
            )}
        </div>
    );
};

export default CartPage;
