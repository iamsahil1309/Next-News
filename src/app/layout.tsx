import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import RandomNews from "@/components/RandomNews";

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
  title: "M-News",
  description:
    "Stay informed with real-time updates and breaking news from around the world. Get the latest stories, trends, and in-depth coverage, tailored to your interests.",
    keywords:['u-news',]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="px-2 md:px-20 text-white">
          <Header />
          <Navbar />
          <section className="flex justify-between">
            {children}
            <RandomNews />
            </section>
        </main>
      </body>
    </html>
  );
}
