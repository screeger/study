import React from "react";

export default props => {
  return (
    <React.Fragment>
      <h1>This is Scene 1</h1>
      <p>
        This “overview” page is where you will set-up this particular scenario.
      </p>
      <p>
        Here are some examples of tags you can use. This line is {"<p>"} tag.
      </p>
      <p>Now for a dandy Ordered List ({"<ol>"} tag.)</p>
      <ol>
        <li>This is {"<li>"} one</li>
        <li>This is {"<li>"} two</li>
        <li>This is {"<li>"} three</li>
        <li>This is {"<li>"} four</li>
      </ol>
      <p>Now for an extraordinary Unordered List ({"<ul>"} tag.)</p>
      <ul>
        <li>This is {"<li>"} one</li>
        <li>This is {"<li>"} two</li>
        <li>This is {"<li>"} three</li>
        <li>This is {"<li>"} four</li>
      </ul>
      <p>
        What about fancy text, like <strong>Bold stuff ({"<strong>"})</strong>{" "}
        or <em>italic stuff ({"<em>"})</em>. Heck, we can even{" "}
        <strong>
          <em>combine them together.</em>
        </strong>{" "}
        for a wild ride.
      </p>
      <h2>This {'<h2>'} tag is a smaller header than the one above.</h2>
    </React.Fragment>
  );
};
