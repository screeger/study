import React from "react";
import PillNavigation from "../../components/pillNavigation";

export default (props) => {
  return (
    <React.Fragment>
      <PillNavigation active={3} navRequested={props.getNextPage} />
      <h1>Design an online platform that plays music</h1>
      <h2>Option 1</h2>
      <p>blah blah</p>
      <h2>Option 2</h2>
      <p>blah blah</p>
      <h3>Option 3</h3>
      <p>All stuff in this area talks about page one things.</p>
    </React.Fragment>
  );
};
