"use client";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-gradient-to-br dark:from-blue-950 dark:via-blue-800 dark:to-blue-950">
        <div className="container h-screen mx-auto mt-6 dark:text-slate-200 text-slate-900 font-sans flex flex-col justify-between">
          <SessionProvider>
            <Flowbite>
              {children}
            </Flowbite>
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
