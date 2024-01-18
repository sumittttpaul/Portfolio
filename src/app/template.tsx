import RouteTransition from "components/RouteTransition";

export default function RootTemplate({ children }: React.PropsWithChildren) {
  return (
    <>
      {/* <RouteTransition> */}
      {children}
      {/* </RouteTransition> */}
    </>
  );
}
