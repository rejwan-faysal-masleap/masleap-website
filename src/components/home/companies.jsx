import companies from "../../../utils/companies.json";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
const Companies = () => {
  return (
    <>
    <BackgroundBeamsWithCollision>
      <div className="min-h-[30vh] text-center px-4 pt-5 md:my-20 mt-4 md:mt-0 mb-28">
        <p className="text-2xl font-semibold text-center mb-20">
          50+ companies rely on our top 1% talent to scale their dev teams.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-10 gap-y-16 place-items-center ">
          {companies.map((singleImg, index) => (
            <div className="w-2/3" key={index}>
              <img
                data-aos="fade-up" data-aos-duration={`${(index + 3) * 100}`}
                className="img"
                src={singleImg.img}
                alt={singleImg.alt}
              />
            </div>
          ))}
        </div>
      </div>
      </BackgroundBeamsWithCollision>
    </>
  );
};

export default Companies;
