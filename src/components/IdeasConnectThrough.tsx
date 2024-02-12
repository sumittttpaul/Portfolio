import TypographyAnimation from "components/Animations/TypographyAnimation";
import DancingTruck from "../../public/images/dancing_truck.gif";
import LabelTag from "components/LabelTag";
import Image from "next/image";

export default function IdeasConnectThrough({
  mobileOnly,
  desktopOnly,
}: {
  mobileOnly?: boolean;
  desktopOnly?: boolean;
}) {
  if (mobileOnly) {
    return (
      <section className="mx-auto flex h-full w-full max-w-screen-max-size flex-col px-2.5 pt-10 sm:px-5">
        <div className="relative mx-auto flex h-auto rounded-[20px] bg-black px-2.5 py-2.5 sm:rounded-[40px] sm:px-10 sm:py-10 screen-1000:w-[1100px] max-size:w-full max-size:px-12">
          <div className="relative box-border flex flex-col pb-[17.5em] sm:pb-0">
            <div className="flex flex-col">
              <div className="flex w-full flex-col sm:flex-row sm:space-x-4 screen-1000:space-x-5 max-size:space-x-6">
                <TypographyAnimation label="ideas" />
                <TypographyAnimation label="connect" />
              </div>
              <div className="-mt-1 ml-0 flex w-full flex-col sm:flex-row screen-1000:ml-10 lg:mt-0 max-size:ml-20 max-size:space-x-6">
                <TypographyAnimation label="through" />
                <div className="relative mt-1.5 flex items-center">
                  <div className="flex items-center rounded-full border border-solid border-white pl-1.5 pr-2.5 text-[30px] font-[600] uppercase leading-[42px] text-white xs:border-[1.5px] xs:text-[35px]">
                    <Image
                      src="/icons/design-animation-white.gif"
                      width={50}
                      height={38}
                      draggable={false}
                      alt="design animation"
                    />
                    <span className="mx-2">Design</span>
                  </div>
                </div>
              </div>
              <div className="mt-1.5 flex w-full flex-col">
                <div className="relative -ml-[5%] flex w-full items-center justify-center">
                  <div className="flex items-center rounded-full border border-solid border-white px-2.5 text-[30px] font-[600] uppercase leading-[42px] text-white xs:border-[1.5px] xs:text-[35px]">
                    <Image
                      src="/icons/gear-animation-white.gif"
                      width={40}
                      height={40}
                      draggable={false}
                      alt="gear animation"
                    />
                    <span className="mx-2">Strategy</span>
                  </div>
                </div>
                <div className="relative mt-1.5 flex w-full items-center justify-end">
                  <div className="relative flex items-center">
                    <div className="relative z-[2] flex items-center rounded-full border border-solid border-white bg-black pl-16 pr-4 text-[30px] font-[600] uppercase leading-[42px] text-white xs:border-[1.5px] xs:text-[35px]">
                      <span>Creativity</span>
                    </div>
                    <div className="plane-animation-container absolute left-7 z-[3] mt-1 scale-[1.1]">
                      <svg className="plane-animation z-[3] block h-[28px] w-[26px] fill-white">
                        <path d="M5.25,15.24,18.42,3.88,7.82,17l0,4.28a.77.77,0,0,0,1.36.49l3-3.68,5.65,2.25a.76.76,0,0,0,1-.58L22,.89A.77.77,0,0,0,20.85.1L.38,11.88a.76.76,0,0,0,.09,1.36Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[3.5em] left-0 flex w-full justify-center sm:-left-10 sm:bottom-20 sm:w-auto">
              <div className="relative h-[229px] w-[350px] sm:mb-0 screen-1000:h-[333px] screen-1000:w-[508px] max-size:h-[398px] max-size:w-[608px]">
                <Image
                  fill
                  priority
                  draggable={false}
                  sizes="(min-width: 1180px) 608px,(min-width: 1000px) 333px,(min-width: 640px) 290px,"
                  src={DancingTruck}
                  alt="dancing truck"
                />
              </div>
            </div>
            <div className="mb-[2em] mt-[3em] flex w-full flex-col space-y-3 sm:ml-[22em] screen-1000:my-[5em] screen-1000:ml-[31em] screen-1000:space-y-5 max-size:ml-[39em]">
              <h2 className="flex flex-col text-xl text-white sm:flex-row screen-1000:text-2xl max-size:text-3xl">
                <span>Ready for Opportunities:</span>
                <span>Open to Work!</span>
              </h2>
              <p className="flex space-x-5 text-xs text-white xs:text-sm screen-1000:text-base">
                <span>1.</span>
                <span>Excited to begin working together.</span>
              </p>
              <p className="flex space-x-5 text-pretty text-xs text-white xs:text-sm sm:max-w-lg sm:leading-[1.5rem] screen-1000:text-[15px] max-size:text-base">
                <span>2.</span>
                <span>
                  Ready to dedicate my expertise and passion to craft top-notch
                  digital solutions tailored to your needs. Let&apos;s bring
                  your visions to life and propel your projects to new heights
                  together.
                </span>
              </p>
            </div>
            <h6 className="absolute bottom-0 left-[50%] -translate-x-[50%] text-xs text-white xs:text-sm">
              © Code by Sumeet
            </h6>
          </div>
        </div>
      </section>
    );
  }

  if (desktopOnly) {
    return (
      <section className="mx-auto flex h-full w-full max-w-screen-max-size px-5 pt-20">
        <div className="relative mx-auto flex h-auto w-[1100px] rounded-[40px] bg-black px-5 py-5 sm:px-10 sm:py-10 max-size:w-full max-size:px-12">
          <div className="relative box-border flex flex-col pb-[17.5em] sm:pb-0">
            <div className="flex flex-col">
              <div className="flex w-full flex-col sm:flex-row sm:space-x-4 screen-1000:space-x-5 max-size:space-x-6">
                <TypographyAnimation label="ideas" />
                <TypographyAnimation label="connect" />
              </div>
              <div className="-mt-1 ml-0 flex w-full flex-col sm:flex-row screen-1000:ml-10 lg:mt-0 max-size:ml-20 max-size:space-x-6">
                <TypographyAnimation label="through" />
                <LabelTag
                  name="strategy"
                  ContainerClassName="-ml-5 screen-100:ml-0"
                />
              </div>
              <div className="-mt-2 -space-y-2 sm:ml-[16em] screen-1000:ml-[27em] screen-1000:mt-2 screen-1000:space-y-2 max-size:ml-[39em]">
                <LabelTag name="design" />
                <LabelTag
                  name="creativity"
                  ContainerClassName="ml-[2em] max-size:ml-[4em]"
                />
              </div>
            </div>
            <div className="absolute bottom-[3em] left-0 flex w-full justify-center sm:-left-10 sm:bottom-20 sm:w-auto">
              <div className="relative mb-5 h-[229px] w-[350px] sm:mb-0 screen-1000:h-[333px] screen-1000:w-[508px] max-size:h-[398px] max-size:w-[608px]">
                <Image
                  fill
                  priority
                  draggable={false}
                  sizes="(min-width: 1180px) 608px,(min-width: 1000px) 333px,(min-width: 640px) 290px,"
                  src={DancingTruck}
                  alt="dancing truck"
                />
              </div>
            </div>
            <div className="my-[2em] space-y-3 sm:ml-[22em] screen-1000:my-[5em] screen-1000:ml-[31em] screen-1000:space-y-5 max-size:ml-[39em]">
              <h2 className="text-xl text-white screen-1000:text-2xl max-size:text-3xl">
                Ready for Opportunities: Open to Work
              </h2>
              <p className="flex space-x-5 text-sm text-white screen-1000:text-base">
                <span>1.</span>
                <span>Excited to begin working together!</span>
              </p>
              <p className="flex space-x-5 text-pretty text-sm leading-[1.5rem] text-white sm:max-w-lg screen-1000:text-[15px] max-size:text-base">
                <span>2.</span>
                <span>
                  Ready to dedicate my expertise and passion to craft top-notch
                  digital solutions tailored to your needs. Let&apos;s bring
                  your visions to life and propel your projects to new heights
                  together!
                </span>
              </p>
            </div>
            <h6 className="absolute bottom-0 right-5 text-xs text-white xs:text-sm sm:right-0 sm:text-base">
              © Code by Sumeet
            </h6>
          </div>
        </div>
      </section>
    );
  }
}
