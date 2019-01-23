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
        <h2>Design a product that cleans teeth</h2>
        <h3>Consideration 1</h3>
        <p>What are the environmental implications of current products? How can it be improved? </p>
        <h3>Consideration 2</h3>
        <p>Consideration the circular lifespan of product (manufacturing to landfill)</p>
        <h3>Consideration 3</h3>
        <p>How does cleaning teeth in Japan differ in the United States?</p>
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
