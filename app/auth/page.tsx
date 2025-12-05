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

        if (isLogin) {
            // ███████  LOGIN  ███████
            const res = await signIn("credentials", {
                redirect: false,
                email: formData.email,
                password: formData.password,
            });

            if (res?.error) {
                toast.error("Invalid email or password!");
            } else {
                toast.success("Logged in successfully!");
                router.push("/");
            }

        } else {
            // ███████  SIGNUP  ███████
            if (formData.password !== formData.confirmPassword) {
                toast.error("Passwords do not match!");
                return;
            }
            if (formData.password.length < 6) {
                toast.error("Password must be at least 6 characters!");
                return;
            }

            const res = await fetch("/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

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
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-100 transition mb-6 cursor-pointer"
                    >   
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.5 12c0-.75-.07-1.48-.2-2.18H12v4.13h5.1c-.22 1.16-.88 2.14-1.88 2.8v2.33h3.04c1.78-1.64 2.8-4.05 2.8-6.88z" />
                            <path fill="#34A853" d="M12 23c2.7 0 4.96-.9 6.62-2.44l-3.04-2.33c-.85.57-1.94.9-3.58.9-2.75 0-5.08-1.85-5.91-4.33H3.02v2.72C4.64 20.79 8.05 23 12 23z" />
                            <path fill="#FBBC05" d="M6.11 14.8c-.2-.58-.32-1.2-.32-1.8s.12-1.22.32-1.8v-2.72H3.02C2.36 9.35 2 10.64 2 12s.36 2.65 1.02 3.72l3.09-2.92z" />
                            <path fill="#EA4335" d="M12 4.96c1.47 0 2.77.5 3.8 1.48l2.84-2.84C16.95 2.12 14.7 1 12 1 8.05 1 4.64 3.21 3.02 6.28l3.09 2.72c.83-2.48 3.16-4.04 5.89-4.04z" />
                            <path fill="none" d="M0 0h24v24H0z" />
                        </svg>

                        Continue with Google
                    </button>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex-1 border-t border-white/20"></div>
                        <span className="text-sm text-gray-400">OR</span>
                        <div className="flex-1 border-t border-white/20"></div>
                    </div>

                    {/* FORM */}
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
                            className="w-full bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold transition"
                        >
                            {isLogin ? "Login" : "Sign Up"}
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
                                className="text-green-400 hover:underline"
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
