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
        <h2>Now let's consider, "Design a product that cleans teeth"</h2>
        <h3>What kind of environmental footprint does it have?</h3>
        <p>What are the environmental implications of current products? How can it be improved? </p>
        <h3>What kind of impact does it have on society as a whole?</h3>
        <p>Consideration the circular lifespan of product (manufacturing to landfill)</p>
        <h3>How does it differ among various cultures?</h3>
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
