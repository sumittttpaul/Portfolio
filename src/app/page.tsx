import MainClientForInitial from "components/Clients/MainClient.Initial";
import Description from "interface/home/Description";
import Preloader from "interface/home/Preloader";
import Projects from "interface/home/Projects";
import Landing from "interface/home/Landing";
import ToolBox from "interface/home/ToolBox";
import SayHey from "interface/home/SayHey";
import { parse } from "next-useragent";
import { headers } from "next/headers";

export default function Home() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") ?? "";
  const isMobile = parse(userAgent).isMobile;
  const isDesktop = parse(userAgent).isDesktop;
  const isTablet = parse(userAgent).isTablet;
  const devices = { isMobile, isTablet, isDesktop };
  return (
    <MainClientForInitial>
      <Preloader />
      <Landing device={devices} />
      <Description />
      <ToolBox device={devices} />
      <Projects device={devices} />
      <SayHey />
    </MainClientForInitial>
  );
}
