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
          What are potential scenarios where this <strong>playground</strong> could occur in?
          What are unique or unexpected ways the <strong>playground</strong> could be interacted with beyond its primary function or scenario?
          What is the context which the problem takes place? 
          </em>
        </p>

        <p>Here are some thought starters:</p>
        <ul>
          <li>How does the context impact the problem?</li>
          <li>How can this problem be an issue for other settings?</li>
          <li>What are the other potential settings this problem might occur in or the solution could be relevant for?</li>
          <li>What are the characteristics of existing conditions?</li>
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
