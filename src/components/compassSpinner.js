import React from "react";
import PropType from "prop-types";
import "./compassSpinner.css";
import * as constants from "../helpers/constants";
const ANIMATION_TIME = 4; // seconds

class RandomSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSpinning: false
    };
    this.refCompass = React.createRef();
    this.slot = 0;
  }

  onSpin = () => {
    this.keyStack = [];
    window.addEventListener("keypress", this.listenForNumbers);

    this.refCompass.current.blur();

    if (this.state.isSpinning) {
      this.props.hasBeenChoosen(null);
    } else {
      const scenarioNbr = this.props.availableScenarios[this.getRandomNbr(this.props.maxSize)];
      this.props.hasBeenChoosen(scenarioNbr);
      this.slot =
        (1 / this.props.maxSize) * scenarioNbr + constants.FREE_ROTATIONS;
      this.timeout = window.setTimeout(() => {
        window.removeEventListener("keypress", this.listenForNumbers);
        this.props.finishedAnimation();
      }, 1000 * ANIMATION_TIME);
    }
    this.setState({ isSpinning: !this.state.isSpinning });
  };

  getRandomNbr = upperBound => {
    // Returns a number between zero and parameter.
    // TODO: make sure this is evenly distributed
    return parseInt(Math.random() * upperBound, 10);
  };

  render() {
    return (
      <button onClick={this.onSpin} className="compass" ref={this.refCompass}>
        <span
          className={`compassDial ${this.state.isSpinning && "isSpinning"}`}
          style={
            this.state.isSpinning
              ? {
                  transform: `rotate(${this.slot}turn)`
                }
              : {}
          }
        />
      </button>
    );
  }

  listenForNumbers = evt => {
    if (evt.which > 47 && evt.which < 58) {
      this.keyStack.push(evt.key);
      if (this.keyStack.length > 1) {
        window.clearTimeout(this.timeout);
        window.removeEventListener("keypress", this.listenForNumbers);
        this.props.hasBeenChoosen(parseInt(this.keyStack.join(""), 10));
        this.props.finishedAnimation();
      }
    }
  };
}

RandomSpinner.propTypes = {
  maxSize: PropType.number.isRequired, // Total slots on the compass/spinner.
  hasBeenChoosen: PropType.func.isRequired,
  finishedAnimation: PropType.func.isRequired,
  availableScenarios: PropType.array.isRequired // values start at 1
};

export default RandomSpinner;
