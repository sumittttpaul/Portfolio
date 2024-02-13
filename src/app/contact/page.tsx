import LazyLoadComponents from "interface/contact/LazyLoadComponents";
import MainClient from "components/Clients/MainClient";
import Landing from "interface/contact/Landing";
// import Footer from "interface/contact/Footer";
// import ContactToast from "interface/contact/Toast";
// import SocialHandles from "interface/contact/SocialHandles";

export default function Contact({ searchParams }: SearchParamsType) {
  const isMobile = searchParams?.viewport === "mobile" ? true : false;
  const isDesktop = searchParams?.viewport === "desktop" ? true : false;
  const devices = { isMobile, isDesktop };
  return (
    <MainClient device={devices}>
      <Landing device={devices} />
      <LazyLoadComponents device={devices} />
      {/* <SocialHandles />
      <Footer device={devices} />
      <ContactToast /> */}
    </MainClient>
  );
}
