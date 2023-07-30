'use client'
import "./globals.css";
import {  SessionProvider } from 'next-auth/react'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto mt-6 dark:text-slate-200 text-slate-900 font-sans">
        <SessionProvider>
          {children}
        </SessionProvider>
        </div>
      </body>
    </html>
  );
}
