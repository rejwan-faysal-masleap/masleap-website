import { AppleCardsCarouselDemo } from "../../../utils/projectsCarousel";
const Projects = () => {
  return (
    <>
     <div className="min-h-[90vh] mb-20 pt-20 pb-20">
         <div className="text-center">
          <p className="head-title py-10">Our Custom Software Development Products</p>
          <p className="text-2xl pb-20">
            We are a leading custom software development company, specializing in outsourcing high-quality, scalable, and efficient solutions to clients worldwide.
          </p>
        </div>
            <div className="mt-6">
          <AppleCardsCarouselDemo />
        </div>
     </div>
    </>
  )
}

export default Projects;