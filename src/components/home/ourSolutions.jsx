import services from "../../../utils/services.json";
import SingleCard from "../../../utils/singleCard";
const OurSolutions = () => {
  return (
    <>
      <div className="min-h-[90vh] mb-20 bg-gradient-to-b from-[#1985bb34] to-[#ffff] pt-20 pb-28">
        <div className="text-center">
          <p className="head-title py-10">Our Solutions</p>
          <p className="text-2xl pb-20">
            We provide a time-worthy business solution to every type of
            business. Find out your one and level up your success stairs.
          </p>
        </div>

        <div className="mx-56 mt-6">
          <div className="grid grid-cols-3 gap-6 gap-y-10">
            {/* Cards */}
            {services.map((single, index) => 
              <SingleCard single={single} key={index}/>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSolutions;
