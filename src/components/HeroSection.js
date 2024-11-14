import Image from "next/image";
import Header from "./Header";
import ButtonGradient from "./ButtonGradient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

const HeroSection = () => {
  return (
    <section className="flex flex-col h-[95vh]">
      <Header />
      <div className="m-auto flex items-center gap-24">
        {/* LEFT COLUMN */}
        <div className="">
          <h1 className="text-5xl font-semibold mb-7">
            Find your new <br /> companion
          </h1>
          <div className="flex items-center">
            <div className="bg-[#ffdfea] p-3 w-fit rounded-full mr-4">
              <Image
                width={150}
                height={150}
                src={"/img/heart-eyes.png"}
                alt="cat with heart eyes"
                className="w-9 sm:w-11"
              />
            </div>

            <p className="text-slate-400 font-medium">
              Connecting awesome people with happy, <br /> healthy kitten from
              prescreened
            </p>
          </div>
          <div className="mt-10 flex items-center gap-5  m-auto w-fit">
            <ButtonGradient />
            <div className="text-purple cursor-pointer whitespace-nowrap">
              <FontAwesomeIcon
                icon={faCirclePlay}
                size="2xl"
                className="mr-3"
              />
              Watch Kitten
            </div>
          </div>
        </div>
        {/* RIGHT COLUMN */}
        <div>
          <Image
            width={400}
            height={500}
            alt="3d illustration of cat"
            src={"/img/cat.png"}
            className="sm:w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
