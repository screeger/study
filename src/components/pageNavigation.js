import React from "react";
import PropTypes from "prop-types";

import './pageNavigation.css';

class PageNavigation extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.disabled && !this.props.disabled) {
      document.getElementById("nextPageBtn").focus();
    }
  }

  render() {
    const { gotoPage, direction, disabled, children } = this.props;
    let kids;
    if (direction === "next") {
      kids = (
        <React.Fragment>
          <span>{children}</span>
        </React.Fragment>
      );
    } else {
      kids = (
        <React.Fragment>
          <span>{children}</span>
        </React.Fragment>
      );
    }
    return (
      <button
        id={direction === 'next' ? 'nextPageBtn' : 'prevPageBtn'}
        className={'pageNavigation ' + (direction === 'next' ? 'nextPage' : 'prevPage')}
        onClick={gotoPage}
        disabled={disabled}>
        {kids}
      </button>
    );
  }
}
PageNavigation.propTypes = {
  gotoPage: PropTypes.func.isRequired,
  direction: PropTypes.string,
  disabled: PropTypes.bool
};

export default PageNavigation;
