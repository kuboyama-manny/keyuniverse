import React from "react";
import {Link} from 'react-router-dom';
import BtnPrimary from '../../../components/Buttons/BtnPrimary';
import CustomInput from '../../../components/Forms/CustomInput';
import ProfileMain from '../';

function Password(props) {
  return (
    <ProfileMain>
      <h4 className="mb-4">Change Password</h4>
      <div className="form-row">
        <div className="col-sm-6">
          <CustomInput label="Current Password" placeholder="********"/>
        </div>
      </div>
      <div className="form-row mt-4">
        <div className="col-sm-6">
          <CustomInput label="New Password" placeholder="********"/>
        </div>
        <div className="col-sm-6">
          <CustomInput label="Repeat Password" placeholder="********"/>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <BtnPrimary content="Save"/>
      </div>
    </ProfileMain>
  );
}

export default Password;
