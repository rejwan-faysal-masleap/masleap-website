const Whyus = () => {
  return (
    <div className="min-h-[80vh] max-w-[1600px] mx-auto md:py-20  px-6 text-center my-20 mb-12">
      <section className="flex flex-col items-center space-y-10">
        <p
          className="head-title text-3xl md:text-4xl font-semibold"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Why choose Masleap for project management and defining the scope of
          work?
        </p>
        <p
          className="small-paragaraph max-w-3xl mt-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Our solutions are meant to scale your operation from strategic
          documentation to incremental developments for newer maintenance and
          integrations.
        </p>
      </section>

      <div className="md:mt-32 mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            number: "01",
            title: "High Quality Hardware",
            desc: "We use top-notch hardware to develop the most efficient apps for our customers.",
          },
          {
            number: "02",
            title: "Dedicated 24/7 Support",
            desc: "You can rely on our 24/7 tech support that will gladly solve any app issue you may have.",
          },
          {
            number: "03",
            title: "30-Day Money-back Guarantee",
            desc: "If you are not satisfied with our apps, we will return your money in the first 30 days.",
          },
          {
            number: "04",
            title: "Agile and Fast Working Style",
            desc: "This type of approach to our work helps our specialists to quickly develop better apps.",
          },
          {
            number: "05",
            title: "Some Apps are Free",
            desc: "We also develop free apps that can be downloaded online without any payments.",
          },
          {
            number: "06",
            title: "High Level of Usability",
            desc: "All our products have high usability allowing users to easily operate the apps.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-white shadow-lg rounded-xl text-left space-y-4"
          >
            <div className="text-2xl font-bold text-blue-600">{item.number}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 small-paragaraph">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whyus;
