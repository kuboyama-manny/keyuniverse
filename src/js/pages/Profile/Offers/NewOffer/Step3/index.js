import React from 'react';
import _ from 'lodash';
import FaIcon from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid';
import NotificationSystem from 'react-notification-system';

import CustomInput from '../../../../../components/Forms/CustomInput';
import BtnPrimaryOutline from '../../../../../components/Buttons/BtnPrimaryOutline';
import { addNotificationHelper } from '../../../../../utils/helpers';
import constants from '../../../../../utils/constants';


class Step3 extends React.Component {
  addProductKey = () => {
    const { addProductKey } = this.props;
    if (this.props.productKeys.length <= 10) {
      addProductKey();
    } else {
      addNotificationHelper(this.refs.notificationSystem, constants.notification.error.addProductKeyError, 'error');
    }
  };

  render() {
    const { productKeys, onChangeProductKey, removeProductKey } = this.props;
    return (
      <div data-aos="fade">
        <h5 className="font-spacing font-weight-light">STEP 3: WORK WITH THE KEYS</h5>
        <p>Enter the keys below</p>
        <div className="py-3">
          {
            !_.isEmpty(productKeys) && productKeys.map((productKey, index) => {
              return (
                <div key={index} className="d-flex align-items-center">
                  <div className="w-100">
                    <CustomInput
                      label="THE KEY"
                      placeholder="7898-8743-0098-8632"
                      value={productKey}
                      onChange={(e) => onChangeProductKey(e.currentTarget.value, index)}
                    />
                  </div>
                  <div className="mb-3 p-4 clickable">
                  <span className="h4 m-0" onClick={() => removeProductKey(index)}>
                    <FaIcon icon={faTrashAlt}/>
                  </span>
                  </div>
                </div>
              )
            })
          }
          <div>
            <BtnPrimaryOutline
              content="ADD NEW KEY"
              onClick={this.addProductKey}
            />
          </div>
        </div>
        <NotificationSystem ref='notificationSystem' />
      </div>
    );
  }
}

export default Step3;
