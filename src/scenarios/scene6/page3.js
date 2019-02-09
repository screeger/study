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
        <h2>Design a product that allows someone to sit comfortably</h2>
        <h3>Potential settings it could be revelant for</h3>
        <p>In a living room at home</p>
        <h3>Potential settings it could be revelant for</h3>
        <p>In a classroom setting</p>
        <h3>Potential settings it could be revelant for</h3>
        <p>In an office space</p>
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
