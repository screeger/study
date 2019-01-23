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
        <h2>Design a hat that keeps the person’s head warm</h2>
        <h3>Consideration 1</h3>
        <p>Is it culturally appropriate?</p>
        <h3>Consideration 2</h3>
        <p>When/where is it societally taboo to wear a hat?</p>
        <h3>Consideration 3</h3>
        <p>What materials are sustainable for hat manufacturing?</p>
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
