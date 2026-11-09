import Link from "next/link";
import RollText from "./RollText";

type Common = {
  children: string;
  hoverText?: string;
  className?: string;
  size?: "sm" | "md";
};

type LinkProps = Common & { href: string; external?: boolean; type?: never; onClick?: never; disabled?: never };
type ButtonProps = Common & {
  href?: never;
  external?: never;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const sizes = {
  sm: "px-[18px] py-3 text-[12px]",
  md: "px-7 py-[15px] text-[15px]",
};

/** Primary call to action: dark fill inside a slowly rotating gradient ring. */
export function GradientButton(props: LinkProps | ButtonProps) {
  const { children, hoverText, className = "", size = "sm" } = props;
  const inner = (
    <span
      className={`flex items-center justify-center rounded-full bg-ink-900 font-medium leading-none text-white ${sizes[size]}`}
    >
      <RollText text={children} hoverText={hoverText} />
    </span>
  );
  const cls = `gradient-ring group inline-flex shrink-0 select-none ${className}`;

  if ("href" in props && props.href) {
    return props.external ? (
      <a href={props.href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    ) : (
      <Link href={props.href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${cls} disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {inner}
    </button>
  );
}

/** Secondary light button (e.g. "View all works"). */
export function LightButton({
  href,
  children,
  hoverText,
  className = "",
}: {
  href: string;
  children: string;
  hoverText?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#f1efe9] to-[#cfcdc6] px-6 py-[15px] text-[15px] font-medium leading-none text-ink-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-transform duration-300 ease-expo active:scale-[0.98] ${className}`}
    >
      <RollText text={children} hoverText={hoverText} />
    </Link>
  );
}
