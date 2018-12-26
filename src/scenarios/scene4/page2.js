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
        <h1>Design a garment that protects from extreme outdoor elements</h1>
        <h2>Consider 1</h2>
        <p>Look into high end fashion examples as inspiration</p>
        <h2>Consider 2</h2>
        <p>How to spiders weave strong webs?</p>
        <h2>Consider 3</h2>
        <p>Study animals that live in extreme conditions</p>
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
