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
        isBlue
      )} w-[290px] min-w-[200px] p-6 rounded-2xl h-64 skew-y-6 relative`}
    >
      <div className="-skew-y-6 text-center -translate-y-9">
        <Image
          height={100}
          width={100}
          src={`${img}`}
          alt="cute kitten illustration"
          className="m-auto -translate-y-9"
        />
        <div className=" -translate-y-4">
          <h2 className="font-semibold mb-3">{title}</h2>
          <p className="text-[0.85rem]">{text}</p>
        </div>
      </div>
      <button
        className={`${btnColor(
          isBlue
        )} text-white h-12 w-12 -skew-y-6 rounded-full absolute bottom-[-24px] left-[40%]`}
      >
        <FontAwesomeIcon size="lg" icon={faArrowRight} />
      </button>
    </div>
  );
};

export default TiltedCard;
