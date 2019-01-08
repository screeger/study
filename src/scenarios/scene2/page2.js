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
        <h1>Design an event that educates on climate change</h1>
        <h2>Consider 1</h2>
        <p>How to attract high school students to be engaged. </p>
        <h2>Consider 2</h2>
        <p>Encourage young families to attend.</p>
        <h2>Consider 3</h2>
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
