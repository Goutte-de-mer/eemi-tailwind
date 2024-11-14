import Image from "next/image";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Arrow from "./Arrow";

const Carousel = ({ slides }) => {
  const slidesList = slides.map((slide, index) => {
    return (
      <div key={index} className="flex flex-col-reverse sm:flex-row sm:gap-10">
        <div className="w-full sm:w-1/2 flex flex-col">
          <h2 className="text-lg sm:text-3xl mb-6">{slide.title}</h2>
          <p className="text-slate-400 mb-4">{slide.description}</p>
          <div className="flex gap-6 mt-auto">
            <Arrow icon={faArrowLeft} />
            <Arrow icon={faArrowRight} />
          </div>
        </div>
        <div className="w-full sm:w-1/2 rounded-xl overflow-hidden">
          <Image
            width={400}
            height={300}
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    );
  });
  return <div className="max-w-[1000px] mx-auto mt-40">{slidesList}</div>;
};

export default Carousel;
