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
    const textareas = this.state.contents.map((contentsObj, idx) => {
      return (
        <TextArea
          key={`${this.props.storageKey}_${idx}`}
          id={`${this.props.storageKey}_${idx}`}
          doneEditing={this.save}
          contents={contentsObj.value}
        />
      );
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

PonderBox.propTypes = {
  storageKey: PropTypes.string.isRequired
};

export default PonderBox;
