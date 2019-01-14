import React from "react";
import { getItem, getPonderboxKeys } from "../helpers/storage";
import { SCENARIOS } from "../helpers/constants";
import Ponderbox from '../components/ponderBox';

export default props => {
  const originalProblem = getItem("problemScenario_0");
  const keyArray = getPonderboxKeys();
  const allSectionResults = compileAllResults(keyArray);

  return (
    <main>
      <h1>This is Results Page</h1>
      <p>
        Below are the answers you entered for all 3 scenarios. 
      </p>
      <p>
        Please <strong>print</strong> out this page or "print" to PDF to save it. If you have any issues, please ask Sammy.
      </p>
      <p>Click your answers below to edit</p>
      <hr />
      <p>Please feedback about your experience.</p>
      <Ponderbox allowAdditional={false} placeholder="" storageKey="results" />
      <hr />
      <h2>Original Problem Statement</h2>
      <p>{originalProblem}</p>
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
