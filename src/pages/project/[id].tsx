import { Projects } from "@/data/Projects";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowBendUpLeft } from "phosphor-react";

interface ProjectProps {
  title: string;
  description: string;
  mediaUrl: string;
  deployUrl: string;
  repoUrl: string;
}

export default function Project({
  description,
  mediaUrl,
  title,
  deployUrl,
  repoUrl,
}: ProjectProps) {
  const router = useRouter();
  return (
    <div className="w-full flex min-h-screen flex-col justify-center gap-5 items-center relative">
      <div className="relative w-full flex justify-center items-center">
        <button
          onClick={() => router.back()}
          className="absolute left-5 cursor-pointer"
        >
          {" "}
          <ArrowBendUpLeft size={50} />{" "}
        </button>
        <h1 className="text-4xl font-bold"> {title} </h1>
      </div>
      <iframe
        className="w-full h-2/3 bg-transparent"
        src={mediaUrl}
        title="E-Commerce ignite"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <p className="text-xl">{description}</p>
      <Link href={deployUrl}>Teste o projeto</Link>
      <Link href={repoUrl}>Repositório</Link>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<
  any,
  { id: string }
> = async ({ params }) => {
  const id = Number(params?.id);

  const project = Projects.filter((project) => project.id === id)[0];

  return {
    props: {
      title: project.title,
      description: project.description,
      mediaUrl: project.mediaUrl,
      deployUrl: project.deployUrl,
      repoUrl: project.repoUrl,
    },
  };
};
