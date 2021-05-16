import React from 'react';
import styles from './club.module.css';
import customLaptop1 from '../../assets/images/custom_laptop1.jpg';
import customLaptop2 from '../../assets/images/custom_laptop2.PNG';
import smartMirror2 from '../../assets/images/smart_mirror2.PNG';
import raspberryPi1 from '../../assets/images/raspberry_pi1.png';
import raspberryPi2 from '../../assets/images/raspberry_pi2.png';
import raspberryPiTop from '../../assets/images/raspberry_pi_top.png';

const Club = () => {
  return (
    <div className={styles.club}>
      <section className={styles.dream}>
        <h3 className={styles.title}>What do we want to do?</h3>
        <section className={styles.images}>
          <img src={customLaptop1} alt=""></img>
          <img src={customLaptop2} alt=""></img>
          <img src={smartMirror2} alt=""></img>
        </section>
      </section>

      <section className={styles.reality}>
        <h3 className={styles.title}>What do we need?</h3>
        <div className={styles.images}>
          <img src={raspberryPi1} alt=""></img>
          <img src={raspberryPi2} alt=""></img>
          <img src={raspberryPiTop} alt=""></img>
        </div>
      </section>
    </div>
  );
};

export default Club;

