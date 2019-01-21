import React from "react";
import PropTypes from "prop-types";
import TextArea from "./textArea";
import { setItem, getForPage } from "../helpers/storage";

import "./ponderBox.css";

class PonderBox extends React.Component {
  constructor(props) {
    super(props);
    // Look for previously saved values and load them.
    let contents = getForPage(props.storageKey);
    let count = 1;
    if (contents.length === 0) {
      count = 1;
      contents = [""];
    } else {
      count = contents.length;
    }
    this.state = {
      count,
      contents
    };
  }

  render() {
    const textareas = this.state.contents.map((contentsObj, idx) => (
      <TextArea
        key={`${this.props.storageKey}_${idx}`}
        id={`${this.props.storageKey}_${idx}`}
        doneEditing={this.save}
        contents={contentsObj.value}
        placeholder={this.props.placeholder}
        autoFocus={this.props.autoFocus}
      />
    ));

    return (
      <React.Fragment>
        {textareas}
        {this.props.allowAdditional && (
          <p>
            <button
              className="themed"
              style={{ width: "2em" }}
              onClick={this.addPonder}>
              ✚
            </button>{" "}
            Additional problem statement
          </p>
        )}
      </React.Fragment>
    );
  }

  addPonder = () => {
    const newContents = this.state.contents.slice();
    newContents.push({ key: this.state.count + 1, value: "" });
    this.setState({
      count: this.state.count + 1,
      contents: newContents
    });
  };

  save = newContents => {
    setItem(newContents.key, newContents.value);
  };
}

PonderBox.defaultProps = {
  allowAdditional: true,
  autoFocus: true
};

PonderBox.propTypes = {
  storageKey: PropTypes.string.isRequired,
  allowAdditional: PropTypes.bool,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool
};

export default PonderBox;
