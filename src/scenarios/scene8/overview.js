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
          What are the main functions the design <strong>of the playground</strong> has to focus on?
          How do you characterize these functions?
          </em>
        </p>

        <p>Here are some thought starters:</p>
        <ul>
          <li>What are the other roles the design can respond to?</li>
          <li>Are they basic?</li>
          <li>Primary?</li>
          <li>Secondary functions?</li>
        </ul>
      </main>
    </React.Fragment>
  );
}

Overview.propTypes = {
  id: PropTypes.number.isRequired
};
export default Overview;
