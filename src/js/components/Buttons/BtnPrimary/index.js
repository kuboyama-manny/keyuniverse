import React from 'react';
import spinner from '../../../../images/spinner.gif';

function BtnPrimary({ content, onClick, isLoading }) {
  return (
    <button
      className="btn px-5 btn-primary btn-gradient font-spacing btn-lg text-uppercase"
      onClick={onClick}
      disabled={!!isLoading}
    >
      {
        isLoading ? <img src={spinner} alt="" style={{ width: '32px' }} /> : <small>{ content }</small>
      }
    </button>

  )
}

export default BtnPrimary;