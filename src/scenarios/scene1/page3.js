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
        <h1>Design a product that displays weight</h1>
        <h2>Option 1</h2>
        <p>How would a handicapped person use the product? </p>
        <h2>Option 2</h2>
        <p>How can the product quickly display weight of your dog?</p>
        <h2>Option 3</h2>
        <p>
          How would someone wearing all their clothes accurately depict weight?
        </p>
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
