import Image from "next/image";
import TypographyAnimation from "components/Animations/TypographyAnimation";
import LabelTag from "components/LabelTag";
import PhotoButton from "components/Photo/Button";
import RotateIconAnimation from "components/Animations/RotateIconAnimation";
import ParallaxScrollCard from "components/ParallaxScrollCard";
import MaterialCarousel from "components/MaterialCarousel";

import ToolImage0 from "../../../public/images/tools/clerk.png";
import ToolImage1 from "../../../public/images/tools/firebase.png";
import ToolImage2 from "../../../public/images/tools/mongodb.png";
import ToolImage3 from "../../../public/images/tools/mui.png";
import ToolImage4 from "../../../public/images/tools/nextjs.png";
import ToolImage5 from "../../../public/images/tools/nextui.png";
import ToolImage6 from "../../../public/images/tools/react.png";
import ToolImage7 from "../../../public/images/tools/redux.png";
import ToolImage8 from "../../../public/images/tools/sanity.png";
import ToolImage9 from "../../../public/images/tools/stepzen.png";
import ToolImage10 from "../../../public/images/tools/stripe.png";
import ToolImage11 from "../../../public/images/tools/tailwindcss.png";
import ToolImage12 from "../../../public/images/tools/tremor.png";
import ToolImage13 from "../../../public/images/tools/typescript.png";
import ToolImage14 from "../../../public/images/tools/gsap.png";
import ToolImage15 from "../../../public/images/tools/framer.png";
import ToolImage16 from "../../../public/images/tools/swiperjs.png";
import ToolImage17 from "../../../public/images/tools/material.png";

const images = [
  ToolImage0,
  ToolImage1,
  ToolImage2,
  ToolImage3,
  ToolImage4,
  ToolImage5,
  ToolImage6,
  ToolImage7,
  ToolImage8,
  ToolImage9,
  ToolImage10,
  ToolImage11,
  ToolImage12,
  ToolImage13,
  ToolImage14,
  ToolImage15,
  ToolImage16,
  ToolImage17,
];

export default function Test() {
  return (
    <div className="flex h-auto w-screen flex-col bg-white">
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
      <div className="flex h-screen items-center justify-center bg-black">
        <video height={500} width={500} autoPlay loop muted>
          <source src="/videos/time-animation.webm" type="video/webm" />
        </video>
      </div>
      <MaterialCarousel images={images} />
      <div className="h-screen bg-white" />
      <ParallaxScrollCard images={images} />
      <div className="h-screen bg-white" />
    </div>
  );
}
