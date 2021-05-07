import React from "react";
import {Table} from "react-bootstrap";

// import ReactApexChart from "react-apexcharts";

import Chart from "./chart";

import "./graph.css";

const formCard = () => {
  return (
    <div className=" graph-card-container">
      <div className="graph-card-wrapper">
        <div className="graph_card_module">
          <div className="graph_table_div" style={{ width: "100%" }}>
            <Table className="graph_table_css ">
              <tr>
                <td>Buy</td>
                <td>Reserve</td>
                <td>Curve Insurance</td>
                <td>Total Supply</td>
              </tr>
            {/* </Table> */}
            {/* <hr className="graph_table_divider mb-3"></hr> */}
            {/* <Table className="graph_table_css table-borderless"> */}
              <tr>
                <th>1.742 DAI</th>
                <th>40,577,123 DAI</th>
                <th>40,577,123 LDR</th>
                <th>40,577,123 LDR</th>
              </tr>
            </Table>
          </div>
          <div style={{width:"100%"}}>
            <Chart></Chart>
          </div>
        </div>
      </div>
    </div>
  );
};
export default formCard;
