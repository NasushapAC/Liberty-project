import React from 'react';


import { Row, Col } from "react-bootstrap";
import './section2.css';

import EICL from "./Exchange_Info_card_left";
import EICR from "./Exchange_Info_card_right";
import EICM from "./Exchange_Info_card_mid";


const Section2 = () => {
    return (
      <div className="container s2 align-middle mt-5 mb-5">
        <Row>
          <Col xs={12} md={4} style={{ marginBottom: "10%" }}>
            <EICL />
          </Col>
          <Col xs={12} md={4} style={{ marginBottom: "10%" }}>
            <EICM />
          </Col>
          <Col xs={12} md={4} style={{ marginBottom: "10%" }}>
            <EICR />
          </Col>
        </Row>
      </div>
    );
}

export default Section2
