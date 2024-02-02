import LetterChanging from "components/LetterChanging";

export default function SayHey({ device }: DeviceType) {
  const { isMobile, isDesktop } = device;
  return (
    <section className="flex h-auto w-full flex-col items-center justify-center bg-white">
      {isMobile && (
        <div className="z-[2] flex h-[35em] font-grtsk font-bold text-black">
          <LetterChanging>say hey!</LetterChanging>
        </div>
      )}
      {isDesktop && (
        <div className="z-[2] -mt-[4.75em] flex h-[clamp(23vw,50vw,100vh)] font-grtsk font-bold text-black">
          <LetterChanging>say hey!</LetterChanging>
        </div>
      )}
    </section>
  );
}
