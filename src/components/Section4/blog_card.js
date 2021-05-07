import React from 'react';
// import tempImg from '../../Images/blogimg.png'
import { Card } from "react-bootstrap";
import './section4.css';

function blogCard() {
  return (
    <Card className="card_main" >
      {/* <Card.Img variant="top" src='./blogimg.png' width='200px' height='200px' /> */}
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Img className="card_img"
        variant="top"
        src="https://picsum.photos/200 "
        // width="100px"
        height="100px"
      />
      <Card.Body className="card_body">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        <div className="d-flex justify-content-between">
          {/* <Col className="d-flex justify-content-left"> */}
            <Card.Text>MM DD,YY</Card.Text>
          {/* </Col> */}
          {/* <Col className="d-flex justify-content-right"> */}
            <Card.Text>Post Time</Card.Text>
          {/* </Col> */}
        </div>
      </Card.Body>
    </Card>
  );
}
export default blogCard;