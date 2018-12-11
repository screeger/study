import React from "react";
import PropTypes from "prop-types";

class Scenario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1 // Scenario pages only
    };
  }

  render() {
    const Page = this.props.scenario["page" + this.state.currentPage];
    return (
      <React.Fragment>
        <h1>This is a Scenario Page</h1>
        <Page getNextPage={this.getNextPage} />
        <button onClick={this.getNextPage}>Next Scenario Page</button>
      </React.Fragment>
    );
  }

  getNextPage = evt => {
    /* Normally an event is passed in, but the PillNavigation will explicity
      pass an integer to jump to a specific page. */
    debugger;
    if (typeof evt === "number") {
      this.setState({ currentPage: evt });
    } else {
      if (this.atLastPage()) {
        this.props.goNextPage("compass");
      } else {
        this.setState({ currentPage: this.state.currentPage + 1 });
      }
    }
  };

  atLastPage = () => {
    debugger; // FINISH THIS
    // return (
    //   this.state.currentPage ===
    //   Object.keys(this.props.scenario).reduce((accum, current) => {
    //     // Look for pages and extract the number off it.
    //     const matches = /^page\d+$/.test(current);

    //     } else {
    //       return accum;
    //     }
    //   }, 0)
    // );
  };
}

Scenario.propTypes = {
  goNextPage: PropTypes.func.isRequired,
  scenario: PropTypes.object.isRequired
};

export default Scenario;
