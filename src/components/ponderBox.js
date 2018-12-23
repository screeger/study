import React from "react";
import PropTypes from "prop-types";

import "./ponderBox.css";

class PonderBox extends React.Component {
  constructor(props) {
    super(props);
    this.defaultText = "Enter your thoughts here...";
    this.state = {
      count: 1,
      contents: [this.defaultText]
    };
  }

  defaultText;

  render() {
    const textareas = this.state.contents.map((text, idx) => {
      return <textarea key={idx} value={text} onChange={this.textChanged} />;
    });
    return (
      <React.Fragment>
        {textareas}
        <p>
          <button
            className="themed"
            style={{ width: "2em" }}
            onClick={this.addPonder}
          >
            ✚
          </button>
        </p>
      </React.Fragment>
    );
  }
  addPonder = () => {
    this.setState({
      count: this.state.count + 1,
      contents: this.state.contents.push(this.defaultText)
    });
  };
  textChanged = () => {};
}

PonderBox.propTypes = {
  storageKey: PropTypes.string.isRequired
};

export default PonderBox;
