import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <img className={styles.logo} src={process.env.PUBLIC_URL + './images/logo.PNG'} alt=""></img>
        <h2 className={styles.name}>Elegant Custom Electronics Club</h2>
      </div>
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