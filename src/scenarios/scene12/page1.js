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
        <h1>Design a thermal jacket</h1>
        <h2>Consider 1</h2>
        <p>Create tests to confirm jacket can keep user warm in negative degree weather</p>
        <h2>Consider 2</h2>
        <p>Provide lifetime service if jacket is damaged</p>
        <h2>Consider 3</h2>
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
