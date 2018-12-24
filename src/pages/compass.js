import React from "react";
import PropTypes from "prop-types";
import CompassSpinner from "../components/compassSpinner";
import * as constants from "../helpers/constants";
import NextPage from "../components/nextPage";

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
      <main>
        <h1>Strategy Generator</h1>
        <section className="compassLayout">
          <div>
            <CompassSpinner
              maxSize={constants.MAX_SCENARIOS}
              hasBeenChoosen={this.choosenScenario}
              finishedAnimation={this.finishedAnimation}
              availableScenarios={this.props.availableScenarios}
            />
          </div>
          <div>
            <p>Press the button to receive a random strategy.</p>
            {this.state.scenario && this.state.finishedAnimation && (
              <React.Fragment>
                <h2
                  style={{
                    padding: "1em",
                    marginTop: "4em",
                    backgroundColor: "coral",
                    fontFamily: "Georgia, 'Times New Roman', Times, serif"
                  }}
                >
                  {this.state.scenario}
                </h2>
                <h3>{constants.SCENARIOS[this.state.scenario].name}</h3>
              </React.Fragment>
            )}
          </div>
        </section>
        <NextPage
          disabled={!this.state.scenario}
          gotoPage={() => {
            this.props.goNextPage("scenario");
          }}
        >
          Continue
        </NextPage>
      </main>
    );
  }

  choosenScenario = value => {
    this.setState({ scenario: value });
    this.props.loadScenario(value);
    this.props.removeScenario(value);
  };

  finishedAnimation = () => {
    this.setState({ finishedAnimation: true });
  };
}

Compass.propTypes = {
  loadScenario: PropTypes.func.isRequired,
  goNextPage: PropTypes.func.isRequired,
  availableScenarios: PropTypes.array.isRequired,
  removeScenario: PropTypes.func.isRequired
};

export default Compass;
