import PhotoModal from "../Photo/Modal";
import FooterBefore from "./FooterBefore";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

export default function Footer({ device }: DeviceType) {
  const { isMobile, isTablet, isDesktop } = device;
  return (
    <>
      <footer className="overflow-hidden">
        <FooterBefore />
        {isMobile && <FooterMobile />}
        {(isDesktop || isTablet) && <FooterDesktop />}
      </footer>
      <PhotoModal />
    </>
  );
}
