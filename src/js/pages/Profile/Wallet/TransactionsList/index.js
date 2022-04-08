import React from 'react';
import _ from 'lodash';

import TransactionListItem from './TransactionListItem';
import Pagination from '../../../../components/Navigation/Pagination';

function TransactionsList({ transactions }) {
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">DATE</th>
            <th scope="col">AMOUNT</th>
            <th scope="col" width="18%">USERNAME</th>
            <th scope="col">GAME</th>
          </tr>
        </thead>
        <tbody>
          {
            !_.isEmpty(transactions)  && transactions.map((transaction, i) => {
              return (
                <TransactionListItem key={i} transaction={transaction} />
              )
            })
          }
        </tbody>
      </table>
      <Pagination/>
    </div>
  )
}

export default TransactionsList;