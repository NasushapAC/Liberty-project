import React from "react";
// import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./carasolstyles.css";

// import BorderChanger from './customScript'; 

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
];

function carasol() {
  return (
    <div className="App">
      <Carousel breakPoints={breakPoints}>
        <Item class="">
          <div class="cara_module item_border1 item1">
            <ul>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
            </ul>
            <h2>Phase 0</h2>
          </div>
        </Item>
        <Item>
          {" "}
          <div class="cara_module item2 item_border2">
            <ul>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
            </ul>
            <h2>Phase 1</h2>
          </div>
        </Item>
        <Item>
          {" "}
          <div class="cara_module item3 item_border3">
            <ul>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
            </ul>
            <h2>Phase 2</h2>
          </div>
        </Item>
        <Item>
          {" "}
          <div class="cara_module item4 item_border4">
            <ul>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
            </ul>
            <h2>Phase 3</h2>
          </div>
        </Item>
        <Item>
          {" "}
          <div class="cara_module item5 item_border5">
            <ul>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
            </ul>
            <h2>Phase 4</h2>
          </div>
        </Item>
        <Item>
          {" "}
          <div class="cara_module item6 item_border6">
            <ul>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
              <li>Additional Texton main text ipsum dolor sit amet.</li>
            </ul>
            <h2>Phase 5</h2>
          </div>
        </Item>
      </Carousel>
    </div>
  );
}
export default carasol;