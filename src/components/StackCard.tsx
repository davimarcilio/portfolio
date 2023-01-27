import Image from "next/image";
import * as HoverCard from "@radix-ui/react-hover-card";

interface StackCard {
  src: string;
  alt: string;
  description: string;
}

export function StackCard({ alt, src, description }: StackCard) {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <div
          data-aos="fade-up"
          className="ring ring-blue-600 w-28 h-28 ring-offset-4 ring-offset-stone-900 p-2 rounded-md relative flex justify-center items-center"
        >
          <Image
            className="hover:w-32 hover:h-32 transition-all absolute"
            width={100}
            height={100}
            src={src}
            alt={alt}
          />
        </div>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content className="bg-zinc-200 max-w-sm shadow-xl flex flex-col text-zinc-900 px-5 py-7 rounded-md font-inter">
          <div className="w-full flex justify-between items-center p-5">
            <h1 className="text-xl font-bold ">{alt}</h1>
            <div className="bg-stone-900 p-2 rounded-md">
              <Image alt={alt} width={30} height={30} src={src} />
            </div>
          </div>
          <hr className="bg-black" />
          <p className="p-5 font-semibold">{description}</p>
          <HoverCard.Arrow
            className="fill-zinc-100 rounded-b-full"
            width={40}
            height={20}
          >
            {" "}
          </HoverCard.Arrow>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
