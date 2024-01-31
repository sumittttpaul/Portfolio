import Footer from "components/Footer";
import { parse } from "next-useragent";
import { headers } from "next/headers";

export default function Test() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") ?? "";
  const isMobile = parse(userAgent).isMobile;
  const isDesktop = parse(userAgent).isDesktop;
  const isTablet = parse(userAgent).isTablet;
  const devices = { isMobile, isTablet, isDesktop };
  return (
    <div className="flex h-auto w-screen flex-col overflow-hidden bg-white">
      {/* Gradient Background */}
      {/* <div className="absolute left-32 top-[25%] block aspect-square h-[500px] min-h-[500px] w-[500px] min-w-[500px] bg-gradient-radial from-dark-pink-purple to-75%" /> */}
      {/* 3D Card */}
      {/* <ThreeDCard
        Size={{ Height: 300, Width: 400 }}
        ImageSrc={Sumit_Paul}
        BGColor="bg-white"
        className="left-[510px] top-[150px] z-[0]"
      />
      <ThreeDCard
        Size={{ Height: 300, Width: 300 }}
        ImageSrc={Sumit_Paul}
        BGColor="bg-white"
        className="left-[300px] top-[350px] z-[0]"
      />
      <ThreeDCard
        Size={{ Height: 200, Width: 200 }}
        ImageSrc={Sumit_Paul}
        BGColor="bg-white"
        className="left-[550px] top-[540px] z-[2]"
      />
      <ThreeDCard
        Size={{ Height: 300, Width: 300 }}
        ImageSrc={Sumit_Paul}
        BGColor="bg-white"
        className="left-[1020px] top-[80px] z-[0]"
      />
      <ThreeDCard
        Size={{ Height: 350, Width: 350 }}
        ImageSrc={Sumit_Paul}
        BGColor="bg-white"
        className="left-[1200px] top-[390px] z-[2]"
      /> */}
      {/* <h2 className="-mt-[max(48px,5.2vw)] ml-[2rem] block whitespace-nowrap text-[max(5.3em,9vw)] font-[900] text-black 2xl:ml-[6rem]">
        about . about . about . about
      </h2> */}
      <div className="min-h-screen w-full bg-black" />
      <div className="z-[1] grid min-h-screen w-full place-content-center bg-white text-black">
        ABC
      </div>
      <Footer device={devices} />
    </div>
  );
}
