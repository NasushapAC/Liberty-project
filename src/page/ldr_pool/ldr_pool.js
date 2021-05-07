import React from "react";
import { Row, Col } from "react-bootstrap";

import "./ldr_pool.css";
// import "./section2.css";

import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer";

import EICL from "./Exchange_Info_card_left";
import EICR from "./Exchange_Info_card_right";
import EICB from "./Exchange_Info_card_bot";

const Section2 = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="container ldr_pool_s2 align-middle mt-5 mb-5">
        <div className="container ldr_pool_s2">
          <Row className="ldr_pool_Row_css">
            <h1 className="ldr_pool_h1_css">LDR-POOL</h1>
          </Row>
        </div>
        <div className="ldr_pool_s2 align-middle mt-2 mb-2">
          <Row className="Row_css">
            <p className="p_css">
              Additional Texton main text ipsum dolor sit amet.
            </p>
          </Row>
        </div>
        <div className="container ldr_pool_s2">
          <Row className="ldr_pool_Row_css">
            <Col className="ldr_pool_Col_css" xs={12} md={6} style={{}}>
              <EICL />
            </Col>
            <Col className="ldr_pool_Col_css" xs={12} md={6} style={{}}>
              <Row
                style={{
                  marginLeft: "0px",
                  marginRight: "0px",
                  // marginTop: "22%",
                }}
              >
                <Col className="ldr_pool_Col_css " xs={12} style={{}}>
                  <EICR />
                </Col>
              </Row>
              <Row
                style={{
                  marginLeft: "0px",
                  marginRight: "0px",
                  marginTop: "22%",
                }}
              >
                <Col
                  className="ldr_pool_Col_css "
                  xs={12}
                  style={{ marginLeft: "0px", marginRight: "0px" }}
                >
                  <EICB />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Section2;
