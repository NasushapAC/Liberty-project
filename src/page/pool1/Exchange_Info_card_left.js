import logo1 from "./LDR.png";
import logo2 from "./LF_icon.png";
import React from 'react';
import "./section2.css";
import { Button,Row, Col } from "react-bootstrap";

function exchangeInfoCard() {
    return (
      <div className="pool1_liberty__dollar_left">
        <div className="wrapper">
          <div className="ldr">
            <Row className="row_css">
              <Col className="col-6 col_css">
                <img className="img_css" src={logo1} alt="LDR"></img>
                <img className="img_css" src={logo2} alt="LF"></img>
              </Col>
              <Col className="col-6">
                <Row>
                  <h2 className=" pool1_h2">EARN LDR</h2>
                  <h2 className=" pool1_h2">STAKE LDR</h2>
                </Row>
              </Col>
            </Row>
          </div>
          <table className="table_css">
            <tr>
              <td className="col_left" style={{ textAlign: "left" }}>
                Total Value Locked
              </td>
              <td className="col_right" style={{ textAlign: "right" }}>
                50.00M
              </td>
            </tr>
          </table>
          <hr />
          <table className="table_css">
            <tr>
              <td className="col_left" style={{ textAlign: "left" }}>
                APY
              </td>
              <td className="col_right" style={{ textAlign: "right" }}>
                2891.00%
              </td>
            </tr>
          </table>
          <hr />
          <table className="table_css">
            <tr>
              <td className="col_left" style={{ textAlign: "left" }}>
                Daily Return
              </td>
              <td className="col_right" style={{ textAlign: "right" }}>
                0.99%
              </td>
            </tr>
          </table>
          <hr />
          <div className="mt-4">
            <Button className="pool1-btn-custom " variant="primary">
              SELLECT
            </Button>
          </div>
        </div>
      </div>
    );
}
export default exchangeInfoCard