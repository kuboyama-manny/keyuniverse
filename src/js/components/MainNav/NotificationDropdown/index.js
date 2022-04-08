import React from "react";
import FaIcon from '@fortawesome/react-fontawesome';
import {
  faBell
} from '@fortawesome/fontawesome-free-solid';
import NotificationItem from './NotificationItem';


function NotificationDropdown(props) {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="notificationDropdown" role="button" data-toggle="dropdown"
         aria-haspopup="true" aria-expanded="false">
        <FaIcon icon={faBell}/>
      </a>
      <div className="dropdown-menu dropdown-menu-right custom-dropdown-menu" aria-labelledby="notificationDropdown">
        <div className="d-flex justify-content-between align-items-center dropdown-header">
          <strong>NOTIFICATIONS</strong>
          <span>7 New</span>
        </div>
        {/* <div className="dropdown-divider"></div> */}
        <NotificationItem status={"accepted"}/>
        <NotificationItem status={"accepted"}/>
        <NotificationItem status={"declined"}/>
        <NotificationItem status={"accepted"}/>
        <NotificationItem status={"accepted"}/>
        <NotificationItem status={"declined"}/>
        <NotificationItem status={"declined"}/>
      </div>
    </li>
  );
}

export default NotificationDropdown;
