import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import RouteTransitionWrapper from "utils/RouteTransitionWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { MotionOptimize } from "utils/FramerMotion";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Pacifico } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { MuiTheme } from "theme/MaterialUI";
import localFont from "next/font/local";
import Header from "components/Header";
import Footer from "components/Footer";
import "styles/globals.css";
import "styles/swiper.css";

type RouteProps = {
  params?: Record<string, string>;
  searchParams?: Record<string, string>;
  children?: React.ReactNode;
};

type NextPageProps<P extends RouteProps> = P;

type Props = NextPageProps<{
  children?: React.ReactNode;
}>;

const NeueMontreal = localFont({
  src: [
    {
      path: "../../public/fonts/NeueMontreal-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal-BoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-neue",
});

const Grtsk = localFont({
  src: [
    {
      path: "../../public/fonts/GrtskMega-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/GrtskMega-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/GrtskMega-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/GrtskMega-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/GrtskMega-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GrtskMega-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/GrtskMega-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GrtskMega-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/GrtskMega-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/GrtskMega-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/GrtskMega-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/GrtskMega-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/GrtskMega-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/GrtskMega-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-grtsk",
});

const Grtsk_Bkslnt = localFont({
  src: [
    {
      path: "../../public/fonts/GrtskMegaBkslnt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/GrtskMegaBkslnt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/GrtskMegaBkslnt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GrtskMegaBkslnt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GrtskMegaBkslnt-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/GrtskMegaBkslnt-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/GrtskMegaBkslnt-Thin.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-grtsk-bkslnt",
});

const inter = Inter({ subsets: ["latin"], display: "swap" });

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: "Sumeet Kumar Paul • Freelance Web Developer",
  description:
    "Helping brands thrive in the digital world. Delivering tailor-made digital designs and building interactive websites from scratch.",
  icons: "/favicon.ico",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const BodyClass = `${inter.className} ${NeueMontreal.variable} ${pacifico.variable} ${Grtsk.variable} ${Grtsk_Bkslnt.variable} overflow-x-hidden overflow-y-scroll m-0`;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={BodyClass}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={MuiTheme}>
            <MotionOptimize>
              <CssBaseline />
              <Header />
              <RouteTransitionWrapper>{children}</RouteTransitionWrapper>
              <Footer />
            </MotionOptimize>
          </ThemeProvider>
        </AppRouterCacheProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
