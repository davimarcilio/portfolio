import { Projects } from "@/data/Projects";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "phosphor-react";
import { ChangeEvent, useEffect, useState } from "react";
import { TechSlider } from "./TechSlider";

// interface SectionProps {
//   children: ReactNode;
//   className?: string;
// }

// interface ProjectsType {
//   id: number;
//   title: string;
//   description: string;
//   mediaUrl: string;
//   isMedia: boolean;
//   imageUrl: string;
//   repoUrl: string;
//   deployUrl: string;
// }

export function ProjectsSection() {
  const [search, setSearch] = useState("");
  const [ProjectsFiltered, setProjectsFiltered] = useState(Projects);

  function handleSearchProjects(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    if (search.length > 0) {
      const regex = new RegExp(`${search.toLowerCase()}`, `mg`);
      return setProjectsFiltered(
        Projects.filter((project) => project.title.toLowerCase().match(regex))
      );
    }
    return setProjectsFiltered(Projects);
  }, [search]);

  return (
    <section
      id="projects"
      className="flex flex-col w-full justify-center gap-10 items-center max-sm:px-0 p-10 mt-10 transition-all"
    >
      <input
        data-aos="fade-down"
        onChange={handleSearchProjects}
        value={search}
        type="text"
        placeholder="Pesquise um projeto!"
        className="w-full px-10 py-3 placeholder:text-xl flex items-center bg-transparent border text-gray-300 focus:outline-none transition-colors focus:border-sky-400 border-blue-800 rounded-lg"
      />
      <div className="grid grid-cols-3 max-sm:grid-cols-1 justify-center items-center gap-10">
        {ProjectsFiltered.map((project) => (
          <Link
            data-aos="fade-up"
            key={project.id}
            href={`/project/${project.id}`}
            className="bg-neutral-800 flex flex-col p-5 group hover:bg-neutral-900 rounded-lg transition-all cursor-pointer"
          >
            <Image
              width={500}
              height={500}
              src={project.imageUrl}
              alt="Projeto"
              className="group-hover:opacity-70 w-96 h-56 transition-all  "
            />
            <TechSlider />
            <h1 className="text-xl group-hover:text-gray-200 font-bold mt-5 transition-all">
              {project.title}
            </h1>
          </Link>
        ))}
        <Link
          target={"_blank"}
          data-aos="fade-up"
          key={"more"}
          href={`https://github.com/davimarcilio?tab=repositories`}
          className="bg-neutral-800 p-5 group hover:bg-neutral-900 rounded-lg transition-all flex justify-center flex-col items-center cursor-pointer "
        >
          <Plus size={100} className="w-96 h-56" />
          <h1 className="text-xl group-hover:text-gray-200 font-bold mt-5 transition-all">
            Mais
          </h1>
        </Link>
      </div>
    </section>
  );
}
