import React from 'react';
// import avatarImg from '../../../../../components/Avatars/AvatarImg/assets/avatar-xs.png';

function TransactionListItem({ transaction }) {
  return (
    <tr data-aos="fade-up">
      <td scope="row">{transaction.date}</td>
      <td>€ {transaction.price}</td>
      <td>
        <img src={transaction.buyer.profile_pic} alt="" className="mr-2" style={{ width: '38%' }}/>
        {transaction.buyer.username}
      </td>
      <td>{transaction.game_title}</td>
    </tr>
  )
}

export default TransactionListItem;