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
        <h2>For example, if the scenario were to <strong>Design a vehicle that transports you from point A to point B</strong> you might think about...</h2>
        <h3>Consideration 1</h3>
        <p>A cultural group akin to Harley Davidson loyalists would have a particular bias towards the vehicle.</p>
        <h3>Consideration 2</h3>
        <p>If the government subsidizes electric vehicles, a stronger emphasizing for designing environmentaly friendly vehicles is a priority.</p>
        <h3>Consideration 3</h3>
        <p>Gas mileage and safety are cultural components that need to be considered.</p>
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
