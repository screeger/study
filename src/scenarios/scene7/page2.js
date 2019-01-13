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
        <h1>Design a kid-friendly toy</h1>
        <h2>Consideration 1</h2>
        <p>How does it help the kid learn?</p>
        <h2>Consideration 2</h2>
        <p>Is is suitable for their cognitive abilities?</p>
        <h2>Consideration 3</h2>
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
