// import DancingTruck from "../../../public/images/dancing_truck.gif";
// import DivInViewAnimation from "components/Animations/DivInViewAnimation";
import MainClient from "components/Clients/MainClient";
// import Image from "next/image";

export default function Contact() {
  return (
    <MainClient className="flex h-screen w-full items-center justify-center bg-white text-5xl text-black">
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
      Contact
    </MainClient>
  );
}
