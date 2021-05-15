import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h2 className={styles.logo}>Elegant Custom Electronics Club</h2>
      <div className={styles.nav}>
        <ul className={styles.menu}>
          <li>Main</li>
          <li>Budget</li>
          <li>Member</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;