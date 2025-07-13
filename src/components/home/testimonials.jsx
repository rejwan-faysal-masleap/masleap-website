import { AnimatedTestimonialsDemo } from "../../../utils/testimonialsCarosel";
const Testimonials = () => {
  return (
    <>
      <div className="min-h-[60vh] p-4 md:mb-16">
        <div className="flex-between flex-col md:flex-row">
          <div className="flex-center flex-col space-y-8 text-center md:text-left">
            <p className="head-title text-3xl font-[550px]">Testimonials</p>
            <p className="text-xl md:text-2xl">What Clients Say About Masleap.</p>
          </div>
          <div>
            <AnimatedTestimonialsDemo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
