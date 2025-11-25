"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "./context/CartContext";
// import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Navbar from "./component/Navbar/Navbar";

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
