import React from 'react';
import styles from './main.module.css';
import smartMirror1 from '../../assets/images/smart_mirror1.png';

const Main = () => {
  return (
    <div className={styles.main}>
      <section className={styles.content}>
        <img className={styles.image} src={smartMirror1} alt=""></img>
        <p className={styles.introduction}>
        Welcome to the Elegant Custom Electronics Club! We are 4 brilliant, kind, cute students - Jean, Billy, Gary, Kwonmin - studying computer programming at York University / Seneca College. <br /><br />

        We are ready to win the Raspberry Pi 4 Kit! With that in hand, we want to make various creative things such as smart home devices similar to those found in Tony Stark's home, or even custom-made laptops with acrylic/leather/ceramic boxes and paint them beautiful colors! <br /><br />

        This website was made for the Neighborhood Hacks Hackathon hosted by Major League Hacking! You can add and delete Transactions on the Budget page, and add new Members on the Member Page. New members will be inactive by default, and can be set to be active by clicking the Activate button. Active members will automatically become inactive after a month of being active. <br /><br />

        Feel free to contact us if you have any feedback, ideas or job opportunities! Our socials can be found below. <br /><br />
        </p>
      </section>
    </div>
  );
};

export default Main;