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
        <h2>Now let's consider, "Design a product that boils water"</h2>
        <h3>What are tangible characteristics of the solution?</h3>
        <p>What form lends itself to carrying large amounts of hot liquid?</p>
        <h3>What are potential material descriptors?</h3>
        <p>What material lends itself to boiling liquid?</p>
        <h3>What is its size in relation to its environment?</h3>
        <p>What size is reasonable for someone lifting hot liquid?</p>
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
