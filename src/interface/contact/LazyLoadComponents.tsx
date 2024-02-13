"use client";

import dynamic from "next/dynamic";

const SocialHandles = dynamic(() => import("interface/contact/SocialHandles"));
const ContactToast = dynamic(() => import("interface/contact/Toast"));
const Footer = dynamic(() => import("interface/contact/Footer"));

export default function LazyLoadComponents({ device }: DeviceType) {
  return (
    <>
      <SocialHandles />
      <Footer device={device} />
      <ContactToast />
    </>
  );
}
