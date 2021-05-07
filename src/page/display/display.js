import React from 'react';

import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer';

import './display.css';

import logo1 from './filler_img/nav-logo 1.png';
import logo2 from './filler_img/logo-polkadot 1.png';
import logo3 from './filler_img/Reef..png';

const displaypage = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div
          className="container  justify-content-center"
          style={{ width: "100%" }}
        >
          <div
            className="container justify-content-center"
            style={{ width: "100%", textAlign: "center" }}
          >
            <h1 className="display_h1">Display</h1>
          </div>
          <div className="container d-flex justify-content-center">
            <p className="display_p">
              Additional Texton main text ipsum dolor sit amet.
            </p>
          </div>
          <div className="container d-flex justify-content-center">
            <div className="display-border-wrap d-flex justify-content-center">
              <div className="display-card ">
                {/*  Fillers  */}
                {/* row 1 */}
                <div className="d-flex">
                  <div
                    className="display-logo-border-wrap"
                    style={{
                      width: "265px",
                      height: "150px",
                      //   background: "#BEA035",
                      border: "1px solid #1F2136",
                      //   padding: "0px",
                    }}
                  >
                    <div
                      className="display-logo-card d-flex justify-content-center "
                      style={{
                        padding: "0px",
                      }}
                    >
                      <img src={logo1} style={{}}></img>
                    </div>
                  </div>
                  {/* Green and Red Box Region */}
                  <div className="d-flex">
                    <div>
                      {/* Green Boxes */}
                      <div
                        style={{
                          width: "100px",
                          height: "75px",
                          background: "#35BE7C",
                          border: "1px solid #1F2136",
                          //   padding: "0px",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "100px",
                          height: "75px",
                          background: "#35BE7C",
                          border: "1px solid #1F2136",
                          //   padding: "0px",
                        }}
                      ></div>
                    </div>
                    {/* End of green Box Region */}
                    {/* Red Box Region */}
                    <div>
                      <div
                        style={{
                          width: "100px",
                          height: "50px",
                          background: "#E15371",
                          border: "1px solid #1F2136",
                          //   padding: "0px",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "100px",
                          height: "50px",
                          background: "#E15371",
                          border: "1px solid #1F2136",
                          //   padding: "0px",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "100px",
                          height: "50px",
                          background: "#E15371",
                          border: "1px solid #1F2136",
                          //   padding: "0px",
                        }}
                      ></div>
                      {/* End of Red Box Region */}
                    </div>
                    {/* Green and Red Box Div End */}
                  </div>
                  <div
                    className="display-logo-border-wrap"
                    style={{
                      width: "580px",
                      height: "150px",
                      //   background: "#BEA035",
                      border: "1px solid #1F2136",
                      //   padding: "0px",
                    }}
                  >
                    <div
                      className="display-logo-card d-flex justify-content-center "
                      style={
                        {
                          // padding: "0px",
                        }
                      }
                    >
                      <img src={logo2} style={{}}></img>
                    </div>
                  </div>
                </div>
                {/* row 2 */}
                <div className="d-flex">
                  <div
                    style={{
                      width: "260px",
                      height: "250px",
                      background: "#BEA035",
                      border: "1px solid #1F2136",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "440px",
                      height: "250px",
                      background: "#E15371",
                      border: "1px solid #1F2136",
                    }}
                  ></div>
                  <div>
                    <div
                      style={{
                        width: "300px",
                        height: "125px",
                        background: "#35BE7C",
                        border: "1px solid #1F2136",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "300px",
                        height: "125px",
                        background: "#35BE7C",
                        border: "1px solid #1F2136",
                      }}
                    ></div>
                  </div>
                </div>
                {/* row 3 */}

                <div className="display-logo-border-wrap">
                  <div className="display-logo-card d-flex justify-content-center ">
                    <img src={logo3}></img>
                  </div>
                </div>
                {/* Row 4 */}
                <div className="d-flex">
                  {/* green boxes */}
                  <div className="">
                    <div
                      style={{
                        width: "260px",
                        height: "100px",
                        background: "#35BE7C",
                        border: "1px solid #1F2136",
                      }}
                    ></div>{" "}
                    <div
                      style={{
                        width: "260px",
                        height: "100px",
                        background: "#35BE7C",
                        border: "1px solid #1F2136",
                      }}
                    ></div>
                  </div>
                  {/* Green boxes End */}
                  {/* big yellow box */}
                  <div
                    style={{
                      width: "260px",
                      height: "200px",
                      background: "#BEA035",
                      border: "1px solid #1F2136",
                    }}
                  ></div>
                  {/* small boxes */}
                  <div>
                    <div
                      style={{
                        width: "100px",
                        height: "50px",
                        background: "#35BE7C",
                        border: "1px solid #1F2136",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "100px",
                        height: "50px",
                        background: "#BEA035",
                        border: "1px solid #1F2136",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "100px",
                        height: "50px",
                        background: "#35BE7C",
                        border: "1px solid #1F2136",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "100px",
                        height: "50px",
                        background: "#BEA035",
                        border: "1px solid #1F2136",
                      }}
                    ></div>
                  </div>
                  {/* yellow green box */}
                  {/* green boxes */}
                  <div className="">
                    <div
                      style={{
                        width: "260px",
                        height: "100px",
                        background: "#35BE7C",
                        border: "1px solid #1F2136",
                      }}
                    ></div>{" "}
                    <div
                      style={{
                        width: "260px",
                        height: "100px",
                        background: "#E15371",
                        border: "1px solid #1F2136",
                      }}
                    ></div>
                  </div>
                  {/*  */}

                  {/* green boxes */}
                  <div className="">
                    <div
                      style={{
                        width: "100px",
                        height: "100px",
                        background: "#BEA035",
                        border: "1px solid #1F2136",
                      }}
                    ></div>{" "}
                    <div
                      style={{
                        width: "100px",
                        height: "100px",
                        background: "#BEA035",
                        border: "1px solid #1F2136",
                      }}
                    ></div>
                  </div>
                </div>
                {/* Row 5 */}

                <div className="d-flex">
                  {/* green boxes */}
                  <div className="">
                    <div
                      style={{
                        width: "260px",
                        height: "100px",
                        background: "#35BE7C",
                        border: "1px solid #1F2136",
                      }}
                    ></div>{" "}
                    <div
                      style={{
                        width: "260px",
                        height: "100px",
                        background: "#35BE7C",
                        border: "1px solid #1F2136",
                      }}
                    ></div>
                  </div>
                  {/* Green boxes End */}
                  {/* big yellow box */}
                  <div
                    style={{
                      width: "260px",
                      height: "200px",
                      background: "#BEA035",
                      border: "1px solid #1F2136",
                    }}
                  ></div>
                  {/* small boxes */}
                  <div>
                    <div
                      style={{
                        width: "100px",
                        height: "50px",
                        background: "#35BE7C",
                        border: "1px solid #1F2136",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "100px",
                        height: "50px",
                        background: "#BEA035",
                        border: "1px solid #1F2136",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "100px",
                        height: "50px",
                        background: "#35BE7C",
                        border: "1px solid #1F2136",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "100px",
                        height: "50px",
                        background: "#BEA035",
                        border: "1px solid #1F2136",
                      }}
                    ></div>
                  </div>
                  {/* yellow green box */}
                  {/* green boxes */}
                  <div className="">
                    <div
                      style={{
                        width: "260px",
                        height: "100px",
                        background: "#35BE7C",
                        border: "1px solid #1F2136",
                      }}
                    ></div>{" "}
                    <div
                      style={{
                        width: "260px",
                        height: "100px",
                        background: "#E15371",
                        border: "1px solid #1F2136",
                      }}
                    ></div>
                  </div>
                  {/*  */}

                  {/* green boxes */}
                  <div className="">
                    <div
                      style={{
                        width: "100px",
                        height: "100px",
                        background: "#BEA035",
                        border: "1px solid #1F2136",
                      }}
                    ></div>{" "}
                    <div
                      style={{
                        width: "100px",
                        height: "100px",
                        background: "#BEA035",
                        border: "1px solid #1F2136",
                      }}
                    ></div>
                  </div>
                </div>
                {/*  Fillers  */}
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};
export default displaypage;