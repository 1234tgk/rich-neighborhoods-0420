import React, { useEffect, useState } from 'react';
import { getMembers } from '../../api';
import Transaction from '../transaction/transaction';
import styles from './budget.module.css';

const Budget = ({ budgetData }) => {
  const [budget, setBudget] = useState(budgetData);

  return (
    <div className={styles.budget}>
      <h3 className={styles.title}>Budget</h3>
      <table className={styles.table}>
        <colgroup>
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {
            budget &&
            budget.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
          }
        </tbody>
      </table>
      <form className={styles.form}>
        <input type="text" defaultValue="Date"></input>
        <input type="text" defaultValue="Description"></input>
        <button className={styles.button}>Add</button>
      </form>
    </div>
  );
};

export default Budget;




