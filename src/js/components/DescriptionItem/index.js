import React from 'react';

function DescriptionItem({ title, desc, size }) {
  const renderSize = () => {
    if (size) {
      return `col-${size}`
    } else {
      return "col-3"
    }
  };
  return (
    <dl className="row mb-0">
      <dt className={renderSize()}>{ title }:</dt>
      <dd className="col">{ desc}</dd>
    </dl>
  )
}

export default DescriptionItem;