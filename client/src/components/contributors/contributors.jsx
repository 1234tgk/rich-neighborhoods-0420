import React from 'react';
import styles from './contributors.module.css';

const Contributors = () => {
  return (
    <div className={styles.contributors}>
      <section className={styles.introduction}>
        <h3 className={styles.title}>Contributors</h3>
        <ul className={styles.content}>
          <section className={styles.name}>
            <li>Jean Kang</li>
            <li>Front-end</li>
          </section>
          <section className={styles.name}>
            <li>Billy Bao</li>
            <li>Back-end</li>
          </section>
          <section className={styles.name}>
            <li>Gary Kim</li>
            <li>Back-end</li>
          </section>
          <section className={styles.name}>
            <li>Kwonmin Bok</li>
            <li>Back-end</li>
          </section>
        </ul>
      </section>

      <section className={styles.stack}>
        <h3 className={styles.title}>Stack</h3>
        <ul className={styles.content}>
          <li>React (Router, Styled Components), Linode, Heroku</li>
        </ul>
      </section>    
    </div>
  );
};

export default Contributors;

