import React, { useEffect, useState } from 'react';
import { getBalances, createTransaction } from '../../apiBudget';
import Transaction from '../transaction/transaction';
import styles from './budget.module.css';

const Budget = () => {
  const [budget, setBudget] = useState([]);
  const [descriptionInput, setDescriptionInput] = useState('');
  const [amountInput, setAmountInput] = useState('');

  useEffect(() => {
    getBalances().then((res) => {
      setBudget(res);
    });
  },[]);

  const addHandler = (event) => {
    event.preventDefault();

    createTransaction(descriptionInput, amountInput).then(() => {
      getBalances().then((res) => {
        setBudget(res);
      });
      setDescriptionInput('');
      setAmountInput('');
    })
  }

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
      <h3 className={styles.title}>Add Transaction</h3>
      <form onSubmit={addHandler} className={styles.form}>
        <input type="text" placeholder="Description" value={descriptionInput} onChange={e => setDescriptionInput(e.target.value)}/>
        <input type="text" placeholder="Amount" value={amountInput} onChange={e => setAmountInput(e.target.value)}/>
        <input type="submit" className={styles.button} value="ADD" />
      </form>
    </div>
  );
};

export default Budget;




