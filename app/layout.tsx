import type { Metadata } from "next";
import { Duru_Sans } from "next/font/google";
import "./globals.css";
import MainNavigation from "./MainNavigation";
import Playpen from "@/common/play/playpen";

export const metadata: Metadata = {
  title: "lets conquer the world",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="ltr" lang="en">
      <body className={Playpen.className}>
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
