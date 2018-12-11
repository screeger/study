import React from "react";
import PillNavigation from "../../components/pillNavigation";

export default (props) => {
  return (
    <React.Fragment>
      <h1>This is Scene 1 - Page Two</h1>
      <PillNavigation active={2} navRequested={props.getNextPage} />
    </React.Fragment>
  );
};
