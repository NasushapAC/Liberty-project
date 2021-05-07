import React from 'react';
import { Jumbotron, Button,Row,Col } from "react-bootstrap";
import Onboard from "bnc-onboard";
import Web3 from "web3";

import ass from "../../Images/BG/Astronaut.svg";
import ship from "../../Images/BG/SpaceStation.svg";

import './heroBanner.css'

let web3;


const onboard = Onboard({
dappId: '66ffcca0-4d5b-426c-b730-b6c741073684',       // [String] The API key created by step one above
  networkId: 4 , // [Integer] The Ethereum network ID your Dapp uses.
  subscriptions: {
    wallet: wallet => {
      web3 = new Web3(wallet.provider)
    }
  }
});

async function connectWallet() {
  await onboard.walletSelect();
await onboard.walletCheck();
}

function HeroBanner() {
  return (
    <div className="container mt-5 mb-5">

      <Row>
        <Col xs={12} md={6}>
          <Jumbotron>
            <h1 className="hb_h1">HELLO</h1>
            <h2 className="hb_h2">Welcome to Liberty!</h2>
            <p className="hb_p">
              A Defi stablecoin ecosystem dedicated to safeguarding the liberty
              of our community and society.
            </p>
            <p>
                <Button className="hb-btn-custom" variant="primary" onClick={() => connectWallet()}>
                  CONNECT WALLET
                </Button>
            </p>
          </Jumbotron>
        </Col>
        <Col xs={12} md={6}>
          <div className="hero-image">
            {/* <img src="./Images/Astronaut.svg"></img> */}
            <img
              alt="ship"
              src={ship}
              className="ship slide-top"
              resizeMode="cover"
            />
            <img
              alt="ass"
              src={ass}
              className="ass slide-bottom "
              resizeMode="cover"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default HeroBanner;