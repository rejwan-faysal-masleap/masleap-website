"use client"

import { useRouter } from "next/navigation";
import { ThreeDCardDemo } from "../../../utils/3dCard";
import blogs from "../../../utils/blogs.json";

const Blogs = () => {


  const router = useRouter(); 

  const handleBtnClick = ()=> {
    router.push("/blogs");
  } 
  return (
    <>
      <div className="min-h-[90vh] mb-0 md:mb-24 pt-20 pb-28">
        <div className="flex-center flex-col space-y-8 pb-10 md:pb-28 text-center">
          <p className="head-title text-3xl font-[550px]">Our Recent Blogs</p>
          <p className="text-xl md:text-2xl">
            Insights, trends, and expert tips from our development team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-12 min-h-[650px] md:mb-14 px-4">
          {blogs.slice(0, 3).map((single, index) => (
            <ThreeDCardDemo single={single} key={index} />
          ))}
        </div>
        <div className="flex-center-center">
          <button onClick={handleBtnClick} className="relative inline-flex h-14 md:w-1/3 w-1/2 mt-14 md:mt-0 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-medium text-white backdrop-blur-3xl">
              Read More Blogs
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Blogs;
