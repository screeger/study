import React from "react";

import './questionGrid.css';

class Question extends React.Component {
  render() {
    return (
      <div className='questionGrid'>
        {this.props.children}
      </div>
      );
  }
}

export default Question;
