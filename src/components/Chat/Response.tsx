"use client";

import RoundedMagneticOption from "components/Magnetic/RoundedMagneticOption";
import User_Photo from "../../../public/images/about/user_photo.png";
import Image from "next/image";

export default function ChatResponse({
  device,
  active,
  setActive,
}: {
  active: AboutOptionType;
  setActive: (value: AboutOptionType) => void;
} & DeviceType) {
  const { isMobile } = device;
  return (
    <div className="mb-10 flex w-full items-center justify-end space-x-1.5 xs:space-x-2.5 sm:mb-5 sm:space-x-5">
      <Options
        device={device}
        label="Introduction"
        name="introduction_about_button"
        active={active === "Introduction"}
        onClick={() => setActive("Introduction")}
      />
      <Options
        device={device}
        label="Education"
        name="education_about_button"
        active={active === "Education"}
        onClick={() => setActive("Education")}
      />
      <Options
        device={device}
        label="Contact"
        name="contact_about_button"
        active={active === "Contact"}
        onClick={() => setActive("Contact")}
      />
      <Image
        priority
        src={User_Photo}
        alt="Sumeet Kumar Paul"
        className="rounded-full"
        width={isMobile ? 40 : 50}
        height={isMobile ? 40 : 50}
      />
    </div>
  );
}

const Options = ({
  device,
  active,
  label,
  name,
  onClick,
}: {
  label: string;
  name?: string;
  active: boolean;
  onClick: () => void;
} & DeviceType) => {
  return (
    <RoundedMagneticOption
      name={name}
      label={label}
      active={active}
      device={device}
      onClick={onClick}
      className={`${active ? "border-almost-black text-white" : "border-black/30 text-black"} h-auto w-auto whitespace-nowrap rounded-full border border-solid px-5 py-4 text-xs font-medium transition-colors duration-200 ease-in xs:text-sm sm:rounded-[2em] sm:px-7 sm:py-6 sm:text-base lg:rounded-[2.25em]`}
    />
  );
};
