import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Simmons Roofing Maintenance | Commercial & Residential Roofing in Indiana",
  description:
    "Simmons Roof Maintenance (SRM) provides 24-hour emergency roof service, commercial preventative maintenance, infrared moisture scanning, building envelope waterproofing, and residential roofing across Indiana. Call (765) 808-7884.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-[#111827] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
