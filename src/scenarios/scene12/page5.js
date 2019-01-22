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
        
      </p>
    );
    return (
      <main>
        <h1 style={{ marginBottom: "3em" }}>Solution Generation</h1>
        <p>
          Take 5 minutes to generate as many solutions as you can based on the new problem statements you previously generated.
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
