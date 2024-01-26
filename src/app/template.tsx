import RouteTransition from "components/Animations/RouteAnimation";

export default function RootTemplate({ children }: React.PropsWithChildren) {
  return (
    <>
      <RouteTransition>
        {children}
      </RouteTransition>
    </>
  );
}
