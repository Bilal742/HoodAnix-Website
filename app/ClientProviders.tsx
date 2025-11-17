"use client";

import { ReactNode } from "react";
import { CartProvider } from "./context/CartContext";
import { SessionProvider } from "next-auth/react";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import { Toaster } from "react-hot-toast";

interface Props {
    children: ReactNode;
}

export default function ClientProviders({ children }: Props) {
    return (
        <SessionProvider>
            <CartProvider>
                <Navbar />
                <Toaster position="top-center" />
                {children}
                <Footer />
            </CartProvider>
        </SessionProvider>
    );
}
