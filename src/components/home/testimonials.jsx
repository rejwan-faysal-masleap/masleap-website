import { AnimatedTestimonialsDemo } from "../../../utils/testimonialsCarosel";
const Testimonials = () => {
  return (
    <>
      <div className="min-h-[60vh] p-4 md:p-12 md:mb-16">
        <div className="flex-center flex-col md:flex-row">
          <div className="flex-1/2 space-y-8 text-center md:text-left">
            <p className="head-title text-3xl font-[550px]">Testimonials</p>
            <p className="text-xl md:text-2xl pb-16 md:pb-0">What Clients Say About Masleap.</p>
          </div>
          <div className="flex-1/2">
            <AnimatedTestimonialsDemo/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
