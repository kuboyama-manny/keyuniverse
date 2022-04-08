import React from 'react';
import AutoComplete from 'react-autocomplete';

function CustomAutoComplete(props) {
  const { placeholder, games, keyword, changeValue, onSelectValue } = props;
  return (
    <div className="form-group custom-form-group text-left custom-autocomplete">
      <AutoComplete
        inputProps={{
          placeholder: placeholder
        }}
        getItemValue={item => item.label}
        items={games}
        renderItem={(item, isHighlighted) => {
          return (
            <div key={item.value} style={{ background: isHighlighted ? '#00000033' : 'transparent' }}>
              { item.label }
            </div>
          )
        }}
        value={keyword}
        onChange={e => changeValue(e.currentTarget.value)}
        onSelect={(value, selectedItem) => onSelectValue(value, selectedItem)}
        menuStyle={{
          overflow: 'auto',
          maxHeight: '200px',
          borderRadius: '3px'
        }}
      />
    </div>
  )
}

export default CustomAutoComplete;