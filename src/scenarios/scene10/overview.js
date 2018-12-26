import React from "react";
import PropTypes from "prop-types";
import TitleBlock from "../../components/titleBlock";
import { SCENARIOS } from "../../helpers/constants";

function Overview(props) {
  return (
    <React.Fragment>
      <TitleBlock color={SCENARIOS[props.id].color}>
        {SCENARIOS[props.id].name}
      </TitleBlock>
      <main>
        <p>
          <em>
          Does the design of the product solve the right problem at the right level?
          </em>
        </p>

        <p>Here are some thought starters:</p>
        <ul>
          <li>Describe the problem you're solving for</li>
          <li>Why is it useful?</li>
          <li>...?</li>
          
        </ul>
      </main>
    </React.Fragment>
  );
}

Overview.propTypes = {
  id: PropTypes.number.isRequired
};
export default Overview;
