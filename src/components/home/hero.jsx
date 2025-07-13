import { ContainerTextFlipDemo } from "../../../utils/HeroText";

const Hero = () => {
  return (
    <>
    <div className="bg-gradient-to-b from-[#1985bb34] to-[#ffff] min-h-[90vh] text-xl flex-center-center text-center px-4">
      <section className="flex-center flex-col space-y-10 pb-28">
        <p className=" px-5 py-2 rounded-full transtarent-bg text-sm md:text-xl">Leading Software Development Company In Bangladesh</p>
        <div className="head-title text-3xl font-[550px]">We Deploy <ContainerTextFlipDemo/> Agile Product Teams on Demand</div>
        <p className="small-paragaraph">Delivering innovative software solutions, Masleap is your trusted offshore development partner for creativity and technical excellence.</p>
      </section>
    </div>
    </>
  )
}

export default Hero;