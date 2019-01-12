import React from "react";
import PropTypes from "prop-types";

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.placeholderText = "How might we...";
    this.state = {
      contents: this.props.contents || ""
    };
    this.refTextarea = React.createRef();
  }

  componentDidMount() {
    this.refTextarea.current.focus();
  }

  render() {
    return (
      <textarea
        value={this.state.contents}
        onChange={this.textChanged}
        onBlur={this.blurredTextbox}
        placeholder={this.placeholderText}
        ref={this.refTextarea}
      />
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
