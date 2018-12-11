import React from "react";
import PropTypes from 'prop-types';
import CompassSpinner from "../components/compassSpinner";
import * as constants from "../helpers/constants";

class Compass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scenario: null,
      finishedAnimation: false
    };
  }
  render() {
    return (
      <React.Fragment>
        <h1>This is Compass Page</h1>
        <p>Hey y’all, click the spin-dinghous.</p>
        <p style={{ textAlign: "center" }}>
          <CompassSpinner
            maxSize={constants.MAX_SCENARIOS}
            hasBeenChoosen={this.choosenScenario}
            finishedAnimation={this.finishedAnimation}
          />
        </p>
        {this.state.scenario && this.state.finishedAnimation && (
          <h2 style={{ textAlign: "center" }}>Your lucky number is {this.state.scenario}.</h2>
        )}
        <button
          onClick={() => {
            this.props.goNextPage("scenario");
          }}
        >
          Next Page
        </button>
      </React.Fragment>
    );
  }

  choosenScenario = value => {
    this.setState({ scenario: value });
    this.props.loadScenario(value);
  };
 
  finishedAnimation = () => {
    this.setState({ finishedAnimation: true });
  };
}

Compass.propTypes = {
  loadScenario: PropTypes.func.isRequired,
  goNextPage: PropTypes.func.isRequired
}

export default Compass;
