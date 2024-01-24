import MainClient from "components/Clients/MainClient";
import Landing from "interface/home/Landing";
import Preloader from "interface/home/Preloader";
import Thoughts from "interface/home/Thoughts";

export default function Home() {
  return (
    <MainClient>
      <Landing />
      <Thoughts />
      <Preloader />
    </MainClient>
  );
}
