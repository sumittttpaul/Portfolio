"use client";

import { useEffect, useRef } from "react";

export default function SignatureAnimation({ device }: DeviceType) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isMobile, isDesktop } = device;

  useEffect(() => {
    const video = videoRef.current;
    setTimeout(() => {
      if (video) video.play();
    }, 2000);
  }, []);

  if (isMobile) {
    return (
      <video ref={videoRef} height={69} width={250} muted>
        <source src="/videos/signature.webm" type="video/webm" />
      </video>
    );
  }

  if (isDesktop) {
    return (
      <video ref={videoRef} height={83} width={300} muted>
        <source src="/videos/signature.webm" type="video/webm" />
      </video>
    );
  }
}
