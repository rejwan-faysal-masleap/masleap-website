import careerpagevectors from "../../../utils/career/careerpagevectors.json";
import { CompareDemo } from "../../../utils/career/comparedemo";
import Openings from "../../../utils/career/openings";
export const page = () => {
  return (
    <div className="min-h-[90vh] bg-white mb-0 md:mb-24 pt-20 pb-28 p-6 max-w-[1600px] mx-auto">
      <div className="flex-center flex-col pb-10 md:pb-18 text-center">
        <p className="head-title text-3xl font-[550px]">Career</p>
      </div>

      <div className="flex-between flex-col md:flex-row p-4">
        <div className="flex-1/2 flex flex-col">
          <div className="flex-1/2 pb-4">
            <p className="medium-title text-xl font-semibold pb-4">
              Masleap - Empowering Innovation, Accelerating Growth.
            </p>
            <p className="small-paragaraph pb-4">
              Masleap is one of Bangladesh’s fastest-growing technology
              companies, committed to delivering intelligent, scalable software
              solutions that drive real business impact. With a mission to
              simplify and enhance digital transformation, we focus on building
              tools and platforms that are not only powerful but also practical.
              By combining innovation, strategic thinking, and deep technical
              expertise, Masleap enables organizations to work smarter, move
              faster, and grow sustainably in an increasingly digital world.
            </p>
            <p className="small-paragaraph pb-10">
              At Masleap, we believe in the power of people and ideas. Our team
              is made up of forward-thinking individuals who are passionate
              about solving complex challenges through technology. Whether it's
              software development, UI/UX design, or project management, every
              role here contributes to shaping solutions that make a difference.
              We foster a work environment where creativity, collaboration, and
              purpose converge—helping our people grow while they help transform
              industries. Join Masleap and be part of something that truly
              matters.
            </p>
          </div>
          <div className="flex-1/2">
            <p className="medium-title text-xl font-semibold pb-6">Approach of Work</p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-10">
              {careerpagevectors.map((i,index) => (
                <div key={index} className="w-full h-full space-y-4">
                  <div className="flex-center space-x-2">
                    <div className="h-10 w-10">
                      <img className="img" src={i.img} alt={i.alt} />
                    </div>
                    <p className="font-semibold self-end text-[20px]">
                      {i.title}
                    </p>
                  </div>
                  <p className="text-[17px] text-gray-600">{i.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1/2 flex-center md:justify-end pt-16 md:pt-0">
          <CompareDemo />
        </div>
      </div>


        <div className="py-14 text-center pt-24">
        <p className="medium-title text-xl uppercase pb-5">Opening Positions
      </p>
      <p className="small-paragaraph pb-2">Browse exciting career opportunities at one of Bangladesh’s leading software companies and apply for the role that best matches your skills and passion.</p>
        </div>
     
     <Openings />
     
    </div>
  );
};

export default page;
