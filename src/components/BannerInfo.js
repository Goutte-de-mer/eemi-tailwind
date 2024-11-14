import React from "react";

const BannerInfo = ({ label, number }) => {
  return (
    <div className="text-white text-center">
      <p className="mb-2">{label}</p>
      <p className="text-2xl font-bold">{number}</p>
    </div>
  );
};

export default BannerInfo;
