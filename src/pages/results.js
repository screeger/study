import React from "react";
import { getItem, getPonderboxKeys } from "../helpers/storage";
import { SCENARIOS } from "../helpers/constants";
import Ponderbox from "../components/ponderBox";
import Likert from "../components/likert";

export default props => {
  const originalProblem = getItem("problemScenario_0");
  const keyArray = getPonderboxKeys();
  const allSectionResults = compileAllResults(keyArray);

  return (
    <main>
      <h1>Feedback and Results</h1>
      <p>Below are the answers you entered for all 3 scenarios.</p>
      <p>
        Please <strong>print</strong> out this page or "print" to PDF to save
        it. If you have any issues, please ask Sammy.
      </p>
      <hr />
  
      <label>Full Name: <br />
        <input size={20} />
      </label>

      <label>Age: <br />
        <input size={20} />
      </label>
      
      <label>Education Level (state your major and degree): <br />
        <input size={20} />
      </label>  
     
      <Likert
        question="What is your current occuptation (you may check more than one)?"
        responses={[
          { value: 1, text: "Engineer" },
          { value: 2, text: "Designer" },
          { value: 3, text: "Student" },
          { value: 4, text: "Professor" },
          { value: 5, text: "Researcher" }
        ]}
        picked={() => {}}
      />
      <Likert
        question="How helpful did you find the 1st strategy?"
        responses={[
          { value: 1, text: "Not Helpful" },
          { value: 2, text: "Slightly Helpful" },
          { value: 3, text: "Moderately Helpful" },
          { value: 4, text: "Very Helpful" },
          { value: 5, text: "Extremely Helpful" }
        ]}
        picked={() => {}}
        />
        <Likert
          question="How helpful did you find the 2nd strategy?"
          responses={[
            { value: 1, text: "Not Helpful" },
            { value: 2, text: "Slightly Helpful" },
            { value: 3, text: "Moderately Helpful" },
            { value: 4, text: "Very Helpful" },
            { value: 5, text: "Extremely Helpful" }
          ]}
          picked={() => {}}
          />
          <Likert
            question="How helpful did you find the 3rd strategy?"
            responses={[
              { value: 1, text: "Not Helpful" },
              { value: 2, text: "Slightly Helpful" },
              { value: 3, text: "Moderately Helpful" },
              { value: 4, text: "Very Helpful" },
              { value: 5, text: "Extremely Helpful" }
            ]}
            picked={() => {}}
            />
            <Likert
              question="Overall, how easy was it to use the strategies?"
              responses={[
                { value: 1, text: "Very Difficult" },
                { value: 2, text: "Moderately Difficult" },
                { value: 3, text: "Neither Easy nor Difficult" },
                { value: 4, text: "Moderately Easy" },
                { value: 5, text: "Very Easy" }
              ]}
              picked={() => {}}
              />
              <Likert
                question="How creative do you think your new statements are compared to your original statement?"
                responses={[
                  { value: 1, text: "Not at all Creative" },
                  { value: 2, text: "Slightly Creative" },
                  { value: 3, text: "Moderately Creative" },
                  { value: 4, text: "Very Creative" },
                  { value: 5, text: "Extremely Creative" }
                ]}
                picked={() => {}}
      />
       <p>Which strategy was the most applicable? Why?</p>
      <Ponderbox allowAdditional={false} placeholder="" storageKey="applicable" />
     
      <p>Did you find any benefit from learning new strategies? Please explain your answer.</p>
      <Ponderbox allowAdditional={false} placeholder="" storageKey="applicable" />

      <h1 style={{ marginTop: '2em' }}>Original Problem Statement</h1>
      <p><em>Note: You can edit any of your answers now by selecting one.</em></p>
      <p contentEditable>{originalProblem}</p>
      {allSectionResults}
    </main>
  );
};

function compileAllResults(keyArray) {
  // Each item in keyArray represents a single Ponderbox entry.
  let headerId = "";
  let prevHeaderId = "zzNoMatch";
  let scenarioHeader = "";

  let sectionId = "";
  let prevSectionId = "zzNoMatch";
  let sectionHeader = "";

  return keyArray.map(key => {
    const parsedKey = /(^s\d+)(p\d+)/.exec(key);
    if (parsedKey && parsedKey.length === 3) {
      headerId = parsedKey[1];
      sectionId = parsedKey[2];
    } else {
      prevHeaderId = "unknown";
      prevSectionId = "unknown";
    }

    // Print Scenario header if needed.
    if (headerId !== prevHeaderId) {
      scenarioHeader = <h2>{getScenarioHeader(headerId)}</h2>;
    } else {
      scenarioHeader = null;
    }

    // Print section header if needed.
    if (sectionId !== prevSectionId) {
      sectionHeader = <h3>{getSectionHeader(sectionId)}</h3>;
    } else {
      sectionHeader = null;
    }

    prevHeaderId = headerId;
    prevSectionId = sectionId;
    return (
      <React.Fragment key={key}>
        {scenarioHeader}
        <div style={{ paddingLeft: "2em" }}>
          {sectionHeader}
          <p contentEditable>{getItem(key)}</p>
        </div>
      </React.Fragment>
    );
  });
}

function getScenarioHeader(headerId) {
  const headerNumber = parseInt(/\d+/.exec(headerId)[0], 10);
  const headerName = SCENARIOS[headerNumber].name;
  return headerName;
}

function getSectionHeader(sectionId) {
  if (sectionId === "p4") {
    return "Section A";
  }
  if (sectionId === "p6") {
    return "Section B";
  }
  return "Other Section";
}
