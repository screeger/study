import React from "react";

export default props => {
  return (
    <main>
      <div style={{ textAlign: "center", paddingTop: "150px" }}>
        <h2>Problem Solution Co-Evolution</h2>
        <p>Strategy Generator</p>
        <p>
          <button
            style={{
              width: '8em',
              height: '3em',
              fontSize: 'larger'
            }}
            onClick={() => {
              props.goNextPage("intro2");
            }}>
            Let’s Start!
          </button>
        </p>
      </div>
    </main>
  );
};
