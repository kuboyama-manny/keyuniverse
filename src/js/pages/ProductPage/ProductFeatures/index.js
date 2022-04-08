import React from 'react';
import FaIcon from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faGamepad,
  faTrophy,
  faUsers
} from '@fortawesome/fontawesome-free-solid';
import { faSteam } from "@fortawesome/fontawesome-free-brands";

function ProductFeatures(props) {
  const { features } = props;
  return (
    <section className="mb-5">
      <ul className="list-unstyled">
        <li className="lead">GAME FEATURES</li>
        <li className="my-3">
          <FaIcon
            icon={faUsers}
            style={{
              fontSize: '1.65em',
              marginRight: '10px'
            }}
          />
          {features.multiplayer ? ' Multiplayer' : 'Single player'}
        </li>
        <li className="my-3">
          <FaIcon
            icon={faTrophy}
            style={{
              fontSize: '1.65em',
              marginRight: '10px'
            }}
          />
          {features.achievements ? '  Achievements' : ''}
        </li>
        <li className="my-3">
          <FaIcon
            icon={faGamepad}
            style={{
              fontSize: '1.65em',
              marginRight: '10px'
            }}
          />
          {features.controller ? ' Controller Support' : ''}
        </li>
        <li className="my-3">
          <FaIcon
            icon={faCloud}
            style={{
              fontSize: '1.65em',
              marginRight: '10px'
            }}
          />
          {features.cloud ? ' Cloud Saves' : ''}
        </li>
        <li className="my-3">
          <FaIcon
            icon={faSteam}
            style={{
              fontSize: '1.65em',
              marginRight: '10px'
            }}
          />
          {features.cloud ? ' Via Steam' : ''}
        </li>
      </ul>
    </section>
  )
}

export default ProductFeatures;