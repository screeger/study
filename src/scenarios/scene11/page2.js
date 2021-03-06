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
        <h2>Now let's consider, "Design a chair in school"</h2>
        <h3>Does it inspire movement?</h3>
        <p>How can it be more accessible for students?</p>
        <h3>How to make it adjustable for students?</h3>
        <p>Promotes collaboration among students</p>
        <h3>Does it inspire movement?</h3>
        <p>Easily moved across classrooms</p>
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
