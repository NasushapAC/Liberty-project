import React from "react";
import { Row, Col } from "react-bootstrap";

import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer";
import Count from "./countDown.js";
import L_bond from "./libertyBond.js";
import Boardrom from "./boardroom.js";

import "./migration.css";

const migration= () => {
    return (
      <div className="">
        <Navbar />
        <div className="m-5">
          <div className="container-flex migration_center">
            <h4 className="migration_h4">Current Status</h4>
          </div>
          <div className="container migration_center">
            <h1 className="migration_h1 pb-2">Monetary</h1>
          </div>
          <div className="container migration_center mb-5">
            <p className="migration_p">
              Additional Texton main text ipsum dolor sit amet, consectetur
              adipisc-ing elit, sed do eiusmod tempor incididunt ut labore
              etdolore magnaaliqua
            </p>
          </div>
          <div className="container migration_center mt-5">
            <Row>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={2}
                className="migration_border_left_1"
              >
                <div className="mig_main">
                  <div className="mig_wrapper">
                    <div className="cd">
                      <Row className="row_css">
                        <h2 className="count_h2">99.9%</h2>
                      </Row>
                      <Row className="row_css">
                        <p className="mig_p">Migrated LUSD (%)</p>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={2}
                className="migration_border_left_2"
              >
                <div className="mig_main">
                  <div className="mig_wrapper">
                    <div className="cd">
                      <Row className="row_css">
                        <h2 className="count_h2">359.12%</h2>
                      </Row>
                      <Row className="row_css">
                        <p className="mig_p">LUSD-DAI Pool ARR</p>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={2}
                className="migration_border_left_3"
              >
                <div className="mig_main">
                  <div className="mig_wrapper">
                    <div className="cd">
                      <Row className="row_css">
                        <h2 className="count_h2">5.77%</h2>
                      </Row>
                      <Row className="row_css">
                        <p className="mig_p">Monetary ARR</p>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>

              <Col
                xs={12}
                sm={12}
                md={12}
                lg={2}
                className="migration_border_left_4"
              ></Col>
              <Col xs={12} sm={12} md={12} lg={3} className="mt-5 m-2">
                <Count/>
              </Col>
            </Row>
          </div>
          <div className="container mt-5">
            <Row>
              <Col xs={12} sm={12} md={12} lg={6} className="">
                <L_bond/>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} className="">
                <Boardrom/>
              </Col>
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    );
};
export default migration;