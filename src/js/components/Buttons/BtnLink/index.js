import React from 'react';

function BtnLink({ content }) {
  return (
    <div className="btn-link font-spacing text-uppercase px-2">
      <small>
        { content }
      </small>
    </div>
  );
}

export default BtnLink;
