import React from "react";
import PropTypes from "prop-types";

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.placeholderText = "Enter your thoughts here...";
    this.state = {
      contents: this.props.contents || ''
    };
  }

  render() {
    return (
      <React.Fragment>
        <textarea
          value={this.state.contents}
          onChange={this.textChanged}
          onBlur={this.blurredTextbox}
          placeholder={this.placeholderText}
        />
      </React.Fragment>
    );
  }

  textChanged = evt => {
    this.setState({
      contents: evt.target.value
    });
  };

  blurredTextbox = () => {
    this.props.doneEditing({ key: this.props.id, value: this.state.contents });
  };
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  doneEditing: PropTypes.func.isRequired,
  contents: PropTypes.string
};

export default TextArea;
