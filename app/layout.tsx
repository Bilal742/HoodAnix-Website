import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import ClientWrapper from "./ClientWrapper"; // <-- use this instead of ClientProviders
import ClientProviders from "./ClientProviders";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HoodAnix",
  description: "Explore our Hoodie Collection",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Everything inside ClientWrapper is client-side */}
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
