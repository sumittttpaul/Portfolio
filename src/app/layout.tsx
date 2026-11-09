import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Big_Shoulders_Display, Inter, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import ProgressiveBlur from "components/ui/ProgressiveBlur";
import SmoothScroll from "components/ui/SmoothScroll";
import Scrollbar from "components/ui/Scrollbar";
import ScrollTop from "components/ui/ScrollTop";
import ImageFade from "components/ui/ImageFade";
import { MotionOptimize } from "utils/FramerMotion";
import Header from "components/site/Header";
import Footer from "components/site/Footer";
import { site } from "content/site";
import "styles/globals.css";

const neue = localFont({
  src: [
    { path: "../../public/fonts/NeueMontreal-Light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/NeueMontreal-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/NeueMontreal-RegularItalic.otf", weight: "400", style: "italic" },
    { path: "../../public/fonts/NeueMontreal-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/NeueMontreal-Bold.otf", weight: "600", style: "normal" },
  ],
  variable: "--font-neue",
  display: "swap",
});

const grtsk = localFont({
  src: [{ path: "../../public/fonts/GrtskMega-Bold.ttf", weight: "700", style: "normal" }],
  variable: "--font-grtsk",
  display: "block",
});

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
// Ultra-condensed, square display face for the name wordmark
const wordmarkFont = Big_Shoulders_Display({ subsets: ["latin"], weight: ["900"], display: "block", variable: "--font-wordmark" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["400", "600"], display: "swap", variable: "--font-roboto-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} • ${site.role}`,
    template: `%s • ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: ["Senior Frontend Engineer", "Frontend Engineer", "Software Engineer", "Next.js", "React", "TypeScript", "Web Developer", "India"],
  alternates: { canonical: "/" },
  icons: "/favicon.ico",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: `${site.name} • ${site.role}`,
    description: site.description,
    images: [{ url: "/media/portfolio-cover.webp", width: 1200, height: 896, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@sumitttpaul_",
    title: `${site.name} • ${site.role}`,
    description: site.description,
    images: ["/media/portfolio-cover.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1C1D20",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={`${neue.variable} ${grtsk.variable} ${inter.variable} ${robotoMono.variable} ${wordmarkFont.variable}`}>
      <head>
        {/* Switzer (Fontshare, free licence): primary UI and display face */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600&display=swap" />
      </head>
      <body>
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-bone px-4 py-2 text-ink-900 focus:translate-y-0"
        >
          Skip to content
        </a>
        <MotionOptimize>
          <SmoothScroll />
          <Header />
          <main id="main" className="relative">
            {children}
          </main>
          <Footer />
          <ProgressiveBlur />
          <Scrollbar />
          <ScrollTop />
          <ImageFade />
        </MotionOptimize>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
