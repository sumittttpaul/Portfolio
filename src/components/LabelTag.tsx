import Image from "next/image";

const Scale = "screen-1180:scale-100 screen-1000:scale-90 sm:scale-[.6] scale-[.7]";

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
        <div className="flex h-[70px] items-center rounded-full bg-super-dark-blue pl-10 pr-5 text-[50px] font-[600] leading-[0]  text-white underline decoration-sky-400 decoration-solid transition-all duration-200 ease-in hover:text-sky-400 hover:decoration-super-dark-blue">
          <span>Strategy</span>
          <Image
            src="/icons/gear-animation.gif"
            width={60}
            height={60}
            alt="gear animation"
            className="ml-2"
          />
        </div>
      </div>
    );

  if (name.toLocaleLowerCase() === "creativity")
    return (
      <div
        className={`${ContainerClassName} ${Scale} relative flex items-center`}
      >
        <div className="relative flex items-center">
          <div className="relative z-[2] flex h-[70px] items-center rounded-full bg-super-dark-orange pl-10 pr-[86px] text-[50px] font-[600] leading-[0]  text-white underline decoration-orange-400 decoration-solid transition-all duration-200 ease-in hover:text-orange-400 hover:decoration-super-dark-orange">
            <span>Creativity</span>
          </div>
          <div className="plane-animation-container absolute right-8 z-[3] ml-[80px] mt-2.5 scale-[1.6]">
            <svg className="plane-animation z-[3] block h-[28px] w-[26px] fill-orange-400">
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
        <div className="relative flex h-[70px] items-center rounded-full bg-super-dark-pink pl-10 pr-5 text-[50px] font-[600] leading-[0]  text-white underline decoration-fuchsia-400 decoration-solid transition-all duration-200 ease-in hover:text-fuchsia-400 hover:decoration-super-dark-pink">
          <span>Design</span>
          <Image
            src="/icons/design-animation.gif"
            width={80}
            height={80}
            alt="gear animation"
            className="ml-2"
          />
        </div>
      </div>
    );
}
