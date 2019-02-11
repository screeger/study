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
        <h2>Design shoes for running</h2>
        <h3>What regulatory bodies oversee such testing?</h3>
        <p>Create extensive testing to ensure maximum use </p>
        <h3>How can the user maintain the products?</h3>
        <p>How to clean shoes once they are sweaty</p>
        <h3>How can the user maintain the products?</h3>
        <p>How to maintain them in the rain</p>
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
