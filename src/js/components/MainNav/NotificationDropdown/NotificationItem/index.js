import React from "react";
import iconAccept from './assets/notification-accepted.png';
import iconDeclined from './assets/notification-declined.png';
import FaIcon from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/fontawesome-free-regular';


function NotificationItem({ status }) {
  const renderStatusImg = () => {
    if (status === 'declined') {
      return <img src={iconAccept} alt="" className="mr-3"/>
    } else {
      return <img src={iconDeclined} alt="" className="mr-3"/>
    }
  };
  return (
    <div className="dropdown-item" href="#" data-aos="fade">
      {renderStatusImg()}
      <div>
        <div className="d-flex justify-content-between align-items-center mb-1">
          <small className="font-weight-bold">Your support ticket was declined</small>
          <small className="text-muted">
            08/07/2018
            <span className="text-primary ml-2"><FaIcon icon={faDotCircle}/></span>
          </small>
        </div>
        <small className="font-weight-light">The support ticket #000011 for Fallout 3 was resolved. It has been proven
          that the key was not fraud.
        </small>
      </div>
    </div>
  );
}

export default NotificationItem;
