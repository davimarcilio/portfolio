import { TechSlider } from "@/components/TechSlider";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    mediaUrl: string;
    isMedia: boolean;
    imageUrl: string;
    repoUrl: string;
    deployUrl?: string;
  };
  repoTags: string[];
}

export function Project({ project, repoTags }: ProjectProps) {
  return (
    <Link
      data-aos="fade-up"
      key={project.id}
      href={`/project/${project.id}`}
      className="bg-neutral-800 flex flex-col gap-5 p-5 justify-center items-center group hover:bg-neutral-900 rounded-lg transition-all cursor-pointer"
    >
      <Image
        width={500}
        height={500}
        src={project.imageUrl}
        alt="Projeto"
        className="group-hover:opacity-70 w-96 h-56 transition-all  "
      />
      {repoTags.length > 0 && <TechSlider repoTags={repoTags} />}
      <h1 className="text-xl self-start group-hover:text-gray-200 font-bold  transition-all">
        {project.title}
      </h1>
    </Link>
  );
}
