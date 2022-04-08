import React from 'react';

import FaIcon from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/fontawesome-free-solid';

import Counter from '../../../components/Counter';
import Badges from '../../../components/Badges';
import UserAvatar from '../../../components/Avatars/UserAvatar';


class OrderListItem extends React.Component {
  render () {
    const { offerDetail, increaseQuantity, decreaseQuantity, removeOffer } = this.props;
    return (
      <div className="order-list-item d-flex justify-content-start align-items-center" data-aos="fade-up">
        <img src={offerDetail.userInfo.game.thumbnail} alt=""/>
        <div className="col-3 d-flex flex-column">
          <small><strong>{offerDetail.userInfo.game.title}</strong></small>
          <small><i>{offerDetail.userInfo.game.genre}</i></small>
        </div>
        <div className="col-2">
          <UserAvatar
            mainSellerData={offerDetail.userInfo}
          />
        </div>
        <div className="col-2">
          <Badges size="sm"/>
        </div>
        <div className="col-auto">
          <div className="px-2">
            <Counter
              count={offerDetail.quantity}
              increase={() => increaseQuantity(offerDetail.group_id)}
              decrease={() => decreaseQuantity(offerDetail.group_id)}
            />
          </div>
        </div>
        <div className="col-2 text-center">
        <span className="h3 m-0">
          <span className="badge badge-light p-1 "><small className="font-weight-bold">€{offerDetail.userInfo.price}</small></span>
        </span>
        </div>
        <div className="ml-auto mr-2">
          <div className="text-white clickable h3 m-0 p-2" onClick={() => removeOffer(offerDetail.group_id)}>
            <FaIcon icon={faTimes}/>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderListItem;