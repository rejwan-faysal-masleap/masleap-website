import Marquee from "react-fast-marquee";
import technologies from "../../../utils/technologies.json";
const Technologies = () => {
  return (
    <>
      <div className="min-h-[90vh] mb-20 pt-20 pb-28">
        <div className="text-center">
          <p className="head-title py-10">Technology We Use</p>
          <p className="text-2xl pb-20">
            We understand that today companies must develop custom software products to keep pace with the competitive market.
          </p>
        </div>

        <div className="mx-56 mt-6 space-y-14">
          <Marquee direction="right" speed={40}>
            {technologies.map((single, index) => (
              <div key={index} className=" bg-[#1985bb34]/40 backdrop-blur-sm p-4 mr-6 h-24 w-full my-auto">
                <img className="img" src={single.img} alt={single.alt}/>
              </div>
            ))}
          </Marquee>
          <Marquee direction="left" speed={60}>
            {technologies.map((single, index) => (
              <div key={index} className="bg-[#1985bb34]/40 backdrop-blur-sm p-4 mr-6 h-24 w-full my-auto">
                <img className="img" src={single.img} alt={single.alt}/>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Technologies;
