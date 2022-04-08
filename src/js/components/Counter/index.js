import React from 'react';
import FaIcon from '@fortawesome/react-fontawesome';
import {
  faMinus,
  faPlus
} from '@fortawesome/fontawesome-free-solid';


class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { count, increase, decrease } = this.props;
    return (
      <div className="d-flex align-items-end mb-4 mt-3">
        <button className="btn btn-sm btn-outline-light" onClick={decrease}>
          <FaIcon icon={faMinus}/>
        </button>
        <span className="mx-3 d-flex flex-column align-items-center">
          <small>QTY</small>
          <strong className="h6 m-0">{count}</strong>
        </span>
        <button className="btn btn-sm btn-outline-light" onClick={increase}>
          <FaIcon icon={faPlus}/>
        </button>
      </div>
    )
  }
}

export default Counter;