import React from "react";
import PropTypes from "prop-types";

import hiker from "../images/introBkgd.svg";

function BackgroundImg(props) {
  if (props.pageName === "intro1" || props.pageName === "intro2") {
    const url = "url(" + hiker + ")";
    return (
      <div
        style={{
          backgroundImage: url,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          minHeight: "600px"
        }}
      >
        {props.children}
      </div>
    );
  } else {
    return <div>{props.children}</div>;
  }
}

BackgroundImg.propTypes = {
  pageName: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default BackgroundImg;
