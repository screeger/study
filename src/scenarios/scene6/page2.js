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
        <h1>Design a product that holds your luggage</h1>
        <h2>Consideration 1</h2>
        <p>Easily transport luggage across the airport.</p>
        <h2>Consideration 2</h2>
        <p>When waiting at the airport, how can you utilize it as a seat?</p>
        <h2>Consideration 3</h2>
        <p>How to swifty place it in the cabin?</p>
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
