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
          How will the product be tested during design and fabrication?
          To what extent of testing is needed?
          What kinds of tests are needed? 
          </em>
        </p>

        <p>Here are some thought starters:</p>
        <ul>
          <li>...</li>
          <li>...</li>
          <li>What regulatory bodies oversee such testing?</li>
          
        </ul>
      </main>
    </React.Fragment>
  );
}

Overview.propTypes = {
  id: PropTypes.number.isRequired
};
export default Overview;
