import React from "react";
import PillNavigation from "../../components/pillNavigation";

export default (props) => {
  return (
    <React.Fragment>
      <PillNavigation active={2} navRequested={props.getNextPage} />
      <h1>Design a shelter for sleeping outdoors</h1>
      <h2>Option 1</h2>
      <p>What does the person need to comfortably sleep in a desert with no trees?</p>
      <h2>Option 2</h2>
      <p>blah blah</p>
      <h2>Option 3</h2>
      <p>All stuff in this area talks about page one things.</p>
    </React.Fragment>
  );
};
