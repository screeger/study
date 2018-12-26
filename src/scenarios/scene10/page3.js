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
        <h1>Design a device that helps you wake up</h1>
        <h2>Consider 1</h2>
        <p>Miss the alarm in the morning</p>
        <h2>Consider 2</h2>
        <p>Can’t understand how the current device works</p>
        <h2>Consider 3</h2>
        <p>Doesn’t motivate me to wake up</p>
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
