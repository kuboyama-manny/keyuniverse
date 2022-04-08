import React from 'react';
import _ from 'lodash';
import GameListItem from './GameListItem';

class GamesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'best_selling'
    }
  }

  setCurrentTab = (tabTitle) => this.setState({ currentTab: tabTitle });

  render () {
    const { currentTab } = this.state;
    const { bestSellingGames, newGames, history } = this.props;
    return (
      <div>
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <a className={`nav-link ${currentTab === 'best_selling' ? 'active' : null}`} onClick={() => this.setCurrentTab('best_selling')}>BEST SELLING</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${currentTab === 'new' ? 'active' : null}`} onClick={() => this.setCurrentTab('new')}>NEW</a>
          </li>
        </ul>
        {
          !_.isEmpty(bestSellingGames)  && currentTab === 'best_selling' && bestSellingGames.map((game, index) => {
            return (
              <GameListItem key={index} game={game} history={history} />
            )
          })
        }
        {
          !_.isEmpty(newGames)  && currentTab === 'new' && newGames.map((game, index) => {
            return (
              <GameListItem key={index} game={game} history={history} />
            )
          })
        }
      </div>
    )
  }
}

export default GamesList;