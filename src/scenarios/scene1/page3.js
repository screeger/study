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
        <h1>A final example to consider: <strong>Design an online platform that plays music</strong></h1>
        <h2>Characteristics that are not similar to you</h2>
        <p>How to easily acclimate someone new to this platform. </p>
        <h2>How their personality affects their needs</h2>
        <p>How to allow someone to discover new music.</p>
        <h2>What is of importance to accomplish a task</h2>
        <p>User wants to listen to music without using cellular data.</p>
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
