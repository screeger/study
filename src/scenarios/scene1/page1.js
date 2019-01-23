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
        <h2>For example, if the scenario were to <strong>Design a product that displays weight</strong>, you might think about... </h2>
        <h3>Characteristics not similar to you</h3>
        <p>How would a handicapped person use the product? </p>
        <h3>What is of importance to accomplish a task</h3>
        <p>How can the product quickly display weight of your dog?</p>
        <h3>Traditions from other cultures</h3>
        <p>How would someone wearing all their clothes accurately depict weight?</p>
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
