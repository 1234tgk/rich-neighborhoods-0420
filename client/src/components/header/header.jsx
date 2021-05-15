import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/"><div className={styles.title}>
        <img className={styles.logo} src={process.env.PUBLIC_URL + './images/logo.PNG'} alt=""></img>
        <h2 className={styles.name}>Elegant Custom Electronics Club</h2>
      </div>
      </Link>
      <div className={styles.nav}>
        <ul className={styles.menu}>
          <Link to="/"><li>Home</li></Link>
          <Link to="/budget"><li>Budget</li></Link>
          <Link to="/members"><li>Member</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;