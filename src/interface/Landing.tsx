import LandingClient from "components/Landing.Client";

export default function Landing() {
  return (
    <LandingClient className="relative flex h-[calc(100vh+17vh)] bg-black">
      <div className="flex h-full w-full items-center justify-center bg-black text-white">
        Landing Page
      </div>
    </LandingClient>
  );
}
