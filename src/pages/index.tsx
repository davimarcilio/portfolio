import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Section } from "../components/Section";
import "aos/dist/aos.css";
import aos from "aos";

export default function Home() {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section
        className={`flex w-full h-screen max-h-screen items-center justify-center`}
      >
        <div className="flex justify-end mr-10">
          <Image
            className="rounded-xl ring-4 ring-offset-4 ring-offset-stone-900"
            width={250}
            height={500}
            src={"/Perfil.jpg"}
            alt=""
          />
        </div>
        <div className="max-w-md w-full flex flex-col gap-5">
          <h1 className="text-2xl font-bold ">
            Olá eu sou{" "}
            <TypeAnimation
              sequence={[
                1500,
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
            href={
              "https://cdn.discordapp.com/attachments/468214793199943690/1068253859446796459/Curr_C3_ADculoDaviMarcilio.pdf"
            }
            className="bg-sky-700 px-6 py-2 rounded-md transition-colors hover:bg-sky-900 font-bold text-xl w-fit"
          >
            Baixar CV
          </Link>
        </div>
      </section>
      <section className="bg-zinc-800 rounded-3xl p-10  flex  w-full  gap-10">
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
      <section></section>
    </>
  );
}
