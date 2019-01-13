import React from "react";
import { setBkgd, removeBkgd } from '../helpers/pageSetup';
import bkgdUrl from "../images/park-design-small.jpg";

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
          <h2>Problem Solution Co-Evolution</h2>
          <p>Strategy Generator</p>
          <p>
            <button
              style={{
                width: "8em",
                height: "3em",
                fontSize: "larger"
              }}
              onClick={() => {
                this.props.goNextPage("intro2");
              }}>
              Let’s Start!
            </button>
          </p>
        </div>
      </main>
    );
  }
}

export default intro1;
