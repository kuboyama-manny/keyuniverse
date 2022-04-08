import React from 'react';

function CustomInput(props) {
  const { label, placeholder, onChange, value, type, step, onKeyPress } = props;
  return (
    <div className="form-group custom-form-group text-left">
      <label htmlFor={`input${label}`}>{ label }</label>
      <input
        className="form-control"
        type={type || 'text'}
        id={`input${label}`}
        aria-describedby={`emailHelp`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        step={step}
        onKeyPress={onKeyPress}
      />
      {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
    </div>
  )
}

export default CustomInput;