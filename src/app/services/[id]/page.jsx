// ✅ File: app/services/[id]/page.jsx

import Link from "next/link";
import services_mobile from "../../../../utils/services/services_mobile.json";
import services_web from "../../../../utils/services/services_web.json";
export default function Page({ params }) {

     const allProjects = [
    ...services_web,
    ...services_mobile
  ];
  const project = allProjects.find((p) => p.id === params.id);

  if (!project) {
    return <div className="text-center py-20 text-xl">Project not found.</div>;
  }

  return (
    <article className="mb-0 md:mb-24 pt-20 pb-28 p-6 max-w-[1600px] mx-auto min-h-[90vh] bg-white">
         <div className="flex-center flex-col pb-8 md:pb-12 text-center">
              <p className="head-title text-3xl font-[550px]">{project.project_name}</p>
            </div>
      <div className="w-full md:w-2/3 mx-auto h-full rounded-xl overflow-hidden mb-14">
        <img
          src={project.img}
          alt={project.project_name}
          className="img"
        />
      </div>

      <section className="leading-relaxed mb-16 text-gray-800 dark:text-gray-200 small-paragaraph">
        {project.description}
      </section>

      <div className="flex-center gap-x-5">
          <section className="">
            <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
            <p className="bg-gray-100 dark:bg-gray-800 inline-block px-4 py-2 rounded-lg small-paragaraph">
              {project.tech}
            </p>
          </section>
          {project.live_link && (
            <div className="mt-10">
              <Link
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white py-2 px-6 rounded-lg hover:scale-105 transition small-paragaraph"
              >
                Visit Live Site
              </Link>
            </div>
          )}
      </div>
    </article>
  );
}
