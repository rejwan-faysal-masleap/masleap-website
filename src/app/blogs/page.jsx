import { ThreeDCardDemo } from "../../../utils/3dCard";
import blogs from "../../../utils/blogs.json";
const page = () => {
  return (
    <>
    <div className="min-h-[90vh] mb-0 md:mb-24 pt-20 pb-28 p-6 max-w-[1400px] mx-auto">
            <div className="flex-center flex-col pb-10 md:pb-18 text-center">
              <p className="head-title text-3xl font-[550px]">Our Recent Blogs</p>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-3 md:mb-14 px-4 gap-x-56">
              {blogs.map((single, index) => (
                <ThreeDCardDemo single={single} key={index} />
              ))}
            </div>
          </div>
    </>
  )
}

export default page;