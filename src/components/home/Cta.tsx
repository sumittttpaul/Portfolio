import { GradientButton } from "components/ui/Button";
import { Reveal, SplitText } from "components/ui/Reveal";

export default function Cta() {
  return (
    <section aria-label="Get in touch" className="relative mx-2 overflow-hidden rounded-[16px] bg-black sm:mx-4 sm:rounded-[20px]">
      <video
        className="absolute inset-0 size-full origin-[20%_20%] scale-[1.2] object-cover opacity-45"
        src="/media/showreel-alt.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_55%,transparent,rgba(0,0,0,0.85))]" />
      <div className="relative flex min-h-[560px] flex-col items-center justify-center px-[18px] py-20 text-center sm:min-h-[80svh] sm:py-28">
        <SplitText
          as="h2"
          text={"Let's build your digital\npresence together"}
          className="text-display-xl font-medium text-white"
        />
        <Reveal delay={0.2} className="mt-8 w-full sm:w-auto">
          <GradientButton href="/contact" size="md" hoverText="Say hello" className="w-full sm:w-auto [&>span]:w-full">
            Get in touch
          </GradientButton>
        </Reveal>
      </div>
    </section>
  );
}
