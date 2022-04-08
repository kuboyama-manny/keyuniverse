import React from 'react';

function SystemRequirements(props) {
  const { requirements } = props;
  return (
    <section className="mb-5">
      <p className="lead">SYSTEM REQUIREMENTS</p>
      <dl className="row">
        <dt className="col-12 mb-3">Minimum system requirements:</dt>
        <dt className="col-sm-3">OS:</dt>
        <dd className="col-sm-9">{requirements.os}</dd>
        <dt className="col-sm-3">Processor:</dt>
        <dd className="col-sm-9">{requirements.processor}</dd>
        <dt className="col-sm-3">Memory:</dt>
        <dd className="col-sm-9">RAM {requirements.memory}</dd>
        <dt className="col-sm-3">Graphics:</dt>
        <dd className="col-sm-9">{requirements.graphics}</dd>
        <dt className="col-sm-3">Hard Drive:</dt>
        <dd className="col-sm-9">{requirements.hdd}</dd>
        <dt className="col-sm-3">DirectX:</dt>
        <dd className="col-sm-9">{requirements.directx}</dd>
      </dl>
    </section>
  )
}

export default SystemRequirements;