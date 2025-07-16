'use client'
import { AnimatedTestimonialsDemo } from "../../../utils/testimonialsCarosel";
const Testimonials = () => {
  return (
    <>
      <div className="min-h-[50vh] p-6 md:p-0 flex-center-center mb-14">
        <div className="flex-center flex-col md:flex-row w-full">
          <div className="flex-1/2 space-y-6 text-center md:text-left">
            <p className="head-title text-3xl font-[550px]">Testimonials</p>
            <p className="text-xl md:small-paragaraph pb-16 md:pb-0">What Clients Say About Masleap.</p>
          </div>
          <div className="flex-1/2" data-aos="fade-left" data-aos-duration="1000">
            <AnimatedTestimonialsDemo/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
