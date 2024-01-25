const H1_className =
  "screen-1180:text-[88px] screen-1180:leading-[96px] screen-1000:text-[70px] screen-1000:leading-[80px] sm:text-[40px] text-[50px] font-[600] uppercase leading-[55px] sm:leading-[50px] text-white";

const Div_className =
  "screen-1180:mx-1.5 screen-1180:h-[66px] screen-1180:w-[66px] screen-1180:border-[12px] screen-1000:h-[55px] screen-1000:w-[55px] screen-1000:border-[10px] mx-1 sm:h-[30px] sm:w-[30px] h-[40px] w-[40px] rounded-full sm:border-[6px] border-[7px]";

export default function TypographyAnimation({ label }: { label: string }) {
  if (label.toLocaleLowerCase() === "connect") {
    return (
      <div className="flex items-center justify-start whitespace-nowrap">
        <h1 className={H1_className}>C</h1>
        <div className={`letter-moving-animation ${Div_className}`} />
        <h1 className={H1_className}>nnect</h1>
      </div>
    );
  }

  if (label.toLocaleLowerCase() === "through") {
    return (
      <div className="flex items-center justify-start whitespace-nowrap">
        <h1 className={H1_className}>Thr</h1>
        <div
          className={`letter-moving-animation animation-delay-7 ${Div_className}`}
        />
        <h1 className={H1_className}>ugh</h1>
      </div>
    );
  }

  if (label.toLocaleLowerCase() === "ideas") {
    return (
      <div className="flex items-center whitespace-nowrap">
        <h1 className={H1_className}>ideas</h1>
      </div>
    );
  }
}
