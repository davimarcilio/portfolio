import { Projects } from "@/data/Projects";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowBendUpLeft, GithubLogo, Monitor } from "phosphor-react";

interface ProjectProps {
  title: string;
  description: string;
  mediaUrl: string;
  deployUrl: string;
  repoUrl: string;
  isMedia: boolean;
  imageUrl: string;
}

export default function Project({
  description,
  mediaUrl,
  title,
  deployUrl,
  repoUrl,
  imageUrl,
  isMedia,
}: ProjectProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="w-full flex min-h-screen flex-col justify-center gap-5 items-center relative my-5 ">
        <div className="relative w-full max-sm:static flex justify-center items-center">
          <button
            onClick={() => router.push("/#projects")}
            className="absolute max-sm:top-5 left-5 cursor-pointer"
          >
            <ArrowBendUpLeft size={50} />
          </button>
          <h1 className="text-4xl font-bold"> {title} </h1>
        </div>
        {isMedia ? (
          <iframe
            className="w-full max-sm:h-full h-2/3 bg-transparent"
            src={mediaUrl}
            title="E-Commerce ignite"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        ) : (
          <Image
            className="w-10/12 max-sm:w-full max-sm:h-full h-10/12"
            alt={title}
            height={1000}
            width={1000}
            src={imageUrl}
          />
        )}

        <p className="text-xl">{description}</p>
        <div className="flex max-sm:flex-col gap-5">
          {deployUrl && (
            <Link
              className="bg-sky-700 hover:bg-sky-800 transition-colors px-10 py-3 font-bold text-xl rounded-md flex items-center gap-5 justify-center"
              href={deployUrl}
            >
              <Monitor weight="bold" size={24} />
              Teste o projeto
            </Link>
          )}

          <Link
            className="bg-blue-700 hover:bg-blue-800 transition-colors px-10 py-3 font-bold text-xl rounded-md flex items-center gap-5 justify-center"
            href={repoUrl}
          >
            <GithubLogo weight="bold" size={24} />
            Repositório
          </Link>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Projects.map((project) => ({
    params: { id: String(project.id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const id = Number(params?.id);

  const project = Projects.filter((project) => project.id === id)[0];

  return {
    props: {
      title: project.title,
      isMedia: project.isMedia,
      description: project.description,
      imageUrl: project.imageUrl,
      mediaUrl: project.mediaUrl,
      deployUrl: project.deployUrl || "",
      repoUrl: project.repoUrl,
    },
  };
};
