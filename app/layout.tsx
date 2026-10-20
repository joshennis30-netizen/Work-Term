import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { client } from '@/sanity/lib/client';
import { defineQuery } from 'next-sanity'
const BACKGROUND_QUERY = defineQuery(`*[_type == "background"]{
    "imageUrl": image.asset->url}`)
var background = await client.fetch(BACKGROUND_QUERY)
for(let i=0; i<background.length; i++){
    background[i] = Object.values(background[i]);
    background[i] = JSON.stringify(background[i]).replace(/[\[\]{}",]+/g, '');
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
      <body className="min-h-screen flex flex-col" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
         backgroundBlendMode: 'lighten', backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
        <header className="border-white/10 px-6">
          <nav className="flex space-x-6" style={{ marginTop: '12px'}}>
            <a href="/" style={{color: 'white'}}>Home</a>
            <a href="/announcements" style={{color: 'white'}}>News</a>
            <a href="/results" style={{color: 'white'}}>Results</a>
            <a href="/photos" style={{color: 'white'}}>Photos</a>
            <div className="dropdown">
              <button className="dropbtn" style={{color: 'white'}}>Previous Years</button>
              <div className="dropdown-content">
                <a href="/archive/archive2025" style={{color: 'white'}}>2025</a>
              </div>
            </div>
            <a href="/sponsors" style={{color: 'white'}}>Sponsors</a>
            <a href="/volunteers" style={{color: 'white'}}>Volunteers</a>
            <a href="/studio" style={{color: 'white'}}>Sanity</a>
          </nav>
        </header>
        {children}
        <footer>
          <div className="footer-links">
            <a href="https://www.facebook.com/BellIslandRoadRace" style={{color: 'white'}}>Facebook</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
