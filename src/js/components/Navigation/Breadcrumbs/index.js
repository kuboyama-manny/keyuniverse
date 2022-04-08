import React from "react";
import FaIcon from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
} from '@fortawesome/fontawesome-free-solid';


function Breadcrumbs({content}) {
  return (
    <div className="pt-2 pb-4">
      <div className="btn-link font-spacing text-uppercase">
        <small>
          <FaIcon icon={faAngleLeft} className="mr-2"/>
          {content}
        </small>
      </div>
    </div>
  );
}

export default Breadcrumbs;
