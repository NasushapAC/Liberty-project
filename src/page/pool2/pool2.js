import React from "react";
import { Row, Col } from "react-bootstrap";

import "./pool2.css";
// import "./secti  on2.css";

import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer";

import LdrDai from "./ldr_dai";
import LbsDai from "./lbs_dai";
import Sc1 from "./small_pool_cards/small_card_1";
import Sc2 from "./small_pool_cards/small_card_2";
import Sc3 from "./small_pool_cards/small_card_3";
import Sc4 from "./small_pool_cards/small_card_4";
import Sc5 from "./small_pool_cards/small_card_5";
import Sc6 from "./small_pool_cards/small_card_6";

import planet from "../../Images/BG/Planet.svg"

const Section2 = () => {
  return (
    <div className="">
        <img className="pool_planet_css" src={planet} alt="planet"></img>
      <Navbar>
      </Navbar>
      <div className="container s2 align-middle mt-5 mb-5">
        <div className="container s2">
          <Row className="Row_css">
            <h1 className="h1_css">Pools</h1>
          </Row>
        </div>
        <div className="s2 align-middle mt-2 mb-2">
          <Row className="Row_css">
            <p className="p_css">
              Additional Texton main text ipsum dolor sit amet.
            </p>
          </Row>
        </div>
        <div className="container s2 mt-4">
          <Row className="Row_css">
            <Col xs={12} md={6} style={{ marginBottom: "10%" }}>
              <LdrDai />
            </Col>
            <Col xs={12} md={6} style={{ marginBottom: "10%" }}>
              <LbsDai />
            </Col>
          </Row>
        </div>
        <div className="container s2">
          <Row className="Row_css">
            <Col xs={12} sm={12} md={6} lg={4} style={{ marginBottom: "10%" }}>
              <Sc1 />
            </Col>{" "}
            <Col xs={12} sm={12} md={6} lg={4} style={{ marginBottom: "10%" }}>
              <Sc2 />
            </Col>{" "}
            <Col xs={12} sm={12} md={6} lg={4} style={{ marginBottom: "10%" }}>
              <Sc3 />
            </Col>{" "}
            <Col xs={12} sm={12} md={6} lg={4} style={{ marginBottom: "10%" }}>
              <Sc4 />
            </Col>{" "}
            <Col xs={12} sm={12} md={6} lg={4} style={{ marginBottom: "10%" }}>
              <Sc5 />
            </Col>{" "}
            <Col xs={12} sm={12} md={6} lg={4} style={{ marginBottom: "10%" }}>
              <Sc6 />
            </Col>
          </Row>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Section2;
