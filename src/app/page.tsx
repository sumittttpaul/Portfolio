import RouteTransition from "components/RouteTransition";
import Description from "interface/Description";
import Landing from "interface/Landing";
import Preloader from "interface/Preloader";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Preloader />
      <Landing />
      <Description />
    </main>
  );
}
