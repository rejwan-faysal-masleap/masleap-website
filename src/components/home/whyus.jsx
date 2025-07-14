const Whyus = () => {
  return (
    <>
      <div className="md:min-h-[50vh] text-xl flex-between md:flex-row flex-col max-w-[1600px] mx-auto py-20 pt-24 md:py-0 md:pt-0 text-center md:text-left p-4">
        <section className="md:flex-1/2 flex-center flex-col space-y-10">
          <p className="head-title text-3xl font-[550px]">
            Why choose Masleap for project management and defining the scope of
            work?
          </p>
          <p className="small-paragaraph">
            Our solutions are meant to scale your operation from strategic
            documentation to incremental developments for newer maintenance and
            integrations
          </p>
        </section>
        {/* Pic Attached Here */}
        <section className="flex-1/2 hidden md:block">
          <div className="w-full h-screen flex items-center justify-end pr-40">
            <div className=" h-[450px] w-[350px] relative overflow-visible">
              <div className=" h-96 w-72">
                <img className="img rounded-tl-3xl" src="/peoples img/dev1.webp" alt="dev1" />
              </div>
              <div className=" h-96 w-72 absolute left-1/3 top-1/3">
              <img className="img rounded-tl-3xl" src="/peoples img/dev1.webp" alt="dev1" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Whyus;
