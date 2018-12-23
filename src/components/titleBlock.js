import React from "react";
import PropTypes from "prop-types";

import "./titleBlock.css";

class TitleBlock extends React.Component {
  render() {
    return (
      <h1 className="titleBlock" style={{ backgroundColor: this.props.color }}>
        {this.props.children}
      </h1>
    );
  }
}
TitleBlock.propTypes = {
  color: PropTypes.string.isRequired
};

export default TitleBlock;
