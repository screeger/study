import React from "react";
import PrevPage from "../components/prevPage";
import NextPage from "../components/nextPage";

export default props => {
  return (
    <main>
      <h1>Problem Solution Co-Evolution</h1>
      <p>
        Within the problem generation space, there are multiple alternative
        views to reframe a problem statement. This exercise is to help view your
        problem in different ways that you may not have considered. This digital
        tool utilizes 12 strategies that will help you uncover new ways to
        develop your problem and implement with the solution.
      </p>
      <p>
        For this study, you will receive 3 random strategies. The next page will
        provide your "project". The paper and pen you received is to help you
        think through ideas. This is your worksheet before entering your
        throughts on the computer.
      </p>

      <h2>Why Use This Tool?</h2>
      <p>
        In the front end of the design process, there may be many paths of
        potential problems you can take. While it can be a bit overwhelming, we
        are here to help you navigate your route by providing strategies that
        can ultimately steer your problem in the right direction.
      </p>
      <h2>How this Works</h2>
      <p>On each strategy, you will learn about the:</p>
      <ol>
        <li>Definition</li>
        <li>Thought Starters</li>
        <li>Examples unrelated to the given project</li>
      </ol>
      <p>
        After you learn about the strategy, you will be asked to provide problem
        statements for each.
      </p>
      <p>
        Follow the instructions on each page as you discover each new strategy.
      </p>
      <p>If you have any questions during this time, please ask Sammy.</p>
      <PrevPage
        gotoPage={() => {
          props.goNextPage("intro1");
        }}>
        Back
      </PrevPage>
      <NextPage
        gotoPage={() => {
          props.goNextPage("problemScenario");
        }}>
        Continue
      </NextPage>
    </main>
  );
};
