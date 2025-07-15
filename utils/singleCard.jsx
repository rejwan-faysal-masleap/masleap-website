const SingleCard = ({index, single}) => {
  return (
    <div
      key={index}
      className="flex flex-col md:flex-row rounded-3xl bg-white/40 backdrop-blur-sm p-2 max-h-full"
    >
      <div className="flex-[25%]">
        <div className="md:w-full w-1/3 p-6 md:pr-0 pb-0">
          <img className="img rounded-3xl" src={single.img} alt="s1" />
        </div>
      </div>
      <div className="flex-[75%]">
        <div className="w-full p-6 pl-8">
          <p className="medium-title pb-2">{single.title}</p>
          <p className="small-paragaraph whitespace-break-spaces">{single.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
