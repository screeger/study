import React from "react";
import { setItem } from '../helpers/storage';

import './question.css';

class Question extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>{this.props.children}</div>
        <textarea onBlur={this.saveField}></textarea>
        </React.Fragment>
      );
  }

  saveField = () => {
    this.props.navRequested(this.props.position);
  };
}

export default Question;
