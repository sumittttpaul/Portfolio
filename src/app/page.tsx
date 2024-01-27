import MainClientForInitial from "components/Clients/MainClient.Initial";
import Landing from "interface/home/Landing";
import Preloader from "interface/home/Preloader";
import About from "interface/home/About";
import PhotoModal from "components/Photo/Modal";

export default function Home() {
  return (
    <MainClientForInitial>
      <Landing />
      <About />
      <Preloader />
      <PhotoModal />
    </MainClientForInitial>
  );
}
