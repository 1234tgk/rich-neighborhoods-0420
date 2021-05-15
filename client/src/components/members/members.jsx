import React, { useState, useEffect } from 'react';
import { createMember, getMembers } from '../../apiMember';
import Member from '../member/member';
import styles from './members.module.css';

const Members = () => {
  const [members, setMembers] = useState([]);
  const [nameInput, setNameInput] = useState('');
  useEffect(() => {
    getMembers().then((res) => {
      setMembers(res);
    });
  },[]);

  const addHandler = (event) => {
    event.preventDefault();

    createMember(nameInput).then(() => {
      getMembers().then((res) => {
        setMembers(res);
      });
      setNameInput('');
    });
  };

  return (
    <div className={styles.members}>
      <h3 className={styles.title}>Members</h3>
      <table className={styles.table}>
        <colgroup>
          <col span="1" />
          <col span="1" />
        </colgroup>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            members &&
            members.map(member => <Member key={member.id} member={member} />)
          }
        </tbody>
      </table>
      <h3 className={styles.title}>Add Members</h3>
      <form onSubmit={addHandler} className={styles.form}>
        <input type="text" placeholder="Name" value={nameInput} onChange={e => setNameInput(e.target.value)} />
        <input type="submit" className={styles.button} value="ADD"/>
      </form>
    </div>
  );
};

export default Members;
