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
        <h1>Let's now consider: <strong>Design a shelter for sleeping outdoors</strong>.</h1>
        <h2>What is of importance to accomplish the task</h2>
        <p>User needs the process to be fast and easy.</p>
        <h2>Skill level of the User</h2>
        <p>User has never camped outdoors before.</p>
        <h2>Characteristic of the User</h2>
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
