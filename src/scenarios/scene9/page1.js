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
        <h2>For example, if the scenario were to "Design a library", you might think about...</h2>
        <h3>What criteria is already guaranteed for the project?</h3>
        <p>It needs to be suitable for all ages</p>
        <h3>What criteria is already guaranteed for the project?</h3>
        <p>Needs to provide community spaces</p>
        <h3>What criteria is already guaranteed for the project?</h3>
        <p>Must include a computer room</p>
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
