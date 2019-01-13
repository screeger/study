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
            <p>Strategy Generator</p>
            <p style={{ marginTop: '3em' }}>
              <button
                style={{
                  width: "200px",
                  height: "3em",
                  fontSize: "larger",
                  position: "relative",
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  this.props.goNextPage("intro2");
                }}>
                  <span style={{
                    position: 'absolute',
                    height: 0,
                    width: "182px",
                    borderBottom: "3em solid #DADADA",
                    borderLeft: '9px solid transparent',
                    borderRight: '9px solid transparent',
                    top: 0,
                    left: 0
                  }}/>
                <span style={{ zIndex: 1, position: 'relative', fontWeight: 'bold' }}>Let’s Start!</span>
              </button>
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default intro1;
