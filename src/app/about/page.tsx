import MainClient from "components/Clients/MainClient";
import Explanation from "interface/about/Explanation";
import KnowMeChat from "interface/about/KnowMeChat";
import Landing from "interface/about/Landing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About • Sumeet Kumar Paul",
};

export default function About({ searchParams }: SearchParamsType) {
  const isMobile = searchParams?.viewport === "mobile" ? true : false;
  const isDesktop = searchParams?.viewport === "desktop" ? true : false;
  const devices = { isMobile, isDesktop };
  return (
    <MainClient device={devices}>
      <Landing device={devices} />
      <KnowMeChat device={devices} />
      <Explanation device={devices} />
    </MainClient>
  );
}
