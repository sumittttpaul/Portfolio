import { parse } from "next-useragent";
import { headers } from "next/headers";
import Error from "interface/Error";

export default function NotFound() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") ?? "";
  const isMobile = parse(userAgent).isMobile;
  const isDesktop = parse(userAgent).isDesktop;
  const isTablet = parse(userAgent).isTablet;
  const devices = { isMobile, isTablet, isDesktop };
  return <Error device={devices} />;
}
