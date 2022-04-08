import React from 'react';

function BtnPrimaryOutline({ content, size, onClick }) {
  const renderSize = () => {
    if (size) {
      return `btn-${size}`
    }
  };
  return (
    <button
      className={`${renderSize()} btn btn-outline-primary px-4 font-spacing text-uppercase`}
      onClick={onClick}
    >
      <small className="font-weight-bold">{ content }</small>
    </button>
  )
}

export default BtnPrimaryOutline;