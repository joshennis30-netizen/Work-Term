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
          <nav className="flex space-x-6" style={{ marginTop: '10px'}}>
            <a href="/" style={{color: 'white'}}>Home</a>
            <a href="/announcements" style={{color: 'white'}}>News</a>
            <div className="dropdown">
              <button className="dropbtn" style={{color: 'white'}}>Results</button>
              <div className="dropdown-content">
                <a href="/results/Elite_Men_(6_Laps)" style={{color: 'white'}}>Elite Men (6 Laps)</a>
                <a href="/results/Elite_Women_(5_Laps)" style={{color: 'white'}}>Elite Women (5 Laps)</a>
                <a href="/results/WW_Men_(4_Laps)" style={{color: 'white'}}>WW Men (4 Laps)</a>
                <a href="/results/WW_Women_(4_Laps)" style={{color: 'white'}}>WW Women (4 Laps)</a>
                <a href="/results/U19_Men_(4_Laps)" style={{color: 'white'}}>U19 Men (4 Laps)</a>
                <a href="/results/U15_Open_(2_Laps)" style={{color: 'white'}}>U15 Open (2 Laps)</a>
                <a href="/results/2_Loop_Open_(2_Laps)" style={{color: 'white'}}>2 Loop Open (2 Laps)</a>
                <a href="/results/1_Loop_Open_(1_Lap)" style={{color: 'white'}}>1 Loop Open (1 Lap)</a>
              </div>
            </div>
            <a href="/photos" style={{color: 'white'}}>Photos</a>
            <a href="/archive" style={{color: 'white'}}>Previous Years</a>
            <a href="/sponsors" style={{color: 'white'}}>Sponsors</a>
            <a href="/volunteers" style={{color: 'white'}}>Volunteers</a>
            <a href="/studio" style={{color: 'white'}}>Sanity</a>
          </nav>
        </header>
        <div className="image-container" style={{backgroundImage: `url(${banner})`}}></div>
        {children}
        <footer>
          <div className="footer-links">
            <a href="https://www.facebook.com/BellIslandRoadRace" style={{color: 'white'}}>Facebook</a>
          </div>
          <h3 style={{ textAlign: 'right', color: 'white', marginBottom: '5px', marginRight: '10px'}}>2026 - Designed by Josh Ennis</h3>
        </footer>
      </body>
    </html>
  );
}
