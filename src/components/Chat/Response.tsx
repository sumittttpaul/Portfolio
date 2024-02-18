"use client";

import RoundedMagneticOption from "components/Magnetic/RoundedMagneticOption";

export default function ChatResponse({
  device,
  active,
  setActive,
}: {
  active: AboutOptionType;
  setActive: (value: AboutOptionType) => void;
} & DeviceType) {
  return (
    <div className="mr-5 mt-10 flex w-full items-center justify-end space-x-2 xs:space-x-2.5 sm:mr-10 sm:space-x-5">
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
      device={device}
      label={label}
      name={name}
      active={active}
      onClick={onClick}
      className={`${active ? "border-almost-black text-white" : "border-black/30 text-black"} h-auto w-auto whitespace-nowrap rounded-[2em] border border-solid px-5 py-4 text-xs font-medium transition-colors duration-200 ease-in xs:text-sm sm:px-7 sm:py-6 sm:text-base lg:rounded-[2.25em]`}
    />
  );
};
