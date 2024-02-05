import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

const SumitPhoto = "https://sumitttpaul.vercel.app/images/sumit_photo.png";
const Facebook =
  "https://sumitttpaul.vercel.app/images/socials/facebook_round_white.png";
const Twitter =
  "https://sumitttpaul.vercel.app/images/socials/twitter_round_white.png";
const Snapchat =
  "https://sumitttpaul.vercel.app/images/socials/snapchat_round_white.png";
const Thread =
  "https://sumitttpaul.vercel.app/images/socials/thread_round_white.png";
const Linkedin =
  "https://sumitttpaul.vercel.app/images/socials/linkedin_round_white.png";
const Instagram =
  "https://sumitttpaul.vercel.app/images/socials/instagram_round_white.png";

const WebsiteLink = "https://sumitttpaul.vercel.app/";
const FacebookLink = "";
const TwitterLink = "";
const SnapChatLink = "";
const ThreadLink = "";
const LinkedinLink = "";
const InstagramLink = "";

export default function EmailTemplate({
  name,
  email,
  company,
  service,
  description,
}: DetailsType) {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>Conformation Email</Preview>
        <Body className="relative flex h-auto w-full flex-col items-center justify-center bg-black p-5 text-white sm:p-10">
          <Container className="relative mx-auto flex h-auto w-full flex-col items-center justify-center">
            <Link
              href={WebsiteLink}
              className="group flex h-[50px] cursor-pointer items-center justify-center px-2.5"
            >
              <span className="relative text-sm font-bold text-white xs:text-base sm:text-lg sm:font-[300]">
                ©
              </span>
              <span className="relative ml-[4px] flex h-[28px] items-center overflow-hidden whitespace-nowrap xs:ml-[5px] sm:items-end sm:pr-0">
                <span className="elative w-full text-center text-[13px] font-bold text-white xs:text-[15px] sm:text-[17px] sm:font-[500]">
                  <span>Code by Sumeet</span>
                  <span className="absolute left-[139px]"> Kumar Paul</span>
                </span>
              </span>
            </Link>
            <Container className="flex w-full justify-center">
              <Heading
                as="h1"
                className="mt-[1em] text-2xl font-bold sm:text-4xl"
              >
                Thank You for Responding!
              </Heading>
            </Container>
            <Container className="flex w-full justify-center">
              <Text className="mt-[1em] text-sm xs:text-base sm:text-lg">
                Sumeet will get back to you very soon.
              </Text>
            </Container>
            <Container className="flex w-full justify-center">
              <Link
                href={WebsiteLink}
                className="mt-[0.5em] flex items-center rounded-full border border-solid border-white/50 py-1 pl-1 pr-4 sm:mt-[1em]"
              >
                <span className="relative mr-2 h-8 w-8 overflow-hidden rounded-full">
                  <Img
                    sizes="(min-width: 0px) 32px"
                    className="overflow-hidden rounded-full"
                    src={SumitPhoto}
                    alt="sumit photo"
                    height="100%"
                    width="100%"
                  />
                </span>
                <Text className="text-sm leading-[0] text-white sm:text-[15px]">
                  <span>sumitttpaul.vercel.app</span>
                  <span></span>
                </Text>
              </Link>
            </Container>
            <Container className="flex w-full justify-center">
              <Text className="mt-[4em] text-[13px] font-semibold uppercase text-white/50 xs:text-lg sm:mt-[5em] sm:text-sm">
                Your Response
              </Text>
            </Container>
            <Container className="flex w-full flex-col">
              <span className="-ml-5 mt-[1.5em] flex h-px w-full bg-white/20 sm:ml-0 sm:w-full" />
              <span className="relative mx-[1em] mt-[1.5em] flex space-x-5 sm:mx-[3em] md:mt-[3em] md:space-x-10">
                <Text className="mt-0.5 text-[11px] font-bold leading-[0] text-white/50 sm:text-[14px]">
                  01
                </Text>
                <span className="-mt-[0.8em] flex w-full flex-col sm:-mt-[1.5em]">
                  <Text className="text-[15px] leading-[0] text-white/50 sm:text-xl">
                    What&apos;s your name?
                  </Text>
                  <Text className="mb-[0.5em] mt-[1em] w-full text-[14px] font-medium leading-[0] text-white sm:-mt-[0.25em] sm:mb-[1em] sm:text-xl">
                    {name}
                  </Text>
                </span>
              </span>
              <span className="-ml-5 mt-[1.5em] flex h-px w-full bg-white/20 sm:ml-0 sm:w-full" />
              <span className="relative mx-[1em] mt-[1.5em] flex space-x-5 sm:mx-[3em] md:mt-[3em] md:space-x-10">
                <Text className="mt-0.5 text-[11px] font-bold leading-[0] text-white/50 sm:text-[14px]">
                  02
                </Text>
                <span className="-mt-[0.8em] flex w-full flex-col sm:-mt-[1.5em]">
                  <Text className="text-[15px] leading-[0] text-white/50 sm:text-xl">
                    What&apos;s your email?
                  </Text>
                  <Text className="mb-[0.5em] mt-[1em] w-full text-[14px] font-medium leading-[0] text-white sm:-mt-[0.25em] sm:mb-[1em] sm:text-xl">
                    {email}
                  </Text>
                </span>
              </span>
              <span className="-ml-5 mt-[1.5em] flex h-px w-full bg-white/20 sm:ml-0 sm:w-full" />
              <span className="relative mx-[1em] mt-[1.5em] flex space-x-5 sm:mx-[3em] md:mt-[3em] md:space-x-10">
                <Text className="mt-0.5 text-[11px] font-bold leading-[0] text-white/50 sm:text-[14px]">
                  03
                </Text>
                <span className="-mt-[0.8em] flex w-full flex-col sm:-mt-[1.5em]">
                  <Text className="text-[15px] leading-[0] text-white/50 sm:text-xl">
                    What&apos;s the name of your organization?
                  </Text>
                  <Text className="mb-[0.5em] mt-[1em] w-full text-[14px] font-medium leading-[0] text-white sm:-mt-[0.25em] sm:mb-[1em] sm:text-xl">
                    {company}
                  </Text>
                </span>
              </span>
              <span className="-ml-5 mt-[1.5em] flex h-px w-full bg-white/20 sm:ml-0 sm:w-full" />
              <span className="relative mx-[1em] mt-[1.5em] flex space-x-5 sm:mx-[3em] md:mt-[3em] md:space-x-10">
                <Text className="mt-0.5 text-[11px] font-bold leading-[0] text-white/50 sm:text-[14px]">
                  04
                </Text>
                <span className="-mt-[0.8em] flex w-full flex-col sm:-mt-[1.5em]">
                  <Text className="text-[15px] leading-[0] text-white/50 sm:text-xl">
                    What services are you looking for?
                  </Text>
                  <Text className="mb-[0.5em] mt-[1em] w-full text-[14px] font-medium leading-[0] text-white sm:-mt-[0.25em] sm:mb-[1em] sm:text-xl">
                    {service}
                  </Text>
                </span>
              </span>
              <span className="-ml-5 mt-[1.5em] flex h-px w-full bg-white/20 sm:ml-0 sm:w-full" />
              <span className="relative mx-[1em] mt-[1.5em] flex space-x-5 sm:mx-[3em] md:mt-[3em] md:space-x-10">
                <Text className="mt-0.5 text-[11px] font-bold leading-[0] text-white/50 sm:text-[14px]">
                  05
                </Text>
                <span className="-mt-[0.8em] flex w-full flex-col sm:-mt-[1.5em]">
                  <Text className="text-[15px] leading-[0] text-white/50 sm:text-xl">
                    Your message
                  </Text>
                  <Text className="mb-[0.5em] mt-[1em] w-full text-[14px] font-medium leading-[0] text-white sm:-mt-[0.25em] sm:mb-[1em] sm:text-xl">
                    {description}
                  </Text>
                </span>
              </span>
              <span className="-ml-5 mt-[1.5em] flex h-px w-full bg-white/20 sm:ml-0 sm:w-full" />
            </Container>
            <Container className="flex w-full justify-center">
              <Text className="mt-[4em] text-[13px] font-semibold uppercase text-white/50 xs:text-lg sm:mt-[5em] sm:text-sm">
                Social Handles
              </Text>
            </Container>
            <span className="mx-auto mt-[1em] flex w-full max-w-[250px] justify-between sm:max-w-[300px]">
              <Link
                href={FacebookLink}
                className="block aspect-square min-h-[30px] min-w-[30px]"
              >
                <Img
                  height={30}
                  width={30}
                  src={Facebook}
                  alt="Facebook logo"
                />
              </Link>
              <Link
                href={InstagramLink}
                className="block aspect-square min-h-[30px] min-w-[30px]"
              >
                <Img
                  height={30}
                  width={30}
                  src={Instagram}
                  alt="Instagram logo"
                />
              </Link>
              <Link
                href={LinkedinLink}
                className="block aspect-square min-h-[30px] min-w-[30px]"
              >
                <Img
                  height={30}
                  width={30}
                  src={Linkedin}
                  alt="Linkedin logo"
                />
              </Link>
              <Link
                href={TwitterLink}
                className="block aspect-square min-h-[30px] min-w-[30px]"
              >
                <Img height={30} width={30} src={Twitter} alt="Twitter logo" />
              </Link>
              <Link
                href={SnapChatLink}
                className="block aspect-square min-h-[30px] min-w-[30px]"
              >
                <Img
                  height={30}
                  width={30}
                  src={Snapchat}
                  alt="Snapchat logo"
                />
              </Link>
              <Link
                href={ThreadLink}
                className="block aspect-square min-h-[30px] min-w-[30px]"
              >
                <Img height={30} width={30} src={Thread} alt="Thread logo" />
              </Link>
            </span>
            <Container className="flex w-full justify-center">
              <Text className="mt-[5em] text-xs sm:text-sm">
                This email is an copy of your response.
              </Text>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
