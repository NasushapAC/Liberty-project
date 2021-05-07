import logo1 from "./LDR.png";
// import logo2 from "./img/Dai_Logo 1.png";
import React from 'react';

import "./mig_card.css";

import { Button, Row,Col } from "react-bootstrap";

function Mig_card() {
    return (
      <div className="mig_card_main">
        <div className="mig_card_wrapper">
          <div className="mig_card_div">
            <Row className="row_css">
              <Col>
                <Row className=" justify-content-center">
                  <img className="img_css" src={logo1} alt="LDR"></img>
                </Row>
                <Row className=" justify-content-center">
                  <h3 className="mig_card_h3 mt-1">Boardroom </h3>
                </Row>
                <Row className=" justify-content-center">
                  <p className="mig_card_p">
                    Stake LBS in the Boardroom to earn LDR rewards from LDR
                    supply expansions.
                  </p>
                </Row>
              </Col>
            </Row>
          </div>

          <hr />
          <Row>
            <Col className="vr" xs={6}>
              <Row className="row_css mt-3">
                <Col>
                  <Row className=" justify-content-center mt-2">Staked balance</Row>
                  <Row className=" justify-content-center">
                    <h2 className="mig_card_h2 mb-3">0 LDR</h2>
                  </Row>
                  <Row className=" justify-content-center">
                    {/* <p className="mig_card_active">active</p> */}
                  </Row>
                </Col>
              </Row>
              <div className="mt-1">
                <Button className="board-btn-custom-left mt-4" variant="primary">
                  Buy LDR with LDR
                </Button>
              </div>
            </Col>
            <Col className="vl" xs={6}>
              <Row className="row_css mt-3">
                <Col>
                  <Row className=" justify-content-center">Your Balance</Row>
                  <Row className=" justify-content-center">
                    <h2 className="mig_card_h2">0.00 LDR</h2>
                  </Row>
                  <Row className=" justify-content-center">
                    <h2 className="mig_card_h2">0.00 LDR</h2>
                    {/* <p className="mig_card_disabled"> ENABLED ON LDR > $100</p> */}
                  </Row>
                </Col>
              </Row>
              <div className="mt-1">
                <Button className="board-btn-custom-right " variant="primary">
                  Redeem Disabled
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
}
export default Mig_card;