export default function Project() {
  return (
    <div className="bg-red-500 w-full h-screen flex flex-col justify-center gap-5 items-center relative">
      <div className="relative w-full flex justify-center items-center">
        <span className="absolute left-5">A</span>
        <h1 className="text-4xl font-bold">E-Commerce de cafés</h1>
      </div>
      <iframe
        className="w-full h-2/3 bg-transparent"
        src="https://www.youtube.com/embed/VGEtLpqjJ7g"
        title="E-Commerce ignite"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <p>Descrição</p>
    </div>
  );
}
