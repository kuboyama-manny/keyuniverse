import React, {Component} from 'react';
// import gameThumb from './assets/game-thumb.png';

class GameListItem extends Component {
  render() {
    const { game, history } = this.props;
    const { genre, main_price, safe_url, thumbnail, title } = game;
    return (
      <div className="d-flex align-items-center justify-content-between py-2" data-aos="fade">
        <div style={{ width: '60px', height: '60px' }}><img src={thumbnail} alt="" style={{ width: '100%' }} /></div>
        <div className="w-50">
          <h5 className=" m-0">{title}</h5>
          <small className="font-weight-light"><i>{genre}</i></small>
        </div>
        <span className="h5 m-0">
          <span className="badge badge-light">€{main_price}</span>
        </span>
        <small className="text-primary font-spacing mr-2" onClick={() => history.push(`/product/${safe_url}`)}>VIEW DETAILS</small>
      </div>
    )
  }
}

export default GameListItem;