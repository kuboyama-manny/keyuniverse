import React from 'react';
import {Link} from 'react-router-dom';

import FaIcon from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/fontawesome-free-solid';
import avatar from './assets/avatar-lg.png';
import {
  faGem
} from '@fortawesome/fontawesome-free-solid';

import GameCard from '../../../components/GameCard';
import Badges from '../../../components/Badges';

function PublicProfile(props) {
  return (
    <div>
      <div className="container">
        <div className="row py-4">
          <div className="col">
            <Link to={'/'} className="btn-link font-spacing">
              <small><FaIcon icon={faAngleLeft}/> GO BACK TO THE MAIN PAGE</small>
            </Link>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col">
            <div className="card bg-transparent border-light shadow-lg">
              <div className="card-body d-flex align-items-start justify-content-between">
                <img src={avatar} alt="" data-aos="fade"/>
                <div className="mx-3">
                  <h1 className="mb-3">Captain_Peroxide</h1>
                  <p>Lorem ipsum dolor sit amet, consecjtetur adipiscing elit. Quisque non massa turpis. In non bibendum
                    erat. Duis pulvinar vulputate ligula a rhoncus.</p>
                  <div className="row">
                    <div className="col-4">
                      <div className="progress mt-1">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}}
                             aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                    </div>
                    <div className="col">
                      <small className="font-weight-bold">100%</small>
                    </div>
                  </div>
                  <small><i>11 sold keys were valid</i></small>

                  <div className="card bg-secondary mt-5 text-center ov-h">
                    <div className="card-body d-flex justify-content-around align-items-center">
                      <div data-aos="fade-up" data-aos-delay="200" className="d-flex flex-column">
                        <span><FaIcon icon={faGem}/><FaIcon icon={faGem}/><FaIcon icon={faGem}/></span>
                        User level
                      </div>
                      <div data-aos="fade-up" className="d-flex flex-column"><h5
                        className="m-0 font-weight-normal">11</h5>Transactions
                      </div>
                      <div data-aos="fade-up" className="d-flex flex-column"><h5
                        className="m-0 font-weight-normal">43</h5>Purchases
                      </div>
                      <div data-aos="fade-up" className="d-flex flex-column"><h5
                        className="m-0 font-weight-normal">+11</h5>Rating
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pr-5 mr-5 col-auto">
                  <h5 className="font-spacing font-weight-light">BADGES</h5>
                  <Badges size="md"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 mb-3">
          <div className="col d-flex align-items-center justify-content-between">
            <div>
              <h3>Highlights</h3>
              <p>You can put favourite offers card here. When the customers visit your public profile they will see
                these offers at first.</p>
            </div>
            <button className="btn btn-outline-primary px-5">
              <small>EDIT</small>
            </button>
          </div>
        </div>
        <div className="row">
          <GameCard/>
          <GameCard/>
          <GameCard/>
          <GameCard/>
        </div>

        <div className="row mt-4 mb-3">
          <div className="col">
            <h3>Offers</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              <GameCard/>
              <GameCard/>
              <GameCard/>
              <GameCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublicProfile