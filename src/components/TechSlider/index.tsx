import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { TechItem } from "./components/TechItem";

interface TechSliderProps {
  repoTags: string[];
}

export function TechSlider({ repoTags }: TechSliderProps) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    mode: "free",

    slides: {
      perView: "auto",
      spacing: 10,
    },
  });

  return (
    <div
      ref={ref}
      className="keen-slider text-xs font-bold w-full self-start  overflow-hidden"
    >
      {repoTags.length > 0 &&
        repoTags.map((tag) => {
          return <TechItem> {tag} </TechItem>;
        })}
    </div>
  );
}
