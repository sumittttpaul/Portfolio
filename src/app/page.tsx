import MainClientForInitial from "components/Clients/MainClient.Initial";
import Description from "interface/home/Description";
import StartToday from "interface/home/StartToday";
import Preloader from "interface/home/Preloader";
import Projects from "interface/home/Projects";
import Landing from "interface/home/Landing";
import ToolBox from "interface/home/ToolBox";
import SayHey from "interface/home/SayHey";
// Over all projects
import WorkImage1 from "../../public/images/work/01.png";
import WorkImage2 from "../../public/images/work/02.png";
import WorkImage3 from "../../public/images/work/03.png";
// Authentication
import AuthenticationImage01 from "../../public/images/work/authentication/01.png";
import AuthenticationImage02 from "../../public/images/work/authentication/02.png";
import AuthenticationImage03 from "../../public/images/work/authentication/03.png";
import AuthenticationImage04 from "../../public/images/work/authentication/04.png";
import AuthenticationImage05 from "../../public/images/work/authentication/05.png";
import AuthenticationImage06 from "../../public/images/work/authentication/06.png";
import AuthenticationImage07 from "../../public/images/work/authentication/07.png";
import AuthenticationImage08 from "../../public/images/work/authentication/08.png";
import AuthenticationImage09 from "../../public/images/work/authentication/09.png";
import AuthenticationImage10 from "../../public/images/work/authentication/10.png";
import AuthenticationImage11 from "../../public/images/work/authentication/11.png";
import AuthenticationImage12 from "../../public/images/work/authentication/12.png";
import AuthenticationImage13 from "../../public/images/work/authentication/13.png";
import AuthenticationImage14 from "../../public/images/work/authentication/14.png";
import AuthenticationImage15 from "../../public/images/work/authentication/15.png";
import AuthenticationImage16 from "../../public/images/work/authentication/16.png";
import AuthenticationImage17 from "../../public/images/work/authentication/17.png";
import AuthenticationImage18 from "../../public/images/work/authentication/18.png";
import AuthenticationImage19 from "../../public/images/work/authentication/19.png";
import AuthenticationImage20 from "../../public/images/work/authentication/20.png";
import AuthenticationImage21 from "../../public/images/work/authentication/21.png";
import AuthenticationImage22 from "../../public/images/work/authentication/22.png";
import AuthenticationImage23 from "../../public/images/work/authentication/23.png";
import AuthenticationImage24 from "../../public/images/work/authentication/24.png";
import AuthenticationImage25 from "../../public/images/work/authentication/25.png";
// Clothing
import ClothingImage01 from "../../public/images/work/clothing/01.png";
// Emotion
import EmotionImage01 from "../../public/images/work/emotion/01.png";
import EmotionImage02 from "../../public/images/work/emotion/02.png";
import EmotionImage03 from "../../public/images/work/emotion/03.png";
import EmotionImage04 from "../../public/images/work/emotion/04.png";
import EmotionImage05 from "../../public/images/work/emotion/05.png";
// Portfolio
import PortfolioImage01 from "../../public/images/work/portfolio/01.png";

const ClothingImages = [ClothingImage01];
const PortfolioImages = [PortfolioImage01];
const EmotionImages = [
  EmotionImage01,
  EmotionImage02,
  EmotionImage03,
  EmotionImage04,
  EmotionImage05,
];
const AuthenticationImages = [
  AuthenticationImage01,
  AuthenticationImage02,
  AuthenticationImage03,
  AuthenticationImage04,
  AuthenticationImage05,
  AuthenticationImage06,
  AuthenticationImage07,
  AuthenticationImage08,
  AuthenticationImage09,
  AuthenticationImage10,
  AuthenticationImage11,
  AuthenticationImage12,
  AuthenticationImage13,
  AuthenticationImage14,
  AuthenticationImage15,
  AuthenticationImage16,
  AuthenticationImage17,
  AuthenticationImage18,
  AuthenticationImage19,
  AuthenticationImage20,
  AuthenticationImage21,
  AuthenticationImage22,
  AuthenticationImage23,
  AuthenticationImage24,
  AuthenticationImage25,
];
const images = {
  clothing: ClothingImages,
  portfolio: PortfolioImages,
  emotion: EmotionImages,
  authentication: AuthenticationImages,
};

const projects = [
  {
    image: WorkImage1,
    imageHeight: 201,
    imageWidth: 400,
    title: "Sumeet Kumar Paul",
    description: "Portfolio",
    color: "#373737",
    date: "2024",
  },
  {
    image: WorkImage2,
    imageHeight: 225,
    imageWidth: 400,
    title: "Emotion",
    description: "E-commerce Store",
    color: "#344148",
    date: "2023",
  },
  {
    image: WorkImage3,
    imageHeight: 225,
    imageWidth: 400,
    title: "Agewear Lifestyle",
    description: "Clothing Brand",
    color: "#483C32",
    date: "2022",
  },
];

export default function Home({ searchParams }: SearchParamsType) {
  const isMobile = searchParams?.viewport === "mobile" ? true : false;
  const isDesktop = searchParams?.viewport === "desktop" ? true : false;
  const devices = { isMobile, isDesktop };
  return (
    <MainClientForInitial>
      <Preloader />
      <Landing device={devices} />
      <Description device={devices} />
      <ToolBox device={devices} />
      <Projects images={images} projects={projects} device={devices} />
      <StartToday device={devices} />
      <SayHey device={devices} />
    </MainClientForInitial>
  );
}
