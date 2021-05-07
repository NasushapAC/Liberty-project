import React from 'react';
import { Button, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom";

import NavBar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer";
import Card from "./card/card";

import "./auction.css";

const auction = () => {
    return (
      <div className="auction_main">
        <NavBar />
        <div className="auction_wrapper ">
          <Row className="justify-content-center">
            <h1 className="auction_h1">Auction</h1>
          </Row>
          <Row className="justify-content-center">
            <p className="auction_p">
              Additional Texton main text ipsum dolor sit amet.
            </p>
          </Row>{" "}
          <Row className="justify-content-center">
                    <div className="container m-5">
                    <Card />
          </div>
          </Row>
        </div>
        <Footer />
      </div>
    );
};
export default auction;