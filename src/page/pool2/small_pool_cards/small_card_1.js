
import logo1 from "../img/LDR.png";
import logo2 from "../img/eth.png";

import React from "react";
import { Button, Row } from "react-bootstrap";

import "./small_card.css";

function ldrDai() {
  return (
    <div className="small_card">
      <div className="wrapper">
        <div className="ldr">
          <Row className="row_css">
            <table className="table_css">
              <tr>
                <td className="td_left">
                  <h2 className="liberty__ldr ldr_h2">Stake ETH</h2>
                </td>
                <td className=" pb-2">
                  <img className="img_css" src={logo2} alt="DAI"></img>
                </td>
              </tr>
              <tr>
                <td className="td_left">
                  <h2 className="liberty__ldr ldr_h2">Earn LDR</h2>
                </td>
                <td className="pt-2">
                  <img className="img_css" src={logo1} alt="LDR"></img>
                </td>
              </tr>
            </table>
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
export default ldrDai;
