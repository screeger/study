import React from "react";
import PillNavigation from "../../components/pillNavigation";

export default (props) => {
  return (
    <React.Fragment>
      <h1>This is Scene 1 - Page One</h1>
      <PillNavigation active={1} navRequested={props.getNextPage} />
    </React.Fragment>
  );
};
