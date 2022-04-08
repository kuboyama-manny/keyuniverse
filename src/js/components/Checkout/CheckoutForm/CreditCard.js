import React from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement
} from 'react-stripe-elements';
import CustomStripeInput from '../../../components/Forms/CustomStripeInput';

const inputStyle = {
  base: {
    color: 'white'
  }
};

class CreditCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    this.props.createSource();
  }

  render() {
    const { onChangeCardDetail } = this.props;
    return (
      <div>
        <div className="form-row">
          <div className="col-sm-6">
            <CustomStripeInput label={'Card Number'}>
              <CardNumberElement
                className="form-control"
                style={inputStyle}
                onReady={onChangeCardDetail}
              />
            </CustomStripeInput>
          </div>
          <div className="col-sm-6">
            <CustomStripeInput label={'Expiry Date'}>
              <CardExpiryElement
                className="form-control"
                style={inputStyle}
                onReady={onChangeCardDetail}
              />
            </CustomStripeInput>
          </div>
        </div>
        <div className="form-row">
          <div className="col-sm-6">
            <CustomStripeInput label={'CVC'}>
              <CardCVCElement
                className="form-control"
                style={inputStyle}
                onReady={onChangeCardDetail}
              />
            </CustomStripeInput>
          </div>
        </div>
      </div>
    );
  }
}

export default CreditCard;