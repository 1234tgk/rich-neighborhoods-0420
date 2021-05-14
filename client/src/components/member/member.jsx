import React from 'react';
import styles from './member.module.css';

const Member = ({member}) => {
  return (
    <div className={styles.member}>
      {
        <tr>
          <td className={styles.name}>
            {member.name}
          </td>
          <td className={styles.status}>
            {member.status}
          </td>
        </tr>
      }
    </div>
  );
};

export default Member;