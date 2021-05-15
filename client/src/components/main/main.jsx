import React from 'react';
import styles from './main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      {/* <h3 className={styles.title}>Main</h3> */}
      <section className={styles.content}>
        <img className={styles.image} src={process.env.PUBLIC_URL + './images/smart_mirror2.PNG'} alt=""></img>
        <p className={styles.introduction}>
          Hi! We are 4 brilliant, kind, cute students - Jean, Billy, Gary, Kwonmin - studying computer programming at York University / Seneca College. <br /><br /> 
          
          We are ready to win the prize (The Raspberry Pi Kit) and start working on our new projects!
          We want to make various creative things such as smart home devices (mirrors, lights, vacuums) like Tony Stark's home, Talking Tom, and custom-made laptops with acrylic box/leather/ceramic and paint it with beautiful colors! <br /><br />

          This website is to manage our budget and welcome a new member on our board.
          We are open to any feedback / idea / job opportunities. <br /><br />

          Please feel free to email us to jeankang.dev@gmail.com for any inquiries!
        </p>
      </section>
    </div>
  );
};

export default Main;