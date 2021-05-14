import React from 'react';
import styles from './transaction.module.css';

const Transaction = ({ transaction }) => {
  return (
    <tr className={styles.transaction}>
      {
        <>
          <td>
            {transaction.date}
          </td>
          <td>
            {transaction.detail}
          </td>
          <td>
            {transaction.amount}
          </td>
          <td>
            {transaction.balance}
          </td>
        </>
      }
    </tr>
  );
};

export default Transaction;