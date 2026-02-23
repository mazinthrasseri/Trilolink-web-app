import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trilolink | Smart QR Reward Platform",
  description: "Trilolink is a QR-based reward and subscription management system that allows companies to manage scan-based subscriptions and reward customers seamlessly.",
  openGraph: {
    title: "Trilolink | Smart QR Reward Platform",
    description: "Generate product QR codes, manage scan-based subscriptions, and reward your customers through a seamless digital wallet.",
    url: "https://github.com/mazinthrasseri/Trilolink-web-app", // Replace with live URL later
    siteName: "Trilolink",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trilolink | Smart QR Reward Platform",
    description: "Generate product QR codes, manage scan-based subscriptions, and reward your customers through a seamless digital wallet.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-slate-900 bg-white flex flex-col min-h-screen`}>
        <Navbar />
        <div className="flex-1 pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
