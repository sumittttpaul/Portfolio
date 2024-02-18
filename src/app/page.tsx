import MainClientForInitial from "components/Clients/MainClient.Initial";
import LazyLoadComponents from "interface/home/LazyLoadComponents";
import Preloader from "interface/home/Preloader";
import Landing from "interface/home/Landing";

export default function Home({ searchParams }: SearchParamsType) {
  const isMobile = searchParams?.viewport === "mobile" ? true : false;
  const isDesktop = searchParams?.viewport === "desktop" ? true : false;
  const devices = { isMobile, isDesktop };
  return (
    <MainClientForInitial>
      <Preloader />
      <Landing device={devices} />
      <LazyLoadComponents device={devices} />
    </MainClientForInitial>
  );
}
