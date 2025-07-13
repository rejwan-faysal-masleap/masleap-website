import { AppleCardsCarouselDemo } from "../../../utils/projectsCarousel";
const Projects = () => {
  return (
    <>
     <div className="min-h-[90vh] mb-20 pt-20 md:pb-28 p-4">
         <div className="flex-center flex-col space-y-8 pb-10 md:pb-28 text-center">
          <p className="head-title text-3xl font-[550px]">Our Custom Software Development Products</p>
          <p className="text-xl md:text-2xl pb-20">
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