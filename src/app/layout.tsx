import RouteTransitionWrapper from "utils/RouteTransitionWrapper";
import { MotionOptimize } from "utils/FramerMotion";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "components/Header";
import "styles/globals.css";

type RouteProps = {
  params?: Record<string, string>;
  searchParams?: Record<string, string>;
  children?: React.ReactNode;
};

type NextPageProps<P extends RouteProps> = P;

type Props = NextPageProps<{
  children: React.ReactNode;
}>;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sumeet Kumar Paul",
  description: "Portfolio by Sumit",
  icons: "/favicon.ico",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const BodyClass = `${inter.className} overflow-x-hidden overflow-y-scroll m-0`;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={BodyClass}>
        <MotionOptimize>
          <Header />
          <RouteTransitionWrapper>{children}</RouteTransitionWrapper>
        </MotionOptimize>
        <Analytics />
      </body>
    </html>
  );
}
