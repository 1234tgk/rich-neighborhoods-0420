import React from 'react';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h3 className={styles.title}>Contact</h3>
      <section className={styles.social}>
        <ul className={styles.content}>
          <section className={styles.name}>
            <li>Jean Kang</li>
            <a href="http://linkedin.com/in/jeankangdev/" target="blank"><li>linkedin.com/in/jeankangdev</li></a>
          </section>
          <section className={styles.name}>
            <li>Billy Bao</li>
            <a href="http://linkedin.com/in/billy-bao-800b28172" target="blank'"><li>linkedin.com/in/billy-bao-800b28172</li></a>
          </section>
          <section className={styles.name}>
            <li>Gary Kim</li>
            <a href="http://linkedin.com/in/taehyeon-gary-kim-17200215b" target="blank"><li>linkedin.com/in/taehyeon-gary-kim-17200215b</li></a>
          </section>
          <section className={styles.name}>
            <li>Kwonmin Bok</li>
            <a href="http://linkedin.com/in/kwonmin-bok-63a366173" target="blank"><li>linkedin.com/in/kwonmin-bok-63a366173</li></a>
          </section>
        </ul>
      </section>
    </div>
  );
};

export default Contact;

