import RotateIcon1 from "../../../../public/icons/rotate-1.png";
import RotateIcon2 from "../../../../public/icons/rotate-2.png";
import RotateIcon3 from "../../../../public/icons/rotate-3.png";
import RotateIcon4 from "../../../../public/icons/rotate-4.png";
import styles from "./style.module.css";
import Image from "next/image";

export default function RotateAnimation() {
  return (
    <div className="absolute left-0 top-0 flex h-[20px] w-[155px] items-center justify-start">
      <Image
        loading="eager"
        src={RotateIcon1}
        alt="first rotate icon"
        className={`${styles.firstRotateIcon} ${styles.rotateIconAnimation} z-[4]`}
      />
      <Image
        loading="eager"
        src={RotateIcon2}
        alt="second rotate icon"
        className={`${styles.secondRotateIcon} ${styles.rotateIconAnimation} z-[3]`}
      />
      <Image
        loading="eager"
        src={RotateIcon3}
        alt="third rotate icon"
        className={`${styles.thirdRotateIcon} ${styles.rotateIconAnimation} z-[2]`}
      />
      <Image
        loading="eager"
        src={RotateIcon4}
        alt="forth rotate icon"
        className={`${styles.forthRotateIcon} ${styles.rotateIconAnimation} z-[1]`}
      />
    </div>
  );
}
