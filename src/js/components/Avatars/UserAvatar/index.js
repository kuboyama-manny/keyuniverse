import React from 'react';
import AvatarImg from '../AvatarImg';
import FaIcon from '@fortawesome/react-fontawesome';
import {
  faGem
} from '@fortawesome/fontawesome-free-solid';

function UserAvatar(props, {size}) {
  const user = props.mainSellerData;
  let levelIcons = [],
    i;

  if (user) {
    const level = user.level;

    for (i = 0; i < level; i = i + 1) {
      levelIcons.push(
        <FaIcon icon={faGem} className="mr-1" key={i}/>
      );
    }
  }

  if (user && user.new_label === true) {
    user.new_label = "New Member!"
  }
  if (user && user.active_label === true) {
    user.active_label = "Active User"
  }
    
  return (
    <div className="py-1 d-flex justify-content-start align-items-center">
      <div className="mr-3">
        <AvatarImg imageUrl={user && user.profile_pic} size={"md"}/>
      </div>
      <div className="d-flex flex-column">
        <strong className="text-white">{ user ? user.username : 'DEFAULT_USER' }</strong>
        <small className="text-white">{ user && user.new_label }</small>
        <small className="text-white">{ user && user.active_label }</small>
        <small className="text-info">
          { user && levelIcons }
        </small>
      </div>
    </div>
  )
}

export default UserAvatar;
