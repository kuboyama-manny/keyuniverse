import React from "react";
import FaIcon from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/fontawesome-free-regular';
import { faCheckCircle } from '@fortawesome/fontawesome-free-solid';

function ProgressBar({ label, progress }) {
  return (
    <div>
      <label className="font-weight-bold">
        <FaIcon icon={faFileAlt}/> {label}
        {progress === 100 &&
        <span className="text-success h5 ml-3 mb-0 "><FaIcon icon={faCheckCircle}/> </span>
        }
      </label>
      <div className="progress">
        <div className="progress-bar bg-success" data-aos="fade-right" role="progressbar"
             style={{width: `${progress}%`}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"/>
      </div>
    </div>
  );
}

export default ProgressBar;
