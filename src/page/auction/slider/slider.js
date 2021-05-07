// import { render } from '@testing-library/react';
import React from 'react';
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
// import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import {  Row, Col } from "react-bootstrap";
import Input from "@material-ui/core/Input";

import "./slider.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};


const PrettoSlider = withStyles({
  root: {
    height: 8,
    color: "#4029EF",
  },
  thumb: {
    height: 24,
    width: 28,
    backgroundColor: "#4029EF",
    border: "2px solid white",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
    borderRadius: "10px",
  },
  active: {},
  valueLabel: {
    left: "calc(-18% )",
  },
  track: {
    height: 8,
    borderRadius: 4,
    // color: 'blue',
    background:
      "linear-gradient(90deg, #3C26EE 2.7%, #9A4EBD 50.45%, #CE4A67 99.21%)",
  },
  rail: {
    height: 8,
    borderRadius: 4,
    background: "#53526A",
  },
})(Slider);


export default function CustomizedSlider() {
  const classes = useStyles();

    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleInputChange = (event) => {
      setValue(event.target.value === "" ? "" : Number(event.target.value));
    };

      return (
        <div className={classes.root}>
          <Row className="slider-row">
            <Col sm={2} className="">
              <p className="slider_p">Pixel</p>
            </Col>

            <Col className="">
              {/* <Typography gutterBottom>pretto.fr</Typography> */}
              <PrettoSlider
                onChange={handleSliderChange}
                value={typeof value === "number" ? value : 0}
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={20}
              />
            </Col>
            <Col sm={2} className="">
              <Input
                className={classes.input}
                value={value}
                margin="dense"
                onChange={handleInputChange}
                //  onBlur={handleBlur}
                inputProps={{
                  step: 1,
                  min: 0,
                  max: 100,
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
                style={{ color: "white", width: "35px" }}
              />
            </Col >
            <Col sm={2} className="slider-col">
            <p className="slider_p">K Pxl</p>
            </Col>
          </Row>
        </div>
      );
}
