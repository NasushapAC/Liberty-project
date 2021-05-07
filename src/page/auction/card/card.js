
import React from "react";

import { Button, Row,Col } from "react-bootstrap";
import {Link} from "react-router-dom";

import './card.css';
  
import Slider from '../slider/slider';
import CustomInput from '../input/input'
import DropZone from '../dropzone/DropZone';

function auctionCard() {
  return (
    <div className="auction-card-container">
      <div className="auction-card-wrapper">
        <div className="card_module">
          <Row>
            <Col>
              <Row className="justify-content-center">
                <Slider className="" />
              </Row>
              <hr />
              <Row>
                <CustomInput />
              </Row>
            </Col>
            <Col>
              <div className="content">
                <h1 className="slider_p">ATTACHMENT</h1>
                <DropZone />
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Button className="hb-btn-custom" variant="primary">
                {/* <Link className="four04-btn" to="/home"> */}
                Submit
                {/* </Link> */}
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default auctionCard;
