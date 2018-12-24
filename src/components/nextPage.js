import React from "react";
import PropTypes from "prop-types";

import "./nextPage.css";

class NextPage extends React.Component {
  render() {
    return (
      <button className="nextPage" onClick={this.props.gotoPage} disabled={this.props.disabled}>
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
