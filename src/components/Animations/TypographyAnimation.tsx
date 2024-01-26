const H1_className =
  "screen-1180:text-[88px] screen-1180:leading-[96px] screen-1000:text-[70px] screen-1000:leading-[80px] sm:text-[40px] text-[40px] xs:text-[50px] font-[600] uppercase leading-[42px] xs:leading-[55px] sm:leading-[50px] text-white";

const Div_className =
  "screen-1180:mx-1.5 screen-1180:h-[66px] screen-1180:w-[66px] screen-1180:border-[12px] screen-1000:h-[55px] screen-1000:w-[55px] screen-1000:border-[10px] mx-[2px] xs:mx-1 sm:h-[30px] sm:w-[30px] h-[31px] xs:h-[40px] w-[31px] xs:w-[40px] rounded-full sm:border-[6px] xs:border-[7px] border-[5.5px] border-white";

export default function TypographyAnimation({ label }: { label: string }) {
  if (label.toLocaleLowerCase() === "connect") {
    return (
      <h1 className="flex items-center justify-start whitespace-nowrap">
        <span className={H1_className}>C</span>
        <span className={`letter-moving-animation ${Div_className}`} />
        <span className={H1_className}>nnect</span>
      </h1>
    );
  }

  if (label.toLocaleLowerCase() === "through") {
    return (
      <h1 className="flex items-center justify-start whitespace-nowrap">
        <span className={H1_className}>Thr</span>
        <span
          className={`letter-moving-animation animation-delay-7 ${Div_className}`}
        />
        <span className={H1_className}>ugh</span>
      </h1>
    );
  }

  if (label.toLocaleLowerCase() === "ideas") {
    return (
      <h1 className="flex items-center whitespace-nowrap">
        <span className={H1_className}>ideas</span>
      </h1>
    );
  }
}
