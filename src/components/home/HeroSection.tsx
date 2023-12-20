import { Col, Row } from "antd";
import React from "react";

const HeroSection = () => {
  return (
    <div className="mt-20">
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
        >
          <h1 className="text-5xl font-[1000] uppercase">
            Discover, And CLLect DigiTal Art NEFTS
          </h1>
          <p className="mt-4">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy,Sell, and discover exclusive digital assets.
          </p>
          <div className="button-primary mt-8 w-full">Explore</div>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
        ></Col>
      </Row>
    </div>
  );
};

export default HeroSection;
