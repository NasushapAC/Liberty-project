import React from 'react';
import { Button, Row, Col } from "react-bootstrap";

import BlogCard from './blog_card'
import "bootstrap/dist/css/bootstrap.min.css";
import "./section4.css";
import planet from "../../Images/BG/Planet.svg";


const Section4 = () => {
  return (
    <div className="container s4_container mt-5 mb-5">
      <div className="s4_wrapper">
        <img
          alt="planet"
          src={planet}
          className="planet_css img"
          resizeMode="cover"
        />
        <Row
          className="mt-5 mb-5 justify-content-center s4_row"
          style={{ marginLeft: "0px" }}
        >
          <Col style={{ marginLeft: "0px" }}>
            <h1 className="s4_h1">BLOG</h1>
          </Col>
        </Row>
        <Row style={{ marginLeft: "0px" }}>
          <Col className="s4_col" xs={12} md={4} style={{ marginLeft: "0px" }}>
            <BlogCard></BlogCard>
          </Col>
          <Col className="s4_col" xs={12} md={4} style={{ marginLeft: "0px" }}>
            <BlogCard></BlogCard>
          </Col>
          <Col className="s4_col" xs={12} md={4} style={{ marginLeft: "0px" }}>
            <BlogCard></BlogCard>
          </Col>
        </Row>
        <Row
          className="mt-5 mb-5  justify-content-center"
          style={{ marginLeft: "0px" }}
        >
          <Col className="btn_alignment" style={{ marginLeft: "0px" }}>
            <Button className="s4-btn-custom" variant="primary">
              VIEW OUR BLOG
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Section4;

    // display: flex;
    // justify-content: center;
    // align-items: center;