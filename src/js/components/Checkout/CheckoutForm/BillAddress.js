import React from 'react';
import countryList from 'react-select-country-list'
import CustomInput from '../../../components/Forms/CustomInput';
import CustomRegionSelect from '../../../components/Forms/CustonRegionSelect';

class BillAddress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: countryList().getData()
    }
  }

  render() {
    const {
      onChangeAddress1,
      onChangeAddress2,
      onChangeCountry,
      onChangeCity,
      onChangePostalCode,
      address
    } = this.props;
    return (
      <div>
        <h5 className="font-weight-normal font-spacing pt-4 pb-2">BILLING ADDRESS</h5>

        <div className="form-row">
          <div className="col-sm-6">
            <CustomInput
              label="Address line 1"
              placeholder="Street Address"
              onChange={onChangeAddress1}
              value={address.address1}
            />
          </div>
          <div className="col-sm-6">
            <CustomInput
              label="Address line 2"
              placeholder="Street Address"
              onChange={onChangeAddress2}
              value={address.address2}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-sm-3">
            <CustomInput
              label="City"
              placeholder="City Name"
              onChange={onChangeCity}
              value={address.city}
            />
          </div>
          <div className="col-sm-3">
            <CustomInput
              label="Postal Code"
              placeholder="000000"
              onChange={onChangePostalCode}
              value={address.postal_code}
            />
          </div>
          <div className="col-sm-6">
            <CustomRegionSelect
              opts={this.state.options}
              label={'Country'}
              onChange={onChangeCountry}
              value={address.country}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BillAddress;