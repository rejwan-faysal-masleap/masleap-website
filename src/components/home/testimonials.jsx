import { AnimatedTestimonialsDemo } from "../../../utils/testimonialsCarosel";
const Testimonials = () => {
  return (
    <>
      <div className="min-h-[90vh] mb-20 pt-20 pb-28">
        <div className="flex-between">
          <div className="text-center">
            <p className="head-title py-10">Testimonials</p>
            <p className="text-2xl pb-20">What Clients Say About Masleap.</p>
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
