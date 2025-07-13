const Whyus = () => {
  return (
    <>
      <div className="min-h-[90vh] text-xl flex-center-center max-w-7xl mx-auto">
        <section className="flex-1/2 flex-center flex-col space-y-10 pb-28">
          <p className="head-title">
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
        <section className="flex-1/2 pb-24 justify-self-end">
          <div className="w-full h-screen flex items-center justify-center">
            <div className=" h-[450px] w-[350px] relative overflow-visible">
              <div className=" h-96 w-72 ">
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
