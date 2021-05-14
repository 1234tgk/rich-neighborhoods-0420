import React, {useState} from 'react';
import Member from '../member/member';
import styles from './members.module.css';

const Members = ({memberData}) => {
  const [members, setMembers] = useState(memberData);

  return (
    <div className={styles.members}>
      <h2 className={styles.title}>Members</h2>
      <table className={styles.table}>
        <colgroup>
          <col />
          <col />
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
    </div>
  );
};

export default Members;
