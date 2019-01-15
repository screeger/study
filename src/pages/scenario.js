import React from "react";
import PropTypes from "prop-types";
import { SCENARIOS } from "../helpers/constants";
import PrevPage from "../components/prevPage";
import NextPage from "../components/nextPage";

class Scenario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNextBtn: true,
      showPrevBtn: false,
      currentPage: 1 // Scenario pages only
    };
  }

  render() {
    const Overview = this.props.scenario.overview;
    const Page = this.props.scenario["page" + this.state.currentPage];

    return (
      <React.Fragment>
        <Page
          getNextPage={this.loadPage}
          overview={Overview}
          id={this.props.scenario.id}
          pageNbr={this.state.currentPage}
          color={SCENARIOS[this.props.scenario.id].color}
          setBtnState={this.setBtnState}
        />
        <PrevPage
          disabled={!this.state.showPrevBtn}
          gotoPage={this.loadPrevPage}>
          Back
        </PrevPage>
        <NextPage
          disabled={!this.state.showNextBtn}
          gotoPage={this.loadNextPage}>
          Continue
        </NextPage>
      </React.Fragment>
    );
  }

  loadPrevPage = () => {
    this.loadPage(this.state.currentPage - 1);
  };

  loadNextPage = () => {
    this.loadPage(this.getNextPage());
  };

  getNextPage = evt => {
    // Next page could either be next in sequence for this scenario, or next page after scenario.
    if (this.atLastPage()) {
      if (this.props.availableScenarios.length === 0) {
        this.props.goNextPage("results");
      } else {
        this.props.goNextPage("compass");
      }
    } else {
      return this.state.currentPage + 1;
    }
  };

  loadPage = pgNbr => {
    const showPrevBtn = pgNbr !== 1;
    this.setState({ currentPage: pgNbr, showNextBtn: true, showPrevBtn });
  };

  atLastPage = () => {
    const maxPage = Object.keys(this.props.scenario).reduce(
      (accum, current) => {
        // Look for pages and extract the number off it.
        if (this.is_a_page(current)) {
          const pageNbr = this.extractPageNbr(current);
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

  is_a_page = szPage => {
    return szPage.includes("page");
  };

  extractPageNbr = szpage => {
    // At this point, we already know that szpage is 'pageXX' where XX is a number.
    return parseInt(szpage.match(/\d+/)[0], 10);
  };

  setBtnState = newState => {
    if (newState.hasOwnProperty("showNextBtn")) {
      this.setState({ showNextBtn: newState.showNextBtn });
    }
  };
}

Scenario.propTypes = {
  goNextPage: PropTypes.func.isRequired,
  scenario: PropTypes.object.isRequired,
  availableScenarios: PropTypes.array.isRequired
};

export default Scenario;
