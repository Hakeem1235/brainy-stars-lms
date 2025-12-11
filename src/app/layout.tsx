import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google"; // Outfit for headings (rounded), Inter for body
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brainy Stars LMS",
  description: "Islamic-Montessori Learning Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased bg-gray-50 text-slate-700`}
      >
        {children}
      </body>
    </html>
  );
}
