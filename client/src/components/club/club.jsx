import React from 'react';
import styles from './club.module.css';

const Club = () => {
  return (
    <div className={styles.club}>
      <section className={styles.dream}>
        <h3 className={styles.title}>What do we want to do?</h3>
        <section className={styles.images}>
          <img src={process.env.PUBLIC_URL + './images/custom_laptop1.jpg'} alt=""></img>
          <img src={process.env.PUBLIC_URL + './images/custom_laptop2.PNG'} alt=""></img>
          <img src={process.env.PUBLIC_URL + './images/smart_home.png'} alt=""></img>
        </section>
      </section>

      <section className={styles.reality}>
        <h3 className={styles.title}>What do we need?</h3>
        <div className={styles.images}>
          <img src={process.env.PUBLIC_URL + './images/raspberry_pi1.png'} alt=""></img>
          <img src={process.env.PUBLIC_URL + './images/raspberry_pi2.png'} alt=""></img>
          <img src={process.env.PUBLIC_URL + './images/care_and_love.png'} alt=""></img>
          <img src={process.env.PUBLIC_URL + './images/money.png'} alt=""></img>
        </div>
      </section>
    </div>
  );
};

export default Club;

