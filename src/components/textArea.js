import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contents: this.props.contents || ''
		};
		this.refTextarea = React.createRef();
	}

	componentDidMount() {
		if (this.props.autoFocus) this.refTextarea.current.focus();
	}

	render() {
		return (
			<textarea
				value={this.state.contents}
				onChange={this.textChanged}
				onBlur={this.blurredTextbox}
				placeholder={this.props.placeholder}
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
TextArea.defaultProps = {
	placeholder: 'How might we...',
	autoFocus: true
};
TextArea.propTypes = {
	id: PropTypes.string.isRequired,
	doneEditing: PropTypes.func.isRequired,
	contents: PropTypes.string,
	placeholder: PropTypes.string,
	autoFocus: PropTypes.bool
};

export default TextArea;
