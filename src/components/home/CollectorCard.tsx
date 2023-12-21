import { Avatar } from "antd";
import React from "react";
import { GoZap } from "react-icons/go"; // Import Swiper styles

const CollectorCard = () => {
  return (
    <div className="flex items-center gap-2">
      <h3 className="font-extrabold text-4xl text-black">1</h3>
      <div className="flex items-center gap-4">
        <Avatar src="/image-10.jpg" size={"large"} />
        <div className="">
          <h3 className="font-extrabold text-lg text-black">CryptoFunks</h3>
          <div className="flex items-center gap-2">
            <GoZap />
            <p>19,769.23</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-green-600">+26.52%</h2>
      </div>
    </div>
  );
};

export default CollectorCard;
