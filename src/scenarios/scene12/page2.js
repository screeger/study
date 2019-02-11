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
        <h2>Now let's consider, "Design farm equipment to haul material"</h2>
        <h3>What regulatory bodies oversee such testing?</h3>
        <p>Test that it can withstand all seasons</p>
        <h3>What components are a safety hazard?</h3>
        <p>Provide safety guards around all blades</p>
        <h3>How can the user maintain the product?</h3>
        <p>Display safety notifications for maintenance issues (oil changes)</p>
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
