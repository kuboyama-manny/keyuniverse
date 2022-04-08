import React from 'react';

function CustomStripeInput(props) {
  const { label, children } = props;
  return (
    <div className="form-group custom-form-group text-left">
      <label htmlFor={`input${label}`}>{ label }</label>
      { children }
    </div>
  )
}

export default CustomStripeInput;