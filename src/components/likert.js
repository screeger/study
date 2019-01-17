import React from "react";
import SHA1 from "crypto-js/sha1";

import './likert.css';

class LikertScale extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      answer: ''
    }
  }
  render() {
    const { question, responses } = this.props;
    const sha = String(SHA1(question)).substring(0, 7);
    const radios = responses.map((response, idx) => {
      const uniqueKey = `${sha}${idx}`;
      return (
        <label key={uniqueKey} htmlFor={uniqueKey} className="likertResponse">
          <span className="likertLine" /><span className="likertLine" />
          <input
            type="radio"
            value={response.value}
            name={sha}
            id={uniqueKey}
            className="visuallyHidden"
            onClick={this.chosen}
          />
          <span className="likertIndicator" />
          {response.text}
        </label>
      );
    });

    return (
      <fieldset className="likertScale">
        <legend>{question} <strong className="likertAnswer">{this.state.answer}</strong></legend>
        <div className="likertBand">{radios}</div>
      </fieldset>
    );
  }

  chosen = evt => {
    this.setState( { answer: evt.target.value });
    this.props.picked(evt.target.value);
  }
}

export default LikertScale;
