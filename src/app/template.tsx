import RouteTransition from "components/Animations/RouteAnimation";
import LocomotiveScrollWrapper from "utils/LocomotiveScrollWrapper";

export default function RootTemplate({ children }: React.PropsWithChildren) {
  return (
    <RouteTransition>
      <LocomotiveScrollWrapper>{children}</LocomotiveScrollWrapper>
    </RouteTransition>
  );
}
