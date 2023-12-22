import React from "react";
import TopCollection from "./TopCollection";
import { Col, Row } from "antd";
import ThumbnailGallery from "../common/ThumbnailGallery";

const HomeTopCollections = () => {
  return (
    <div className="content-container py-32 ">
      <Row>
        <Col
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 16 }}
          className="mt-8"
        >
          <ThumbnailGallery />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
          <TopCollection />
        </Col>
      </Row>
    </div>
  );
};

export default HomeTopCollections;
