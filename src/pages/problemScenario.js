import React from "react";
import PrevPage from "../components/prevPage";
import NextPage from "../components/nextPage";
import bkgdImg from "../images/park-design-small.jpg";
import { clear } from "../helpers/storage";
import PonderBox from "../components/ponderBox";

export default props => {
  /*  This will wipe out the student’s responses. Seems like a weird place to put this, but we need
	to retain the values on course exit in case the student didn't print out the submissions.
	Additionally, doing it on the first page seems a little risky too. Meh. */
  clear();
  return (
    <main>
      <h1>Problem Scenario</h1>
      <section
        style={{
          backgroundImage: `url(${bkgdImg})`,
          backgroundPositionX: "right",
          backgroundSize: "55%",
          backgroundRepeat: "no-repeat",
          minHeight: "427px",
          paddingRight: "45%"
        }}>
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            padding: "0.5em 1em 1em 0"
          }}>
          <p>
            A city resident has recently donated a corner lot for a playground.
            You are an engineer who lives in the neighborhood, and you have been
            asked by the city to help with the project. Your task is to design
            playground equipment for the lot using locally sourced materials
            that are able to withstand outdoor conditions all year long.
          </p>
          <p style={{ marginTop: "4em" }}>
            In the space below, please write a problem statement that reflects
            the problem scenario above.
          </p>
          <PonderBox storageKey="problemScenario" allowAdditional={false} />
        </div>
      </section>
      <PrevPage
        gotoPage={() => {
          props.goNextPage("intro2");
        }}>
        Back
      </PrevPage>
      <NextPage
        gotoPage={() => {
          props.goNextPage("compass");
        }}>
        Continue
      </NextPage>
    </main>
  );
};
