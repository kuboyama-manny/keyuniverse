import React from 'react';
import FaIcon from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/fontawesome-free-solid';


function CustomRegionSelect({label, opts, placeholder, onChange, value}) {
  const renderOptions = () => {
    if (opts) {
      return opts.map((optionItem, i) => {
        function defaultV(i) {
          if (i === 0) {
            return true
          }
        }
        return <option defaultValue={defaultV()} value={optionItem.value} key={`option-${i}`}>{optionItem.label}</option>;
      })
    }
  };
  return (
    <div className="form-group custom-form-group">

      <label htmlFor={`input${label}`}>{label || "Label"}</label>
      <FaIcon icon={faCaretDown}/>

      <select className="custom-select " id={`inputGroupSelect${label}`} onChange={onChange} value={value}>
        {/* <option defaultValue>{opts[0]}</option> */}
        {placeholder !== undefined &&
        <option defaultValue="" disabled>{placeholder}</option>
        }
        {renderOptions()}
      </select>
    </div>
  )
}

export default CustomRegionSelect;