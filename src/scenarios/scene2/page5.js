import React from "react";
import PropTypes from 'prop-types';
import Timer from "../../components/timer";

class TimerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerIsDone: false
    };
    props.setBtnState({ showNextBtn: false });
  }

  render() {
    const doneMessage = (
      <p style={{ textAlign: "center" }}>
        Put your pencils down. Press the Next Page button to continue.
      </p>
    );
    return (
      <main>
        <h1 style={{ marginBottom: "3em" }}>Isn’t this timer just adorbs?</h1>
        <p>
          Bacon is tasty. Bacon is tasty. Bacon is tasty. Bacon is tasty. Bacon
          is tasty. Bacon is tasty. Bacon is tasty. Bacon is tasty. Bacon is
          tasty. Bacon is tasty. Bacon is tasty. Bacon is tasty. Bacon is tasty.
          Bacon is tasty. Bacon is tasty. Bacon is tasty.
        </p>

        <p style={{ margin: "2em", textAlign: "center" }}>
          <Timer minutes={5.0} onDing={this.showCompletionMessage} />
        </p>
        {this.state.timerIsDone && doneMessage}
      </main>
    );
  }
  showCompletionMessage = () => {
    this.setState({ timerIsDone: true });
    this.props.setBtnState({ showNextBtn: true });
  };
}

TimerPage.propTypes = {
  setBtnState: PropTypes.func.isRequired
}

export default TimerPage;
