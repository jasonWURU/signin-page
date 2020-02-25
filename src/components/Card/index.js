import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Card = ({ isChecked, icon, text, handleClick }) => (
  <div
    className={`Card ${isChecked ? "Card-checked" : ""}`}
    onClick={handleClick}
  >
    {icon}
    <p className="Card-text">{text}</p>
  </div>
);

Card.defaultProps = {
  isChecked: false
};

Card.propTypes = {
  isChecked: PropTypes.bool,
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Card;
