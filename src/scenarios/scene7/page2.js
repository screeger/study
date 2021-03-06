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
        <h2>Now let's consider, "Design a kid-friendly toy"</h2>
        <h3>Interaction psychologically</h3>
        <p>How does it help the kid learn?</p>
        <h3>Interaction psychologically</h3>
        <p>Is is suitable for their cognitive abilities?</p>
        <h3>Emotional interaction</h3>
        <p>Is it safe but fun for the kid to use?</p>
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
