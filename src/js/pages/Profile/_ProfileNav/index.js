import React from "react";
import FaIcon from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import {
  faUser,
  // faBriefcase,
  faCloud,
  faTags,
  faCreditCard,
  faUserShield,
  faLifeRing
} from '@fortawesome/fontawesome-free-solid';
import {
  faMoneyBillAlt
} from '@fortawesome/fontawesome-free-regular';

function ProfileNav(props) {
  return (
    <ul className="nav flex-column nav-custom">
      <li className="nav-item">
        <NavLink to={'/profile/general'} activeClassName="active" className="nav-link">
          <FaIcon icon={faUser}/> PROFILE
        </NavLink>
      </li>
      {/*<li className="nav-item">*/}
        {/*<NavLink to={'/public-profile'} activeClassName="active" className="nav-link">*/}
          {/*<FaIcon icon={faBriefcase}/> BUSINESS PROFILE*/}
        {/*</NavLink>*/}
      {/*</li>*/}
      <li className="nav-item">
        <NavLink to={'/profile/purchases/my-purchases'} activeClassName="active" className="nav-link">
          <FaIcon icon={faCloud}/> MY PURCHASES
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={'/profile/offers/my-offers'} activeClassName="active" className="nav-link">
          <FaIcon icon={faTags}/> MY OFFERS
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={'/profile/accounts/my-accounts'} activeClassName="active" className="nav-link">
          <FaIcon icon={faCreditCard}/> BANK ACCOUNT
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={'/profile/verification'} activeClassName="active" className="nav-link">
          <FaIcon icon={faUserShield}/> VERIFICATION
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={'/profile/wallet'} activeClassName="active" className="nav-link">
          <FaIcon icon={faMoneyBillAlt}/> MY WALLET
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={'/support'} activeClassName="active" className="nav-link">
          <FaIcon icon={faLifeRing}/> SUPPORT
        </NavLink>
      </li>
    </ul>
  );
}

export default ProfileNav;
