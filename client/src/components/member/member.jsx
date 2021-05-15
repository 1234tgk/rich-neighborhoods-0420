import React, { useState, useEffect } from 'react';
import { activateMember } from '../../apiMember';
import styles from './member.module.css';

const Member = ({member}) => {
  const date = new Date();
  const dateStr = date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate();

  const [memberStatus, setMemberStatus] = useState('inactive');

  useEffect(() => {
    if (member.expiryDate > dateStr) {
      setMemberStatus('active');
    } else {
      setMemberStatus('inactive');
    }
  })

  const buttonHandler = () => {
    activateMember(member.id).then(() => {
      setMemberStatus('active');
    });
  }

  return (
    <tr className={styles.member}>
      {
        <>
          <td className={styles.name}>
            {member.name}
          </td>
          <td className={styles.status}>
            {memberStatus}
          </td>
          <td>
            <button onClick={buttonHandler}>
              Activate
            </button>
          </td>
        </>
      }
    </tr>
  );
};

export default Member;