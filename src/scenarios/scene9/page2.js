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
        <h2>Now let's consider, "Design a public park"</h2>
        <h3>What criteria is already guaranteed for the project?</h3>
        <p>There are seating arrangements</p>
        <h3>What criteria is already guaranteed for the project?</h3>
        <p>Paths for navigation</p>
        <h3>What criteria is already guaranteed for the project?</h3>
        <p>Lights for safety at night</p>
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
