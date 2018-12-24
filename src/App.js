import React, { Component } from "react";
import "./App.css";
import * as pages from "./pages";
import ErrorBoundary from "./components/ErrorBoundary";
import { MAX_SCENARIOS, SCENARIOS_TO_RUN } from "./helpers/constants";

class App extends Component {
  constructor(props) {
    super(props);
    const availableScenarios = [];
    for (let i = 1, j = MAX_SCENARIOS + 1; i < j; i++) {
      availableScenarios.push(i);
    }
    this.state = {
      availableScenarios,
      remainingScenarios: SCENARIOS_TO_RUN,
      currentPage: "intro1",
      scenario: null // The scenario object (all of its pages)
    };
  }

  render() {
    let Page;
    if (this.state.remainingScenarios < 0) {
      Page = pages["results"];
    } else {
      Page = pages[this.state.currentPage];
    }
    return (
      <ErrorBoundary>
        <Page
          goNextPage={this.goNextPage}
          scenario={this.state.scenario}
          loadScenario={this.loadScenario}
          availableScenarios={this.state.availableScenarios}
          removeScenario={this.removeScenario}
        />
      </ErrorBoundary>
    );
  }

  goNextPage = pageName => {
    this.setState({ currentPage: pageName });
  };

  loadScenario = scenarioId => {
    import("./scenarios/scene" + scenarioId).then(scenario => {
      this.setState({ scenario });
    });
  };

  removeScenario = scenarioId => {
    const availableScenarios = this.state.availableScenarios.filter(
      item => item !== scenarioId
    );
    this.setState({
      availableScenarios,
      remainingScenarios: this.state.remainingScenarios - 1
    });
  };
}

export default App;
