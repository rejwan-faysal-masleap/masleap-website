"use client"

import { useEffect, useState } from 'react';
import { ThreeDCardDemo } from "../../../utils/3dCard";
import LoadingSpinner from '../../../utils/loadingSpinner/spinner';


const page = () => {
  
const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('/api/news');
        const data = await res.json();
        setNews(data);
      } catch (err) {
        console.error("Failed to load tech news", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <LoadingSpinner />;
  return (
    <>
    <div className="min-h-[90vh] mb-0 md:mb-10 pt-20 pb-28 p-6 max-w-[1400px] mx-auto">
            <div className="flex-center flex-col pb-10 md:pb-18 text-center">
              <p className="head-title text-3xl font-[550px]">Our Recent Blogs</p>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-3 md:mb-14 px-4 gap-x-56">
              {news?.map((single, index) => (
                <ThreeDCardDemo single={single} key={index} />
              ))}
            </div>
          </div>
    </>
  )
}

export default page;