import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/"><div className={styles.title}>
        <img className={styles.logo} src={logo} alt=""></img>
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