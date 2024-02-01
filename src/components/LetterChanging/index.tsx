import style from "./style.module.css";

export default function LetterChanging({ children }: { children: string }) {
  return (
    <div
      data-text={children}
      className="flex h-full w-full flex-col items-center justify-center"
    >
      <span
        className={`${style.letterChangingForSayHey} text-[max(18em,40vw)] font-[900]`}
      />
    </div>
  );
}
