import React from 'react';

function KeysDetail({value, status}) {
  const renderStatusStyle = () => {

    if (status) {
      return 'active';
    } else {
      return 'sold';
    }
  };

  return (
    <div className={'offer-product-key d-flex'}>
      <div className={'py-1'}>{value}</div>
      <div className={`product-key-status py-1 ${renderStatusStyle()}`}>
        {status ? 'Active' : 'Sold'}
      </div>
    </div>
  );
}

export default KeysDetail;
