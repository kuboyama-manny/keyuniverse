import React from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../../components/GameCard';
import Breadcrumbs from '../../components/Navigation/Breadcrumbs';
import CustomSelect from '../../components/Forms/CustomSelect';
import Pagination from '../../components/Navigation/Pagination';


function SearchPage(props) {
  return (
    <div>
      <div className="container">
        <Link to={'/'} className="my-4">
          <Breadcrumbs content="Go back to the main page"/>
        </Link>
        <div className="d-flex aligin-items-center justify-content-between">
          <h3>Search results for <span data-aos="fade">#WIT</span></h3>
          <button className="btn btn-link">RESET</button>
        </div>

        <ul className="nav nav-tabs my-3">
          <li className="nav-item">
            <a className="nav-link active" href="/">GAMES ( 21 )</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">PUBLISHER ( 2 )</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">DEVELOPERS ( 1 )</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">SELLERS ( 5 )</a>
          </li>
        </ul>
        <div className="row mb-4">
          <div className="col">
            <CustomSelect label="SYSTEM" opts={["All", "MacOS", "Windows", "Linux"]}/>
          </div>
          <div className="col">
            <CustomSelect label="PUBLISHER" opts={["All"]}/>
          </div>
          <div className="col">
            <CustomSelect label="DEVELOPERS" opts={["All"]}/>
          </div>
          <div className="col">
            <CustomSelect label="SORT BYs" opts={["Lowest to highest price"]}/>
          </div>
        </div>
        <div className="row">
          <GameCard/>
          <GameCard/>
          <GameCard/>
          <GameCard/>
          <GameCard/>
          <GameCard/>
          <GameCard/>
          <GameCard/>
        </div>
        <div className="mt-2 mb-5">
          <Pagination/>
        </div>
      </div>
    </div>
  )
}

export default SearchPage;