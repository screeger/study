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
        <h2>Now let's consider, "Design an online forum"</h2>
        <h3>Describe the problem you're solving for</h3>
        <p>No support from colleagues</p>
        <h3>Describe the problem you're solving for</h3>
        <p>Can't find like-minded people</p>
        <h3>Describe the problem you're solving for</h3>
        <p>Lack of inspiration</p>
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
