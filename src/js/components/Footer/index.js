import React from 'react';
import { Link } from 'react-router-dom';
import FaIcon from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin
} from '@fortawesome/fontawesome-free-brands';


function Footer(props) {
  return (
    <footer className="bg-secondary pt-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              <li className="font-spacing mb-2">FIND OUT MORE</li>
              <li className="text-muted py-1">
                <small>Our Goal</small>
              </li>
              <li className="text-muted py-1">
                <small>About Us</small>
              </li>
              <li className="text-muted py-1">
                <small>News</small>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-unstyled">
              <li className="font-spacing mb-2">OUR WORK</li>
              <li className="text-muted py-1">
                <small>Marketplace</small>
              </li>
              <li className="text-muted py-1">
                <small>Community</small>
              </li>
              <li className="text-muted py-1">
                <small>Charity</small>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-unstyled">
              <li className="font-spacing mb-2">LEGAL</li>
              <li>
                <Link to={"/terms-and-conditions"} className="text-muted py-1">
                  <small>Terms of Service</small>
                </Link>
              </li>
              <li>
                <Link to={"/privacy-policy"} className="text-muted py-1">
                  <small>Privacy privacy</small>
                </Link>
              </li>
              <li className="text-muted py-1">
                <small>Returns Policy</small>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-unstyled">
              <li className="font-spacing mb-2">SUPPORT</li>
              <li className="text-muted py-1">
                <small>Contact Us</small>
              </li>
              <li className="text-muted py-1">
                <small>FAQs</small>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-unstyled">
              <li className="font-spacing mb-2">COOPERATION</li>
              <li className="text-muted py-1">
                <small>For developers</small>
              </li>
              <li className="text-muted py-1">
                <small>Become a Merchant</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr/>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center pt-2 pb-4">
          <p className="text-uppercase font-weight-light m-0">© 2018 Key Universe</p>
          <div className="h5 m-0">
            <Link to="" className="btn-link text-white px-2"><FaIcon icon={faInstagram}/></Link>
            <Link to="" className="btn-link text-white px-2"><FaIcon icon={faFacebook}/></Link>
            <Link to="" className="btn-link text-white px-2"><FaIcon icon={faTwitter}/></Link>
            <Link to="" className="btn-link text-white px-2"><FaIcon icon={faLinkedin}/></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;