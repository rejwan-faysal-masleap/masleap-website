"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo({single}) {
  const {urlToImage, type, alt, title, description} = single;
  return (
    <CardContainer className="inter-var cursor-pointer">
      <CardBody
        className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6 border h-[550px]">
        <CardItem
          translateZ="50"
          className="text-[20px] pb-1 pt-2 text-blue-900 dark:text-white font-semibold uppercase">
          {type}
        </CardItem>
        <CardItem
          translateZ="50"
          className="medium-title uppercase text-gray-800 dark:text-white line-clamp-2">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-800 mb-10 mt-4  dark:text-gray-800 line-clamp-4 text-[17px] md:text-[18px]">
         {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full h-[250px] mt-4">
          <img
            src={urlToImage}
            className="img rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
