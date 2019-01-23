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
          Who are the others who might replace the primary users of <strong>the playground</strong>? Who else will be affected by the design? In what capacity? Consider both the individuals and the groups.
          </em>
        </p>

        <p>Here are some thought starters:</p>
        <ul>
          <li>Who else can benefit?</li>
          <li>Think about minority groups.</li>
          <li>Expand your target group beyond the obvious.</li>
        
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
