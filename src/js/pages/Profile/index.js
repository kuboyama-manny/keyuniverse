import React from "react";
import ProfileNav from './_ProfileNav';

function ProfileMain(props) {
  return (
    <div className="my-5">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-sm-3">
            <ProfileNav/>
          </div>
          {/* Content */}
          <div className="col-sm-9 pb-5 mb-5">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileMain;
