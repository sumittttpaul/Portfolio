/** Thin divider, independent of any input it sits next to. */
export default function Separator({ vertical = false, className = "" }: { vertical?: boolean; className?: string }) {
  return <div aria-hidden="true" className={`${vertical ? "h-full w-px" : "h-px w-full"} bg-white/10 ${className}`} />;
}
