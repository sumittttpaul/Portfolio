import Preloader from "interface/Preloader";

export default function Home() {
  return (
    <main>
      <Preloader />
      <main className="relative flex h-screen w-full items-center justify-center bg-white text-5xl font-bold text-black">
        Hello World
      </main>
    </main>
  );
}
