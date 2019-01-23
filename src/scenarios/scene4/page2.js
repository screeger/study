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
        <h2>Now let's consider, "Design a garment that protects from extreme outdoor elements"</h2>
        <h3>Consideration 1</h3>
        <p>Look into high end fashion examples as inspiration</p>
        <h3>Consideration 2</h3>
        <p>How to spiders weave strong webs?</p>
        <h3>Consideration 3</h3>
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
