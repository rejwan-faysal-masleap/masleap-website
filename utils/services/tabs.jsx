"use client";

import { Tabs } from "@/components/ui/services/tabs";
import { useRouter } from "next/navigation";

import services_web from "./services_web.json";
import services_mobile from "./services_mobile.json"; // (optional for more tabs)

export function TabsDemo() {
  const router = useRouter();

  // Define categories and their project data
  const tabs = [
    {
      title: "Web Applications",
      value: "web",
      content: services_web.map((project) => (
        <div
          key={project.id}
          onClick={() => router.push(`/services/${project.id}`)}
          className="cursor-pointer w-full overflow-hidden relative rounded-2xl text-base md:text-xl font-semibold text-white bg-gradient-to-br from-gray-800 to-black p-5 hover:scale-[1.01] transition-transform"
        >
          <p className="mb-4">{project.project_name}</p>
          <img
            className="object-cover rounded-xl mx-auto"
            src={project.img}
            alt={project.project_name}
          />
        </div>
      )),
    },
    {
      title: "Mobile Applications",
      value: "mobile",
      content: services_mobile.map((project) => (
        <div
          key={project.id}
          onClick={() => router.push(`/services/${project.id}`)}
          className="cursor-pointer w-full overflow-hidden relative rounded-2xl text-base md:text-xl font-semibold text-white bg-gradient-to-br from-indigo-800 to-indigo-900 p-5 hover:scale-[1.01] transition-transform"
        >
          <p className="mb-4">{project.project_name}</p>
          <img
            className="object-cover rounded-xl mx-auto"
            src={project.img}
            alt={project.project_name}
          />
        </div>
      )),
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-start">
      <Tabs tabs={tabs} />
    </div>
  );
}
