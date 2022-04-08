import React from 'react';

class SpinnerContainer extends React.Component {
  render() {
    const { visible } = this.props;
    return (
      <div className={`circle-spinner ${!visible ? 'none' : ''}`} />
    )
  }
}

export default SpinnerContainer;