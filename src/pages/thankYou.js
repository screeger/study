import React from "react";
import { clear } from "../helpers/storage";

export default props => {
  clear(); // This will wipe out the student’s responses.
  return (
    <main>
      <h1>Thank You!</h1>
      <p>We appreciate you taking the time to participate in this study.</p>
    </main>
  );
};
