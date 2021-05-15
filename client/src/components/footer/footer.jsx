import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <ul className={styles.menu}>
          <li>About</li>
          <li>Club</li>
          <li>Contributors</li>
        </ul>
        <ul className={styles.menu}>
          <li>Contact</li>
          <li>Social</li>
        </ul>
      </div>
      <div className={styles.right}>
        Email us for hiring!<br />
        <a href="mailto:jeankang.dev@gmail.com"><button className={styles.button}>Do the right thing</button></a>
      </div>
    </div>
  );
};

export default Footer;