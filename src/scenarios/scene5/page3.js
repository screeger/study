import React from "react";
import PropTypes from "prop-types";

import PillNavigation from "../../components/pillNavigation";

function Page(props) {
  const Overview = props.overview;
  return (
    <React.Fragment>
      <Overview id={props.id} />
      <main>
        <PillNavigation
          active={props.pageNbr}
          navRequested={props.getNextPage}
          color={props.color}
        />
        <h2>Design a wearable that keeps track of time</h2>
        <h3>Consideration 1</h3>
        <p>What does the interface look like?</p>
        <h3>Consideration 2</h3>
        <p>What does the physical wearable look like?</p>
        <h3>Consideration 3</h3>
        <p>How does the wearable lend itself to telling time visually?</p>
      </main>
    </React.Fragment>
  );
}
Page.propTypes = {
  getNextPage: PropTypes.func.isRequired,
  overview: PropTypes.func,
  id: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export default Page;
