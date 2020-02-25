import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Button = ({ text, handleClick }) => (
  <button className="Button" onClick={handleClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Button;
