import Image from "next/image";

const Scale =
  "max-size:scale-100 screen-1000:scale-90 xs:scale-[.7] sm:scale-[.8] scale-[.6]";

export default function LabelTag({
  name,
  ContainerClassName,
}: {
  name: "strategy" | "creativity" | "design";
  ContainerClassName?: string;
}) {
  if (name.toLocaleLowerCase() === "strategy")
    return (
      <div
        className={`${ContainerClassName} ${Scale} relative flex items-center`}
      >
        <div className="flex items-center rounded-full border-[1.5px] border-solid border-white px-5 text-[40px] font-[600] uppercase leading-[42px] text-white xs:text-[50px] xs:leading-[55px] screen-1000:text-[70px] screen-1000:leading-[80px] max-size:text-[88px] max-size:leading-[96px]">
          <Image
            src="/icons/gear-animation-white.gif"
            width={70}
            height={70}
            draggable={false}
            alt="gear animation"
          />
          <span className="mx-2">Strategy</span>
        </div>
      </div>
    );

  if (name.toLocaleLowerCase() === "creativity")
    return (
      <div
        className={`${ContainerClassName} ${Scale} relative flex items-center`}
      >
        <div className="relative flex items-center">
          <div className="relative z-[2] flex items-center rounded-full border-[1.5px] border-solid border-white bg-black py-2 pl-28 pr-7 text-[40px] font-[600] uppercase leading-[42px] text-white xs:text-[50px] xs:leading-[55px] screen-1000:py-0 screen-1000:text-[70px] screen-1000:leading-[80px] max-size:text-[88px] max-size:leading-[96px]">
            <span>Creativity</span>
          </div>
          <div className="plane-animation-container absolute left-14 z-[3]  mt-2.5 scale-[2]">
            <svg className="plane-animation z-[3] block h-[28px] w-[26px] fill-white">
              <path d="M5.25,15.24,18.42,3.88,7.82,17l0,4.28a.77.77,0,0,0,1.36.49l3-3.68,5.65,2.25a.76.76,0,0,0,1-.58L22,.89A.77.77,0,0,0,20.85.1L.38,11.88a.76.76,0,0,0,.09,1.36Z" />
            </svg>
          </div>
        </div>
      </div>
    );

  if (name.toLocaleLowerCase() === "design")
    return (
      <div
        className={`${ContainerClassName} ${Scale} relative flex items-center`}
      >
        <div className="flex items-center rounded-full border-[1.5px] border-solid border-white px-5 text-[40px] font-[600] uppercase leading-[42px] text-white xs:text-[50px] xs:leading-[55px] screen-1000:text-[70px] screen-1000:leading-[80px] max-size:text-[88px] max-size:leading-[96px]">
          <Image
            src="/icons/design-animation-white.gif"
            width={100}
            height={75}
            draggable={false}
            alt="design animation"
          />
          <span className="mx-2">Design</span>
        </div>
      </div>
    );
}
