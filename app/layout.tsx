import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import DashboardSidebar from "@/components/ui/DashboardSidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Logistics Pro | Delivery Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${manrope.variable} bg-background text-on-background min-h-screen flex overflow-hidden font-body`}>
        <DashboardSidebar />
        <main className="flex-grow flex flex-col overflow-y-auto w-full">
          {children}
        </main>
      </body>
    </html>
  );
}