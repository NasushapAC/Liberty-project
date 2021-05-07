import React from "react";
import Cara from "./carasol";
import { Row, Col } from "react-bootstrap";

import "./section3.css";

import Bball from "./Ellipse 60.png";
import Pball from "./Ellipse 61.png";
import Rball from "./Ellipse 62.png";

const Section3 = () => {
  return (
    <div className="container s3_container mt-5">
      <div className="s3_wrapper">
        <Row className="row s3 justify-content-center mb-5">
          <Col className="col-12 s3">
            <h1 className="s3_h1">ROAD MAP</h1>
            {/* <hr className="line"/> */}
          </Col>
          <div className="line mt-5">
            <img className="blueballs" src={Bball}></img>
            <img className="purpleballs" src={Pball}></img>
            <img className="redballs" src={Rball}></img>
          </div>
        </Row>
        <div>
          <Cara></Cara>
        </div>
      </div>
    </div>
  );
};

export default Section3;
