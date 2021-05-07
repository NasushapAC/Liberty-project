import React from "react";

import { Form,FormControl,InputGroup, Button } from "react-bootstrap";

import "./formCard.css";

import logo1 from "../../../Images/assets/LDR.png";
import logo2 from "../../../Images/assets/Dai_Logo1.png";

const formCard = () => {
  return (
    <div className=" formCard-card-container">
      <div className="formCard-card-wrapper">
        <div className="formCard_card_module">
          <div className="formCard_custom_col">
            <img className="img_css" src={logo2} alt="DAI"></img>
            <h2 className="formCard_custom_h2">0.00 DAI</h2>
          </div>
          <div className="formCard_custom_col">
            <img className="img_css" src={logo1} alt="LDR"></img>
            <h2 className="formCard_custom_h2">0.00 LSD</h2>
          </div>
          <div className="formCard_custom_col1">
            <p className="formCard_custom_p">Unlocked DAI :</p>
            <p className="formCard_custom_p1">0.00 LSD</p>
          </div>
          <hr className="" />
          <div className="formCard_custom_col mt-4">
            <p className="formCard_custom_p">Price</p>
            <p className="formCard_custom_p1">0</p>
          </div>

          <hr className="" />
          <div className="formCard_custom_col mt-3">
            <p className="formCard_custom_p">Recieve Amount</p>
            <p className="formCard_custom_p1">0 LSD</p>
          </div>
          <hr className="" />
          <div className="formCard_custom_col mt-3">
            <p className="formCard_custom_p">Slippage</p>
            <p className="formCard_custom_p1">0</p>
          </div>
          <hr className="" />
          <div className="">
            <InputGroup className="mt-3 mb-3 formCard_input_div">
              <FormControl
                placeholder="0"
                aria-label="DAI"
                aria-describedby="basic-addon1"
                className="formControl_badp"
              />
              <Button className="btn_max">MAX</Button>
              <h2 className="formControl_label">DAI</h2>
            </InputGroup>
          </div>
          <div className="" style={{ width: "100%" }}>
            <Button className="formCard_btn">BUY 0 LSD for 0 DAI</Button>
          </div>
          <div style={{ width: "100%" }}>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="I accept the terms and conditions"
                className="formBasicCheckbox"
              />
            </Form.Group>
          </div>
        </div>
      </div>
    </div>
  );
};  
export default formCard;
