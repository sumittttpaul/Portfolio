import MainClientForInitial from "components/Clients/MainClient.Initial";
import Description from "interface/home/Description";
import Preloader from "interface/home/Preloader";
import Projects from "interface/home/Projects";
import Landing from "interface/home/Landing";
import ToolBox from "interface/home/ToolBox";
import SayHey from "interface/home/SayHey";

export default function Home({ searchParams }: SearchParamsType) {
  const isMobile = searchParams?.viewport === "mobile" ? true : false;
  const isDesktop = searchParams?.viewport === "desktop" ? true : false;
  const devices = { isMobile, isDesktop };
  return (
    <MainClientForInitial>
      <Preloader />
      <Landing device={devices} />
      <Description device={devices} />
      <ToolBox device={devices} />
      <Projects device={devices} />
      <SayHey device={devices} />
    </MainClientForInitial>
  );
}
