import React, {Component} from "react";
import CustomInput from '../../../../../components/Forms/CustomInput';

class Step2 extends Component {

  onChangePrice = e => {
    this.props.onChangePrice(e.currentTarget.value)
  };

  render() {
    const { donation, donationPercent, toggleDonate, toggleDonationAmount } = this.props;
    return (
      <div data-aos="fade">
        <h5 className="font-spacing font-weight-light">STEP 2: PRICE GENERATION</h5>
        <p>Here you can enter the price of your offer.</p>
        <div className="py-3">
          <div className="form-row">
            <div className="col-sm-6">
              <CustomInput
                label="Price, €"
                placeholder="17.00"
                type={'number'}
                step={'0.01'}
                onChange={this.onChangePrice}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="donateRadio">Donate for this game's developers studio</label>
            <div className="custom-control custom-radio">
              <input
                id="donateRadio1"
                type="radio"
                name="donateRadio"
                className="custom-control-input"
                onChange={() => toggleDonate('no')}
                defaultChecked
              />
              <label className="custom-control-label " htmlFor="donateRadio1">
                No
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                id="donateRadio2"
                type="radio"
                name="donateRadio"
                className="custom-control-input"
                onChange={() => toggleDonate('yes')}
              />
              <label className="custom-control-label" htmlFor="donateRadio2">Yes</label>
            </div>
          </div>
          {donation &&
          <div data-aos="fade">
            <label htmlFor="donationAmount">Choose the amount of donation or enter another amount</label>
            <div className="d-flex align-items-center">
              <div className="w-100">
                <div className="btn-select mb-3">
                  <button
                    className={donationPercent === '2' ? "active" : ""}
                    onClick={() => toggleDonationAmount('2')}
                  >
                    2%
                  </button>
                  <button
                    className={donationPercent === '5' ? "active" : ""}
                    onClick={() => toggleDonationAmount('5')}
                  >
                    5%
                  </button>
                  <button
                    className={donationPercent === '10' ? "active" : ""}
                    onClick={() => toggleDonationAmount('10')}
                  >
                    10%
                  </button>
                </div>
              </div>
              <div className="px-4 mb-3">or</div>
              <div className="w-100">
                <CustomInput
                  label="Donation Amount"
                  placeholder="Enter other amount"
                  onChange={e => toggleDonationAmount(e.currentTarget.value)}
                />
              </div>
            </div>
          </div>
          }
          <p>
            You will earn next amount for each key. The current amount depends on buyer location.
          </p>
          <h5>€13.25 - €15.15</h5>
        </div>
      </div>
    );
  }
}

export default Step2;
