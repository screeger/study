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
        <h2>For example, if the scenario were to "Design a thermal jacket", you might think about...</h2>
        <h3>What types of tests are performed on the product?</h3>
        <p>Create tests to confirm jacket can keep user warm in negative degree weather</p>
        <h3>Company provides maintenance</h3>
        <p>Provide lifetime service if jacket is damaged</p>
        <h3>What components are prone to breaking?</h3>
        <p>Ensure zippers and pockets are functioning</p>
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
