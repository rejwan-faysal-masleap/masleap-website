import Blogs from "@/components/home/blogs";
import Companies from "@/components/home/companies";
import OurSolutions from "@/components/home/ourSolutions";
import Projects from "@/components/home/projects";
import Technologies from "@/components/home/technologies";
import Testimonials from "@/components/home/testimonials";
import Whyus from "@/components/home/whyus";
import { GoogleGeminiEffectDemo } from "../../utils/googleGeminiEffect";
import Hero from "../components/home/hero";
export default function Home() {
  return (
    <>

      <div className="text-xl">
        <Hero />
        <div className="max-w-[1400px] mx-auto text-xl">
          <Companies />
        </div>
          <Whyus />
          <OurSolutions />
          <Technologies />
          <Projects />
          <div className="max-w-[1600px] mx-auto text-xl">
           <Testimonials />
           <Blogs />
        </div>
         <GoogleGeminiEffectDemo />
      </div>
    </>
  );
}
