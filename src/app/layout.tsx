import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FITZONE GYM | Kadıköy İstanbul",
  description:
    "FitZone Gym - Kadıköy İstanbul'daki profesyonel spor salonu. Modern ekipmanlar, uzman antrenörler ve enerjik atmosfer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${oswald.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen bg-black text-white font-[family-name:var(--font-inter)] overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
