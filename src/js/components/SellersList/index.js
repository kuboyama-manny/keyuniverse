import React from 'react';
import SellerListItem from './SellerListItem';
import Pagination from '../Navigation/Pagination';

function SellerList(props) {
  const currentSellers = props.currentSellers.offers;
  return (
    <div>
      <table className="table table-hover">
        <thead>
        <tr>
          <th scope="col">USERNAME</th>
          <th scope="col">LEVEL</th>
          <th scope="col">BADGES</th>
          <th scope="col">PRICE</th>
          <th scope="col">BUY</th>
        </tr>
        </thead>
        <tbody>
        {currentSellers.map((seller, i) => {
          return (
            <SellerListItem
              key={i}
              sellerInfo={seller}
              addToCart={props.addToCart}
              shippingCart={props.shippingCart}
            />
          )
        })
        }
        </tbody>
      </table>
      {currentSellers && currentSellers.length >= 9 &&
      <Pagination/>
      }

    </div>
  )
}

export default SellerList;