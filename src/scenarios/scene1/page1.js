import React from "react";
import PillNavigation from "../../components/pillNavigation";

export default (props) => {
  return (
    <React.Fragment>
      <PillNavigation active={1} navRequested={props.getNextPage} />
      <h1>Design a product that displays weight</h1>
      <h2>Option 1</h2>
      <p>How would a handicapped person use the product? </p>
      <h2>Option 2</h2>
      <p>How can the product quickly display weight of your dog?</p>
      <h2>Option 3</h2>
      <p>How would someone wearing all their clothes accurately depict weight?</p>
    </React.Fragment>
  );
};
