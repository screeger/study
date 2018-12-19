import React from "react";
import PillNavigation from "../../components/pillNavigation";

export default (props) => {
  return (
    <React.Fragment>
      <PillNavigation active={3} navRequested={props.getNextPage} />
      <h1>This is Scene 3 - Page Three</h1>
      <p>All stuff in this area talks about page three things.</p>
    </React.Fragment>
  );
};
