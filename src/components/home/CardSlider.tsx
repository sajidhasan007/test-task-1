"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { GoZap } from "react-icons/go"; // Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import { Avatar } from "antd";

const CardSlider = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <div className="bg-[url('/image-6.jpg')]"> */}
          <Image
            src={"/image-6.jpg"}
            fill
            alt="slider image"
            // className="opacity-80"
          />
          <div className="absolute z-50">
            <h2 className="text-white font-extrabold text-2xl">
              Abstr Gradient NFT
            </h2>
            <div className="flex items-center gap-4">
              <Avatar src="/image-10.jpg" />
              <h3 className="text-white font-extrabold text-lg">
                Md Sajid Hasan
              </h3>
            </div>
          </div>
          <div className="w-10/12 absolute bottom-16 bg-slate-400/50 px-6 py-2 rounded-xl">
            <div className="text-base text-white font-bold flex items-center justify-between">
              <h4>Current Bid</h4>
              <h4>End In</h4>
            </div>
            <div className="flex items-center justify-between text-lg font-bold text-white">
              <div className="flex items-center gap-2 ">
                <GoZap />
                <h3 className="">0.25 ETH</h3>
              </div>
              <h1>12h 43m 42s</h1>
            </div>
          </div>
          {/* </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/image-7.jpg"} fill alt="slider image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/image-8.jpg"} fill alt="slider image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/images-1.jpeg"} fill alt="slider image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default CardSlider;
