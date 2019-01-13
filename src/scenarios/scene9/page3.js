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
        <h1>Design the user experience of an airport</h1>
        <h2>Consideration 1</h2>
        <p>Maps for easy navigation </p>
        <h2>Consideration 2</h2>
        <p>Well-lit, easily accessible signs for bathrooms</p>
        <h2>Consideration 3</h2>
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
