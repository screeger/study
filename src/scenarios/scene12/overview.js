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
          How will <strong>the playground</strong> be tested during design and fabrication?
          To what extent of testing is needed?
          What kinds of tests are needed? 
          </em>
        </p>

        <p>Here are some thought starters:</p>
        <ul>
          <li>What components are prone to breaking?</li>
          <li>How can the user maintain the product?</li>
          <li>What regulatory bodies oversee such testing?</li>
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
