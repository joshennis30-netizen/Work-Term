import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { client } from '@/sanity/lib/client';
import { defineQuery } from 'next-sanity'
const BANNER_QUERY = defineQuery(`*[_type == "banner"]{
    "imageUrl": image.asset->url}`)
var banner = await client.fetch(BANNER_QUERY)
for(let i=0; i<banner.length; i++){
    banner[i] = Object.values(banner[i]);
    banner[i] = JSON.stringify(banner[i]).replace(/[\[\]{}",]+/g, '');
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dicks' Fish & Chips Classic",
  description: "App for Dicks' Fish & Chips Classic",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col">
        <header className="border-white/10 px-6">
          <nav className="flex space-x-6">
            <a href="/">Home</a>
            <a href="/announcements">News</a>
            <a href="/results">Results</a>
            <a href="/photos">Photos</a>
            <a href="/archive">Previous Years</a>
            <a href="/sponsors">Sponsors</a>
            <a href="/volunteers">Volunteers</a>
            <a href="/studio">Sanity</a>
          </nav>
        </header>
        <div className="image-container" style={{backgroundImage: `url(${banner})`}}></div>
        {children}
        <footer>
          <h3 style={{ textAlign: 'right'}}>2026 - Designed by Josh Ennis</h3>
        </footer>
      </body>
    </html>
  );
}
