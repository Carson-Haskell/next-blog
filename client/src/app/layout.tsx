import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-slate-100 h-full">
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
