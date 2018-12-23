import React, { Component } from "react";
import "./App.css";
import * as pages from "./pages";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "intro1",
      scenario: null
    };
  }

  render() {
    let Page = pages[this.state.currentPage];
    return (
      <ErrorBoundary>
        <Page
          goNextPage={this.goNextPage}
          scenario={this.state.scenario}
          loadScenario={this.loadScenario}
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
}

export default App;
