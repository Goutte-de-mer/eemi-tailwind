import React from "react";

const BannerInfo = ({ label, number }) => {
  return (
    <div className="text-center text-white">
      <p className="mb-2">{label}</p>
      <p className="text-xl font-bold sm:text-2xl">{number}</p>
    </div>
  );
};

export default BannerInfo;
