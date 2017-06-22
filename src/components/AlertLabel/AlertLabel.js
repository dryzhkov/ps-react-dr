import React from 'react';
import PropTypes from 'prop-types';

/** Label with required field display, htmlFor, and block styling */
function AlertLabel({htmlFor, label, onClick, required}) {
  return (
    <label style={{display: 'block'}} htmlFor={htmlFor} onClick={onClick}>
      {label} { required && <span style={{color: 'red'}}> *</span> }
    </label>
  )
}

AlertLabel.propTypes = {
  /** HTML ID for associated input */
  htmlFor: PropTypes.string.isRequired,

  /** Label text */
  label: PropTypes.string.isRequired,

  /** Label on click */
  onClick: PropTypes.func.isRequired,

  /** Display asterisk after label if true */
  required: PropTypes.bool
};

export default AlertLabel;