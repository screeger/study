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
        <h1>Design a utensil that aids in eating</h1>
        <h2>Consideration 1</h2>
        <p>What will it look like depending on the food eaten? </p>
        <h2>Consideration 2</h2>
        <p>What forms enhance proper consumption of food?</p>
        <h2>Consideration 3</h2>
        <p>What material is most effective for the type of food consumed?</p>
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
