import React from "react";
import PropTypes from "prop-types";

class PageNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.className = props.className || "nextPage";
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.disabled && !this.props.disabled) {
      document.getElementById("nextPageBtn").focus();
    }
  }

  render() {
    let kids;
    if (this.className === "nextPage") {
      kids = (
        <React.Fragment>
          <span>{this.props.children}</span>
          <span />
        </React.Fragment>
      );
    } else {
      kids = (
        <React.Fragment>
          <span />
          <span>{this.props.children}</span>
        </React.Fragment>
      );
    }
    return (
      <button
        id="nextPageBtn"
        className={this.className}
        onClick={this.props.gotoPage}
        disabled={this.props.disabled}>
        {kids}
      </button>
    );
  }
}
PageNavigation.propTypes = {
  gotoPage: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default PageNavigation;
