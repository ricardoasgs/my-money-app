import React from "react";

const IconButton = props => (
  <button
    type={props.type}
    className={props.className}
    onClick={props.function}
  >
    <i className={props.icon} />
  </button>
);

export default IconButton;
