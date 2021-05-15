import React from 'react';
import styles from './main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <h1>Main</h1>
      <img src={process.env.PUBLIC_URL + './images/smart_mirror2.PNG'} alt="" width="600px"></img>
    </div>
  );
};

export default Main;