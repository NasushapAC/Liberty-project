import React from "react";
import { Row, Col } from "react-bootstrap";

import "./pool1.css";
import "./section2.css";

import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer";

import EICL from "./Exchange_Info_card_left";
import EICR from "./Exchange_Info_card_right";
import EICB from "./Exchange_Info_card_bot";

const Section2 = () => {
    return (
      <div className="">
        <Navbar></Navbar>
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
          <div className="container s2">
            <Row className="Row_css">
              <Col xs={12} md={6} style={{ marginBottom: "10%" }}>
                <EICL />
              </Col>
              <Col xs={12} md={6} style={{ marginBottom: "10%" }}>
                <EICR />
              </Col>
            </Row>
          </div> 
          <div className="container s2 mb-5">
            <Row className="Row_css">
              <h1 className="section_h2 new_pool">New Pools</h1>
            </Row>
          </div>
          <div className="container s2">
            <Row className="Row_css">
              <Col xs={12} md={6} style={{ marginBottom: "10%" }}>
                <EICB />
              </Col>
            </Row>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Section2;
