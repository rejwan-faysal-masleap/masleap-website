import { ContainerTextFlipDemo } from "../../../utils/HeroText";

const Hero = () => {
  return (
    <>
   <div
  className="relative min-h-2/3 pt-24 md:pt-0 md:min-h-screen bg-cover bg-center bg-no-repeat text-center px-4 flex-center justify-center mb-10 md:mb-0"
  style={{ backgroundImage: `url('/images/bg-hero.png')` }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-[#1985bb77] to-[#ffffffcc]"></div>

  <section className="relative z-10 flex flex-col items-center space-y-10 pb-28 max-w-[1700px] md:mb-20">
    <p className="px-8 py-2 rounded-full bg-white/20 text-sm md:text-[21px] backdrop-blur-md font-[500]">
      Leading Software Development Company In Bangladesh
    </p>
    <div className="head-title text-3xl font-[550px]">
      We Deploy <ContainerTextFlipDemo /> Agile Product Teams on Demand
    </div>
    <p className="small-paragaraph">
      Delivering innovative software solutions, Masleap is your trusted offshore
      development partner for creativity and technical excellence.
    </p>
  </section>
</div>    
    </>
  )
}

export default Hero;

