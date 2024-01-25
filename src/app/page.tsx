import MainClient from "components/Clients/MainClient";
import Landing from "interface/home/Landing";
import Preloader from "interface/home/Preloader";
import About from "interface/home/About";
import PhotoModal from "components/Photo/Modal";

export default function Home() {
  return (
    <MainClient>
      <Landing />
      <About />
      <Preloader />
      <PhotoModal />
    </MainClient>
  );
}
