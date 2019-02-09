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
        <h2>For example, if the scenario were to "Design a product that provides telecommunication across long distances", you might think about...</h2>
        <h3>How does the context impact the problem?</h3>
        <p>Providing internet in disaster relief areas</p>
        <h3>How can this problem be an issue for other settings?</h3>
        <p>Located in warzones</p>
        <h3>What are the characteristics of existing conditions?</h3>
        <p>Low-income communities</p>
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
