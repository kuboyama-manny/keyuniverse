import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import UserAvatar from '../Avatars/UserAvatar';
import GameCardImg from './GameCardImg';

class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeDelay: Math.ceil((Math.floor(Math.random() * 400) + 0) / 100) * 100,
    };
    this.linkTo = this.linkTo.bind(this);
  }

  linkTo() {
    const { offer } = this.props;
    if (this.props.type === 'offer') {
      if (offer.active) {
        return `/profile/offer/${offer.group_id}`
      } else if (offer.draft) {
        return '/profile/offers/new';
      }
    } else if (this.props.type === 'purchase') {
      return `/profile/purchase/${offer.payment_id}`
    } else {
      return '/product'
    }
  }

  onClick = () => {
    const { setOfferStatus, offer } = this.props;
    if (!offer.draft) {
      return;
    } else {
      setOfferStatus(offer);
    }
  };

  render() {
    const { size, user, offer } = this.props;
    const renderSize = (colSize) => {
      return colSize ? `col-sm-${size}` : `col-sm-3`
    };
    return (
      <div className={`${renderSize(size)} col-6`}>
        <Link to={this.linkTo()} onClick={this.onClick} className="game-card">
          <div data-aos="fade" data-aos-delay={this.state.fadeDelay}>
            <GameCardImg
              imageUrl={offer.thumbnail}
              price={offer.price}
              platforms={offer.platforms}
              donation={offer.donation}
            />
          </div>
          { user ? null : <UserAvatar mainSellerData={offer.seller} /> }
          <div className="game-card-footer pt-2">
            <h5 className="m-0">{offer.title || "Dark Souls III"}</h5>
            {/*<small className="font-weight-light"><i>{this.props.detail || "Action role-playing"}</i></small>*/}
          </div>
        </Link>
      </div>
    )
  }
}

export default GameCard;

