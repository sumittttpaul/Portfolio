import LandingClient from "components/Landing.Client";
import MovingText from "components/MovingText";

export default function Landing() {
  return (
    <LandingClient className="relative flex h-[calc(100vh+17vh)] bg-landing-color">
      <MovingText />
    </LandingClient>
  );
}
