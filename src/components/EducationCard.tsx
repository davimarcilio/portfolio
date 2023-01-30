interface EducationCardProps {
  description: string;
  company: string;
  time: string;
  title: string;
}

export function EducationCard({
  company,
  description,
  time,
  title,
}: EducationCardProps) {
  return (
    <div
      data-aos="fade-right"
      className="flex flex-col gap-3 max-sm:w-full w-8/12 border-4 transition-colors group hover:border-blue-900  border-blue-600 rounded-md px-5 py-6"
    >
      <div className="flex justify-between items-center gap-5">
        <h1 className="font-bold text-xl"> {title} </h1>
        <time className="text-zinc-400 text-xs font-bold">{time}</time>
      </div>
      <span className="text-2xl font-extrabold transition-colors text-sky-700 group-hover:text-sky-900">
        {company}
      </span>
      <p className="text-sm text-zinc-200">{description}</p>
    </div>
  );
}
