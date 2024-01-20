export default function TypographyAnimation({ label }: { label: string }) {
  if (label.toLocaleLowerCase() === "connect") {
    return (
      <div className="flex items-center whitespace-nowrap">
        <h1 className="text-[88px] font-[600] uppercase leading-[96px] text-white">
          C
        </h1>
        <div className="letter-moving-animation mx-1.5 h-[66px] w-[66px] rounded-[33px] border-[12px]" />
        <h1 className="text-[88px] font-[600] uppercase leading-[96px] text-white">
          nnect
        </h1>
      </div>
    );
  }

  if (label.toLocaleLowerCase() === "through") {
    return (
      <div className="margin-left-animation ml-[128px] flex items-center justify-end whitespace-nowrap">
        <h1 className="text-[88px] font-[600] uppercase leading-[96px] text-white">
          Thr
        </h1>
        <div className="letter-moving-animation-special  animation-delay-7 mx-1.5 h-[66px] w-[66px] rounded-[33px] border-[12px]" />
        <h1 className="text-[88px] font-[600] uppercase leading-[96px] text-white">
          ugh
        </h1>
      </div>
    );
  }

  if (label.toLocaleLowerCase() === "ideas") {
    return (
      <div className="flex items-center whitespace-nowrap">
        <h1 className="z-[1] text-[88px] font-[400] uppercase leading-[96px]">
          ideas
        </h1>
      </div>
    );
  }
}
