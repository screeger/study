import React from "react";
import PillNavigation from "../../components/pillNavigation";

export default (props) => {
  return (
    <React.Fragment>
      <PillNavigation active={2} navRequested={props.getNextPage} />
      <h1>This is Scene 2 - Page Two</h1>
      <p>All stuff in this area talks about page two things.</p>
    </React.Fragment>
  );
};
