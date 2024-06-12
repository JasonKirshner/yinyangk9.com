// components/FooterCTA.js

import styles from './FooterCTA.module.css'; // Adjust the path as necessary


const FooterCTA = ({ title, buttonText }) => {
  return (
    <div className={styles.footerCTA}>
      <h2 className={styles.h2}>{title}</h2>
      <button className={styles.button}>{buttonText}</button>
    </div>
  );
};

export default FooterCTA;
