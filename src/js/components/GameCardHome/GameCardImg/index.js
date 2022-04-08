import React from 'react';
import _ from 'lodash';
// import thumb from './assets/game-thumbnail.png';
import iconGivingGame from './assets/icon-giving-game.png';
import FaIcon from '@fortawesome/react-fontawesome';
import {
  faApple,
  faWindows,
  faLinux
} from '@fortawesome/fontawesome-free-brands';

function GameCardHome(props) {
  const { platforms } = props;
  return (
    <div className="game-card-top">
      <div className="game-card-img">
        {
          !_.isEmpty(platforms) &&
          <div className="upper d-flex align-items-center justify-content-end">
            {
              platforms.mac &&
              <span className="badge badge-pill badge-light mr-2">
                <FaIcon icon={faApple}/>
              </span>
            }
            {
              platforms.windows &&
              <span className="badge badge-pill badge-light mr-2">
                <FaIcon icon={faWindows}/>
              </span>
            }
            {
              platforms.linux &&
              <span className="badge badge-pill badge-light">
                <FaIcon icon={faLinux}/>
              </span>
            }
          </div>
        }
        <div className="lower d-flex align-items-center justify-content-end">
          {props.donation && <img src={iconGivingGame} alt="" className="mr-2"/>}
          <span className="h5 m-0">
            <span className="badge badge-light">€{props.main_price}</span>
          </span>
        </div>
        <img src={props.thumbnail} alt=""/>
      </div>
    </div>
  );
}

export default GameCardHome;
