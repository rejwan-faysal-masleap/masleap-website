import services from "../../../utils/services.json";
import SingleCard from "../../../utils/singleCard";
const OurSolutions = () => {
  return (
    <>
      <div className="min-h-full md:min-h-[90vh] mb-18 bg-gradient-to-b from-[#1985bb34] to-[#ffff] pt-20 md:pb-28 p-6">
        <div className="flex-center flex-col space-y-8 pb-10 md:pb-18 text-center">
          <p className="head-title text-3xl font-[550px] md:pt-4">Our Solutions</p>
          <p className="text-xl md:text-2xl pb-8 md:pb-0">
            We provide a time-worthy business solution to every type of
            business. Find out your one and level up your success stairs.
          </p>
        </div>

        <div className="md:mx-56 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Cards */}
            {services.map((single, index) => 
              <SingleCard single={single} key={index} index={index}/>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSolutions;
