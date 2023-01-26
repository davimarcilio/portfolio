import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex w-full h-screen max-h-screen items-center">
        <Image width={200} height={500} src={"/Perfil.jpg"} alt="" />
      </section>
    </>
  );
}
