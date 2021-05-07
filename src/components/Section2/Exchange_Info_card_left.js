import logo from "../../Images/assets/LDR.png";
import React from 'react';
import "./section2.css";

function exchangeInfoCard() {
    return (
      <div className="liberty__dollar">
        <div className="wrapper">
          <h2 className="liberty__ldr">Liberty Dollar</h2>
          <div className="ldr">
            <h2 className="liberty__ldr ldr_h2">LDR</h2>
            <img src={logo} alt="LDR"></img>
          </div>
          <h1 className="ldr__price">$0.754</h1>
          <p className="ldr__current">Current Price</p>
          <hr />
          <h1 className="ldr__count">97,258,312</h1>
          <p className="ldr__supply">Circulating Supply</p>
          <hr />
        </div>
      </div>
    );
}
export default exchangeInfoCard