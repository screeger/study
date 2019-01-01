import React from "react";
import PropTypes from "prop-types";

import "./nextPage.css";

class NextPage extends React.Component {
  componentDidUpdate (prevProps, prevState) {
    if (prevProps.disabled && !this.props.disabled) {
      document.getElementById('nextPageBtn').focus();
    }
  }

  render() {
    return (
      <button
        id="nextPageBtn"
        className="nextPage"
        onClick={this.props.gotoPage}
        disabled={this.props.disabled}>
        <span>{this.props.children}</span>
        <span />
      </button>
    );
  }
}
NextPage.propTypes = {
  gotoPage: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default NextPage;
