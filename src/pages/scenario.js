import React from "react";
import PropTypes from 'prop-types';

class Scenario extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			currentPage: 1
    }
	}

  render() {
    const Page = this.props.scenario['page' + this.state.currentPage];
    return (
      <React.Fragment>
        <h1>This is a Scenario Page</h1>
				<Page />
        <button
          onClick={this.getNextPage}
        >
          Next Page
        </button>
      </React.Fragment>
    );
  }

  getNextPage = () => {
    const atLastPage = this.state.currentPage === 3;
    if (atLastPage) {
      this.props.goNextPage('compass');
    } else {
      this.setState({ currentPage: this.state.currentPage + 1});
    }
  }
}

Scenario.propTypes = {
  goNextPage: PropTypes.func.isRequired,
  scenario: PropTypes.object.isRequired
}

export default Scenario;
