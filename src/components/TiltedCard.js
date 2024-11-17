"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TiltedCard = ({ img, text, title, index }) => {
  const [isBlue, setIsBlue] = useState(true);
  useEffect(() => {
    setIsBlue(index % 2 === 0);
  }, [index]);

  const cardColors = (isBlue) =>
    isBlue ? "bg-blue_lighter text-[#16696d]" : "gradient text-white";

  const btnColor = (isBlue) => (isBlue ? "bg-purple" : "bg-blue");

  return (
    <div
      className={`${cardColors(
        isBlue,
      )} relative h-64 w-[290px] min-w-[260px] skew-y-6 rounded-2xl p-6`}
    >
      <div className="-translate-y-9 -skew-y-6 text-center">
        <Image
          height={100}
          width={100}
          src={`${img}`}
          alt="cute kitten illustration"
          className="m-auto -translate-y-9"
        />
        <div className="-translate-y-4">
          <h2 className="mb-3 font-semibold">{title}</h2>
          <p className="text-[0.85rem]">{text}</p>
        </div>
      </div>
      <button
        className={`${btnColor(
          isBlue,
        )} hover:hover absolute bottom-[-24px] left-[40%] h-12 w-12 -skew-y-6 rounded-full text-white`}
      >
        <FontAwesomeIcon size="lg" icon={faArrowRight} />
      </button>
    </div>
  );
};

export default TiltedCard;
