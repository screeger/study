import React from "react";
import PonderBox from "../../components/ponderBox";

export default props => {
  return (
    <main>
      <h1>Problem Statement Part Two</h1>
      <div className="ponderLayout">
        <section>
          <p>
          Now that you've generated new solutions, generate a new problem statement based on your sketched ideas. Enter as many additional problem statements as you can think of.
          </p>
          <p>&nbsp;</p>
          <PonderBox storageKey={`s${props.id}p${props.pageNbr}`} />
        </section>
        <section>
          <h2>Strategy:</h2>
          <p>Rely on Existing Solutions</p>
          <h2>Scenario:</h2>
          <p>
          A city resident has recently donated a corner lot for a playground. You are an engineer who lives in the neighborhood, and you have been asked by the city to help with the project. Your task is to design playground equipment for the lot using locally sourced materials that are able to withstand outdoor conditions all year long.
          </p>
        </section>
      </div>
    </main>
  );
};
