import React from "react";
import PropTypes from "prop-types";
import CompassSpinner from "../components/compassSpinner";
import * as constants from "../helpers/constants";
import NextPage from "../components/nextPage";

class Compass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scenario: null, // scenario Id [1-12]
      finishedAnimation: false
    };
    this.progress = 4 - this.props.availableScenarios.length;
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.scenario && !prevState.scenario) {
      document.getElementById('nextPageBtn').focus();
    }
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
            <h2>Scenario {this.progress} of 3</h2>
            <p
              style={{
                marginBottom: "4em"
              }}
            >
              Press the button to receive a random strategy.
            </p>
            {this.state.scenario && this.state.finishedAnimation && (
              <React.Fragment>
                <h2 style={{ textAlign: "center" }}>
                  <strong style={{ paddingLeft: "1em" }}>
                    Your random strategy to explore is:
                  </strong>
                </h2>
                <h2
                  style={{
                    padding: "1em",
                    backgroundColor: constants.SCENARIOS[this.state.scenario].color,
                    color: "white",
                    textAlign: "center"
                  }}
                >
                  {constants.SCENARIOS[this.state.scenario].name}
                </h2>
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

  choosenScenario = scenarioId => {
    this.setState({ scenario: scenarioId });
    this.props.loadScenario(scenarioId);
    this.props.removeScenario(scenarioId);
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
