import React, {useState} from 'react';
import Member from '../member/member';
import styles from './members.module.css';

const Members = ({memberData}) => {
  const [members, setMembers] = useState(memberData);

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
      <form className={styles.form}>
        <input type="text" defaultValue="Name"></input>
        <input type="text" defaultValue="Status"></input>
        <button className={styles.button}>ADD</button>
      </form>
    </div>
  );
};

export default Members;
