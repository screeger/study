import React from "react";
import PropTypes from "prop-types";
import TitleBlock from "../../components/titleBlock";
import { SCENARIOS } from "../../helpers/constants";
import LeadInText, { TopHeader } from '../../components/lead-in-text';

function Overview(props) {
  return (
    <React.Fragment>
      <TitleBlock color={SCENARIOS[props.id].color}>
        {SCENARIOS[props.id].name}
      </TitleBlock>
      <div className="overview">
<TopHeader />
        <p>
          <em>
          Does the design of <strong>the playground</strong> solve the right problem at the right level?
          </em>
        </p>

        <p>Here are some thought starters:</p>
        <ul>
          <li>Describe the problem you're solving for</li>
          <li>Why is it useful?</li>
          <li>What is the impact of this issue?</li>
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
