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
        <h2>Design a medical device for patients with diabetes</h2>
        <h3>Find case studies that utilize similar themes for inspiration.</h3>
        <p>What devices are currently on the market? </p>
        <h3>Find case studies that utilize similar themes for inspiration.</h3>
        <p>Identify products that are successful but need improvement.</p>
        <h3>How do your past experiences help tailor innovative ideas?</h3>
        <p>What ways can you make it more user friendly?</p>
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
