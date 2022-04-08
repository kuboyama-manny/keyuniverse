import React from 'react';

function ProductDetails(props) {
  const { details } = props;

  return (

    <section className="mb-5">
      <p className="lead">GAME DETAILS</p>
      <dl className="row">
        <dt className="col-sm-3">Genre:</dt>
        <dd className="col-sm-9">{details.genre}</dd>
        <dt className="col-sm-3">Platforms:</dt>
        <dd className="col-sm-9">{details.platforms_text}</dd>
        <dt className="col-sm-3">Languages:</dt>
        <dd className="col-sm-9">{details.languages}</dd>
        <dt className="col-sm-3">Released:</dt>
        <dd className="col-sm-9">{details.released}</dd>
        <dt className="col-sm-3">Company:</dt>
        <dd className="col-sm-9">{details.company}</dd>
        <dt className="col-sm-3">Rating:</dt>
        <dd className="col-sm-9">{details.rating}</dd>
      </dl>
    </section>
  )
}

export default ProductDetails;