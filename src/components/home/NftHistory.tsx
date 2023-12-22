"use client";
import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { BiBarChartAlt2 } from "react-icons/bi";
const NftHistory = () => {
  const [isAppRendered, setIsAppRendered] = useState(false);
  useEffect(() => {
    setIsAppRendered(true);
  }, []);
  return isAppRendered ? (
    <div className="bg-gray-100 py-32">
      <div className="content-container">
        <Row gutter={30}>
          <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <h1 className="text-3xl font-[1000] uppercase">
              The amazing nft art of the world here
            </h1>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <div className="flex gap-2 mt-8 md:mt-0">
              <div className="text-3xl">
                <MdOutlineBookmarkAdded />
              </div>
              <div>
                <h1 className="text-xl font-bold">Fast Transaction</h1>
                <p className="mt-2 text-base text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur ullam odit a dolorem, veniam veritatis ipsum
                </p>
              </div>
            </div>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <div className="flex gap-2 mt-8 md:mt-">
              <div className="text-3xl">
                <BiBarChartAlt2 />
              </div>
              <div>
                <h1 className="text-xl font-bold">Growth Transaction</h1>
                <p className="mt-2 text-base text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur ullam odit a dolorem.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default NftHistory;
