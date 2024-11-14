import HeroSection from "@/components/HeroSection";
import BannerInfo from "@/components/BannerInfo";
import ButtonBorder from "@/components/ButtonBorder";
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
      <div className="shadow-lg shadow-indigo-500/50 gradient p-6 py-10 rounded-xl flex justify-center gap-10 text-white section">
        <div className="flex w-[45%] gap-5 justify-around after items-center">
          {infos}
        </div>
        <div className="w-[45%]">
          <h4 className="text-xl font-semibold mb-4">Our Testimoni</h4>
          <p>
            We adopted our puppy. Although I was skeptical, everything turned
            out perfect!
          </p>
        </div>
      </div>
      <div className="section flex gap-7 my-20">
        <div>
          <h2 className=" text-lg sm:text-3xl font-medium mb-4">
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
      <div className="flex-col md:flex-row items-center flex gap-10 justify-center mt-28">
        {cards}
      </div>
      <Carousel slides={slides} />
      <Newsletter />
      <Footer />
    </>
  );
};

export default HomepageView;
