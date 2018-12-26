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
          How does the problem determine aesthetic qualities <strong>of the playground</strong>?
          What are the material choices that will be visible to the people using the <strong>playground</strong>?
          What is the desired size in relation to other solutions around and the environment it will function in? 
          </em>
        </p>

        <p>Here are some thought starters:</p>
        <ul>
          <li>Provide descriptors that help guide what it could look like.</li>
          <li>What are tangible characteristics of the solution?</li>
          <li>What is its size in relation to its environment?</li>
          <li>What are the potential material descriptors without specifically stating what type of material is used? </li>
        </ul>
      </main>
    </React.Fragment>
  );
}

Overview.propTypes = {
  id: PropTypes.number.isRequired
};
export default Overview;
