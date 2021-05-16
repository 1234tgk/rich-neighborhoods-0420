import React from 'react';
import { deleteTransaction } from '../../apiBudget';
import styles from './transaction.module.css';

const Transaction = ({ transaction, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Do you really want to delete this transaction?')) {
      deleteTransaction(transaction.id).then(onDelete);
    }
  };

  return (
    <tr className={styles.transaction}>
      {
        <>
          <td>
            {transaction.date}
          </td>
          <td>
            {transaction.description}
          </td>
          <td>
            ${transaction.amount}
          </td>
          <td>
            ${transaction.balance}
          </td>
          <td>
            <button className={styles.delete} onClick={handleDelete}>
              Delete
            </button>
          </td>
        </>
      }
    </tr>
  );
};

export default Transaction;