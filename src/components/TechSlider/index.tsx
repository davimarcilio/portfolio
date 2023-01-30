import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { TechItem } from "./components/TechItem";
export function TechSlider() {
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
      className="keen-slider text-xs font-bold w-full  overflow-hidden"
    >
      <TechItem>TypeScript</TechItem>
      <TechItem>Node</TechItem>
      <TechItem>React</TechItem>
      <TechItem>JavaScript</TechItem>
      <TechItem>TypeScript</TechItem>
    </div>
  );
}
