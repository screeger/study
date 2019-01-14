import React from "react";
import { setBkgd, removeBkgd } from '../helpers/pageSetup';
import bkgdUrl from "../images/RiverBackground.jpg";

class intro1 extends React.Component {
  componentDidMount () {
    setBkgd(bkgdUrl);
  }
  componentWillUnmount () {
    removeBkgd();
  }
  render() {
    return (
      <main>
        <div style={{ textAlign: "center", paddingTop: "150px" }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            padding: '2em',
            borderRadius: '3em'
          }}>
            <h2 style={{ fontSize: '2em' }}>Problem Solution Co-Evolution</h2>
            <p style={{ fontSize: 'larger', fontWeight: 'bold' }}>Strategy Generator</p>
            <p style={{ marginTop: '3em' }}>
              <button
                style={{
                  width: "200px",
                  height: "3em",
                  fontSize: "larger",
                  border: 'none',
                  backgroundColor: '#e5cb2c',
                  color: 'black'
                }}
                onClick={() => {
                  this.props.goNextPage("intro2");
                }}>
                <span style={{ fontWeight: 'bold' }}>Let’s Start!</span>
              </button>
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default intro1;
