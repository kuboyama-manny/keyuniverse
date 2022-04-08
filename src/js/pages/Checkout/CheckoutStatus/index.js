import React from 'react';
import { compose } from 'recompose';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../../components/Spinner'

class CheckoutStatus extends React.Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.paymentFlowStatus && this.props.paymentFlowStatus !== nextProps.paymentFlowStatus) {
      this.props.history.push('/checkout/success');
    }
  }

  render () {
    const { isLoading } = this.props;
    return (
      <div className="my-5">
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-column align-items-center">
              <h3>Thank you for your purchase!</h3>
              <p><strong>We are just processing your order now.</strong></p>

              <div className="row">
                <div className="checking-status d-flex flex-column align-items-center">
                  <h5>Checking details</h5>
                  {
                    !isLoading &&
                    <div>
                      <h2>That's strange...</h2>
                      <p><strong>It appears that this transaction is taking more time that usual.<br />
                      We are aware of the issue and will contact you shortly.</strong></p>

                      <button
                        type="button"
                        className="btn btn-block px-1 btn-primary btn-gradient font-spacing text-uppercase">
                        Contact support
                      </button>
                    </div>
                  }
                  <Spinner visible={isLoading}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.checkout.loading,
    paymentFlowStatus: state.checkout.paymentFlowStatus
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CheckoutStatus);