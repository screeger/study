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
        <h2>Design a camera when using on vacation</h2>
        <h3>Who else can benefit?</h3>
        <p>How could a teenager enjoy taking photos?</p>
        <h3>Consider a group unlike yourself</h3>
        <p>What about an eldery adult?</p>
        <h3>What are other types of groups?</h3>
        <p>Or a professional photographer?</p>
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
