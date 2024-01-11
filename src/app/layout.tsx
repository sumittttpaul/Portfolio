import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { MotionOptimize } from "utils/FramerMotion";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sumeet Kumar Paul",
  description: "Portfolio by Sumit",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const BodyClass = `${inter.className} overflow-x-hidden overflow-y-scroll bg-body-color text-white m-0`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={BodyClass}>
        <MotionOptimize>{children}</MotionOptimize>
        <Analytics />
      </body>
    </html>
  );
}
