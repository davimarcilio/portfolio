import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <section className="flex w-full h-screen max-h-screen items-center justify-center">
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
    </>
  );
}
