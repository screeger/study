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
          What are similar existing solutions that target solving <strong>the playground</strong>?
          How can these solutions be used in exploring different problem directions?
          How can you modify an existing solution to shape the problem definition?
          What are comparable solutions or problems, and how can they help you build analogies on them? 
          </em>
        </p>

        <p>Here are some thought starters:</p>
        <ul>
          <li>Utilize analogies from stories or conversations</li>
          <li>Use cues from nature (biomimicry) to inspire ideas.</li>
          <li>How do your past experiences help tailor innovative ideas?</li>
          <li>Find case studies that utilize similar themes for inspiration.</li>
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
