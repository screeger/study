import React from "react";
import Timer from "../../components/timer";

class TimerPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      timerIsDone: false
    };
  }

  render() {
    const doneMessage = (
      <p>Put your pencils down. Press the Next Page button to continue.</p>
    );
    return (
      <React.Fragment>
        <h1>Isn’t this timer just adorbs?</h1>
        <p><Timer minutes={5.0} onDing={this.showCompletionMessage} /></p>
        {this.state.timerIsDone && doneMessage}
      </React.Fragment>
    );
  }
  showCompletionMessage = () => {
    this.setState({ timerIsDone: true });
  };
}

export default TimerPage;
