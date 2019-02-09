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
        <h2>Now let's consider, "Design an event that educates on climate change"</h2>
        <h3>Who else can benefit?</h3>
        <p>How to attract high school students to be engaged. </p>
        <h3>Who could greatly learn from this event?</h3>
        <p>Encourage young families to attend.</p>
        <h3>Who could provide vital resources and networking to the event?</h3>
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
