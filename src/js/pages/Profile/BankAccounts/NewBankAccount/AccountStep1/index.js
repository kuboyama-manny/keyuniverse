import React, {Component} from 'react';
import BtnPrimaryOutline from '../../../../../components/Buttons/BtnPrimaryOutline';
import ProgressBar from '../../../../../components/ProgressBar';
import CustomInput from '../../../../../components/Forms/CustomInput';
import FaIcon from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/fontawesome-free-solid';


class AccountStep1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessType: 1,
    };
    this.toggleBusiness = this.toggleBusiness.bind(this);
  }

  toggleBusiness() {
    if (this.state.businessType === 1) {
      this.setState({businessType: 2})
    } else {
      this.setState({businessType: 1})
    }

  }

  render() {
    const {businessType} = this.state;

    return (
      <div data-aos="fade">
        <h5 className="font-spacing font-weight-light">STEP 1: LEGAL ENTITY</h5>

        <div className="form-group">
          <label htmlFor="businessTypeRadio">Choose business type.</label>
          <div className="custom-control custom-radio">
            <input type="radio" id="businessTypeRadio1" name="businessTypeRadio" className="custom-control-input"
                   onChange={() => this.toggleBusiness()} defaultChecked/>
            <label className="custom-control-label " htmlFor="businessTypeRadio1">
              Individual
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="businessTypeRadio2" name="businessTypeRadio" className="custom-control-input"
                   onChange={() => this.toggleBusiness()}/>
            <label className="custom-control-label" htmlFor="businessTypeRadio2">Company</label>
          </div>
        </div>
        {businessType === 1 &&
        <div data-aos="fade">
          <div className="form-row mb-2">
            <div className="col-sm-6">
              <CustomInput label="First Name" placeholder="Tom"/>
            </div>
            <div className="col-sm-6">
              <CustomInput label="Last Name" placeholder="Smith"/>
            </div>
          </div>
          <div className="form-row mb-2">
            <div className="col-sm-3">
              <CustomInput label="Date of Birth" placeholder="1985/06/21"/>
            </div>
            <div className="col-sm-4">
              <CustomInput label="Address City" placeholder="Enter address city"/>
            </div>
            <div className="col-sm-4">
              <CustomInput label="Address Line" placeholder="Enter address line"/>
            </div>
          </div>
          <div className="form-row mb-2">
            <div className="col-sm-3">
              <CustomInput label="Address postal code" placeholder="Enter postal code"/>
            </div>
          </div>
          <hr/>
        </div>
        }
        {businessType === 2 &&
        <div data-aos="fade" className="card bg-dark p-3">Here Goes Company Fields</div>
        }

        <div className="d-flex align-items-start">
          <div className="w-100">
            <h6>PROOF OF IDENTITY</h6>
            <i>Driving License, Passport, EU Identity Card</i>
            <div className="d-flex align-items-center mt-2">
              <div className="w-100">
                <ProgressBar label="Passport1.png" progress={100}/>
              </div>
              <div className="p-4 clickable">
                <span className="h4 m-0"><FaIcon icon={faTrashAlt}/></span>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <BtnPrimaryOutline content="UPLOAD DOCUMENT"/>
          </div>
        </div>
        <hr/>
        <div className="d-flex align-items-start">
          <div className="w-100">
            <h6>PROOF OF ADDRESS</h6>
            <i>Bank Statement, Utlity Bill</i>
          </div>
          <div className="col-auto">
            <BtnPrimaryOutline content="UPLOAD DOCUMENT"/>
          </div>
        </div>
        <hr/>

      </div>
    );
  }
}

export default AccountStep1;
