export default function TextMessage({ children }: { children: string }) {
  return (
    <p className="text-pretty text-xs text-white xs:text-sm sm:text-base">
      {children}
    </p>
  );
}
