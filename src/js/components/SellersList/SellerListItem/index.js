import React from 'react';
import Badges from '../../../components/Badges';
import FaIcon from '@fortawesome/react-fontawesome';
import {
  faGem
} from '@fortawesome/fontawesome-free-solid';

function SellerListItem(props) {
  const seller = props.sellerInfo;
  const level = seller.user_level;

  let levelIcons = [],
    i;

  for (i = 0; i < level; i = i + 1) {
    levelIcons.push(
      <FaIcon icon={faGem} className="mr-1" key={i}/>
    );
  }

  if (seller.new_label === true) {
    seller.new_label = "New Member!"
  }
  if (seller.active_label === true) {
    seller.active_label = "Active User"
  }

  const onAddToCart = () => {
    const { addToCart } = props;
    addToCart(seller.group_id);
  };

  return (
    <tr data-aos="fade-up">
      <th scope="row">
        <img src={seller.profile_pic} alt="" className="mr-2" height={50} width={50}/>{seller.username}
        <small> {seller.new_label}{seller.active_label}</small>
        { seller.donation && seller.donation_percent !== 0 &&
          <small
            style={{marginTop: '10px'}}
            className="ml-2 d-block">
            {seller.username + ' is giving away ' + seller.donation_percent + '% to charity with this sale!'}
          </small>
        }
      </th>
      <td className="text-info">
        {levelIcons}
      </td>
      <td>
        <Badges size="sm" badges={seller.badges} main={false}/>
      </td>
      <td>
        <span className="h5 m-0">
          <span className="badge badge-light p-1">€{seller.price}</span>
        </span>
      </td>
      <td>
        <button data-aos="fade" className="btn btn-block btn-primary btn-gradient font-spacing btn-sm" onClick={onAddToCart}>
          <small>ADD TO CART</small>
        </button>
      </td>
    </tr>
  )
}

export default SellerListItem;