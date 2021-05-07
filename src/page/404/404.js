import React from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer";


import "./404.css";

// var perf = require("./template.html");

const pageNotFound = () => {
  return (
    // <iframe src={perf}></iframe>
    <div className="">
      <NavBar></NavBar>
      <div className="container text-center">
        <h1 className="four04_h1">404</h1>
        <h1 className="four04_h1">Are we Lost ?</h1>
        <h1 className="four04_h1">Lets go back to Fimiliar lands 20210421</h1>
        <Button className="hb-btn-custom" variant="primary">
          <Link className="four04-btn" to="/home">Way Back Home</Link>
        </Button>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default pageNotFound;
