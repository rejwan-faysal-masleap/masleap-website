import Marquee from "react-fast-marquee";
import technologies from "../../../utils/technologies.json";
const Technologies = () => {
  return (
    <>
      <div className="md:min-h-[60vh] pt-10 pb-12 mb-10 md:pb-2">
        <div className="flex-center flex-col space-y-6 pb-10 text-center">
          <p className="head-title text-3xl font-[550px]">Technology We Use</p>
          <p className="text-xl md:small-paragaraph pb-8 md:pb-20">
            We understand that today companies must develop custom software products to keep pace with the competitive market.
          </p>
        </div>

        <div className="md:mx-56 mt-6 space-y-14">
          <Marquee direction="right" speed={40}>
            {technologies.map((single, index) => (
              <div key={index} className="p-4 mr-6 h-full w-full my-auto">
                <img className="object-contain h-[150px] w-[150px]" src={single.img} alt={single.alt}/>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Technologies;
