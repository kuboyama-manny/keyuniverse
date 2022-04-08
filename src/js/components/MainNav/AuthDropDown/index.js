import React from "react";
import FaIcon from '@fortawesome/react-fontawesome';
import {
  faUser,
  faTags,
  faCogs,
  faSignOutAlt,
  faUserCircle
} from '@fortawesome/fontawesome-free-solid';


function AuthDropDownContainer(props) {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="authDropDown" role="button" data-toggle="dropdown"
         aria-haspopup="true" aria-expanded="false">
        <FaIcon icon={faUserCircle}/>
      </a>
      <div className="dropdown-menu dropdown-menu-right custom-dropdown-menu auth-dropdown" aria-labelledby="authDropDown">
        <div data-aos="fade">
          <div className="d-flex justify-content-between align-items-center mb-1" onClick={props.onClick}>
            <span>My Account</span>
            <span><FaIcon icon={faUser}/></span>
          </div>
        </div>
        <div data-aos="fade">
          <div className="d-flex justify-content-between align-items-center mb-1" onClick={props.onClick}>
            <span>New Offer</span>
            <span><FaIcon icon={faTags}/></span>
          </div>
        </div>
        <div data-aos="fade">
          <div className="d-flex justify-content-between align-items-center mb-1" onClick={props.onClick}>
            <span>Settings</span>
            <span><FaIcon icon={faCogs}/></span>
          </div>
        </div>
        <div data-aos="fade">
          <div className="d-flex justify-content-between align-items-center mb-1" onClick={props.onClick}>
            <span>Log out</span>
            <span><FaIcon icon={faSignOutAlt}/></span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default AuthDropDownContainer;
