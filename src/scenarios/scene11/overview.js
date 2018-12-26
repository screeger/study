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
          How do the mobility features or concerns affect the problem? 
          </em>
        </p>

        <p>Here are some thought starters:</p>
        <ul>
          <li>Does it inspire movement?</li>
          <li>What if it's adjustable?</li>
          <li>Can it be on-the-go?</li>
          
        </ul>
      </main>
    </React.Fragment>
  );
}

Overview.propTypes = {
  id: PropTypes.number.isRequired
};
export default Overview;
