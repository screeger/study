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
                    backgroundColor: "#1A2E81",
                    color: "white",
                    fontFamily: "Georgia, 'Times New Roman', Times, serif",
                    textAlign: "center"
                  }}
                >
                  {/* {this.state.scenario} */}
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
