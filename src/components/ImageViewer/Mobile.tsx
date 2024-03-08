"use client";

import TransformImage from "./TransformImage";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import Sheet from "components/Sheet";
import AllImage from "./AllImage";

type ScreenType = "all-image" | "transform-image";

type Props = {
  onClose: () => void;
  images: StaticImageData[];
};

export default function Mobile({ onClose, images }: Props) {
  const [screen, setScreen] = useState<ScreenType>("all-image");
  const [ImageIndex, setImageIndex] = useState(0);
  const [childHeight, setChildHeight] = useState(0);

  useEffect(() => {
    setChildHeight(window.innerHeight + 200);
  }, []);

  return (
    <Sheet
      onClose={onClose}
      height={childHeight}
      disable={screen === "transform-image" ? true : false}
    >
      {screen === "all-image" && (
        <AllImage
          images={images}
          onClose={onClose}
          setImage={(index) => {
            setImageIndex(index);
            setScreen("transform-image");
          }}
        />
      )}
      {screen === "transform-image" && (
        <TransformImage
          onBack={() => setScreen("all-image")}
          images={images}
          index={ImageIndex}
          childHeight={childHeight}
          setImageIndex={setImageIndex}
        />
      )}
    </Sheet>
  );
}
