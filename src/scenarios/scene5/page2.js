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
        <h1>Design a product that boils water</h1>
        <h2>Consider 1</h2>
        <p>What form lends itself to carrying large amounts of hot liquid?</p>
        <h2>Consider 2</h2>
        <p>What material lends itself to boiling liquid?</p>
        <h2>Consider 3</h2>
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
