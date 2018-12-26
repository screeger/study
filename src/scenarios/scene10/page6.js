import React from "react";
import PonderBox from "../../components/ponderBox";

export default props => {
  return (
    <main>
      <h1>Page 6 Ponder Box</h1>
      <div className="ponderLayout">
        <section>
          <p>
          Now that you have completed new concepts, enter new problem statements that would help inform your concept.
          </p>
          <p>&nbsp;</p>
          <PonderBox storageKey={`s${props.id}p${props.pageNbr}`} />
        </section>
        <section>
          <h2>Strategy:</h2>
          <p>Determine the Underlying Issue</p>
          <h2>Scenario:</h2>
          <p>
          A city resident has recently donated a corner lot for a playground. You are an engineer who lives in the neighborhood, and you have been asked by the city to help with the project. Your task is to design playground equipment for the lot using locally sourced materials that are able to withstand outdoor conditions all year long.
          </p>
        </section>
      </div>
    </main>
  );
};
