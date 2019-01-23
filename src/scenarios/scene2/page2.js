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
        <h2>Design an event that educates on climate change</h2>
        <h3>Consideration 1</h3>
        <p>How to attract high school students to be engaged. </p>
        <h3>Consideration 2</h3>
        <p>Encourage young families to attend.</p>
        <h3>Consideration 3</h3>
        <p>Invite CEOs of businesses</p>
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
