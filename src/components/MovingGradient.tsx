export default function MovingGradient() {
  return (
    <div className="absolute flex h-full w-full">
      <div className="animating-border-radius from-about-pink to-about-purple flex aspect-square h-[300px] w-[300px] bg-gradient-to-r blur-[20px]" />
    </div>
  );
}
