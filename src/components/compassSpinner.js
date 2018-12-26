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
      const subScenarioKey = this.getRandomInt(this.props.availableScenarios.length) - 1;
      console.log('subScenarioKey', subScenarioKey);
      console.log(JSON.stringify(this.props.availableScenarios));
      const scenarioNbr = this.props.availableScenarios[subScenarioKey].id;
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

  getRandomInt = upperBound => {
    // Returns a number between zero and parameter.
    return this.getRandomIntInclusive(1, upperBound);
  };

  getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
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
