export function TextStrokeAnimationWrapper({
  children,
  className,
}: {
  children: React.ReactElement[];
  className?: string;
}) {
  return (
    <h2
      className={`${className} text-stroke whitespace-nowrap text-[100px] font-[600] leading-[0]`}
    >
      {children}
    </h2>
  );
}

export function TextStrokeAnimationContent({
  children,
  disableAnimation,
}: {
  children: string;
  disableAnimation?: boolean;
}) {
  if (disableAnimation) {
    return (
      <span className="text-white transition-all duration-200 ease-in ">
        {children}
      </span>
    );
  }

  return (
    <span className="text-transparent opacity-50 transition-all duration-200 ease-in hover:text-white hover:opacity-100">
      {children}
    </span>
  );
}
