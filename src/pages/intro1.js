import React from "react";

export default props => {
  return (
    <main>
      <div style={{ textAlign: "center", paddingTop: "150px" }}>
        <h2>Hey Squeezy Cheeks</h2>
        <p>What’s shakin’?</p>
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
            Let’s Bounce
          </button>
        </p>
      </div>
    </main>
  );
};
