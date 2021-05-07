import logo1 from "./LDR.png";
import logo2 from "./LF_icon.png";
import React from "react";
import "./ldr_pool.css";
import { Button, Row, Col } from "react-bootstrap";

import approve from "./Approve.png";

function exchangeInfoCard() {
  return (
    <div className="ldrpool_liberty__dollar_right">
      <div className="wrapper">
        <div className="ldr">
          <Row className="row_css">
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
              alt="approve"
              src={approve}
              className=""
              resizeMode="cover"
            />
            APPROVE LSD
          </Button>
        </div>
      </div>
    </div>
  );
}
export default exchangeInfoCard;
