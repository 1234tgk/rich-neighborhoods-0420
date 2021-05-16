import React, { useState, useEffect } from 'react';
import styles from './member.module.css';

const Member = ({member, onActivated}) => {
  const date = new Date();
  const dateStr = date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate();
  var memberStatus = member.expiryDate > dateStr ? 'active' : 'inactive';

  const buttonHandler = () => {
    // activateMember(member.id);
    // memberStatus = 'active';
    onActivated(member.id);
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
            <button className={styles.activate} disabled={memberStatus === 'active'} onClick={buttonHandler}>
              Activate
            </button>
          </td>
          <td>
            <button className={styles.delete} disabled={memberStatus === 'active'} onClick={buttonHandler}>
              Delete
            </button>
          </td>
        </>
      }
    </tr>
  );
};

export default Member;