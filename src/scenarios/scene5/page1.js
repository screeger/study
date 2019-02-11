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
        <h2>For example, if the scenario were to "Design a utensil that aids in eating", you might think about...</h2>
        <h3>What are tangible characteristics of the solution?</h3>
        <p>What will it look like depending on the food eaten? </p>
        <h3>What is its form in relation to its environment?</h3>
        <p>What forms enhance proper consumption of food?</p>
        <h3>What are potential material descriptors?</h3>
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
