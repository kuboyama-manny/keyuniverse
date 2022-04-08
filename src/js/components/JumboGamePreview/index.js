import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import UserAvatar from '../Avatars/UserAvatar';
import iconGivingGame from './assets/icon-giving-game.png';
// import gameThumbLg from './assets/game-thumb-large.png';
// import gameThumb1 from './assets/game-thumb-1.png';
// import gameThumb2 from './assets/game-thumb-2.png';
// import gameThumb3 from './assets/game-thumb-3.png';

class JumboGamePreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImageNum: 0
    }
  }

  mouseEnter = (number) => {
    this.setState({ selectedImageNum: number });
  };

  mouseLeave = () => {
    // this.setState({ selectedImageNum: 0 });
  };

  render () {
    const { selectedImageNum } = this.state;
    const { top_games } = this.props.games;
    return (
      <div className="d-flex align-items-center mt-5 mb-3 w-100">
        <div className="col-9 h-100 d-flex flex-column align-items-center justify-content-between">
          {
            !_.isEmpty(top_games) &&
            <div className="game-card jumbo-card">
              <Link to={`/product/${top_games[selectedImageNum].safe_url}`}>
                <div className="game-card-top mb-2">
                  <div className="game-card-img">
                    <div className="lower d-flex align-items-center justify-content-between">
                      <div>
                        <UserAvatar mainSellerData={top_games[selectedImageNum].main_seller} />
                        <h2 className="h1 m-0 text-white">{top_games[selectedImageNum].title}</h2>
                        <p className="font-weight-light text-white"><i>{top_games[selectedImageNum].description_short}</i></p>
                      </div>
                      <div>
                        {top_games[selectedImageNum].donation && <img src={iconGivingGame} alt="" className="mr-2"/>}
                        <span className="h2 m-0">
                      <span className="badge badge-light">€{top_games[selectedImageNum].main_price}</span>
                    </span>
                      </div>
                    </div>
                    <img
                      src={top_games[selectedImageNum].thumbnail_big}
                      alt=""
                      data-aos="fade"
                    />
                  </div>
                </div>
              </Link>
            </div>
          }
        </div>
        {
          !_.isEmpty(top_games) &&
          <div className="col-3 h-100 d-flex flex-column justify-content-between align-items-center">
            <Link to={`/product/${top_games[0].safe_url}`}>
              <img
                src={top_games[0].thumbnail_small}
                onMouseEnter={() => this.mouseEnter(0)}
                onMouseLeave={this.mouseLeave}
                alt=""
                className="clickable shadow-lg"
                data-aos="fade"
                data-aos-delay="200"
              />
            </Link>
            <Link to={`/product/${top_games[1].safe_url}`}>
              <img
                src={top_games[1].thumbnail_small}
                onMouseEnter={() => this.mouseEnter(1)}
                onMouseLeave={this.mouseLeave}
                alt=""
                className=" clickable shadow-lg mt-auto mb-auto"
                data-aos="fade"
                data-aos-delay="400"
              />
            </Link>
            <Link to={`/product/${top_games[2].safe_url}`}>
              <img
                src={top_games[2].thumbnail_small}
                onMouseEnter={() => this.mouseEnter(2)}
                onMouseLeave={this.mouseLeave}
                alt=""
                className=" clickable shadow-lg"
                data-aos="fade"
                data-aos-delay="600"
              />
            </Link>
          </div>
        }
      </div>
    )
  }
}

export default JumboGamePreview;