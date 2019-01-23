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
        <h1>For example, if the scenario were to <strong>Design a coffee mug</strong> you might think about...</h1>
        <h2>Consideration 1</h2>
        <p>Transport to work</p>
        <h2>Consideration 2</h2>
        <p>Aid in car transportation</p>
        <h2>Consideration 3</h2>
        <p>Fitness classes</p>
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
