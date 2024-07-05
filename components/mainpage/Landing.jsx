// import Image from "next/image";
import Link from "next/link";

// const myVideo =
//   "https://www.youtube.com/watch?v=2V1WK-3HQNk&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i";

function Landing() {
  return (
    <div className="xl:h-screen w-full flex py-16 h-full mb-16 xl:py-0 px-12 xl:lp-0  bg-[#f0f0f2]  dark:z-0  justify-center items-center  overflow-hidden">
      <div className="flex flex-col gap-12 overflow-hidden justify-center items-center">
        <div className="flex flex-col animate-slideInBigText animate-reloadBigText justify-center items-center ">
          <p className="xl:text-[70px] text-[44px]">Play with Qwizard</p>
          <p className="xl:text-[70px] text-[44px]">Deepen your knowledge!</p>
        </div>
        <p className="animate-slideInSmallText leading-8 text-xl md:w-[70%] lg:w-[60%] ">
          Win cashbacks, discounts, and amazing prizes just by participating.
          The more you play and create, the more you earn. Our top 100 players
          receive special rewards!
        </p>
        <div className="flex relative">
          <div className="translate-x-0 bg-[#4a4a4b] w-auto before:duration-300 before:w-0 before:left-0 before:absolute before:h-[100%] before:bg-[#ff2020] before:transition-all before:ease-in hover:before:w-full  before:-z-10">
            <button className="text-white  py-3  px-8 lg:text-2xl text-xl">
              <Link href="/rewards" aria-label="Go to shop page">
                Rewards
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="hidden md:block w-48 xl:w-56 animate-blinkingBg md:pr-4 lg:pr-8 ">
        <Image
          src="https://ajy8khmx9vtvyckn.public.blob.vercel-storage.com/watch-yfAHm8BMsGl1Un4JMBErhh0gCxOjwv.webp"
          width={185}
          height={185}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority
          alt="watch-image"
        />
        <div className="relative  flex justify-center">
          <video
            onClick={() => setMuted((muted) => !muted)}
            src={myVideo}
            autoPlay
            muted={true}
            loop
            className="w-full h-auto"
          />
          <p
            className="absolute right-5 bottom-12 text-2xl text-white"
            onClick={() => setMuted((muted) => !muted)}
          >
            {muted ? <CiVolumeMute /> : <CiVolumeHigh />} x
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Landing;
