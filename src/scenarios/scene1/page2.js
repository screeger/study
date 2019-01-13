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
        <h1>Design a shelter for sleeping outdoors.</h1>
        <h2>Consideration 1</h2>
        <p>User needs the process to be fast and easy.</p>
        <h2>Consideration 2</h2>
        <p>User has never camped outdoors before.</p>
        <h2>Consideration 3</h2>
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
