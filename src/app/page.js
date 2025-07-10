import Companies from "@/components/companies";
import OurSolutions from "@/components/ourSolutions";
import Technologies from "@/components/technologies";
import Whyus from "@/components/whyus";
import Hero from "../components/hero";
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
      </div>
    </>
  );
}
