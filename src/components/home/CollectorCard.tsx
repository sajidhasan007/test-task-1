import { Avatar } from "antd";
import React, { FC } from "react";
import { GoZap } from "react-icons/go"; // Import Swiper styles

interface ICollectorCardProps {
  slNo: number;
  title: string;
  price: number;
  percentage: string;
  totalData: number;
}

const CollectorCard: FC<ICollectorCardProps> = ({
  slNo,
  title,
  price,
  percentage,
  totalData,
}) => {
  return (
    <div className="">
      <div className="flex items-center gap-2 ">
        <h3 className="font-extrabold text-2xl text-black">{slNo}</h3>
        <div className="flex items-center justify-between gap-4">
          <Avatar src="/image-10.jpg" size={"large"} />
          <div className="">
            <h3 className="font-extrabold text-lg text-black">{title}</h3>
            <div className="flex items-center gap-2">
              <GoZap />
              <p>{price}</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-green-600 ">{percentage}</h2>
        </div>
      </div>
      {slNo !== totalData ? <hr className="my-3" /> : <></>}
    </div>
  );
};

export default CollectorCard;
