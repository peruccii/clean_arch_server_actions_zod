import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import { CartProvider } from "@/context/cart.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <body className={inter.className}>{children}</body>
        </CartProvider>
      </QueryClientProvider>
    </html>
  );
}
