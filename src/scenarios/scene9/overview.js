import React from "react";
import PropTypes from "prop-types";
import TitleBlock from "../../components/titleBlock";
import { SCENARIOS } from "../../helpers/constants";
import LeadInText from '../../components/lead-in-text';

function Overview(props) {
  return (
    <React.Fragment>
      <TitleBlock color={SCENARIOS[props.id].color}>
        {SCENARIOS[props.id].name}
      </TitleBlock>
      <div className="overview">
        <p>
          <em>
          What are the items or actions that are already known to be true for the <strong>design of the playground</strong>?
          How can you challenge them?
          How can you narrow the scope of the <strong>playground</strong>? 
          </em>
        </p>

        <p>Here are some thought starters:</p>
        <ul>
          <li>Are there budget constraints?</li>
          <li>What’s the cost of the design, fabrication, etc?</li>
          <li>What criteria is already guaranteed for the project?</li>
        </ul>
        <LeadInText scenario={SCENARIOS[props.id].name} />
      </div>
    </React.Fragment>
  );
}

Overview.propTypes = {
  id: PropTypes.number.isRequired
};
export default Overview;
