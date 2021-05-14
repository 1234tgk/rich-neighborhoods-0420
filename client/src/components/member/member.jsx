import React from 'react';
import styles from './member.module.css';

const Member = ({member}) => {
  return (
    <tr className={styles.member}>
      {
        <>
          <td className={styles.name}>
            {member.name}
          </td>
          <td className={styles.status}>
            {member.status}
          </td>
        </>
      }
    </tr>
  );
};

export default Member;