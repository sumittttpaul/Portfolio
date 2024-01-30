import MainClientForInitial from "components/Clients/MainClient.Initial";
import Landing from "interface/home/Landing";
import Description from "interface/home/Description";
import ToolBox from "interface/home/ToolBox";
import PhotoModal from "components/Photo/Modal";
import Preloader from "interface/home/Preloader";
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
      <Landing device={devices} />
      <Description />
      <ToolBox />
      <PhotoModal />
      <Preloader />
    </MainClientForInitial>
  );
}
