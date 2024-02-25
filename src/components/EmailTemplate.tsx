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
  Button,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

const WebsiteLink = "https://sumitttpaul.vercel.app";

const SumitPhoto = `${WebsiteLink}/images/sumit_small_photo.png`;
const Facebook = `${WebsiteLink}/images/socials/facebook_round_small_white.png`;
const Twitter = `${WebsiteLink}/images/socials/twitter_round_small_white.png`;
const Thread = `${WebsiteLink}/images/socials/thread_round_small_white.png`;
const Linkedin = `${WebsiteLink}/images/socials/linkedin_round_small_white.png`;
const Instagram = `${WebsiteLink}/images/socials/instagram_round_small_white.png`;

const FacebookLink = "https://www.facebook.com/sumitttpaul";
const TwitterLink = "https://twitter.com/sumitttkp16";
const ThreadLink = "https://www.threads.net/@_sumitttpaul";
const LinkedinLink = "https://www.linkedin.com/in/sumitttpaul/";
const InstagramLink = "https://www.instagram.com/_sumitttpaul";

export default async function EmailTemplate({
  name,
  email,
  company,
  service,
  description,
}: DetailsType) {
  return (
    <Html lang="en">
      <Tailwind>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="color-scheme" content="dark" />
          <title>Sumeet Kumar Paul • Freelance Web Developer</title>
          <meta
            name="description"
            content="Helping brands thrive in the digital world. Delivering tailor-made digital designs and building interactive websites from scratch."
          />
        </Head>
        <Preview>Thank You for Responding!</Preview>
        <Body className="mx-auto my-auto max-w-[700px] bg-black p-5 text-center font-sans sm:rounded-3xl sm:border sm:border-solid sm:border-white/30 sm:p-10">
          <Section className="w-auto text-center">
            <Link href={WebsiteLink} className="px-2.5 no-underline">
              <Row>
                <Column align="right">
                  <Text className="relative mr-1 text-sm font-bold text-white xs:text-base sm:text-lg sm:font-[300]">
                    ©
                  </Text>
                </Column>
                <Column align="left">
                  <Text className="relative w-full text-center text-[13px] font-bold text-white xs:text-[15px] sm:text-[17px] sm:font-[500]">
                    Code by Sumeet
                  </Text>
                </Column>
              </Row>
            </Link>
          </Section>
          <Section className="text-center">
            <Heading className="text-2xl font-bold leading-[0] text-white sm:text-4xl">
              Thank You for Responding!
            </Heading>
          </Section>
          <Section className="mt-[1em] text-center sm:mt-0">
            <Text className="text-sm text-white xs:text-base sm:text-lg">
              Sumeet will get back to you very soon.
            </Text>
          </Section>
          <Section className="mt-[0.5em] w-auto text-center">
            <Button
              href={WebsiteLink}
              className="rounded-full border-[1.5px] border-solid border-white/30 no-underline"
            >
              <Row>
                <Column align="right" className="pb-[0.25px] pl-1 pr-2 pt-1">
                  <Img
                    src={SumitPhoto}
                    className="rounded-full"
                    height={32}
                    width={32}
                  />
                </Column>
                <Column align="left" className="pr-4">
                  <Text className="text-sm leading-[0] text-white sm:text-[15px]">
                    sumitttpaul.vercel.app
                  </Text>
                </Column>
              </Row>
            </Button>
          </Section>
          <Section className="text-center">
            <Text className="mt-[4em] text-[13px] font-semibold uppercase text-white/50 xs:text-lg sm:mt-[5em] sm:text-sm">
              Your Response
            </Text>
          </Section>
          <Section className="m-0 w-full p-0 text-start">
            <LineBreak />
            <TextField index="01" question=" What's your name?" answer={name} />
            <LineBreak />
            <TextField
              index="02"
              question="What's your email?"
              answer={email}
            />
            <LineBreak />
            <TextField
              index="03"
              question="What's the name of your organization?"
              answer={company}
            />
            <LineBreak />
            <TextField
              index="04"
              question="What services are you looking for?"
              answer={service}
            />
            <LineBreak />
            <TextField
              index="05"
              question="Your message"
              answer={description}
            />
            <LineBreak />
          </Section>
          <Section className="text-center">
            <Text className="mt-[4em] text-[13px] font-semibold uppercase text-white/50 xs:text-lg sm:mt-[5em] sm:text-sm">
              Social Handles
            </Text>
          </Section>
          <Section className="mx-auto mt-[1em] w-full max-w-[250px] sm:max-w-[300px]">
            <Row>
              <SocialLink href={FacebookLink} src={Facebook} />
              <SocialLink href={InstagramLink} src={Instagram} />
              <SocialLink href={LinkedinLink} src={Linkedin} />
              <SocialLink href={TwitterLink} src={Twitter} />
              <SocialLink href={ThreadLink} src={Thread} />
            </Row>
          </Section>
          <Section className="text-center">
            <Text className="mt-[5em] text-xs text-white sm:text-sm">
              This email is an copy of your response.
            </Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}

const LineBreak = () => {
  return (
    <Hr className="mb-5 mt-2 border-[0.75px] border-solid border-white/30 sm:mt-5" />
  );
};

const TextField = ({
  index,
  question,
  answer,
}: {
  index: string;
  question: string;
  answer: string;
}) => {
  return (
    <Container className="m-0 w-full p-0 text-start">
      <Row>
        <Column align="left" className="px-5 sm:pl-10 sm:pr-5">
          <Text className="text-[11px] font-bold leading-[0] text-white/50 sm:text-[14px]">
            {index}
          </Text>
        </Column>
        <Column align="left" className="w-full text-start">
          <Text className="text-[15px] leading-[0] text-white/50 sm:text-xl">
            {question}
          </Text>
        </Column>
      </Row>
      <Container className="w-full text-start">
        <Text className="ml-14 mt-0 text-[14px] font-medium leading-[1.5] text-white sm:-mt-3 sm:ml-[75px] sm:text-[20px]">
          {answer ?? "-"}
        </Text>
      </Container>
    </Container>
  );
};

const SocialLink = ({ href, src }: { href: string; src: string }) => {
  return (
    <Column align="center" className="mr-2">
      <Link href={href} className="no-underline">
        <Img height={30} width={30} src={src} />
      </Link>
    </Column>
  );
};
