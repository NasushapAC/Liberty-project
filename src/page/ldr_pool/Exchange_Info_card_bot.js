import logo1 from "./LDR.png";
import logo2 from "./LF_icon.png";

import React from "react";
import { Button, Row, Col } from "react-bootstrap";

import profit from "./Profit.png";

import "./ldr_pool.css";

function exchangeInfoCard() {
  return (
    <div className="ldrpool_liberty__dollar_bot">
      <div className="wrapper">
        <div className="ldr">
          <Row className="card_row_css">
            <Col className="col-6 col_css">
              <img className="img_css" src={logo1} alt="LDR"></img>
              <img className="img_css" src={logo2} alt="LF"></img>
            </Col>
          </Row>
        </div>
        <table className="table__css mt-4">
          <tr>
            <td className="col_right" style={{ textAlign: "left" }}>
              0 LDR
            </td>
          </tr>
        </table>
        <hr />
        <table className="table__css">
          <tr>
            <td className="col_left" style={{ textAlign: "left" }}>
              Staked Balance
            </td>
          </tr>
        </table>
        <div className="mt-4">
          <Button className="ldr-btn-custom " variant="primary">
            <img
              alt="profit"
              src={profit}
              className=""
              resizeMode="cover"
            />
            CLAIM PROFIT
          </Button>
        </div>
      </div>
    </div>
  );
}
export default exchangeInfoCard;