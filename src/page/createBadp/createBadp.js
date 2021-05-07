import React from 'react';
import { Row,Col} from 'react-bootstrap';

import './createBadp.css';

import NavBar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer";
import FormCard from "./card/fromCard";
import Graph from "./Graph/graph";

const createBadp = () => {
    return (
      <div className="">
        <NavBar />

        <div className="auction_wrapper ">
          <Row className="justify-content-center">
            <h1 className="auction_h1">Create BADP</h1>
          </Row>
          <Row className="justify-content-center">
            <p className="auction_p">
              Additional Texton main text ipsum dolor sit amet.
            </p>
          </Row>
          <Row className="container justify-content-around">
            <Col xs={12} sm={12} md={8} lg={8} className="">
              {/* <Card /> */}
              <Graph />
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="">
              {/* <Card /> */}
              <FormCard />
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    );
};
export default createBadp;