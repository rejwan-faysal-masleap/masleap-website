import companies from "../../utils/companies.json";
const Companies = () => {
  return (
    <>
      <div className="min-h-[30vh]">
        <p className="small-paragaraph font-semibold text-center mb-20">
          50+ companies rely on our top 1% talent to scale their dev teams.
        </p>
        <div className="grid grid-cols-5 gap-10 gap-y-16 place-items-center ">
          {companies.map((singleImg, index) => (
            <div className="w-2/3" key={index}>
              <img
                className="img"
                src={singleImg.img}
                alt={singleImg.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Companies;
