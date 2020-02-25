import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Input = ({
  placeholder,
  value,
  icon,
  name,
  type,
  text,
  error,
  handleChange
}) => (
  <div className="Input">
    <img className="Ipunt-icon" src={icon} />
    <input
      className={error ? "Input-error" : ""}
      value={value}
      placeholder={placeholder}
      name={name}
      type={type}
      onChange={handleChange}
    />
    <label htmlFor={name}>{name}</label>
    {text && (
      <a className="Input-text" href="/" target="_blank">
        {text}
      </a>
    )}
  </div>
);

Input.defaultProps = {
  value: ""
};

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Input;
