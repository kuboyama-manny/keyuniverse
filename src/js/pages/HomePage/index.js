import React from 'react';
import { compose } from 'recompose';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import JumboGamePreview from '../../components/JumboGamePreview';
import GameCardHome from '../../components/GameCardHome';
import GamesList from '../../components/GamesList';
import AboutUs from '../../components/AboutUs';
import CallToAction from '../../components/CallToAction';
import iconGuaranteed from './assets/icon-guaranteed.png';
import iconSecurity from './assets/icon-security.png';

import { getHomePageGames } from '../../actions/Home';
import AjaxLoader from '../../components/AjaxLoader';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount () {
    this.props.getHomePageGames();
  }

  render () {
    const { games, history } = this.props;
    const { featured_games, best_selling, new_games } = games;
    return (
      <div>
        <div className="container mb-5">
          <div className="row">
            <JumboGamePreview {...this.props} />
          </div>
          <div className="row mt-4 mb-3">
            <div className="col d-flex align-items-baseline justify-content-between">
              <h3>Featured</h3>
              {/*<a href="" className="btn-link">*/}
                {/*<small>VIEW ALL</small>*/}
              {/*</a>*/}
            </div>
          </div>
          <div className="row">
            {
              !_.isEmpty(featured_games) && featured_games.map((game, index) => {
                return (
                  <GameCardHome key={index} history={history} {...game} />
                )
              })
            }
          </div>
          <div className="row">
            <div className="col-sm-8">
              <GamesList bestSellingGames={best_selling} newGames={new_games} history={history} />
            </div>
            <div className="col-sm-4">
              <div className="card bg-secondary mb-4 text-center mt-sm-5">
                <div className="card-body px-4 py-5">
                  <img src={iconGuaranteed} alt="" data-aos="fade-down"/>
                  <h5 className="mb-2 mt-3">Guarantee</h5>
                  <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non massa turpis. In non
                    bibendum erat. Duis pulvinar vulputate ligula a rhoncus.
                  </small>
                </div>
              </div>
              <div className="card bg-secondary text-center">
                <div className="card-body px-4 py-5">
                  <img src={iconSecurity} alt="" data-aos="fade-down"/>
                  <h5 className="mb-2 mt-3">Security</h5>
                  <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non massa turpis. In non
                    bibendum erat. Duis pulvinar vulputate ligula a rhoncus.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutUs/>
        <CallToAction/>
        <AjaxLoader visible={this.props.loading}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.home.loading,
    games: state.home.games
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getHomePageGames: () => {
      dispatch(getHomePageGames(ownProps.history))
    }
  }
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomePage);
