import Landing from "interface/Landing";
import Preloader from "interface/Preloader";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Preloader />
      <Landing />
      <div className="flex h-screen w-full items-center justify-center bg-white text-black">
        Description
      </div>
    </main>
  );
}
