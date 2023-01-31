import Link from "next/link";
import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  MapPin,
  Phone,
} from "phosphor-react";

export const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 bg-neutral-800 rounded-md mt-10 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-2">
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-100">
            Contato
          </p>
          <div className="flex items-center gap-2 group">
            <p className="mr-1 text-gray-100 transition-colors group-hover:text-gray-300">
              <Phone size={24} />
            </p>
            <span
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-gray-100 group-hover:text-gray-300"
            >
              +55 48 9 9125-6373
            </span>
          </div>
          <div className="flex items-center gap-2 group">
            <p className="mr-1 text-gray-100 group-hover:text-gray-300">
              <Envelope size={24} />
            </p>
            <Link
              href="mailto:davimarcilio.js@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-gray-100 group-hover:text-gray-300"
            >
              davimarcilio.js@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-2 group group-hover:text-gray-300">
            <p className="mr-1 text-gray-100">
              <MapPin size={24} />
            </p>
            <Link
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-gray-100 group-hover:text-gray-300"
            >
              Criciúma, Santa Catarina
            </Link>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-100">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <Link
              target={"_blank"}
              href="https://github.com/davimarcilio"
              className="text-gray-500 hover:text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <GithubLogo weight="fill" size={24} />
            </Link>

            <Link
              target={"_blank"}
              href="https://www.linkedin.com/in/davi-marcilio-89a694240/"
              className="text-gray-500 hover:text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <LinkedinLogo weight="fill" size={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-300">
          © Copyright 2023 Davi Marcilio. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};
