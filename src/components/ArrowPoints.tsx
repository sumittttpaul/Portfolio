import CheckIcon from "../../public/icons/check.png";
import Image from "next/image";

export default function ArrowPoints({
  title,
  children,
}: {
  title: string;
  children: string;
}) {
  return (
    <div className="flex w-full flex-col text-black">
      <span className="relative -mb-6 h-[20px] w-[20px] min-w-[20px] xs:h-[25px] xs:w-[25px] xs:min-w-[25px] sm:-mb-7">
        <Image fill src={CheckIcon} alt="check icon" />
      </span>
      <h4 className="text-pretty indent-7 text-[1em] sm:indent-8 md:text-[1.3em]">
        <span className="mr-2 font-bold">{title}:</span>
        <span className="text-[0.9em] xs:text-[1em]">{children}</span>
      </h4>
    </div>
  );
}
