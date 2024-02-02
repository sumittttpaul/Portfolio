import style from "./style.module.css";

export default function LargeTripleTextAnimation() {
  const FirstTextAnimation = `${style.animation} font-grtsk italic`;
  const SecondTextAnimation = `${style.animation} ${style.animationReverse} font-grtsk`;
  const ThirdTextAnimation = `${style.animation} ${style.animationDurationExtend} font-grtsk-bkslnt`;
  const Content =
    "Not Found Not Found Not Found Not Found Not Found Not Found Not Found Not Found Not Found Not Found Not Found Not Found Not Found Not Found";

  return (
    <div className="-mt-[5dvh] flex w-full flex-col">
      <Text className={FirstTextAnimation}>{Content}</Text>
      <Text className={SecondTextAnimation}>{Content}</Text>
      <Text className={ThirdTextAnimation}>{Content}</Text>
    </div>
  );
}

const Text = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <span
      className={`${className} my-[17dvh] block whitespace-nowrap text-[44dvh] font-black uppercase leading-[0] text-black/10`}
    >
      {children}
    </span>
  );
};
