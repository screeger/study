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
        <h1>Design adhesive paper for note-taking</h1>
        <h2>Consider 1</h2>
        <p>Study how burrs attach to objects in nature </p>
        <h2>Consider 2</h2>
        <p>Study how lizards easily climb up and around obstacles</p>
        <h2>Consider 3</h2>
        <p>What are pros/cons of adhesive paper already on the market?</p>
      </main>
    </React.Fragment>
  );
}
Page.propTypes = {
  getNextPage: PropTypes.func.isRequired,
  overview: PropTypes.func,
  id: PropTypes.number.isRequired,
  pageNbr: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export default Page;
