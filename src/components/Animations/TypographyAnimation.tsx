const H1_className =
  "max-size:text-[88px] max-size:leading-[96px] screen-1000:text-[70px] screen-1000:leading-[80px] text-[40px] font-[600] uppercase leading-[42px] text-white";

const Div_className =
  "max-size:mx-1.5 max-size:h-[66px] max-size:w-[66px] max-size:border-[12px] screen-1000:h-[55px] screen-1000:w-[55px] screen-1000:border-[10px] mx-[2px] h-[31px] w-[31px] rounded-full sm:border-[6px] border-[5.5px] border-white";

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
