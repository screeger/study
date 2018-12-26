import React from "react";
import NextPage from '../components/nextPage';
import { getAll } from "../helpers/storage";

export default (props) => {
  let results = getAll().map((answer, idx) => {
    return (
      <p key={idx} className="resultItem">
        {answer}
      </p>
    );
  });

  return (
    <main>
      <h1>This is Results Page</h1>
      <p>
        Below are the answers you entered. Print this page or “print” to PDF to
        save it.
      </p>
      <p>
        Do not advance to the next page until you have saved your results or
        they will be lost.
      </p>
      <hr />
			{results}
			<NextPage gotoPage={() => {
				props.goNextPage('thankYou');
			}}>Continue</NextPage>
    </main>
  );
};
