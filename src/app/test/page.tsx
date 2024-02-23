import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test • Sumeet Kumar Paul",
};

export default function Test({ searchParams }: SearchParamsType) {
  const isMobile = searchParams?.viewport === "mobile" ? true : false;
  const isDesktop = searchParams?.viewport === "desktop" ? true : false;
  const devices = { isMobile, isDesktop };

  return (
    <main className="relative flex h-screen w-screen bg-almost-black"></main>
  );
}
