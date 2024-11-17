import HeroSection from "@/components/HeroSection";
import BannerInfo from "@/components/BannerInfo";
import ButtonBorder from "@/components/buttons/ButtonBorder";
import TiltedCard from "@/components/TiltedCard";
import Carousel from "@/components/Carousel";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { bannerInfos, cardsInfos, slides } from "@/data";

const HomepageView = () => {
  const infos = bannerInfos.map((e, i) => {
    return <BannerInfo key={i} label={e.label} number={e.number} />;
  });

  const cards = cardsInfos.map((card, i) => {
    return (
      <TiltedCard
        key={i}
        img={card.img}
        title={card.title}
        text={card.text}
        index={i}
      />
    );
  });

  return (
    <>
      <HeroSection />
      <div className="gradient section flex flex-col justify-center gap-10 rounded-xl p-6 py-10 text-white shadow-lg shadow-indigo-500/50 sm:flex-row">
        <div className="flex w-full items-center justify-around gap-5 sm:w-[45%]">
          {infos}
        </div>
        <div className="line"></div>
        <div className="w-full sm:w-[45%]">
          <h4 className="mb-4 text-xl font-semibold">Our Testimoni</h4>
          <p>
            We adopted our puppy. Although I was skeptical, everything turned
            out perfect!
          </p>
        </div>
      </div>

      <div className="section my-20 flex flex-col gap-7 sm:flex-row">
        <div>
          <h2 className="mb-4 text-lg font-medium sm:text-3xl">
            Featured Cute Kittens for Adopt
          </h2>
          <p className="text-slate-400">
            {`Pewpew connects pawsome people like you with happy, healthy kitten
            from our respected, prominent breeder relationships we've
            established over the last 5 years.`}
          </p>
        </div>
        <div>
          <ButtonBorder text={"View all Kittens"} />
        </div>
      </div>

      <div className="mt-28 flex flex-col items-center justify-center gap-20 mdCustom:flex-row mdCustom:gap-10">
        {cards}
      </div>
      <Carousel slides={slides} />
      <Newsletter />
    </>
  );
};

export default HomepageView;
