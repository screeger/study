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
            What are the needs, tasks, and environments of the people to{" "}
            <strong>design a playground</strong>? What are the characteristics
            and attributes of the people using the <strong>playground</strong>?{" "}
          </em>
        </p>

        <p>Here are some thought starters:</p>
        <ul>
          <li>Characteristics that are not similar to you</li>
          <li>How their personality affects their needs</li>
          <li>What is of importance to accomplish a task</li>
          <li>Traditions/habits from other cultures</li>
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
