import React from "react";
import NextPage from "../components/nextPage";

export default props => {
  return (
    <main>
      <h1>Problem Solution Co-Evolution</h1>
      <p>
        Within the problem generation space, there are multiple alternative
        views to reframe a problem statement. This exercise is to help view your
        problem in different ways that you may not have considered. Our 22
        strategies will help you uncover new waysto develop your problem and
        implement with the solution.
      </p>
      <NextPage
        gotoPage={() => {
          props.goNextPage("intro2");
        }}
      >
        Continue
      </NextPage>
    </main>
  );
};
