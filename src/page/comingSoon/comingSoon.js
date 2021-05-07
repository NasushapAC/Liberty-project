import React from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer";


import "./comingSoon.css";

// var perf = require("./template.html");

const pageNotFound = () => {
  return (
    // <iframe src={perf}></iframe>
    <div className="">
      <NavBar></NavBar>
      <div
        className="container box-center text-center mt-5 mb-5"
        style={{ height: "100%", height: "50vh" }}
      >
        {/* <h1 className="soon_h1">Governance</h1> */}
        <div style={{ width: "100%" }}>
          <h1 className="soon_h1">Coming Soon</h1>
        </div>
        <div style={{ width: "100%" }}>
          <p className="soon_p"> Page currently under Development.</p>
        </div>
        <div style={{ width: "100%" }}>
          <Button className="hb-btn-custom" variant="primary">
            <Link className="soon-btn" to="/home">
              Way Back "Home"
            </Link>
          </Button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default pageNotFound;