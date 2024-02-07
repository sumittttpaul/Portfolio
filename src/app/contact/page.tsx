import MainClient from "components/Clients/MainClient";
import Landing from "interface/contact/Landing";
import Footer from "interface/contact/Footer";
import ContactToast from "interface/contact/Toast";

export default function Contact({ searchParams }: SearchParamsType) {
  const isMobile = searchParams?.viewport === "mobile" ? true : false;
  const isDesktop = searchParams?.viewport === "desktop" ? true : false;
  const devices = { isMobile, isDesktop };
  return (
    <MainClient>
      {/* Truck dancing animation */}
      {/* <div className="flex h-[229px] w-[350px] justify-center bg-black">
        <Image
          priority
          height={229}
          width={350}
          src={DancingTruck}
          alt="dancing truck"
        />
      </div> */}
      <Landing device={devices} />
      <Footer device={devices} />
      <ContactToast />
    </MainClient>
  );
}
