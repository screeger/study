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
        <h2>For example, if the scenario were to "Design a writing utensil", you might think about...</h2>
        <h3>Who else can benefit?</h3>
        <p>What would a utensil look like for teachers? </p>
        <h3>Expand your target group beyond the obvious.</h3>
        <p>How about Architects?</p>
        <h3>Consider groups unlike yourself</h3>
        <p>Or 5 year old children?</p>
      </main>
    </React.Fragment>
  );
}
Page.propTypes = {
  getNextPage: PropTypes.func.isRequired,
  overview: PropTypes.func,
  id: PropTypes.number.isRequired,
  pageNbr: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export default Page;
