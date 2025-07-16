import { ContainerTextFlipDemo } from "../../../utils/HeroText";
import InteractiveGlobe from "../3dglobe/InteractiveGlobe";

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] flex-between px-6 mb-10 md:mb-0 max-w-[1600px] mx-auto">
      {/* Text section */}
      <section
        className="flex flex-col z-10 space-y-7 flex-1/2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className="px-7 py-2 rounded-full bg-[#00aaff1a] text-sm md:text-[21px] backdrop-blur-md font-[600] w-fit shadow-md">
  Leading Software Development Company In Bangladesh
</p>


        <div className="head-title text-3xl md:text-5xl font-semibold pb-5">
          We Deploy <ContainerTextFlipDemo /> Agile Product Teams on Demand
        </div>
        <p className=" text-gray-700 md:pr-4 font-[500]">
          Delivering innovative software solutions, Masleap is your trusted
          offshore development partner for creativity and technical excellence.
        </p>
      </section>

      {/* Image section */}
      <div className="hidden md:block relative w-1/2 h-[70vh] flex-1/2">
        {/* <img
          src="/images/bg-hero.png"
          alt="Hero Image"
          className="absolute top-0 right-0 h-full w-full object-cover"
        /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-l from-[#00aaff36] to-transparent"></div> */}


        <InteractiveGlobe />
      </div>
    </div>
  );
};

export default Hero;
