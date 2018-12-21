import React from "react";
import PropTypes from "prop-types";
import leftPad from "left-pad";

import "./timer.css";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: props.minutes * 60,
      running: false
    };
  }
  render() {
    let btnText = "Begin Timer";
    if (this.state.running) {
      btnText = this.formatSeconds(this.state.seconds);
    }
    if (this.state.seconds === 0) {
      btnText = "Done";
    }
    return (
      <React.Fragment>
        <button
          className={"timer" + (this.state.running ? " running" : "")}
          onClick={this.toggleTimer}
        >
          {btnText}
        </button>
      </React.Fragment>
    );
  }

  toggleTimer = () => {
    // Actually, there is no pause/resume, so this function is really just starting the timer.
    this.setState({ running: !this.state.running });

    this.interval = window.setInterval(() => {
      const seconds = this.state.seconds - 1;
      if (seconds) {
        this.setState({ seconds });
      } else {
				// Timer just hit zero.
				window.clearInterval(this.interval);
        this.setState({ seconds, running: false });
        this.props.onDing();
      }
    }, 50);
  };

  formatSeconds = seconds => {
    const minutes = Math.floor(seconds / 60);
    const secs = leftPad(seconds % 60, 2, "0");
    return `${minutes}:${secs}`;
  };
}

Question.propTypes = {
  minutes: PropTypes.number.isRequired,
  onDing: PropTypes.func.isRequired
};

export default Question;
