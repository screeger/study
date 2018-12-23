import React from "react";
import PropTypes from "prop-types";
import { SCENARIOS } from "../helpers/constants";
import NextPage from "../components/nextPage";

class Scenario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1 // Scenario pages only
    };
  }

  render() {
    const Overview = this.props.scenario.overview;
    const Page = this.props.scenario["page" + this.state.currentPage];

    return (
      <React.Fragment>
        <Page
          getNextPage={this.getNextPage}
          overview={Overview}
          id={this.props.scenario.id}
          pageNbr={this.state.currentPage}
          color={SCENARIOS[this.props.scenario.id].color}
        />
        <NextPage gotoPage={this.getNextPage}>Next Scenario Page</NextPage>
      </React.Fragment>
    );
  }

  getNextPage = evt => {
    /* Normally an event is passed in, but the PillNavigation will explicity
      pass an integer to jump to a specific page. */
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
    const maxPage = Object.keys(this.props.scenario).reduce(
      (accum, current) => {
        // Look for pages and extract the number off it.
        const matches = current.match(/(?<=page)\d+$/);
        if (matches) {
          const pageNbr = parseInt(matches[0], 10);
          if (pageNbr > accum) {
            return pageNbr;
          }
          return accum;
        }
        return accum;
      },
      0
    );

    return this.state.currentPage === maxPage;
  };
}

Scenario.propTypes = {
  goNextPage: PropTypes.func.isRequired,
  scenario: PropTypes.object.isRequired
};

export default Scenario;
