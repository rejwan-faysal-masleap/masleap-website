const SingleCard = ({index, single}) => {
  return (
    <div
      key={index}
      className="flex rounded-3xl bg-white/40 backdrop-blur-sm p-2"
    >
      <div className="flex-[25%] ">
        <div className="w-full p-6 pr-0">
          <img className="img rounded-3xl" src={single.img} alt="s1" />
        </div>
      </div>
      <div className="flex-[75%]">
        <div className="w-full p-6 pl-8">
          <p className="medium-title pb-2">{single.title}</p>
          <p className="text-xl">{single.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
