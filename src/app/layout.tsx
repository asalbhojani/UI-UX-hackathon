import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import ProductlistingConditional from "@/components/productlistingConditional";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hackathon Ui - Asal",
  description: "a Web created in the UI/UX hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Header/>
        <Navbar />
        {children}
        <Footer />
        <ProductlistingConditional/>
      </body>
    </html>
  );
}
