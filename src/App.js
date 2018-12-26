import React, { Component } from "react";
import "./App.css";
import * as pages from "./pages";
import ErrorBoundary from "./components/ErrorBoundary";
import { scenarioSetup, getScenarioGroup } from './helpers/pageSetup';

class App extends Component {
  constructor(props) {
    super(props);

    const availableScenarios = scenarioSetup();
    const group = getScenarioGroup();
    let startingPage = 'intro1';
    if (group === 'results') {
      startingPage = 'results';
    }
    if (group === 'none') {
      startingPage = 'notFound';
    }
    this.state = {
      availableScenarios, // An array of scenarios available to this student.
      currentPage: startingPage,
      scenario: null // The scenario object (all of its pages)
    };
  }

  render() {
    const Page = pages[this.state.currentPage];
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
      item => item.id !== scenarioId
    );
    this.setState({
      availableScenarios
    });
  };
}

export default App;
