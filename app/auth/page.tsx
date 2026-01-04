"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import themeColors from "@/app/component/themeColors/themeColor";
import { toast } from "react-hot-toast";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

const AuthPage = () => {
    const theme = themeColors.dark;
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);

    // NEW STATE 🔥
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true); // START LOADING 🔥

        if (isLogin) {
            const res = await signIn("credentials", {
                redirect: false,
                email: formData.email,
                password: formData.password,
            });

            setLoading(false); // STOP LOADING

            if (res?.error) {
                toast.error("Invalid email or password!");
            } else {
                toast.success("Logged in successfully!");
                router.push("/");
            }

        } else {
            if (formData.password !== formData.confirmPassword) {
                toast.error("Passwords do not match!");
                setLoading(false);
                return;
            }
            if (formData.password.length < 6) {
                toast.error("Password must be at least 6 characters!");
                setLoading(false);
                return;
            }

            const res = await fetch("/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            setLoading(false);

            if (res.ok) {
                toast.success("Signup successful! Please login.");
                setIsLogin(true);
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
            } else {
                toast.error("Signup failed! Try again.");
            }
        }
    };

    const handleGoogleSignIn = () => {
        signIn("google", { callbackUrl: "/" });
    };

    return (
        <div
            style={{ background: theme.background, color: theme.text }}
            className="min-h-screen flex items-center justify-center p-4 pt-32"
        >
            <div className="max-w-md w-full">
                <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                    <h1 className="text-3xl font-bold mb-6 text-center">
                        {isLogin ? "Login" : "Sign Up"}
                    </h1>

                    <button
                        onClick={handleGoogleSignIn}
                        className={`w-full flex items-center justify-center gap-3 px-4 py-3 cursor-pointer bg-white 
                        text-gray-800 rounded-lg font-semibold transition mb-6 
                        ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
                        disabled={loading}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 
        0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 
        6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                            <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 
        12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 
        4 16.318 4 9.656 8.337 6.306 14.691z"/>
                            <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.182-5.238C29.211 
        35.091 26.715 36 24 36c-5.202 0-9.598-3.317-11.254-7.946l-6.522 
        5.025C9.63 39.556 16.335 44 24 44z"/>
                            <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.793 
        2.239-2.231 4.166-4.076 5.57L37.409 38.808C41.014 
        35.539 43.351 30.979 43.611 25.917z"/>
                        </svg>

                        Continue with Google
                    </button>


                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex-1 border-t border-white/20"></div>
                        <span className="text-sm text-gray-400">OR</span>
                        <div className="flex-1 border-t border-white/20"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <div className="relative">
                                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-10 pr-4 py-2 rounded bg-white/10 border border-white/20"
                                        placeholder="Your name"
                                    />
                                </div>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <div className="relative">
                                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-4 py-2 rounded bg-white/10 border border-white/20"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Password</label>
                            <div className="relative">
                                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-4 py-2 rounded bg-white/10 border border-white/20"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium mb-2">Confirm Password</label>
                                <div className="relative">
                                    <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-10 pr-4 py-2 rounded bg-white/10 border border-white/20"
                                        placeholder="Confirm password"
                                    />
                                </div>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`cursor-pointer w-full bg-green-600 px-6 py-3 rounded-lg text-white font-semibold transition 
                            ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"}`}
                        >
                            {loading
                                ? "Processing..."
                                : isLogin
                                    ? "Login"
                                    : "Sign Up"}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-400">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button
                                onClick={() => {
                                    setIsLogin(!isLogin);
                                    setFormData({
                                        name: "",
                                        email: "",
                                        password: "",
                                        confirmPassword: "",
                                    });
                                }}
                                className="cursor-pointer text-green-400 hover:underline"
                            >
                                {isLogin ? "Sign Up" : "Login"}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
