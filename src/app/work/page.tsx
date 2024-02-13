import MainClient from "components/Clients/MainClient";
import LetsConnect from "interface/work/LetsConnect";
import Projects from "interface/work/Projects";
import Landing from "interface/work/Landing";

export default function Work({ searchParams }: SearchParamsType) {
  const isMobile = searchParams?.viewport === "mobile" ? true : false;
  const isDesktop = searchParams?.viewport === "desktop" ? true : false;
  const devices = { isMobile, isDesktop };
  return (
    <MainClient device={devices}>
      <Landing device={devices} />
      <Projects device={devices} />
      <LetsConnect device={devices} />
    </MainClient>
  );
}
