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
        <h1>Design farm equipment to haul material</h1>
        <h2>Consideration 1</h2>
        <p>Test that it can withstand all seasons</p>
        <h2>Consideration 2</h2>
        <p>Provide safety guards around all blades</p>
        <h2>Consideration 3</h2>
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
