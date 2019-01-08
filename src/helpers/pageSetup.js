import url from "url-parse";
import { SCENARIOS } from "./constants";

export function scenarioSetup() {
  const group = getScenarioGroup();
  const availableScenarios = getArrayOfScenarios(group);
  return availableScenarios;
}

export function getScenarioGroup() {
  const parsedURL = url(document.URL);
  let group = "none";
  if (parsedURL.hash) {
    group = parsedURL.hash.substring(1).toLowerCase();
    if (
      !(
        group === "a" ||
        group === "b" ||
        group === "c" ||
        group === "d" ||
        group === "all" ||
        group === "results"
      )
    ) {
      // For now, we will error out unless given a valid hash.
      // It must be 'all', 'results', or /[abcd]/
      group = "none";
    }
  }
  return group;
}

function getArrayOfScenarios(group) {
  return SCENARIOS.map((item, idx) => {
    item.id = idx;
    return item;
  }).filter(item => (group === "all" && item.id > 0) || item.group === group);
}
