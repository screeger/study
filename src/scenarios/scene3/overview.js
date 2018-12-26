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
          How can the solution move beyond its functionality to serve other purposes and support the entire context of use? What requirements does the marketplace impose on the <strong>playground design</strong>? 
          </em>
        </p>

        <p>Here are some thought starters:</p>
        <ul>
          <li>What kind of impact does it have on society as a whole?</li>
          <li>How does it differ among various cultures?</li>
          <li>What kind of environmental footprint does it have?</li>
          <li>Are the restrictions temporary?</li>
        </ul>
      </main>
    </React.Fragment>
  );
}

Overview.propTypes = {
  id: PropTypes.number.isRequired
};
export default Overview;
