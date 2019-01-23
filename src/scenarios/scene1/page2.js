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
        <h2>Now let's consider, "Design a shelter for sleeping outdoors"</h2>
        <h3>What is of importance to accomplish the task</h3>
        <p>User needs the process to be fast and easy.</p>
        <h3>Skill level of the User</h3>
        <p>User has never camped outdoors before.</p>
        <h3>Characteristic of the User</h3>
        <p>User is an Eagle Scout. </p>
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
