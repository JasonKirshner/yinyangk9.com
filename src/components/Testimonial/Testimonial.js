import React from 'react';
import styles from './Testimonial.module.css';

const Testimonial = ({ name, text }) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.user}>
        <div className={styles.avatar}></div>
        <p className={styles.name}>{name}</p>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Testimonial;