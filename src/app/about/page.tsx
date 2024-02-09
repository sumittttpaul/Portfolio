import MainClient from "components/Clients/MainClient";

export default function About({ searchParams }: SearchParamsType) {
  const isMobile = searchParams?.viewport === "mobile" ? true : false;
  const isDesktop = searchParams?.viewport === "desktop" ? true : false;
  const devices = { isMobile, isDesktop };
  return (
    <MainClient
      device={devices}
      className="flex h-screen w-full items-center justify-center bg-white text-5xl text-black"
    >
      About
    </MainClient>
  );
}
