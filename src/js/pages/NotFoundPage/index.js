import React from "react";
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Navigation/Breadcrumbs';

function PrivacyPolicy(props) {
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-sm-8 m-auto">
            <Link to={'/'}>
              <Breadcrumbs content="Go back to the main page"/>
            </Link>
            <h4 className="mb-5">Not Found URL</h4>
            <p>We can't load this page! Please go back to home page</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
