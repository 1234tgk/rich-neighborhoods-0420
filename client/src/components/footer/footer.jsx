import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <ul className={styles.menu}>
          <li>ABOUT</li>
          <Link to="/club"><li className={styles.list}>Club</li></Link>
          <Link to="/contributors"><li className={styles.list}>Contributors</li></Link>
        </ul>
        <ul className={styles.menu}>
          <li>CONTACT</li>
          <Link to="/contact"><li className={styles.list}>Social</li></Link>
        </ul>
      </div>
      <div className={styles.right}>
        <h4>Email us for hiring!</h4>
        <a href="mailto:jeankang.dev@gmail.com"><button className={styles.button}>Do the right thing</button></a>
      </div>
    </div>
  );
};

export default Footer;



{/* <h3 className={styles.title}>What we learned</h3>
<p>
  Front-end: React, JavaScript, HTML, CSS, Redux, Postman <p />
  Back-end: AWS, Linode, Firebase
</p>
<h3 className={styles.title}>What we're interested in</h3> */}