"use client";
import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import CardSlider from "./CardSlider";

const HeroSection = () => {
  const [isAppRendered, setIsAppRendered] = useState(false);
  useEffect(() => {
    setIsAppRendered(true);
  }, []);
  return isAppRendered ? (
    <div className="mt-8 content-container border">
      <Row>
        <Col
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
          className="mt-8"
        >
          <h1 className="text-5xl font-[1000] uppercase">
            Discover, And CLLect DigiTal Art NEFTS
          </h1>
          <p className="mt-4">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy,Sell, and discover exclusive digital assets.
          </p>
          <div className="button-primary mt-8 w-full md:w-80">Explore</div>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
        >
          <div className="flex justify-end">
            <CardSlider />
          </div>
        </Col>
      </Row>
    </div>
  ) : (
    <></>
  );
};

export default HeroSection;
