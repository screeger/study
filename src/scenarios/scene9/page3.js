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
        <h2>Design the user experience of an airport</h2>
        <h3>What criteria is already guaranteed for the project?</h3>
        <p>Maps for easy navigation </p>
        <h3>What criteria is already guaranteed for the project?</h3>
        <p>Well-lit, easily accessible signs for bathrooms</p>
        <h3>What criteria is already guaranteed for the project?</h3>
        <p>Wide pathways for many people to traverse</p>
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
