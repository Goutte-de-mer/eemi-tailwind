import Image from "next/image";
import Header from "./Header";
import ButtonGradient from "./buttons/ButtonGradient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

const HeroSection = () => {
  return (
    <section className="flex h-[70vh] flex-col sm:h-[95vh]">
      <div className="m-auto flex items-center gap-24">
        {/* LEFT COLUMN */}
        <div className="">
          <h1 className="mb-7 text-3xl font-semibold sm:text-5xl">
            Find your neeww <br /> companion
          </h1>
          <div className="flex items-center">
            <div className="mr-4 w-fit rounded-full bg-[#ffdfea] p-3">
              <Image
                width={150}
                height={150}
                src={"/img/heart-eyes.png"}
                alt="cat with heart eyes"
                className="w-9 sm:w-11"
              />
            </div>

            <p className="font-medium text-slate-400">
              Connecting awesome people with happy, <br /> healthy kitten from
              prescreened
            </p>
          </div>
          <div className="m-auto mt-10 flex w-fit flex-wrap items-center gap-5">
            <ButtonGradient />
            <div className="text-small group cursor-pointer whitespace-nowrap text-purple">
              <FontAwesomeIcon
                icon={faCirclePlay}
                size="2xl"
                className="group-hover:hover mr-3"
              />
              Watch Kitten
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hidden md:block">
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
