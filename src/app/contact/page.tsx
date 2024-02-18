import LazyLoadComponents from "interface/contact/LazyLoadComponents";
import MainClient from "components/Clients/MainClient";
import Landing from "interface/contact/Landing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact • Sumeet Kumar Paul",
};

export default function Contact({ searchParams }: SearchParamsType) {
  const isMobile = searchParams?.viewport === "mobile" ? true : false;
  const isDesktop = searchParams?.viewport === "desktop" ? true : false;
  const devices = { isMobile, isDesktop };
  return (
    <MainClient device={devices}>
      <Landing device={devices} />
      <LazyLoadComponents device={devices} />
    </MainClient>
  );
}
