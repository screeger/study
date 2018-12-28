import React from "react";
import PropTypes from "prop-types";
import leftPad from "left-pad";
import KeystrokeListener from "../helpers/keystrokeListener";

import "./timer.css";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: props.minutes * 60,
      running: false
    };
    this.keyListen = new KeystrokeListener("sam", this.timerDone);
    this.refTimer = React.createRef();
  }
  componentWillUnmount () {
    this.keyListen.remove();
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
          className={"timer themed" + (this.state.running ? " running" : "")}
          onClick={this.startTimer}
          ref={this.refTimer}
        >
          {btnText}
        </button>
      </React.Fragment>
    );
  }

  startTimer = () => {
    // Actually, there is no pause/resume, so this function is really just starting the timer.
    if (!this.state.running && this.state.seconds) {
      this.setState({ running: true });

      this.interval = window.setInterval(() => {
        const seconds = this.state.seconds - 1;
        if (seconds) {
          this.setState({ seconds });
        } else {
          this.timerDone();
        }
      }, 1000);

      this.refTimer.current.blur();
    }
  };

  timerDone = () => {
    window.clearInterval(this.interval);
    this.setState({ seconds: 0, running: false });
    this.props.onDing();
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
