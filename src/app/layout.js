import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Beauty Studio | Makeup, Mehndi & Nail Art",
    template: "%s | Beauty Studio",
  },
  description:
    "Discover beautiful makeup, mehndi and nail art services for weddings, parties and special occasions. Contact us to book your appointment.",
  keywords: [
    "Makeup Artist",
    "Bridal Makeup",
    "Mehndi Artist",
    "Nail Art",
    "Beauty Services",
  ],
  openGraph: {
    title: "Beauty Studio | Makeup, Mehndi & Nail Art",
    description:
      "Beauty for your special moments. Explore our services and book an appointment.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}