import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import "aos/dist/aos.css";
import aos from "aos";
import { StackCard } from "@/components/StackCard";
import { Stacks } from "@/data/Stacks";
import { At, DownloadSimple, MapPin } from "phosphor-react";
import { Header } from "@/components/Header";
import { ProjectsSection } from "@/components/Section";
import { EducationCard } from "@/components/EducationCard";
import Lottie from "lottie-react";
import searchJob from "../anim/searchJob.json";
export default function Home() {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Header />

      <section
        id="home"
        className={`flex w-full h-screen max-h-screen items-center justify-center`}
      >
        <div data-aos="fade-right" className="flex justify-end mr-10">
          <Image
            className="rounded-xl ring-4 ring-offset-4 ring-offset-stone-900"
            width={250}
            height={500}
            src={"/Perfil.jpg"}
            alt=""
          />
        </div>
        <div className="max-w-md w-full flex flex-col gap-5">
          <h1 className="text-2xl font-bold" data-aos="fade-down">
            Olá eu sou{" "}
            <TypeAnimation
              sequence={[
                2500,
                "Desenvolvedor Front-End",
                2000,
                "Desenvolvedor Back-End",
                2000,
                "Desenvolvedor Full-Stack",
                3000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={1}
              style={{ color: "#3b82f6" }}
            />
          </h1>
          <Link
            data-aos="fade-left"
            className="flex items-center gap-2"
            href={"mailto:davimarcilio.js@gmail.com"}
          >
            <At size={24} weight="fill" />
            davimarcilio.js@gmail.com
          </Link>
          <span data-aos="fade-left" className="flex items-center gap-2">
            <MapPin size={24} weight="fill" />
            Criciúma, Santa Catarina
          </span>
          <Link
            data-aos="fade-up"
            href={
              "https://cdn.discordapp.com/attachments/468214793199943690/1068253859446796459/Curr_C3_ADculoDaviMarcilio.pdf"
            }
            className="bg-sky-700 px-6 py-2 rounded-md transition-colors hover:bg-sky-900 font-bold text-xl w-fit flex items-center gap-2"
          >
            <DownloadSimple weight="fill" size={22} />
            Baixar CV
          </Link>
        </div>
      </section>
      <section
        id="about"
        className="bg-zinc-800 rounded-3xl p-10  flex  w-full  gap-10"
      >
        <div className="flex-1">
          <section className=" dark:text-gray-100">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
              <div className="grid gap-4 mx-4 sm:grid-cols-12">
                <div
                  data-aos="fade-right"
                  className="col-span-12 sm:col-span-3"
                >
                  <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-sky-400">
                    <h3 className="text-3xl font-semibold">
                      Um pouco sobre minha história
                    </h3>
                    {/* <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                      Vestibulum diam nunc
                    </span> */}
                  </div>
                </div>
                <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                  <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                    <div
                      data-aos="fade-up"
                      className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-sky-400"
                    >
                      <h3 className="text-xl font-semibold tracking-wide">
                        Primeiro contato com programação{" "}
                      </h3>
                      <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                        2018
                      </time>
                      <p className="mt-3">
                        meu primeiro contato com programação, foi tentando criar
                        um servidor de FiveM(Jogo online), tive um breve contato
                        com Lua e com MySQL, acabei não conseguindo criar o
                        servidor e desisti.
                      </p>
                    </div>
                    <div
                      data-aos="fade-up"
                      className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-sky-400"
                    >
                      <h3 className="text-xl font-semibold tracking-wide">
                        Chegando no ensino médio
                      </h3>
                      <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                        2021
                      </time>
                      <p className="mt-3">
                        chegando no ensino médio(integrado com curso técnico),
                        entrei no curso de edificações, após 6 meses estudando
                        percebi que edificações não era para mim. <br />
                        Após isso decidi mudar de curso desta vez informática,
                        no começo achei que iria aprender Excel, PowerPoint,
                        Word essas coisas.
                      </p>
                    </div>
                    <div
                      data-aos="fade-up"
                      className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-sky-400"
                    >
                      <h3 className="text-xl font-semibold tracking-wide">
                        Programação de fato
                      </h3>
                      <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                        2021
                      </time>
                      <p className="mt-3">
                        Na primeira aula do curso técnico o professor estava
                        passando Pascal, ao ver uma logica simples do pascal me
                        identifiquei, a partir dai eu comecei a estudar bastante
                        logica de programação.
                      </p>
                    </div>
                    <div
                      data-aos="fade-up"
                      className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-sky-400"
                    >
                      <h3 className="text-xl font-semibold tracking-wide">
                        Conhecendo a WEB
                      </h3>
                      <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                        2022
                      </time>
                      <p className="mt-3">
                        Só fui me aprofundar na programação quando o professor
                        passou um trabalho simples de conexão com o banco de
                        dados pelo php, a partir dai comecei a AMAR programação,
                        no mesmo dia que eu terminei o trabalho fui procurar
                        linguagens WEB para aprender e me deparei com vários
                        cursos.
                      </p>
                    </div>
                    <div
                      data-aos="fade-up"
                      className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-sky-400"
                    >
                      <h3 className="text-xl font-semibold tracking-wide">
                        Primeiro curso
                      </h3>
                      <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                        2022
                      </time>
                      <p className="mt-3">
                        Após pesquisar muito sobre cursos de desenvolvimento WEB
                        escolhi um de Desenvolvimento Full-Stack da instituição
                        ProgramadorBR. A partir dai eu não parei mais, estudava
                        4 horas por dia, quando tinha feriado estudava até 8
                        horas!
                      </p>
                    </div>
                    <div
                      data-aos="fade-up"
                      className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-sky-400"
                    >
                      <h3 className="text-xl font-semibold tracking-wide">
                        Especialização
                      </h3>
                      <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                        2023
                      </time>
                      <p className="mt-3">
                        Hoje em dia já conclui o curso ProgramadorBR e estou me
                        especializando em React, React Native, NodeJs e Elixir!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section
        id="stacks"
        className="flex flex-col gap-10 w-full h-screen max-h-screen p-10 mt-52 relative justify-center  before:content-[''] before:-top-10 before:absolute before:w-full before:bg-sky-800 before:h-1  items-center rounded-full"
      >
        <h1 data-aos="fade-down" className="text-5xl font-bold ">
          Stacks
        </h1>
        <div className="grid grid-cols-4 gap-20 m-5 ">
          {Stacks.map((stack) => (
            <StackCard
              description={stack.description}
              src={stack.src}
              alt={stack.alt}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col w-full bg-neutral-900 rounded-sm py-20 gap-10">
        <div className="flex w-full justify-between items-center">
          <h1 className="flex-1 flex justify-center text-3xl font-bold">
            Educação
          </h1>
          <h2 className="flex-1 flex justify-center text-3xl font-bold">
            Experiências Profissionais
          </h2>
        </div>
        <div className="flex w-full justify-between items-center">
          {/* Educação */}

          <div className="flex-1 flex flex-col justify-center items-center gap-5">
            <EducationCard
              title="Curso Técnico"
              time={"2021 - 2023"}
              company="CEDUP Ábilio Paulo"
              description="Lógica de Programação, Modelagem de Sistemas, Programação de
              Aplicativos, Implantação e Manutenção de Sistemas, Teste de
              Software."
            />

            <EducationCard
              title="Curso Desenvolvimento WEB Full-Stack"
              time={"2022"}
              company="ProgramadorBR"
              description="HTML, CSS, Javascript, Firebase, jQuery, Bootstrap, NodeJS,
              MongoDB, ReactJS e Electron."
            />

            <EducationCard
              title="Especialização"
              time={"2023"}
              company="Rocketseat"
              description="React, React Native, NodeJs, Elixir, TypeScript"
            />

            <EducationCard
              company="YouTube/Fóruns"
              description="Git, GitHub, GitHub para times, RegEx, CleanCode, etc..."
              time="2021 - Inf"
              title="Outros"
              key={89231}
            />
          </div>

          {/* Educação */}

          <div className="flex-1 flex flex-col gap-5 justify-center items-center ">
            <h1 className="text-2xl font-bold text-zinc-300">
              Procurando vagas
            </h1>
            <Lottie
              className="w-8/12  relative bg-blue-600 rounded-3xl after:rounded-3xl after:content-[''] after:absolute after:top-0 after:w-20 after:right-0 after:h-full after:bg-blue-600 before:content-[''] before:rounded-3xl before:absolute before:top-0 before:z-10 before:w-20 before:left-0 before:h-full before:bg-blue-600"
              animationData={searchJob}
            />
          </div>
        </div>
      </section>
      <ProjectsSection />
    </>
  );
}
