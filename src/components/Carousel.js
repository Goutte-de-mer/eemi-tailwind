import Image from "next/image";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Arrow from "./Arrow";

const Carousel = ({ slides }) => {
  const slidesList = slides.map((slide, index) => {
    return (
      <div
        key={index}
        className="flex max-w-[500px] flex-col-reverse gap-10 md:max-w-full md:flex-row"
      >
        <div className="flex w-full flex-col md:w-1/2">
          <h2 className="mb-6 text-xl md:text-3xl">{slide.title}</h2>
          <p className="mb-4 text-justify text-slate-400">
            {slide.description}
          </p>
          <div className="mt-auto flex justify-center gap-6 md:justify-start">
            <Arrow icon={faArrowLeft} />
            <Arrow icon={faArrowRight} />
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-xl md:w-1/2">
          <Image
            width={400}
            height={300}
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    );
  });
  return (
    <div className="section mt-28 flex justify-center md:mt-40 md:block">
      {slidesList}
    </div>
  );
};

export default Carousel;
