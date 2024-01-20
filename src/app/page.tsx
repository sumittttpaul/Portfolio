import MainClient from "components/Clients/MainClient";
import Landing from "interface/Landing";
import Preloader from "interface/Preloader";

export default function Home() {
  return (
    <MainClient>
      <Preloader />
      <Landing />
      <section className="flex h-screen w-full items-center justify-center bg-white text-black">
        Description
      </section>
    </MainClient>
  );
}
