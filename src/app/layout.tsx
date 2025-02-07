import type { Metadata } from "next";
import { Poppins, Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Survey App",
  description: "P2S Survey App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} ${poppins.variable} antialiased bg-black text-white gradient-overlay`}
      >
        <Header />
        <main className="z-[2] relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
