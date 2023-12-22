"use client";
import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import CardSlider from "./CardSlider";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isAppRendered, setIsAppRendered] = useState(false);
  useEffect(() => {
    setIsAppRendered(true);
  }, []);
  return isAppRendered ? (
    <div className="mt-8 content-container pb-32">
      <Row>
        <Col
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
          className="mt-8"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.5, duration: 1 }}
          >
            <h1 className="text-5xl font-[1000] uppercase">
              Discover, And CLLect DigiTal Art NEFTS
            </h1>
            <p className="mt-4">
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy,Sell, and discover exclusive digital assets.
            </p>
            <div className="button-primary mt-8 w-full md:w-80">Explore</div>
          </motion.div>
        </Col>

        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
        >
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.5, duration: 1 }}
          >
            <div className="flex justify-end mt-6 md:mt-0">
              <CardSlider />
            </div>
          </motion.div>
        </Col>
      </Row>
    </div>
  ) : (
    <></>
  );
};

export default HeroSection;
