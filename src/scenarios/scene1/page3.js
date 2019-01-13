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
        <h1>Design an online platform that plays music</h1>
        <h2>Consideration 1</h2>
        <p>How to easily acclimate someone new to this platform. </p>
        <h2>Consideration 2</h2>
        <p>How to allow someone to discover new music.</p>
        <h2>Consideration 3</h2>
        <p>User wants to listen to music without using up cellular data.</p>
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
