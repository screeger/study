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
        <h1>Design a hat that keeps the person’s head warm</h1>
        <h2>Consider 1</h2>
        <p>Is it culturally appropriate?</p>
        <h2>Consider 2</h2>
        <p>When/where is it societally taboo to wear a hat?</p>
        <h2>Consider 3</h2>
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
